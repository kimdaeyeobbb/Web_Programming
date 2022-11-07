for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i > 3) {
        break;
    }
}

console.log();

let data1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);
}


console.log();

let data2 = [1, 3, 4, 8, 13, 17, 20]

let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data3.length - 1; i++) {
    console.log(data3[i + 1] - data3[i]);
}

let data4 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data4.length; i++) {
    console.log(data4[i] - data4[i - 1]);
}

console.log();

// 무한반복
let i = 0;
for (; ;) {
    i++
    console.log(i)
    if (i > 5) { break; }
}

console.log();

// 위 코드와 동일
for (let j = 0; ;) {
    j++
    console.log(j)
    if (j > 5) { break; }
}

console.log();


// 위 코드와 동일
for (let k = 0; ; k++) {
    console.log(k)
    if (k > 5) { break; }
}