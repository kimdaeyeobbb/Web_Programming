let s = new Set('abcdeeee')

// set을 순회하기
for (let v of s) {
    console.log(v)  // a b c d e
}


// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''));
console.log(ss)  // Set(5) { 'a', 'b', 'c', 'd', 'e' }
