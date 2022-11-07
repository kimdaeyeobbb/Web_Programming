/* 재귀함수 */
function sigma(n) {
    if (n <= 1) {
        return 1
    }
    return n + sigma(n - 1)
}

console.log(sigma(100))  // 5050



/* 반복문 */
let result = 0;
for (let i = 1; i < 101; i++) {
    result += i
}
console.log(result);  // 5050