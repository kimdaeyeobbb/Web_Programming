# script 위치에 따른 실행

- HTML 요소를 JS에서 활용시 해당 요소는 script보다 먼저 파싱되어 있어야함. 따라서 script 태그가 body의 맨 밑에 존재하는 것임
- 하단에 두어야 실행속도가 빠르다

```
브라우저는 HTML 문서를 읽으면서 script tag를 실행함

HTML 문서 Element 파싱 보다 스크립트가 먼저 실행되면 접근되지 않음
페이지의 상단의 script 에서 이후 파싱될 Element에 접근하고 싶다면 onload 등의 eventhandler로 실행되도록 해야 함
async, defer 속성을 이용하면 스크립트의 실행과 문서의 로딩을 동시에 진행할 수 있음(비 동기적)
```

# 오류

## 문법적 오류(Syntax Error)

- 해당 구문이 실행되지 않아 쉽게 발견 및 수정을 할 수 있다

## 논리적 오류(Semantic Error)

- 실행은 되지만 의도한 결과가 나오지 않는 경우 오류의 발견과 수정이 어렵다

## 디버거

- 버그를 고칠 때 디버거를 사용하였을 경우, 실행중인 코드의 원하는 부분에 도달하였을 때 실행을 잠시 멈추고 해당 시점에서 변수의 값이나 상태를 확인함으로서 의도치 않은 프로그램 실행 결과를 원인을 쉽게 알아낼 수 있음

### breakpoint

- 프로그램이 실행되는 도중 원하는 위치에서 멈추도록 할 수 있음
- 멈추고 싶은 코드의 라인번호를 클릭해서 추가할 수 있음
- 한 번 멈춘 프로그램은 step over, step into, step out 버튼을 통해 한단계씩 프로그램을 실행할 수 있음
- resume 버튼을 통해 프로그램을 계속 진행할 수 있음 (다음에 breakpoint를 만나면 다시 중지)

### step out

- 현재 실행중인 함수에서 벗어나게 됨
- 해당 함수가 종료될 때까지 실행하고, 해당 함수가 리턴된 지점으로 이동함
- 현재 프로그램이 실행중인 곳은 하이라이트 효과로 강조됨

### step into

- 함수의 호출이 있을 경우, 해당 함수의 호출로 들어가게 됨 (해당 함수의 안으로 들어가게 됨)

### step over

- 함수의 호출이 발생한 경우 해당 함수의 안으로 들어가지 않고 함수의 호출을 건너뛰게 됨

### resume

- 다시 프로그램을 재개시킴
- 다음 breakpoint를 만나거나 했을 경우, 다시 멈추게 됨
- `step out`, `step into`,`step over`의 경우 프로그램을 중간중간 멈추게 되는데 이와 달리 `resume`버튼은 클릭시 프로그램이 쭉 진행되고 breakpoint를 만나게 되면 다시 멈추게 됨
- resume 버튼을 누르면 더 이상 어느부분에서도 멈추지 않음

### callstack

- 콜스택에서는 해당 함수가 어떻게 호출되어 왔는지를 앟 수 있음
- [예시 파일](index.html)에서 eventHandler 함수는 p태그의 onclick 이벤트 핸들러에서 호출이 되어서 이벤트 핸들러 함수로 오게 된 것이다

<br><br>

# 익명함수와 함수 즉시 호출

- 기존의 언어는 반복적으로 실행되는 코드 블럭을 함수로 정의해서 사용하였다. 하지만 자바스크립트는 함수의 블록을 통해 변수의 scope가 제어되고, 인자로서 함수가 사용되는 경우가 많다. 따라서 반복적으로 사용되는 코드뿐만 아니라 일회성으로 사용되는 코드의 블럭을 함수로 정의하는 경우도 많다. 그리고 이를 효율적으로 지원하기 위해 익명함수 또는 함수정의와 동시에 호출을 할 수 있는 문법등을 제공한다.

- 여러번 호출될 필요가 없는 함수의 경우 익명함수를 사용하는 것이 효율적이다

## 큰 프로그램을 만드는 경우

- 중간에 코드를 추가해야 하고 해당 코드가 독립적으로 실행되어야 한다면 함수를 이용해서 scope를 나누어 주어야 한다.

- 예시

```js
var sum = 0;

// 1~50까지의 합을 구하고
for (var i = 1; i <= 50; i++) {
  sum += i;
}

/* 함수로 만들지 않으면 i값을 건드리게 되어 원하지 않는 결과가 나오게 됨 */
function a() {
  // 여기에서 1~5의 값을 출력하고 싶음
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }
}

a();

// 51~100까지의 값을 추가로 계산
for (; i <= 100; i++) {
  sum += i;
}

console.log(sum);
```

- 이처럼 변수의 scope를 분리하기 위해 함수를 사용하는 경우가 있다. 이 함수는 정의하고 나면 한번만 호출되고, 정의한 지점에서 바로 호출한 결과가 나온다. 이 코드를 더 간단하게 작성할 수 있는 방법은 바로 함수를 정의한 부분에서 바로 호출을 하는 것이다.

## 익명함수 & 함수 즉시 호출

- 예시2 (함수를 정의한 부분에서 바로 호출하기) - 익명함수
  - 익명함수는 한번만 호출되고 말기 떄문에 이름을 붙일 필요가 없다

```js
var sum = 0;

// 1~50까지의 합을 구하고
for (var i = 1; i <= 50; i++) {
  sum += i;
}

/* 함수로 만들지 않으면 i값을 건드리게 되어 원하지 않는 결과가 나오게 됨 */
(function () {
  // 여기에서 1~5의 값을 출력하고 싶음
  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }
})();

// 51~100까지의 값을 추가로 계산
for (; i <= 100; i++) {
  sum += i;
}

console.log(sum);
```

