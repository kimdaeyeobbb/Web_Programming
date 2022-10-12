/* 2. 다음 string의 평균 값을 구하세요 */
str = '5, 4, 10, 2, 5';
let arr = str.split(', ')
const avg = arr.reduce((prev, cur) => prev + parseInt(cur), 0) / arr.length
console.log(`평균: ${avg}`)