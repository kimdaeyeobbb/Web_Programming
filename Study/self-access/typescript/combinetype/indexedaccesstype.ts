interface Standard {
  name: string;
  age: number;
  isStudent: boolean;
}

type IndexedAccess1 = Standard["name"]; // string
type IndexedAccess2 = Standard["name" & "age"]; // never
type IndexedAccess3 = Standard["name" | "age"]; // string | number
type IndexedAccess4 = Standard[keyof Standard]; // string | number | boolean

const ex1: IndexedAccess1 = "name";
console.log(ex1, typeof ex1);
// const ex2: IndexedAccess2 = 'name';
const ex3: IndexedAccess3 = 12;
console.log(ex3, typeof ex3);

const ex4: IndexedAccess4 = "name";
console.log(ex4, typeof ex4);

// 배열의 요소 조회
const ItemList = [
  { name: "item1", price: 1000 },
  { name: "item2", price: 2000 },
  { name: "item3", price: 3000 },
  { name: "item4", price: 4000 },
  { name: "item5", price: 5000 },
];

// number로 인덱싱해서 배열 요소를 얻은 후, typeof 연산자를 붙여주면 해당 배열 요소의 타입을 가져올 수 있음
type Test = (typeof ItemList)[number];
type NumType = (typeof ItemList)[number]["price"];
type StrType = (typeof ItemList)[number]["name"];
type NumType2 = Test["price"];

const ex5: Test = { name: "item1", price: 1000 };
const ex6: NumType = 1000;
const ex7: StrType = "item1";
const ex8: NumType2 = 1000;

console.log(ex5, typeof ex5);
console.log(ex6, typeof ex6);
console.log(ex7, typeof ex7);
console.log(ex8, typeof ex8);
