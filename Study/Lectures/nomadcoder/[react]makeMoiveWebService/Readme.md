# ReactJS로 영화 웹 서비스 만들기

- [ReactJS로 영화 웹 서비스 만들기](#reactjs로-영화-웹-서비스-만들기)
- [1. THE BASIC OF REACT](#1-the-basic-of-react)
  - [Interactive UI를 바닐라JS로 만들기](#interactive-ui를-바닐라js로-만들기)
    - [:one: HTML 생성](#one-html-생성)
    - [:TWO: 자바스크립트에서 BUTTON 가져옴](#two-자바스크립트에서-button-가져옴)
      - [보너스) button이 작동하지 않는 상황](#보너스-button이-작동하지-않는-상황)
    - [:THREE: 이벤트 등록 \& 이벤트 감지](#three-이벤트-등록--이벤트-감지)
    - [:FOUR: 클릭의 개수 카운팅 기능 추가 (데이터 업데이트)](#four-클릭의-개수-카운팅-기능-추가-데이터-업데이트)
    - [:FIVE: 버튼 클릭시 기존의 텍스트가 사라지는 문제 발생](#five-버튼-클릭시-기존의-텍스트가-사라지는-문제-발생)
    - [:six: 버튼 클릭시 내부 텍스트가 사라지는 문제 해결 (HTML 업데이트)](#six-버튼-클릭시-내부-텍스트가-사라지는-문제-해결-html-업데이트)
  - [React JS 설치](#react-js-설치)
  - [React 구현 (Interactive UI를 바닐라JS로 만들기 =\> React로 수정)](#react-구현-interactive-ui를-바닐라js로-만들기--react로-수정)
    - [\[비교1- 어려운 방법\[React js로 element를 생성하기](#비교1--어려운-방법react-js로-element를-생성하기)
    - [\[비교2 - 쉬운방법\] 버튼 만들기](#비교2---쉬운방법-버튼-만들기)
  - [1-4) Recap \[복습\]](#1-4-recap-복습)
  - [1-5) JSX](#1-5-jsx)
    - [CreateElement를 대체하는 방법](#createelement를-대체하는-방법)
    - [JSX](#jsx)
      - [요소를 생성하는 (오래된) 방법](#요소를-생성하는-오래된-방법)
      - [JSX를 이용해서 위 코드와 동일한 컴포넌트 생성](#jsx를-이용해서-위-코드와-동일한-컴포넌트-생성)
        - [Babel](#babel)
          - [babel을 통해 변환되어 head에 담겨져 있는 코드](#babel을-통해-변환되어-head에-담겨져-있는-코드)
  - [1-6) JSX2](#1-6-jsx2)
- [2. STATE](#2-state)
  - [2-0) Understanding State](#2-0-understanding-state)
    - [state](#state)
    - [Recap](#recap)
    - [클릭 횟수 나타내는 버튼 생성하기](#클릭-횟수-나타내는-버튼-생성하기)
      - [작동순서 파악](#작동순서-파악)
      - [리팩토링한것으로 다시 작동순서 파악](#리팩토링한것으로-다시-작동순서-파악)
      - [3차 수정본](#3차-수정본)
    - [VanillaJS VS ReactJS](#vanillajs-vs-reactjs)
  - [2-1) setState 1](#2-1-setstate-1)

# 1. THE BASIC OF REACT

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

## React 구현 (Interactive UI를 바닐라JS로 만들기 => React로 수정)

- 바꿀 바닐라 JS코드

```js
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>바닐라JS로 웹 서비스 만들기</title>
  </head>
  <body>
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
  </body>
</html>

```

- REACT의 규칙
  - HTML을 이 페이지에 직접 작성하지 않는다 (HTML 코드를 직접 작성하지 않는다)
  - 대신 JS코드를 사용해서 span, 버튼등을 제작한다
  - 대신 JS와 ReactJS를 이용해서 element를 생성한다

### [비교1- 어려운 방법[React js로 element를 생성하기

- 본 방법은 Reactjs로 element를 생성하는 어려운 방법임
- 본 작업은 개발자들이 작업하는 방식은 아니다
- 이 방법을 통해 Reactjs의 본질을 파악하도록 한다

```html
<!-- react import (리액트 세팅) -->
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<!-- react-dom import (리액트 돔 세팅) -->
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
  /* 1. ReactJs로 element 생성하기 */
  const span = React.createElement("span");
  // createElement function을 가진 React object에 접근할 수 있게 만듦
  // createElement의 내부에 적는것은 생성하고자 하는 HTML 태그와 똑같은 이름이어야 함

  /* 2. span을 페이지에 두기 */
  // 웹 페이지를 새로고침하면 우리의 body는 비어있으므로
  // span은 이미 생성되었고, 페이지에 올라오지 않은 상태이므로 body에 넣는 작업이 필요
  ReactDOM.render();
  // ReactDOM에게 span을 어디에 배치해야하는지에 대한 정보를 제공
</script>
```

- ReactJS

  - 어플리케이션이 아주 interactive하게 만들어주는 라이브러리
  - 엔진과 같은 역할을 하므로 interactive한 UI를 만들 수 있게 해줌

- React-dom

  - 라이브러리 또는 패키지임
  - 모든 리액트 요소들을 HTML body에 둘 수 있도록 만들어 줌

- ReactDOM.render()

  - render : React element를 가지고 HTML로 만들어서 배치함
  - 사용자에게 보여주는 역할을 하는 것임

```html
<body>
  <div id="root"></div>
</body>
<!-- react import (리액트 세팅) -->
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<!-- react-dom import (리액트 돔 세팅) -->
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script>
  /* 1. ReactJs로 element 생성하기 */
  const span = React.createElement("span");
  // createElement function을 가진 React object에 접근할 수 있게 만듦
  // createElement의 내부에 적는것은 생성하고자 하는 HTML 태그와 똑같은 이름이어야 함

  /* 2. span을 페이지에 두기 */
  // 웹 페이지를 새로고침하면 우리의 body는 비어있으므로
  // span은 이미 생성되었고, 페이지에 올라오지 않은 상태이므로 body에 넣는 작업이 필요
  ReactDOM.render(span);
  // ~은 ReactDOM에게 span을 어디에 배치해야하는지에 대한 정보를 제공
</script>
```

- ~은 ReactDOM에게 span을 어디에 배치해야하는지에 대한 정보를 제공

- 보통은 사람들이 body에 `<div id="root"></div>`를 만들고, ReactDOM에게 span을 root 안에 두게 만듦

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리액트</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- react import (리액트 세팅) -->
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <!-- react-dom import (리액트 돔 세팅) -->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script>
      /* 3. root 가져오기 */
      const root = document.getElementById("root");

      /* 1. ReactJs로 element 생성하기 */
      const span = React.createElement(
        "span",
        { id: "sexy-span", style: { color: "blue" } },
        "Hello, I'm a span"
      );
      // createElement function을 가진 React object에 접근할 수 있게 만듦
      // createElement의 내부에 적는것은 생성하고자 하는 HTML 태그와 똑같은 이름이어야 함
      // id가 sexy-span은 span 태그를 생성
      // createElement: 세번쨰 인자는 span의 content(내용)

      /* 2. span을 페이지에 두기 */
      // 웹 페이지를 새로고침하면 우리의 body는 비어있으므로
      // span은 이미 생성되었고, 페이지에 올라오지 않은 상태이므로 body에 넣는 작업이 필요
      ReactDOM.render(span, root);
      // ~은 ReactDOM에게 span을 어디에 배치해야하는지에 대한 정보를 제공
      // span을 root안에 render 해달라고 ReactDOM에게 말해줌
    </script>
  </body>
</html>
```

### [비교2 - 쉬운방법] 버튼 만들기

- 기준이 되는 Vanilla js 코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>바닐라JS로 웹 서비스 만들기</title>
  </head>
  <body>
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
  </body>
</html>
```

- 전체 ReactJS 코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리액트 - 쉬운버전</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- react import (리액트 세팅) -->
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <!-- react-dom import (리액트 돔 세팅) -->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script>
      const root = document.getElementById("root");
      const h3 = React.createElement(
        "h3",
        {
          id: "id 붙이기 연습용",
          onMouseEnter: () => {
            console.log("Mouse Enter !");
          }, // 이벤트 리스너 등록
        },
        "Hello I'm a h3"
      );
      const btn = React.createElement(
        "button",
        {
          onClick: () => {
            console.log("I'm Clicked"); // 버튼 클릭할 떄마다 호출될 함수
          },
          style: {
            backgroundColor: "tomato",
          },
        }, //   버튼에 eventListener 등록하기
        "Click me"
      );
      // html 태그의 이름을 내부에 기재
      // button의 property: null로 설정
      ReactDOM.render(btn, root);
      // 버튼을 랜더링 (root안에 btn을 render)

      /* span과 button 모두를 랜더링하기 */
      const container = React.createElement("div", null, [h3, btn]); // property에 배열을 생성하고 내부에 span, btn을 두기 (2개의 컴포넌트를 가지는 component를 생성한 것)
      ReactDOM.render(container, root); // div를 랜더링
    </script>
  </body>
</html>
```

- constant의 이름은 HTML의 태그명과 반드시 일치할 필요가 없다
- 자바스크립트로 요소를 생성하고 HTML로 바꾸는 방식은 이러한 힘을 가지고 있다! (addEventListener등을 기재하는 것처럼 이것저것을 할 필요가 없다)

  - 단지 `React.createElement`를 하고, `html 태그`를 선택하고, `event`를 등록하기만 하면 된다

- ReactJS팀은 Interactive한 어플리케이션에서 하는 작업들 모두가 event들을 감지하는 일이라는 것을 알고 있다
  - `addEventListener`를 반복하는 것 대신에 property에서 event를 등록할 수 있게 되었음
  - ReactJS는 `ON`+`event`가 `event Listener`라는 것을 알고있다 (따라서 HMLT에 없는 것이다)

## 1-4) Recap [복습]

```html
<!-- react import (리액트 세팅) -->
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
```

- ReactJS는 반드시 필요하다
  - ReactJS가 element를 생성하고, event listener를 등록하는 것을 도와주기 때문이다
  - 바로 ReactJS가 interactive한 힘을 가지고 있는 것이다

```html
<!-- react-dom import (리액트 돔 세팅) -->
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
```

- ReactDom을 import
  - React element들을 가져와서 HTML로 바꿈

```html
<div id="root"></div>
```

- body에 비어있는 div태그 생성

  - 비어있는 div는 ReactDOM이 React element를 가져다 놓을 곳임

```html
<script>
  cosnt container = React.createElement("div", null, [h3,btn])
  // 여기서 container element는 div임, div의 content는 h3와 btn임
  ReactDOM.render(container, root); // React element들을 root div안에서 보여줌
</script>
```

- root div를 가져온 다음 ReactDOM을 render함
- React element들을 root div안에서 보여줌
- 앞으로 react 개발자로서 createElement를 사용할 일은 없다
- ReactDOM은 container element를 root div안에 render 할 것임
- createElement의 property(두번째 요소)는 id, class, event listener등이 될 수 있다

```html
<body>
  <div id="root"></div>
  <script>
    const root = document.getElementById("root")
    const h3 = React.createElement("h3", {id: "title", onMouseEnter:() => {
      console.log("mouse enter)
    }}, "Hello I'm h3);
  </script>
</body>
```

- 첫번째 인수: root에 들어갈 HTML 태그임
- 두번째 인수: props가 포함된 객체
- 세번쨰 인수: content

- props에서 id, class, 색상등을 바꿀 수 있음
- 일반적인 HTML TAG의 property로부터 무엇이든 바꿀 수 있음

<br>

## 1-5) JSX

### CreateElement를 대체하는 방법

- CreateElement를 대체하는 이유?

  - 개발자들에게 좀 더 편리한 도구를 제공하기 위해서
  - 그것이 JSX이다.

### JSX

- Javascrip를 확장한 문법
- HTML에서 작성한 것과 유사한 문법으로 React요소를 만들 수 있게 해줌.
- HTML과 비슷하게 생겼으므로 JSX로 React를 만드는 것이 개발자 입장에서는 굉장히 편하다

#### 요소를 생성하는 (오래된) 방법

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>리액트 - 쉬운버전</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- react import (리액트 세팅) -->
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <!-- react-dom import (리액트 돔 세팅) -->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script>
      const root = document.getElementById("root");
      const h3 = React.createElement(
        "h3",
        {
          id: "id 붙이기 연습용",
          onMouseEnter: () => {
            console.log("Mouse Enter !");
          }, // 이벤트 리스너 등록
        },
        "Hello I'm a h3"
      );
      const btn = React.createElement(
        "button",
        {
          onClick: () => {
            console.log("I'm Clicked"); // 버튼 클릭할 떄마다 호출될 함수
          },
          style: {
            backgroundColor: "tomato",
          },
        }, //   버튼에 eventListener 등록하기
        "Click me"
      );
      // html 태그의 이름을 내부에 기재
      // button의 property: null로 설정
      ReactDOM.render(btn, root);
      // 버튼을 랜더링 (root안에 btn을 render)

      /* span과 button 모두를 랜더링하기 */
      const container = React.createElement("div", null, [h3, btn]); // property에 배열을 생성하고 내부에 span, btn을 두기 (2개의 컴포넌트를 가지는 component를 생성한 것)
      ReactDOM.render(container, root); // div를 랜더링
    </script>
  </body>
</html>
```

#### JSX를 이용해서 위 코드와 동일한 컴포넌트 생성

- 위 코드를 다음과 같이 JSX를 이용해서 똑같은 컴포넌트를 만들어보도록 하자

```html
a
```

- JSX 규칙

  - 여는 태그가 있었다면 닫아줌
  - 내용은 열고 닫는 태그 사이에 넣음
  - property는 HTML의 속성처럼 기재함

##### [Babel](https://babeljs.io/)

- 코드를 변환해줌
- 브라우저는 JSX를 모르기 때문에 babel을 이용해서 우리가 JSX로 적은 코드를 브라우저가 이해할 수 있는 방식으로 바꿔 줌
- 브라우저는 JSX가 invalid하다고 생각함

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>1-5) JSX</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- react import (리액트 세팅) -->
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <!-- react-dom import (리액트 돔 세팅) -->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <!-- babel - 느린방식. 지금은 배움의 단계이므로 이렇게 사용하는 것  -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const root = document.getElementById("root");
      const Title = (
        <h3
          id="title"
          onMouseEnter={() => {
            console.log("mouse enter!");
          }}
        >
          Hello, I'm a title
        </h3>
      );
      const Button = (
        <button
          style={{ backgroundColor: "tomato" }}
          onClick={() => {
            console.log("I'm clicked");
          }}
        >
          Click me
        </button>
      );
      //   const container = React.createElement("div", null, [h3, btn]);   // h3와 btn은 존재하지 않으므로 에러 발생. 다음과 같이 수정요망
      const container = React.createElement("div", null, [Title, Button]);
      ReactDOM.render(container, root);
    </script>
  </body>
</html>
```

- script 내부에 있는 코드는 우리가 Babel에게 넘겨준 코드이다
- Babel은 그것을 브라우저가 읽을 수 있는 코드로 바꾸어서 head에 담아두었다. (바벨이 script에 있는 코드를 변환시켜서 head에 넣어둠. 마치 개발자가 createElement를 사용했던 방식과 유사하다.)

###### babel을 통해 변환되어 head에 담겨져 있는 코드

```html
<html>
  <head>
    <script>
      "use strict";

      var root = document.getElementById("root");
      var Title = /*#__PURE__*/ React.createElement(
        "h3",
        {
          id: "title",
          onMouseEnter: function onMouseEnter() {
            console.log("mouse enter!");
          },
        },
        "Hello, I'm a title"
      );
      var Button = /*#__PURE__*/ React.createElement(
        "button",
        {
          style: {
            backgroundColor: "tomato",
          },
          onClick: function onClick() {
            console.log("I'm clicked");
          },
        },
        "Click me"
      );
      //   const container = React.createElement("div", null, [h3, btn]);   // h3와 btn은 존재하지 않으므로 에러 발생. 다음과 같이 수정요망
      var container = React.createElement("div", null, [Title, Button]);
      ReactDOM.render(container, root);
    </script>
    <script
      type="text/javascript"
      src="chrome-extension://aggiiclaiamajehmlfpkjmlbadmkledi/popup.js"
      async=""
    ></script>
    <script
      type="text/javascript"
      src="chrome-extension://aggiiclaiamajehmlfpkjmlbadmkledi/tat_popup.js"
      async=""
    ></script>
  </head>
</html>
```

## 1-6) JSX2

- createElement대신 ~을 사용하기

```html

```

```jsx
const Container = (
  <div>
    <Button />
  </div>
);
```

- 컴포넌트의 첫 글자는 대문자여야 함

  - 만약에 소문자라면 React랑 JSX는 HTML button이라고 생각하게될 수 있다
  - 따라서 우리가 만든 요소는 모두 대문자여야 함 (html요소는 소문자)

- JSX는 애플리케이션을 여러 가지 작은 요소로 나누어서 관리할 수 있게 해줌

  - +) 보기쉽게 코드를 분리한 다음 함께 랜더링한다

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>1-6) JSX2</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- react import (리액트 세팅) -->
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <!-- react-dom import (리액트 돔 세팅) -->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <!-- babel - 느린방식. 지금은 배움의 단계이므로 이렇게 사용하는 것  -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const root = document.getElementById("root");
      function Title() {
        return (
          <h3 id="title" onMouseEnter={() => console.log("mouse enter!")}>
            Hello I'm a title
          </h3>
        );
      }
      const Button = () => (
        <button
          style={{ backgroundColor: "tomato" }}
          onClick={() => {
            console.log("I'm clicked");
          }}
        >
          Click me
        </button>
      );
      const Container = () => (
        <div>
          <Title />
          <Button />
        </div>
      );
      ReactDOM.render(<Container />, root);
    </script>
  </body>
</html>
```

- Button옆의 `= () => (` 부분은 function하고 괄호를 연 다음 return을 하는것과 같은 의미이다
  - `= () => ()`는 `function과 return문`을 포함하고 있다

<br><br>

# 2. STATE

## 2-0) Understanding State

### state

- 데이터가 저장되는 곳

### Recap

- React element를 함수 내에 담으면 원하는 만큼 사용할 수 있다

```jsx
const Button = () => (
  <button
    style={{ backgroundColor: "tomato" }}
    onClick={() => {
      console.log("I'm clicked");
    }}
  >
    Click me
  </button>
);
```

- 이 함수는 button react element를 반환하고 있다

```jsx
const Container = () => (
  <div>
    <Button />
    <Button />
    <Button />
    <Button />
    <Button />
  </div>
);
```

- (react element를 함수 내에 담았으므로) 우리가 원하는 만큼 사용할 수 있게 된다.
- 함수의 형태이므로 동일한 코드를 재사용할 수 있다.

### 클릭 횟수 나타내는 버튼 생성하기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-0) understanding state</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- react import (리액트 세팅) -->
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <!-- react-dom import (리액트 돔 세팅) -->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <!-- babel - 느린방식. 지금은 배움의 단계이므로 이렇게 사용하는 것  -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
      const root = document.getElementById("root");
      let counter = 0;
      function countUp() {
        counter += 1;
      }
      const Container = () => (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button onClick={countUp}>Click me</button>
        </div>
      );
      ReactDOM.render(<Container />, root);
    </script>
  </body>
</html>
```

- 여기있는 코드 어디에서도 UI를 새로고침 해주고 있지 않다
- 단지 Container를 한번 렌더링해줄뿐이다

  - 우리가 바라는 결과값을 보여주는 리랜더링이 구동되지 않고 있다

- 우리가 countUp을 호출할 때마다 `ReactDOM.render(<Container/>, root)`를 다시 호출하고 싶은 것이다.

```jsx
function countUp() {
  counter += 1;
  ReactDOM.render(<Container />, root);
}
```

- 이와 같이 countUp함수를 수정한다면 Container를 리랜더링 해주므로 counter가 증가한다

#### 작동순서 파악

```html
<div id="root"></div>
<!-- react import (리액트 세팅) -->
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<!-- react-dom import (리액트 돔 세팅) -->
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<!-- babel - 느린방식. 지금은 배움의 단계이므로 이렇게 사용하는 것  -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
  const root = document.getElementById("root");
  let counter = 0;
  function countUp() {
    counter += 1;
    ReactDOM.render(<Container />, root);
  }
  const Container = () => (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={countUp}>Click me</button>
    </div>
  );
  ReactDOM.render(<Container />, root); // 1)
</script>
```

- 1. 어플리케이션이 시작 될 때 Container를 렌더링. Container를 렌더링할 때, counter는 0임
- 2. `onClick={counUp}` : 이벤트 리스너를 더해주고 클릭하면 counter를 증가시킴
- 3. `ReactDOM.render(<Container/>, root)` : Container를 리렌더링함 (Container를 다시 리렌더링 해주면 함수가 다시 호출될 것이고 counter는 1만큼 증가하게 된다)

#### 리팩토링한것으로 다시 작동순서 파악

```html
<body>
  <div id="root"></div>
  <!-- react import (리액트 세팅) -->
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <!-- react-dom import (리액트 돔 세팅) -->
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <!-- babel - 느린방식. 지금은 배움의 단계이므로 이렇게 사용하는 것  -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    let counter = 0;
    function countUp() {
      counter += 1;
      render();
    }
    function render() {
      ReactDOM.render(<Container />, root);
    }
    const Container = () => (
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={countUp}>Click me</button>
      </div>
    );
    render();
  </script>
</body>
```

1. 애플리케이션이 시작되면 counter는 0임
2. render()함수를 실행시킴
3. render 함수는 Container 컴포넌트를 root에 담아둠
4. 애플리케이션이 막 시작되었을 때의 Container는 Total click을 가지고 있고, counter와 연결되어 있다
5. counter의 초기값은 0이다. (사용자에게 비춰지는 녀석임)
6. `<button onClick={countUp}>Click me</button>` : 이벤트리스너를 여기에 등록해주면 버튼을 클릭할 때마다 countUp 함수가 호출될 것이다.
7. countUp은 counter를 증가시키고 다시 render를 호출해줄것이다.
8. render()함수가 호출되면 동일한 방법을 반복한다.
9. 하지만 이번에는 우리가 Container를 사용할 경우 Container 컴포넌트는 업데이트 된 counter를 가지고 있을 것이다

#### 3차 수정본

```html
<body>
  <div id="root"></div>
  <!-- react import (리액트 세팅) -->
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <!-- react-dom import (리액트 돔 세팅) -->
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <!-- babel - 느린방식. 지금은 배움의 단계이므로 이렇게 사용하는 것  -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    let counter = 0;
    function countUp() {
      counter += 1;
      render();
    }
    function render() {
      ReactDOM.render(<Container />, root);
    }
    function Container() {
      return (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button onClick={countUp}>Click me</button>
        </div>
      );
    }

    render();
  </script>
</body>
```

- 이 코드는 목표를 달성하기 위해 최적의 코드는 아니다.
- 우리가 값을 바꿀때마다 리랜더링하는 것을 잊으면 안되기 떄문이다.

<br>

### VanillaJS VS ReactJS

- VanillaJS

  - 바닐라 자바스크립트에서 요소를 검사해보면 구글 크롬등이 요소들이 업데이트 되고 있는 것을 바로바로 보여준다 (body, span 등이 업데이트되고 있는것을 확인할 수 있음)

- ReactJS
  - 리액트는 이와달리 파일 검사탭을 열고 버튼을 클릭해보면 h3, button, div들은 업데이트되지 않는것을 확인할 수 있다
  - ReactJS는 UI에서 바뀐 부분만 업데이트를 해주고 있다
  - ReactJS는 이전에 렌더링된 컴포넌트가 어떤것이었는지를 확인하고 있다
  - 그리고 그 다음에 렌더링될 컴포넌트는 어떤지를 보고, ReactJS는 다른 부분만 파악한다. (우리가 바꾼부분)
  - 다시 Total clicks를 생성할 필요가 없고, button을 다시 생성할 필요도 없으며 오로지 바뀐 부분만 업데이트 해주면 된다
  - 즉, ReactJS를 이용해서 interactive한 애플리케이션을 만들 수 있게 된다.
  - 우리가 여러가지 요소를 리렌더링하려고 하더라도 전부 다 새로 생성되지는 않을 것이며 바뀐 부분만 생성될 것이다

## 2-1) setState 1

- 리렌더링을 발생시킬 가장 좋은 방법은 데이터를 바꾸고 다시 렌더링해주는 것이다.
- 우리가 리렌더링을 하면 기존의 컴포넌트들도 바뀐 데이터를 가지고 재생성될 것이다.
- 하지만 리액트를 이용하기 떄문에 우리가 리렌더링 하고자하는 것만 리렌더링할 수 있다 (ReactJS를 사용하는 이유)
