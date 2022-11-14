

/* 연산 */
const sum = (num1, num2) => parseFloat(num1) + parseFloat(num2)
const sub = (num1, num2) => parseFloat(num1) - parseFloat(num2)
const mul = (num1, num2) => parseFloat(num1) * parseFloat(num2)
const div = (num1, num2) => parseFloat(num1) / parseFloat(num2)

function calculator(n1, operator, n2) {
    let result = 0;
    switch (operator) {
        case "+":
            console.log(sum(n1, n2));
            break;
        case "-":
            console.log(sub(n1, n2));
            break;
        case "*":
            console.log(mul(n1, n2));
            break;
        case "/":
            console.log
    }

    return result
}

/* 예외처리 */
