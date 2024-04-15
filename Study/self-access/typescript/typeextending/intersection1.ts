interface A {
  a: string;
  b: number;
}

interface B {
  c: string;
  d: number;
}

type AB = A & B;
const ex0: AB = {
  a: "a",
  b: 1,
  c: "c",
  d: 2,
};

type IdType = string | number;
type Numeric = number | boolean;
type Universal = IdType & Numeric;

const ex: Universal = 1;
console.log(ex); // 1

const ex2: Universal = "1";
console.log(ex2); // 1
