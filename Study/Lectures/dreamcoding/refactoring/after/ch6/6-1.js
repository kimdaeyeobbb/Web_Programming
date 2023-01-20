export function printOwing(invoice) {
    printBanner();

    let outstanding = calculateOutstanding(invoice);

    recordDueDate(invoice);

    printDetails(invoice, outstanding)

}

function printBanner() {
    // 배너를 출력
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
}

function calculateOutstanding(invoice) {
    return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);

    // let result = 0;
    // // 총 가격을 계산
    // // calculate outstanding
    // for (const o of invoice.orders) {
    //     result += o.amount;
    // }
    // return result
}

function recordDueDate(invoice) {
    // 지금 날짜를 계산
    const today = new Date();
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );
}

function printDetails(invoice, outstanding) {
    // 개선한 세부사항 출력
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
    orders: [{ amount: 2 }, { amount: 5 }],
    customer: '엘리',
};
printOwing(invoice);
