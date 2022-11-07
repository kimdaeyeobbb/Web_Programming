/* 재귀함수로 문자열을 뒤집는 코드 작성하기 */
function reverse1(txt) {
    if (txt.length === 1) {
        return txt
    }
    return reverse1(txt.slice(1)) + txt[0]
}

console.log(reverse1('hello world'))


/* 반복문 */
txt = 'hello world'
result = ''
for (const i of txt) {
    result = i + result
}

console.log(result)