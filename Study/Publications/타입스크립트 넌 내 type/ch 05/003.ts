// variable
let addNum: (a: number, b: number) => number;

addNum = function (a, b) {
  return a + b;
};

console.log(addNum(2, 3));

// type
type addNum2 = (a: number, b: number) => number;

const addnum2: addNum2 = (a, b) => a + b;
console.log(addnum2(5, 6));

// interface
interface Name {
  (firstName: string, lastName: string): string;
}

const Myname: Name = function (first, last) {
  return first + last;
};

console.log(Myname("a", "b"));
