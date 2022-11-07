const arrNum = [13, 9, 10, 2];
let arrNum_test = [13, 9, 19, 2];
let test2 = [...arrNum_test].sort();   // 원본을 만지지 않음 

console.log(arrNum_test);  // [ 13, 9, 19, 2 ]
console.log(test2);  //  [ 13, 19, 2, 9 ]


/* 심화 */
let a = [1, 2, 3, 4]
let b = a
b[0] = 1000
console.log(a)  // [ 1000, 2, 3, 4 ]
console.log(b) // b는 a를 가리키니까 b를 수정하면 a도 바뀜


let c = [5, 6, 7, 8]
let d = [...c]
d[0] = 2000
console.log(c);
console.log(d);  // 관련없는 새로운 배열 