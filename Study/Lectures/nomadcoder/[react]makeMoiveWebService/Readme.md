# ReactJS로 영화 웹 서비스 만들기

- [ReactJS로 영화 웹 서비스 만들기](#reactjs로-영화-웹-서비스-만들기)
- [2. THE BASIC OF REACT](#2-the-basic-of-react)
  - [Interactive UI를 바닐라JS로 만들기](#interactive-ui를-바닐라js로-만들기)
    - [:one: HTML 생성](#one-html-생성)
    - [:TWO: 자바스크립트에서 BUTTON 가져옴](#two-자바스크립트에서-button-가져옴)
      - [보너스) button이 작동하지 않는 상황](#보너스-button이-작동하지-않는-상황)
    - [:THREE: 이벤트 등록 \& 이벤트 감지](#three-이벤트-등록--이벤트-감지)
    - [:FOUR: 클릭의 개수 카운팅 기능 추가 (데이터 업데이트)](#four-클릭의-개수-카운팅-기능-추가-데이터-업데이트)
    - [:FIVE: 버튼 클릭시 기존의 텍스트가 사라지는 문제 발생](#five-버튼-클릭시-기존의-텍스트가-사라지는-문제-발생)
    - [:six: 버튼 클릭시 내부 텍스트가 사라지는 문제 해결 (HTML 업데이트)](#six-버튼-클릭시-내부-텍스트가-사라지는-문제-해결-html-업데이트)
  - [React JS 설치](#react-js-설치)

# 2. THE BASIC OF REACT

## Interactive UI를 바닐라JS로 만들기

### :one: HTML 생성

### :TWO: 자바스크립트에서 BUTTON 가져옴

#### 보너스) button이 작동하지 않는 상황

```html
<button></button>
<script>
  const button = document.querySelector("button");
</script>
```

- 이렇게 id를 붙이지 않으면 button이 많은 어플리케이션에서 제대로 작동하지 않는다
- 어떤 button을 선택해야하는지 모르기 때문이다. 따라서 다음과 같이 id값을 붙이는 것이다.

```html
<button id="btn"></button>
<script>
  const button = document.getElementById("button");
</script>
```

### :THREE: 이벤트 등록 & 이벤트 감지

```html
<body>
  <button id="btn"></button>
  <script>
    const button = document.getElementById("button");
    function handleClick() {
      console.log("I have been clicked !");
    }
    button.addEventListener("click", handleClick); // 이벤트 등록 & 클릭 이벤트 감지
  </script>
</body>
```

### :FOUR: 클릭의 개수 카운팅 기능 추가 (데이터 업데이트)

```html
<span>Total clicks: 0</span>
<button id="btn"></button>
<script>
  let counter = 0;
  const button = document.getElementById("button");
  function handleClick() {
    console.log("I have been clicked !");
    counter += 1;
  }
  button.addEventListener("click", handleClick); // 이벤트 등록 & 클릭 이벤트 감지
</script>
```

- 여기서는 클릭 버튼을 누르더라도 반영이 되지 않는다
  - 왜냐하면 데이터가 여기서 바뀌더라도 HTML이 새로고침되지 않기 때문이다.

### :FIVE: 버튼 클릭시 기존의 텍스트가 사라지는 문제 발생

```html
<span>Total clicks: 0</span>
<button id="btn">버튼 클릭 !</button>
<script>
  let counter = 0;
  const button = document.getElementById("btn");
  const span = document.querySelector("span");
  function handleClick() {
    console.log("I have been clicked !");
    counter += 1;
    span.innerText = counter;
  }
  button.addEventListener("click", handleClick); // 이벤트 등록 & 클릭 이벤트 감지
</script>
```

### :six: 버튼 클릭시 내부 텍스트가 사라지는 문제 해결 (HTML 업데이트)

```html
<span>Total clicks: 0</span>
<button id="btn">버튼 클릭 !</button>
<script>
  let counter = 0;
  const button = document.getElementById("btn");
  const span = document.querySelector("span");
  function handleClick() {
    console.log("I have been clicked !");
    counter += 1;
    span.innerText = `Total clicks: ${counter}`; // 클릭했다 하더라도 내부의 글씨가 사라지지 않게 만드는 작업
    // span.innerText = counter;
  }
  button.addEventListener("click", handleClick); // 이벤트 등록 & 클릭 이벤트 감지
</script>
```

## React JS 설치

- 리액트 설치를 위해서는 2개의 js 코드를 import 해야 함

  1. react
  2. react-dom

- 기본세팅

```js
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리액트</title>
  </head>
  <body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  </body>
</html>

```

- React를 콘솔창에 입력해서 나오는 것을 확인해야 React가 우리 코드에 있는 것임을 알 수 있음
