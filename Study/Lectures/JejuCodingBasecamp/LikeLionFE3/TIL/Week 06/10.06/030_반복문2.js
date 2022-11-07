let value = [10, 20, 30, 40];
let x = 0;
while (x < value.length) {
    console.log(value[x]);
    x++;
}

// 구구단 출력하기 (5단까지 출력)

let i = 2;
let j = 1;
while (i < 10) {
    while (j < 10) {
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1;  // 이게 없으면 2단만 출력
    if (i > 4) {
        break;
    }
    i++;
}


