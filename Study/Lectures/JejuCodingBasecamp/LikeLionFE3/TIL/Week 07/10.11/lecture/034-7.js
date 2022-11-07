/* 재귀함수 */
function factorial1(n) {
    if (n <= 1) {   // 종료조건 -> 종료조건이 없으면 무한반복이 됨
        return 1
    }
    return n * factorial1(n - 1)
}

console.log(factorial1(5))  // 120


/* 반복문 */
let result = 1;
for (let i = 2; i < 6; i++) {
    result *= i
}
console.log(result)  // 120