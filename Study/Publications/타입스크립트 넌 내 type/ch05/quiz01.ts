/* 함수 선언문 */

// 리턴 타입이 추론된 방식
function shoes1(name: string) {
  return "I'll buy " + name;
}

console.log(shoes1("jordan"));

// 리턴 타입이 선언된 방식
function whatToEat(name: string): string {
  return "I'll eat " + name;
}

console.log(whatToEat("beef"));

/* 함수 표현식 */

// 리턴 타입이 추론된 방식
let whatToEat2 = function (name: string) {
  return "I'll eat " + name;
};
console.log(whatToEat2("fish cake"));

// 리턴 타입이 선언된 방식
let whatToEat3 = function (name: string): string {
  return "I'll eat " + name;
};

console.log(whatToEat3("ice cream"));

/* 화살표 함수 */

// 리턴 타입이 추론된 방식
let whatToBuy1 = (name: string) => {
  return "I'll buy " + name;
};

console.log(whatToBuy1("sweat shirt"));

// 리턴 타입이 선언된 방식
let whatToBuy2 = (name: string): string => {
  return "I'll buy " + name;
};

console.log(whatToBuy2("windbreaker"));

/* 함수의 타입을 미리 선언해주는 것 - call signature */
//  변수를 이용해서 정의
let addNum1: (n1: number, n2: number) => number;
addNum1 = function (a, b) {
  return a + b;
};

console.log(addNum1(5, 10));

// 타입을 이용해서 정의
type addNum22 = (a: number, b: number) => number;
const addNum2222: addNum22 = (a, b) => a + b;
console.log(addNum2222(10, 30));

// 인터페이스를 이용해서 정의
interface Name17 {
  (firstName: string, lastName: string): string;
}

const MyName17: Name17 = function (first, last) {
  return first + " " + last;
};

console.log(MyName17("DY", "KIM"));

/* this */
// 명시적 this

interface Fruits {
  name: string;
  price: number;
  purchase(this: Fruits): () => {};
}
