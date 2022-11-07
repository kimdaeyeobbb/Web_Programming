/* 문자열 뒤집기 */
/* 풀이1 */
function revStr(s1) {
    let result = ''
    for (const s2 of s1) {
        result = s2 + result
    }
    return result
}

console.log(revStr('abcde'))

/* 풀이2 */
let s3 = 'qwerty'
const result = (s3) => (s3.split('').reverse().join(''))
console.log(result(s3))