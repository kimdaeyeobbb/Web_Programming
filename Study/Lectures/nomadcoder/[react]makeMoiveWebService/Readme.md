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
    - [2-0의 코드 개선작업](#2-0의-코드-개선작업)
      - [배열에서 요소를 꺼내서 이름 부여하기](#배열에서-요소를-꺼내서-이름-부여하기)
  - [2-2) state2](#2-2-state2)
    - [usestate](#usestate)
    - [코드 작성과정](#코드-작성과정)
    - [렌더링](#렌더링)
      - [기존코드](#기존코드)
      - [개선된 코드](#개선된-코드)
      - [React \& useState를 이용해서 개선한 최종 코드](#react--usestate를-이용해서-개선한-최종-코드)
  - [2-3) recap](#2-3-recap)
    - [코드 뜯어보기](#코드-뜯어보기)
  - [2-4) State Functions](#2-4-state-functions)
    - [앱의 state 바꾸기](#앱의-state-바꾸기)
      - [문제점](#문제점)
      - [state를 바꾸는 방법 1 - setCounter (직접 값을 설정해서 넣어주기)](#state를-바꾸는-방법-1---setcounter-직접-값을-설정해서-넣어주기)
      - [state를 바꾸는 방법 2 - 이전값을 이용해서 현재값 계산](#state를-바꾸는-방법-2---이전값을-이용해서-현재값-계산)
  - [2-5) inputs and state](#2-5-inputs-and-state)
    - [label](#label)
    - [문제점 발생](#문제점-발생)
    - [문제점 해결](#문제점-해결)
    - [useState](#usestate-1)
    - [native Event](#native-event)
      - [target](#target)
    - [setState](#setstate)
  - [2-6) state practice1](#2-6-state-practice1)
    - [1. state 생성](#1-state-생성)
    - [2. input value를 state로 수정](#2-input-value를-state로-수정)
    - [3. onChange 함수 생성](#3-onchange-함수-생성)
    - [hours](#hours)
    - [결과코드](#결과코드)
  - [2-7) state practice2](#2-7-state-practice2)

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

- 컴포넌트나 JSX를 변수에 추가하고 싶은 경우, 다음과 같이 사용한다

```JSX
function Container() {
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={countUp}>Click me</button>
    </div>
  )
}

render()
```

- UI를 업데이트해서 변화된 부분을 사용자에게 보여주고 싶은경우, render함수를 다시 호출하면 된다
- 우리는 render함수를 만들어서 애플리케이션이 처음 실행될 때 호출해주었다
- `render()`가 호출될 때 render함수는 Container 컴포넌트를 root div에 담아둘 것이다
- `ReactDOM.render()` 가 최초로 호출되면 Container함수가 호출되고 Container함수가 호출되면 React element가 반환될 것이다

```jsx
function render() {
  ReactDOM.render(<Container />, root);
}

function Container() {
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={countUp}>Click me</button> {/* event listener 등록 */}
    </div>
  );
}

render();
```

- 사용자에게 바뀐 데이터를 보여주기 위해 다시 render()함수 호출
- render함수는 Container 컴포넌트를 root에 담아둔다

```js
const root = document.getElementById("root");
let counter = 0;
function countUp() {
  counter = counter + 1;
  render();
}

function render() {
  ReactDOM.render(<Container />, root);
}
```

- ReactJS는 매우 똑똑하기 때문에 우리가 리렌더링하더라도 전부를 재생성할 필요가 없이, 바뀐부분만 재생성할 수 있도록 도와준다

### 2-0의 코드 개선작업

- ReactJS 어플 내에서 데이터를 보관하고 자동으로 리렌더링을 일으킬 수 있는 방법을 사용해보자 (렌더링함수를 계속해서 호출할 필요가 없게끔 만들어보자!)
- 만약 사용자에게 업데이트 된것을 보여주고 싶다면, 새로운 정보를 가지고 컴포넌트를 리렌더링 해주어야 한다.

#### 배열에서 요소를 꺼내서 이름 부여하기

- 방법1

```js
const food = ["tomato", "potato"];
const tomato = food[0];
const potato = food[1];
```

- 방법2

```js
const food = ["tomato", "potato"];
const [myFavFood, mySecondFavFood] = food;
myFavFood; // 'tomato'
mySecondFavFood; // 'potato'
```

## 2-2) state2

### usestate

- usestate는 array를 return

### 코드 작성과정

- 작성한 함수를 사용하려면 이벤트 등록을 해야한다.

```jsx
const root = document.getElementById("root");
function App() {
  const [counter, modifier] = React.useState(0);
  const onClick = () => {
    // 사용하려면 이벤트 등록을 해주어야 함
    counter += 1;
    console.log(counter);
  };
  console.log(data);
  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
      {/* 클릭 이벤트 등록 */}
    </div>
  );
}
```

### 렌더링

- 기존의 값을 가지고 리렌더링하는 것은 굉장히 귀찮은 과정이다
- `getElementById`, `ReactDOM` 등을 리렌더링이 필요한 부분마다 써주어야 하기 때문이다.
- 따라서 새로운 값으로 렌더링해주도록 코드를 개선해보자

#### 기존코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-2</title>
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
      function App() {
        let [counter, modifier] = React.useState(0);
        const onClick = () => {
          // 사용하려면 이벤트 등록을 해주어야 함
          counter += 1;
          console.log(counter);
        };

        return (
          <div>
            <h3>Total Clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button>
          </div>
        );
      }
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

#### 개선된 코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-2</title>
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
      function App() {
        const [counter, modifier] = React.useState(0);
        const onClick = () => {
          // 사용하려면 이벤트 등록을 해주어야 함
          modifier(139478314);
        };

        return (
          <div>
            <h3>Total Clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button> {/* 이벤트 등록 */}
          </div>
        );
      }
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

- 어떤값을 부여하건 modifier 함수는 그 값으로 업데이트하고 리렌더링을 일으킬 것이다 (이 모든 작업은 modifier 함수 내에서 일어난다)
- 우리가 직접 modifier에 해당하는 부분을 직접 호출하면서 리렌더링을 해줄 필요가 없게된다.

- `const [counter, modifier] = React.useState(0);` 만으로 React.useState 함수는 counter와 같은 데이터를 숫자형 데이터로 건네줄 것이고, 그 데이터값을 변환시킬 함수또한 같이 전달할 것이다.

- 그리고 (데이터 값을 변환시킬 이)함수를 이용해서 데이터를 바꾸었을 때 데이터 값이 바뀌고 컴포넌트또한 리렌더링 될 것이다.

- 리렌더링 되는 부분
  - 이 부분의 업데이트가 완료되는 것이다.

```jsx
return (
  <div>
    <h3>Total clicks: {counter}</h3>
    <button onClick={onClick}>Click me</button>
  </div>
);
```

- modifier는 modifier라고 적어주는 것이 아니라 set+데이터명으로 기재한다.

```jsx
const root = document.getElementById("root");
function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    // 사용하려면 이벤트 등록을 해주어야 함
    setCounter(counter + 1);
  };
```

- 사용자가 보게 될 컴포넌트

```jsx
return (
  <div>
    <h3>Total clicks: {counter}</h3>
    <button onClick={onClick}>Click me</button>
  </div>
);
```

#### React & useState를 이용해서 개선한 최종 코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-2</title>
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
      function App() {
        const [counter, setCounter] = React.useState(0);

        const onClick = () => {
          // 사용하려면 이벤트 등록을 해주어야 함
          setCounter(counter + 1);
          // 버튼 클릭시 counter값을 바꿔줄 함수를 호출
          // counter의 새로운 값을 가지고 해당 함수를 호출해줌
          // 그 새로운 값은 현재 counter값+1이 된다.
        };

        return (
          <div>
            <h3>Total Clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button>
            {/* 이벤트 등록 */}
            {/* 버튼이 클릭되면 */}
          </div>
        );
      }
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

- 리액트는 오로지 바뀐 부분만을 업데이트 해줌
- 리액트는 업데이트 사이사이마다 정확히 어떤것이 업데이트 되었는지 파악해서 HTML에서 그 부분만 고친다
- 진행과정
  - 변수를 컴포넌트에 연결해서
  - 변수에 데이터를 담은 다음 해당 변수에 담긴 값을 바꿈

## 2-3) recap

### 코드 뜯어보기

- 기준코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-3</title>
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
      function App() {
        const [counter, setCounter] = React.useState(0);

        const onClick = () => {
          // 사용하려면 이벤트 등록을 해주어야 함
          setCounter(counter + 1);
          // setCounter: 리렌더링을 일으킴
          // 버튼 클릭시 counter값을 바꿔줄 함수를 호출
          // counter의 새로운 값을 가지고 해당 함수를 호출해줌
          // 그 새로운 값은 현재 counter값+1이 된다.
        };
        console.log("rendered");
        console.log(counter);
        return (
          <div>
            <h3>Total Clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button>
            {/* 이벤트 등록 */}
            {/* 버튼이 클릭되면 */}
          </div>
        );
      }
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

- refresh

  - 리렌더링에 해당됨
  - modifier 함수를 사용해서 state(어플리케이션의 데이터)를 바꿀 때 (즉, modifier 함수를 이용해서 컴포넌트의 state를 바꿀 때) 컴포넌트는 새로운 값을 가지고 다시 렌더링이 됨
  - modifier 함수를 가지고 state를 변경할 때 컴포넌트가 재생성됨. 새로운 값을 가지고 리렌더링을 하는 것임.

- ReactJS가 제공하는 가장 중요한 부분

  - 데이터가 바뀔때마다 컴포넌트를 리렌더링하고 UI를 refresh함
  - ReactJS는 똑똑하기 때문에 화면 전체를 바꾸는 것이 아니라 우리가 바꾸고 있는 부분만 변경한다

- 즉, modifier 함수를 사용해서 state(애플리케이션의 데이터)를 바꿀 때 컴포넌트 전체가 새로운 값을 가지고 재생성될 것이다
- modifier 함수를 가지고 state를 바꾼다면 App() 컴포넌트가 재생성되고, 함수 코드전체가 다시 한번 실행될 것이다. return 또한 재실행될 것이지만 새로운 값을 가지고 실행될 것이다.

- 가장 중요한 것

  - state가 바뀌면 리렌더링이 일어난다

- ReactJS는 똑똑하기 때문에 컴포넌트가 리렌더링될 때 두 번째 이벤트 리스너가 등록되거나 Total click을 새로 만드는 것이 아니라, 오로지 달라지는 부분은 화면에 보이는 부분뿐이다.

- 이렇게 ReactJS를 이용하면

  - HTML 요소를 생성하거나 찾을 필요가 없다(document.getElementById사용, document.querySelector등을 사용할 필요가 없음)
  - 이벤트리스너를 더해줄 필요가 없다 (button.addEventListener('click', handleclick)등을 사용할 필요가 없다.)
  - ui를 업데이트 해줄 필요가 없다 (span.innerText =`` 등을 사용할 필요가 없다.)

```jsx
function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```

- 바로 HTML을 만들고 곧바로 이벤트리스너를 더해주고 UI를 업데이트하면 자동으로 리렌더링된다.
- 마지막으로 state가 바뀌면 react가 컴포넌트를 refresh 해준다

## 2-4) State Functions

- 사용자들은 input을 어떻게 얻을까?
- form을 만들었을 때 state는 어떤식으로 작용할까?

### 앱의 state 바꾸기

#### 문제점

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-3</title>
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
      function App() {
        const [counter, setCounter] = React.useState(0);

        const onClick = () => {
          // 사용하려면 이벤트 등록을 해주어야 함
          setCounter(counter + 1);
          // setCounter: 리렌더링을 일으킴
          // 버튼 클릭시 counter값을 바꿔줄 함수를 호출
          // counter의 새로운 값을 가지고 해당 함수를 호출해줌
          // 그 새로운 값은 현재 counter값+1이 된다.
        };
        console.log("rendered");
        console.log(counter);
        return (
          <div>
            <h3>Total Clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button>
            {/* 이벤트 등록 */}
            {/* 버튼이 클릭되면 */}
          </div>
        );
      }
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

- counter라고 설정한 현재 state를 이용해서 다음 state를 위한 계산을 해주고 있다
- counter state를 이용해서 새로운 counter state를 구하고 있는 것이다.
- 하지만 counter는 다른 곳에서 update되어서 우리가 생각했던 값이 아닐 수 있기 때문에 본 방법은 좋지 않다.
- 이전 단계의 state를 이용해서 현재 state를 바꾸려고 했으나 결과가 예상과 달리 나올수 있는 것이다.

#### state를 바꾸는 방법 1 - setCounter (직접 값을 설정해서 넣어주기)

- setCounter를 이용해서 우리가 원하는 값을 넣어줄 수 있다

- 우리가 원하는 값으로 변경되기는 하지만 다음클릭부터는 값이 바뀌지 않는다

```jsx
const [counter, setCounter] = React.useState(0);

const onClick = () => {
  setCounter(777);
};
```

#### state를 바꾸는 방법 2 - 이전값을 이용해서 현재값 계산

- 코드 개선전
  - 현재의 counter값을 가지고 계산하고 있음

```jsx
const [counter, setCounter] = React.useState(0);

const onClick = () => {
  // 사용하려면 이벤트 등록을 해주어야 함
  setCounter(counter + 1);
  // setCounter: 리렌더링을 일으킴
  // 버튼 클릭시 counter값을 바꿔줄 함수를 호출
  // counter의 새로운 값을 가지고 해당 함수를 호출해줌
  // 그 새로운 값은 현재 counter값+1이 된다.
};
```

- 코드 개선 이후

  - 현재 값을 가지고 계산을 해야한다면 setCounter 내에 함수를 넣을 수도 있다.
  - 이 함수의 첫번쨰 인자값은 현재값이다. 함수의 리턴값은 새로운 state가 된다.
  - 이제 이 함수가 무엇을 리턴하던간에 리턴값이 새로운 state가 되는 것이다.
  - 이와 같이 함수를 작성했을 때 이 current가 확실하게 현재의 값임을 보장하고 있다 (우리가 정확히 원하는 값으로 계산할 수 있도록 말이다!)

- 즉, 현재의 state 기반으로 계산을 하고 싶다면 함수를 이용하도록 하자
  - 다음 state값이 현재의 값을 바탕으로 나올 수 있도록 말이다!
  - 이는 예상치 못한 업데이트가 어디선가 일어난다고 해도 혼동을 주는것을 방지한다!

```jsx
const [counter, setCounter] = React.useState(0);

const onClick = () => {
  // setCounter(counter + 1)
  setCounter((current) => counter + 1); // 위와 동일하게 현재의 state로 새로운 값을 계산함. but 더 안전.
};
```

<br>

## 2-5) inputs and state

- unit conversion app (단위 변환 앱) 제작하기

### label

- input 옆에 써줌
- label옆의 글씨를 누르면 그 옆의 input이 선택됨
- label을 input에 연결해주기 위해서 input에 id를 달아주자 + label의 for 속성값을 input의 id값과 같게 설정하자

### 문제점 발생

- HTML상의 label & input을 사용한 예시

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-5</title>
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
      function App() {
        return (
          <div>
            <h1>Super Converter</h1>
            <label for="minutes">Minutes</label>
            <input id="minutes" placeholder="Minutes" type="number" />
            <label for="hours">Hours</label>
            <input id="hours" placeholder="Hours" type="number" />
          </div>
        );
      }
      const root = document.getElementById("root");
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

- production.min.js

  - 얘를 `development.min.js`로 수정한다면 유효하지 않은 DOM property 'for'이 있다는 에러메시지를 확인할 수 있다
  - for는 j용어이므로 이미 선점된 단어이다.

- 유의사항

1. class를 사용하면 안됨
2. for를 사용하면 안됨

- 결론
  - 우리는 html을 사용하고 있으므로 html에 맞게 수정해주어야 한다.
  - `for` => `htmlFor` 로 수정
  - `class` => `className` 으로 수정

### 문제점 해결

- 문제 해결한 코드
- 이렇게 고쳐야 모든것이 정상적인 HTML코드로 변환된 것을 확인할 수 있다

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-5</title>
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
      function App() {
        const [minutes, setMinutes] = React.useState(); // react에서 가져온 useState를 사용
        const onChange = () => {
          console.log("somebody wrote");
        };
        return (
          <div>
            <h1 className="hi">Super Converter</h1>
            <label htmlFor="minutes">Minutes</label>
            <input
              // input의 value가 state의 value와 같아짐
              value={minutes}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
            />
            <label htmlFor="hours">Hours</label>
            <input id="hours" placeholder="Hours" type="number" />
          </div>
        );
      }
      const root = document.getElementById("root");
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

### useState

- array를 제공함
- 첫 번째 요소 : 현재의 값. state로서의 값
- 두 번째 요소 : 첫번쨰 요소를 수정하고 컴포넌트를 새로고침할 때 사용하는 modifier 함수.

```jsx
const [minutes, setMinutes] = React.useState();
```

- 얘를 설정하고 나서 input에 value를 줄 수 있다

```html
<script>
  function App() {
          const [minutes, setMinutes] = React.useState();  // react에서 가져온 useState를 사용
          const onChange = () => {
              console.log("somebody wrote")
          }
          return (
            <div>
              <h1 className="hi">Super Converter</h1>
              <label htmlFor="minutes">Minutes</label>
              <input
                value={minutes}
                id="minutes"
                placeholder="Minutes"
                type="number"
                onChange = {}
              />
              <label htmlFor="hours">Hours</label>
              <input id="hours" placeholder="Hours" type="number" />
            </div>
          );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
</script>
```

- input의 value가 state의 value와 같아짐

### native Event

- 콘솔창에서 SyntheticBaseEvent (합성 이벤트)를 확인할 수 있다. => ReactJS가 발생시킨 가짜 event임 (얘네는 event를 최적화 시키기 위한 목적으로 가짜 event를 발생시킴)

- 원래의 이벤트를 알고싶다면 `native Event`를 확인하면 된다. => 얘가 native javascript event임

#### target

- native Event내에 존재
- 여기서 target은 방금 바뀐 input을 뜻함
- 우리는 어떤 변화가 일어났는지를 쫓아가야 하므로 `event.target.value` 순으로 적어주면 된다
- 이를 이용함으로써 `document.getElement ~ 어쩌고저쩌고`를 적을 필요가 없어짐

### setState

- 데이터를 업데이트하기 위해서 사용
- 다음 예시 => 우리가 입력한 input의 value를 바탕으로 component를 업데이트 해주고 있음

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-5</title>
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
      function App() {
        const [minutes, setMinutes] = React.useState(); // react에서 가져온 useState를 사용
        const onChange = (event) => {
          setMinutes(event.target.value);
          //   console.log(event.target.value); // document.getElement ~ 어쩌고저쩌고를 적을 필요가 없어짐
        };
        return (
          <div>
            <h1 className="hi">Super Converter</h1>
            <label htmlFor="minutes">Minutes</label>
            <input
              // input의 value가 state의 value와 같아짐
              value={minutes}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
            />
            <h4>You want to convert {minutes}</h4>
            {/* 확인용 문구 */}
            <label htmlFor="hours">Hours</label>
            <input id="hours" placeholder="Hours" type="number" />
          </div>
        );
      }
      const root = document.getElementById("root");
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

<br><br>

## 2-6) state practice1

### 1. state 생성

```jsx
const [minutes, setMinutes] = React.useState(0);
```

- state의 결과는 array
- 첫 번쨰 요소: 데이터
- 두 번째 요소: 데이터를 수정하기 위한 함수

### 2. input value를 state로 수정

```jsx
<input
  value={minutes}
  id="minutes"
  placeholder="Minutes"
  type="number"
  onChange={onChange}
/>
```

- 이렇게 수정하게되면 어디서든 input의 value를 수정해줄 수 있으므로 아주 유용하다

### 3. onChange 함수 생성

```jsx
const onChange = (event) => {
  setMinutes(event.target.value);
};

<input
  value={minutes}
  id="minutes"
  placeholder="Minutes"
  type="number"
  onChange={onChange}
/>;
```

- input에서 listening하는 데이터를 업로드 해주는 함수 (데이터를 업데이트 해주는 함수)
- 이로인해 input은 스스로 업데이트를 함
- change 이벤트가 발생했을 때 (사용자가 input에 뭔가를 써 넣었을 때) onChange 함수가 실행되고 input value인 `event.target.value`를 얻게됨
- input의 value와 연결시켜줌으로써 input의 값을 외부에서도 수정할 수 있게 된다
- onChange 함수를 지운다면 input이 키보드 이벤트를 감지하고 있다 하더라도 값의 수정이 불가능하다 (업데이트가 불가능하다)

### hours

```jsx
<div>
  <label htmlFor="hours">Hours</label>
  <input value={minutes} id="hours" placeholder="Hours" type="number" />
</div>
```

- minutes를 수정하면 hours가 같이 고쳐진다
- 하지만 hours를 수정하면 minutes가 같이 고쳐지지 않는다. 왜냐하면 onChange event를 달아놓지 않았기 때문이다

### 결과코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2-6</title>
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
      function App() {
        const [minutes, setMinutes] = React.useState(0);
        const onChange = (event) => {
          setMinutes(event.target.value);
          // state를 여기서 바꿔주고 있으므로 바뀐값을 가지고 return쪽에서 리렌더링 하는 것
          // 이로인해 모든 코드가 리렌더링이 일어남
        };

        const reset = (event) => {
          setMinutes(0);
        };
        return (
          <div>
            <div>
              <h1>Super Converter</h1>
              <label htmlFor="minutes">Minutes</label>
              <input
                value={minutes}
                id="minutes"
                placeholder="Minutes"
                type="number"
                onChange={onChange}
              />
            </div>
            {/* 확인용 문구 */}
            <h4>You want to convert {minutes}</h4>

            <div>
              <label htmlFor="hours">Hours</label>
              <input
                value={Math.round(minutes / 60)}
                id="hours"
                placeholder="Hours"
                type="number"
                disabled
              />
            </div>
            <button onClick={reset}>Reset</button>
          </div>
        );
      }
      const root = document.getElementById("root");
      ReactDOM.render(<App />, root);
    </script>
  </body>
</html>
```

- 우리는 ReactJS를 이용하고 있으므로 전부 다 새로 그려져서 모두 리렌더링 되는 것이 아닌 딱 하나의 value만 리렌더링 된다.

- reset
  - state를 리스닝하거나 연결한 모든 것들이 0으로 되돌아감

<br><br>

## 2-7) state practice2

- flip 만들기
-
