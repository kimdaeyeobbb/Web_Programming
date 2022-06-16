/* eslint-disable */

var grades = {
  list: { kim: 10, park: 7, lee: 8 }, // value안에 있는 값은 또다른 객체
  show: function () {
    return 'Hello';
  }, // 함수를 값으로 담을 수 있음

  func: function () {
    return this; // this: 함수가 속해있는 객체 지칭하는 변수 -> grades
  },
};
// grades는 list,show,func를 그룹핑 (객체지향 프로그래밍- 연관된 데이터를 하나의 그릇에 담아서 그룹핑)

console.log(grades['list']);
console.log(grades['list']['lee']);
console.log(grades['show']); // [Function: show]
console.log(grades['show']()); // Hello
console.log(grades.func()); // grades 전체
