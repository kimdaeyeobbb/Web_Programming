/* eslint-disable */
/* 클로져 예시 */
var fullName = (function () {
  var last = 'Hong';
  return function (first) {
    return last + ' ' + first;
  };
})();
// 함수를 바로 실행시킴
// closure는 모두 (); 가 붙어있음

x = fullName('Gildong');
// fullName에 익명함수가 들어감.
// closure -> 내가 가지고 있는것외 바깥에 있는 영역의 변수인 last에 접근
console.log(x);
