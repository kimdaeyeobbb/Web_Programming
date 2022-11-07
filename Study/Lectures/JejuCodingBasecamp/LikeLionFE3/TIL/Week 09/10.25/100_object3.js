function Factory() { };   // 생성자 함수 선언
const obj = new Factory();   // 객체 생성 & 결과를 특정한 변수에 할당
console.log(obj)   // Factory {}   => 생성자의 결과로 만들어진 객체

console.log(obj instanceof Factory)   // true
console.log(Factory instanceof obj)   // error