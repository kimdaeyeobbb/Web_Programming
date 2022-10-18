# Callback

## 호이스팅

- `var`변수와 , `function`키워드를 사용한 함수 선언등이 제일 위로 올라가는 것
- 호이스팅이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행됨

<br>

## 동기와 비동기 (Synchronous N Asynchronous)

- 자바스크립트는 동기적인 아이이다. (호이스팅이 된 이후부터 코드가 작성된 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 뜻)

### 동기

- 정해진 순서에 따라 코드가 실행됨

- 예제

```js
console.log("1");
console.log("2");
console.log("3");
```

### 비동기

- 정해진 순서대로 코드가 실행되지 않고 언제 실행될지 알 수 없는 상황

<br>

## 콜백함수

- 전달해준 함수를 불러달라는 개념

### 예제 1

```js
console.log("1");
/* 브라우저에서 제공하는 API, 지정된 시간이 지나면 전달한 콜백함수를 호출함. setTimeout에 TimeHandler라는 콜백함수를 전달해주고, 시간관련 요소를 지정하는 인자가 존재 */
setTimeout(function () {
  console.log("2");
}, 1000); // 1000ms = 1초가 지나고 나서 우리가 지정한 함수가 실행되게 함
console.log("2");
console.log("3");
```

- `setTimeout`과 같은 브라우저 API는 브라우저에게 먼저 요청을 보냄 => 따라서 응답을 기다리지 않고 console.log('3')으로 넘어간 것임

### 예제 2 (예제 1과 같은 표현)

```js
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
```

- 즉각적으로 동기적으로 실행하는 `동기적 콜백`과 언제 실행될지 예측을 하지 못하는 `비동기적 콜백`이 존재

### 예제 3 - 동기적 콜백

```js
console.log("1");
/* 브라우저에서 제공하는 API, 지정된 시간이 지나면 전달한 콜백함수를 호출함. setTimeout에 TimeHandler라는 콜백함수를 전달해주고, 시간관련 요소를 지정하는 인자가 존재 */
setTimeout(function () {
  console.log("2");
}, 1000); // 1000ms = 1초가 지나고 나서 우리가 지정한 함수가 실행되게 함
console.log("3");

/* 콜백을 받아서 바로 실행하는 함수 */
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));
```

- 함수의 선언은 호이스팅이 되므로 실제로는 자바스크립트 엔진이 다음과 같이 맨위로 함수의 선언부를 이동시킴

```js
console.log("1");
/* 브라우저에서 제공하는 API, 지정된 시간이 지나면 전달한 콜백함수를 호출함. setTimeout에 TimeHandler라는 콜백함수를 전달해주고, 시간관련 요소를 지정하는 인자가 존재 */
setTimeout(function () {
  console.log("2");
}, 1000); // 1000ms = 1초가 지나고 나서 우리가 지정한 함수가 실행되게 함
console.log("3");

/* 콜백을 받아서 바로 실행하는 함수 */
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));
```

### 예제 4 - 비동기 콜백

```js
console.log("1");
/* 브라우저에서 제공하는 API, 지정된 시간이 지나면 전달한 콜백함수를 호출함. setTimeout에 TimeHandler라는 콜백함수를 전달해주고, 시간관련 요소를 지정하는 인자가 존재 */
setTimeout(() => console.log("2"), 1000); // 1000ms = 1초가 지나고 나서 우리가 지정한 함수가 실행되게 함
console.log("3");

/* 동기적 콜백 */
/* 콜백을 받아서 바로 실행하는 함수 */
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

/* 비동기적 콜백 */
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);
```

<br>

- 모든 함수의 선언은 호이스팅되므로 자바스크립트 엔진은 함수의 선언부를 제일 위로 올리고 다음과 같은 순서대로 실행됨

```js
/* 동기적 콜백 */
/* 콜백을 받아서 바로 실행하는 함수 */
function printImmediately(print) {
  print();
}

/* 비동기적 콜백 */
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

console.log("1");
/* 브라우저에서 제공하는 API, 지정된 시간이 지나면 전달한 콜백함수를 호출함. setTimeout에 TimeHandler라는 콜백함수를 전달해주고, 시간관련 요소를 지정하는 인자가 존재 */
setTimeout(() => console.log("2"), 1000); //   1000ms = 1초가 지나고 나서 우리가 지정한 함수가 실행되게 함
console.log("3");

printImmediately(() => console.log("hello"));
printWithDelay(() => console.log("async callback"), 2000);
```
