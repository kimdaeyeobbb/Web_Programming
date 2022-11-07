/* 재귀함수 할 때 비교할 for문  */

// 1. 문자열 뒤집기 - 반복문1
let txt = 'hello world';
let result = '';

for (let i = txt.length - 1; i >= 0; i--) {
    result += txt[i];
}

console.log(result)


// 1. 문자열 뒤집기 - 반복문2

let result2 = '';
for (let i = 0; i < txt.length; i++) {
    result2 = txt[i] + result2;
}

console.log(result2)


//2. 시그마
let s1 = 0;
for (let i = 1; i < 101; i++) {
    s1 += i;
}
console.log(s1);


//3. 팩토리얼
let s2 = 1;
for (let i = 1; i < 6; i++) {
    s2 += i;
}
console.log(s2);