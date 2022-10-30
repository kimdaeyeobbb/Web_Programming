function max(...numbers) {
    return numbers.reduce(
        // acc 이 current 보다 크면 결과값을 current 로 하고
        // 그렇지 않으면 acc 가 결과값
        (acc, current) => (current > acc ? current : acc),
        numbers[0]
    );
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);