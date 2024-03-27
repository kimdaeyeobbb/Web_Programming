// call signature
type add = (a: number, b: number) => number;

const addFunc: add = (a, b) => a + b;
console.log(addFunc(1, 2)); // 3

type minus = (a: number, b: number) => number;
const minusFunc: minus = (a, b) => a - b;
console.log(minusFunc(3, 2)); // 1
