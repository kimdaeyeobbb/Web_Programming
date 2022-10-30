function countBiggerThanTen(numbers) {
    let num = numbers.reduce((acc, cur) => (cur > 10 ? acc += 1 : acc), 0)
    return num
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5