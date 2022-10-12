/* 1-1. 평균 구하기 */
let arr = [10, 20, 30, 10, 20, 30, 40, 10]
const avg = arr.reduce((prev, cur) => prev + cur, 0) / arr.length
console.log(`평균: ${avg}`)

/* 분산= (편차)^2의 합/데이터의 개수 */
/* 1-2. 분산구하기 */
let dispersion = arr.reduce((prev, cur) => prev + (cur - avg) ** 2, 0) / arr.length
console.log(`분산: ${dispersion}`)

/* 1-2. 분산 구하기 2 */
let dispersion2 = 0
for (const el of arr) {
    result += (el - avg) ** 2
}
console.log(`분산: ${dispersion2 / arr.length}`)