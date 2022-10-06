if (true) {
    var a = '1'
    let b = '2'   // if 밖에서 쓸 수 없음 (블록 레벨 스코프)
    const c = '3'   // if 밖에서 쓸 수 없음 (블록 레벨 스코프)
}

console.log(a)
// console.log(b)
// console.log(c)

for (let i = 0; i < 10; i++) {
    console.log(i);
    // i라는 변수를 스코프마다 잠근다
    var e = '1'
    let f = '2'   // if 밖에서 쓸 수 없음 (블록 레벨 스코프)
    const g = '3'   // if 밖에서 쓸 수 없음 (블록 레벨 스코프)
}

console.log(`var: ${e}`);