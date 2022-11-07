let result1;
console.log(result1 ?? 100)   // 100

let result2 = 10;
console.log(result2 ?? 100)  // 10

let result3 = null;
console.log(result3 ?? 100)  // 100


let result4 = null;
let result5 = result4 ?? 100;
console.log(result4)
console.log(result5)