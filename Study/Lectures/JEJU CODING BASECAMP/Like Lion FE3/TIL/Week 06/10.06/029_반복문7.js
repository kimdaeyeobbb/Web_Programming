/* 문제1 */
// 다음 입력된 숫자들의 합을 구하라

let x = '12345';
let result = 0
for (let i = 0; i < x.length; i++) {
    result += parseInt(x[i]);
}
console.log(result);