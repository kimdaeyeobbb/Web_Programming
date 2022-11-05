interface Operation {
  (x: number, y: number): number;
}

let add: Operation;
let sub: Operation;
let mul: Operation;
let div: Operation;

add = (x: number, y: number): number => x + y;
sub = (x: number, y: number): number => x - y;
mul = (x: number, y: number): number => x * y;
div = (x: number, y: number): number => x / y;

console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(mul(1, 2)); // 2
console.log(div(1, 2)); // 0.5
