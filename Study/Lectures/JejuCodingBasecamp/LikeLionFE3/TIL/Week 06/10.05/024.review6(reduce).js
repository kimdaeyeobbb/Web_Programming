const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr10.reduce((누적값, 현재값) => 누적값 + 현재값));
//expected output: 55

console.log(arr10.reduce((누적값, 현재값, index, array) => 누적값 + 현재값));
//expected output: 55

console.log(arr10.reduce((누적값, 현재값, index, array) => 누적값 - 현재값));
//expected output: -53


// arr10.reduce((누적값, 현재값, index, array) => {
//     console.log(누적값);
//     console.log(현재값);
//     console.log(index);
//     console.table(array);
//     console.log(`누적값+현재값 = ${누적값 + 현재값}`);
// })