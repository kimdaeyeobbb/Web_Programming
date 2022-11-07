for (const i of 'hello world') {
    console.log(i);
}

/* 요소 내 숫자 하나씩 더하기 */
let s = 0;
for (const i of '12345') {
    s += parseInt(i);
}

console.log(s);   // 15