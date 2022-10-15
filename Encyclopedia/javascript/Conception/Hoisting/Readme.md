# 호이스팅

## 호이스팅 개념

- `var`로 선언한 표현식이나 `function 선언문` 등을 실행 단계에서 해당 Scope의 맨 위로 옮기는 것

- 자바스크립트는 코드를 실행하기 전에 `var 선언문`과 `function 선언문`을 해당 스코프의 맨 위로 옮김

## 함수 호이스팅이 발생하는 이유

- 자바스크립트의 변수 생성과 초기화(선언과 할당)가 분리되어 진행되기 때문임

## 호이스팅 발생 과정

- 예시

```js
var result = sum(10, 20);
var sum = function (num1, num2) {
  return console.log(num1 + num2);
};
```
