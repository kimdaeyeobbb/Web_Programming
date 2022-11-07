let n1 = 10000;
let n2 = 10.1;
let n3 = 31;
let n4 = 1001;
let n5 = 1111;
let s1 = '1000000000';
let s2 = '1,000,000,000';


console.log(parseInt(n1));
console.log(parseInt(n2));
console.log(parseInt(n3, 2));   // n3를 2진수로 -> NaN
console.log(parseInt(n4, 2));   // n4를 2진수로 -> 9
console.log(parseInt(n5, 2));  // n5를 2진수로 -> 15

console.log(n2.toFixed(3));  // 10.100


console.log("------");

console.log(Number(true));   // 1
console.log(Number(false));   // 0
console.log(Number(""));    // 0
console.log(Number(" "));  // 0

console.log(Number("hello"));   // NaN
console.log(Number("10 20"));   // NaN
console.log(Number("10    "));   // 10
console.log(Number("10    "));   // 10
console.log(Number("    10"));   // 10
console.log(Number("    10    20    "));   // NaN


console.log(Boolean(""));   // false
console.log(Boolean(" "));    // true

console.log(Math.PI);
console.log(Math.max(10, 20, 30, 1, 200, 3));   // 200
console.log(Math.min(10, 20, 30, 1, 200, 3));   // 1

let data = [10, 20, 30, 40];
console.log(Math.max(...data)); // 40 (스프레드 용법으로 안넣으면 NaN)