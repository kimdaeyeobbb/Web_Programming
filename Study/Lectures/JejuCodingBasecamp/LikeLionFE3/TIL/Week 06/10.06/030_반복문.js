// 구구단 출력하기

let i = 2;
let j = 1;
while (i < 10) {
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;  // 이게 없으면 2단만 출력
    i++;
}


