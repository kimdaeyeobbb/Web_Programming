/* eslint-disable */

/* hoisting: var로 선언한 표현식, function 선언문 등을 실행단계에서 해당 scope의 맨위로 옮기는 행위 */
/* hoisting발생원인: JS변수 생성과 초기화(선언과 할당)가 분리되어 진행되기 때문 */

/* 예제1 - Error */
var result = sum(10, 20);
var sum = function (n1, n2) {
  return console.log(n1 + n2);
};

/* 예제1 단계별 해석 */

var result = undefined; //undefined는 존재(초기화)하지 않은 상태를 뜻함
var sum = undefined;
// var로 선언된 변수들이 맨위로 끌어올려짐. 변수 선언만되고 초기화는 미진행
result = sum(10, 20); // 위에 선언된 변수들의 초기화가 이루어짐
sum = function (n1, n2) {
  return console.log(n1 + n2);
}; // 위에 선언된 변수들의 초기화가 이루어짐
