/* eslint-disable */

/* hoisting: var로 선언한 표현식, function 선언문 등을 실행단계에서 해당 scope의 맨위로 옮기는 행위 */
/* hoisting발생원인: JS변수 생성과 초기화(선언과 할당)가 분리되어 진행되기 때문 */

/* 예제1 */
var result = sum(10, 20);
var sum = function (n1, n2) {
  return console.log(n1 + n2);
};