## setTimeout

- 익명함수는 인자로 함수를 넘길 떄에도 매우 유용하다

- 예시코드

```js
function callback() {
  console.log("timeout");
}

setTimeout(callback, 3000); // 일정시간이 지났을 때 호출될 콜백함수, 시간텀
```

- 여기서 callback함수도 setTimeout함수를 정의하기 위한 함수이지, 다른 곳에서는 전혀 사용하지 않는다. 이런 경우 함수를 바로 인자로서 적을 수 있다.

## setTimeout callback 함수 리팩토링

- 코드

```js
/* 콟백함수 리팩토링 - 익명함수로 만듦 & 함수 즉시 호출 적용 */
setTimeout(function () {
  console.log("timeout");
}, 5000);
```

<br><br>

# 예외처리

- 프로그램을 실행하였을 떄, 의도치 않은 결과가 발생할 수 있다. 이러한 경우 프로그램은 에러처리를 하고 다음 실행사항을 잘 이행할 수 있어야 한다. 이러한 경우 에러 처리가 필요하다

## throw ~ try catch

- 자바스크립트는 throw 명령어를 통해 에러를 발생시키고, try-catch 구문을 통해 에러를 받아서 에러를 핸들링하고나서 다음의 코드를 실행시킬 수 있다.
- 에러처리 구문은 try, catch, finally로 구성됨 (if, else if, else와 유사)

## try, catch, finally

- 기본 꼴

```js
try {
  // 정상적으로 실행되는 경우 실행될 프로그램을 작성
  // try 블록안에서 에러가 발생한 경우 catch 블록으로 이동
} catch (e) {
  // try 블록에서 에러가 발생한 경우
  // 에러를 인자 e로 받아 에러를 처리하는 코드를 작성
} finally {
  // try, catch 구문이 실행되고 나서 실행될 코드
}
```

- try 구문 안에서 호출한 함수 안에서 에러가 발생한 경우에도 catch로 이동해서 프로그램이 실행된다.

## 에러 발생시키기

- throw 명령 사용: return 구문과 비슷하게 에러를 나타낼 수 있는 인자를 사용
  - 문자열, 숫자, 객체 등 javascript object를 자유롭게 활용하면 됨

## 에러 처리 과정

- throw 발생 시, catch 구문을 찾아서 이동하게 됨
  - 현재의 블록에서 catch, finally 구문이 없다면 상위 블록, 상위 함수(호출된 함수)로 이동
  - try, finally 구문만 존재할 경우, finally 구문은 실행되고 catch될 수 있는 구문을 찾아서 이동함
  - catch 구문을 찾으면 에러가 처리되고, try ~ catch 구문 이후 코드가 실행됨

## 예외처리 예시

```js
/* 정상적으로 동작할 때 실행되었으면 하는 것들을 기재 */
try {
  console.log("try - 1");

  /* 더이상의 에러를 발생시키지 않고 에러를 핸들리 하고 싶을 경우 throw 사용
    throw블록은 return 명령어와 비슷하게 catch 블록에 전달할 값을 하나 받음 
    => 에러를 나타내는 숫자/문자등을 기재할 수 있음 */
  throw "throw error";
  console.log("try - 2"); // 출력되지 않음
} catch (e) {
  /* try 구문 내에서 에러가 발생하였을 떄, catch 구문에서 실행될 코드를 작성 */
  // throw 뒤에 기재된 문자열이 e로써 블록안에서 활용됨
  console.log("catch error: ", e);
} finally {
  /* try 구문이 정상적으로 실행되거나 
try 구문이 실행되다가 에러가 발생해서 catch 블록이 실행되고 났을 떄등
마지막으로 실행될 코드를 기재 */

  // catch 구문이 모두 실행되고 나서 finally구문이 실행됨
  console.log("finally - this code will always be executed");
}
```

<br><br>

# 예외처리 심화

- throw 구문을 만나면 자바스크립트는 가장 가까운 catch 블록을 찾아감
- arrow function 내에는 try catch 블록이 없기 때문에 해당 함수가 호출된 곳에서 다시 try와 catch를 찾게 됨. 이후 catch 블록으로 이동해서 코드가 실행됨

## 예제1

```js
function errFunc() {
  throw "error";
  console.log("this code will not be executed");
}

function func() {
  try {
    console.log("try - 1");
    errFunc();
    console.log("try - 2"); // 실행되지 않음
  } catch (e) {
    console.log("catch error in function: ", e);
  } finally {
    console.log("finally in function - this code will always be executed");
  }
}

try {
  console.log("try - 1");
  func();
  console.log("try - 2");
} catch (e) {
  console.log("catch error: ", e); // 실행되지 않음
} finally {
  console.log("finally - this code will always be executed");
}
```

## 예제 2

```js
function errFunc() {
  throw "error";
  console.log("this code will not be executed");
}

function func() {
  try {
    console.log("try - 1");
    errFunc();
    console.log("try - 2"); // 실행되지 않음
  } finally {
    console.log("finally in function - this code will always be executed");
  }
}

try {
  console.log("try - 1");
  func();
  console.log("try - 2");
} catch (e) {
  console.log("catch error: ", e); // 실행됨
} finally {
  console.log("finally - this code will always be executed");
}
```

- 내부에서는 catch 구문이 없으므로 빠져나와서 밖에서 catch 구문을 찾아서 에러가 핸들링 되고 나서 finally가 실행됨
