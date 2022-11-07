test = [100, 200, 300];
console.log(test.filter((e) => e >= 200)); // [200,300]

const r = (a) => a > 199;
const r2 = (b) => b > 99;
console.log(test.every(r))  // false
console.log(test.every(r2))   // true


console.log(Array(100).fill(0));
console.log(Array(100).fill("hello"));
console.log(Array(100).fill("hello".repeat(2)));