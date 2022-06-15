/* eslint-disable */
// JS는 functional language -> 함수가 가장 중요. 함수를 모르면 클래스/객체지향/실행 컨텍스트 등 모든부분에서 막힐것임

var f = function add(x, y) {
  return x + y;
};
// 함수는 객체이다. primitive type이 없는 것은 모두 객체이다.
// f: 함수의 식별자

var add1 = (x, y) => {
  return x + y;
};
console.log(add1(3, 4));
