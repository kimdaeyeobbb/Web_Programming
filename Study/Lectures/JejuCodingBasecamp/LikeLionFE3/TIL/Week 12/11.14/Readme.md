# 22.11.14 (월) 수업

# React 기본설정

## 개발환경 설정 & 새로운 프로젝트 생성

- `npx create-react-app my-app` 명령어를 입력

- Create React App은 백엔드 로직이나 데이터베이스를 제어할 수 없음
- Create React App은 프론트엔드 빌드 파이프라인만 생성하기 때문에 어떠한 백엔드와도 함께 사용할 수 있음
- Create React App은 Babel이나 webpack같은 build 도구를 사용하거나, 설정없이도 동작함

## 필요한 것들만 남기기

- `node_modules`는 프로젝트를 실행하고나서 지우고 나서 새로운 프로젝트 생성시 만들어줄 것
- `public`폴더에서는 `index.html`파일만 남기기
- `src`폴더에서는 `App.js`와 `index.js`만 남기기

<br>

## public > index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
```

## src > App.js

```js
function App() {
  return (
    <div className="App">
      <h1>test2</h1>
    </div>
  );
}

export default App;
```

## src > index.js

```js
import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
```

## 설정된 환경에서 프로젝트 실행

- `npm start` 명령어를 입력

<br><br>

# 실무에서 사용하는 폴더구조

## :one: src > components

- 컴포넌트 조각들을 모음
- EX) 로고, 프로필

## :two: src > pages > ... (login > Login.jsx)

- 하나의 페이지별로 구성
- pages 하위 폴더로 about, contact, homepage 등의 폴더를 생성하고 내부에 같은 이름의 js파일이나 jsx파일을 생성

<br><br>

# props

- 컴포넌트에서 props값이 전달되면 될수록 복잡도가 올라가고, 불필요한 데이터들이 많이 상속된다.

- [props drilling] 사용되지 않는 props가 컴포넌트를 통과하고 있음. 2개가 아니라 수십개가 될 경우 사용하지도 않는 props를 계속해서 전달해야 하기 때문에 문제가 됨.

  - props drilling을 피하기 위해 나중에 Hook을 배울 것임

- [참고자료 1](https://slog.website/post/13)
- [참고자료 2](https://www.freecodecamp.org/news/avoid-prop-drilling-with-react-context-api/)

<br><br>

# components & pages

## components

- 하나하나가 조각들임
- 버튼같은것은 컴포넌트에 구현해놓고 가져와서 쓰는 것임

## pages

- pages 폴더 내부의 각각의 폴더가 하나의 페이지임

<br><br>

# 주의사항

- 각 파일마다 node_modules 지우고 업로드중 (복습할때 새로 node_modules만들어서 공부하고 지울것)

<br><br>

# 추가학습사항

## export

- 변수나 함수, 클래스를 선언할 떄 맨 앞에 `export`를 붙이면 내보내기가 가능함

### export default

- `export default`를 사용하면 '해당 모듈에는 개체가 하나만 있다'라는 것을 명확히 나타낼 수 있다.
- `default`를 붙여서 모듈을 내보내면 중괄호{} 없이 모듈을 가져올 수 있다

- 예시

```js
// 내보내고자하는 개체
export default class User {
  constructor(name) {
    this.name = name;
  }
}
```

- `export default`는 파일당 하나만 있으므로 이 개체를 가져오려는 모듈에서는 중괄호 없이도 어떤 개체를 가지고 올지 정확히 알 수 있다 (따라서 이름이 없어도 된다)

  - 단, `default`를 붙이지 않았다면 개체에 이름이 없는 경우 에러가 발생한다.
  - 예시

  ```js
  export class{  // 에러! (default export가 아닌 경우에는 이름이 꼭 필요함)
    constructor(){}
  }
  ```

<br>

### 'default` name

- `default` 키워드는 기본 내보내기를 참조하는 용도로 종종 사용함
- 예시

```js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 함수 선언부 앞에 'export default'를 붙여준것과 동일
// 함수를 내보낼 때 함수 선언부와 떨어진 곳에서 default 키워드를 사용할 경우 해당 함수를 기본 내보내기 할 수 있음
export { sayHi as default };
```

<br>

### default export의 이름에 대한 규칙

- named export는 내보냈을 때 사용한 이름 그대로 가져오므로 관련 정보를 파악하기 쉽다

  - But 아래와 같이 내보내기를 할 경우, 이름과 가져오기 할 때 쓸 이름이 동일해야 한다는 제약이 있다.

- name export 예시

```js
import { User } from "./user.js";
// import {MyUser}는 사용할 수 없다. 반드시 {User}이어야 한다.
```

- default export 예시
  - 어떤 이름이든 에러 없이 동작함

```js
import User from "./user.js"; // 동작함
import MyUser from "./user.js"; // 동작함
```

#### 자유롭게 이름을 지어 생기는 혼란 방지

- default export 한 것을 가져올 때에는 아래와 같이 파일 이름과 동일한 이름을 사용하도록 내부 규칙을 정하는것이 권장됨

- 예시

```js
import User from "./user.js";
import LoginForm from "./loginForm.js";
import func from "/path/to/func.js";
```

<br>

## import

- 무엇인가를 가져올 때 사용

- 예시

```js
import {sayHi, sayBye} from './say.js';

sayHi{'DAN'};   // Hello, DAN!
sayBye{'DAN'};   // Bye, DAN!
```

### import 사용시 대상을 구체적으로 명시하라

1. 웹팩과 같은 모던 빌드 툴은 로딩 속도를 높이기 위해 모듈들을 한데 모으는 번들링 작업과 최적화를 수행한다. 이 과정에서 사용하지 않는 리소스가 삭제되기도 한다.
   빌드 툴은 실제 사용되는 함수가 무엇인지 파악해서 그렇지 않은 함수는 최종 번들링 결과물에 포함하지 않는다. 이 과정에서 불필요한 코드가 제거되기 때문에 빌드 결과물의 크기가 작아진다. 이런 최적화 과정을 가지치기(tree-shaking)이라고 한다.

2. 어떤 것을 가지고 올지 명시하면 이름을 간결하게 써줄 수 있다. `say.sayHi()`보다 `sayHi()`가 더 간결하다

3. 어디서 어떤 게 쓰이는지 명확하므로 코드의 구조를 파악하기가 쉬워져서 리팩토링이나 유지보수에 도움이 된다.

### import 'as'

- `as`를 사용하면 이름을 바꿔서 모듈을 가져올 수 있다
- 예시

```js
import {sayHi as Hi, sayBye as bye} fromm './say.js';

hi('John');   // Hello, John!
bye('John');   // Bye, John!
```

<br>

### import React from 'react'

- 브라우저는 HTML, CSS, javascript만 읽을 수 있으므로 우리가 작성한 React를 읽지 못한다. 따라서 React로 작성된 코드를 브라우저가 읽을 수 있도록 변환해주어야 한다.

- 리액트에서는 JSX 문법을 사용하는데, 이 JSX 문법을 자바스크립트로 변환할 때
  JSX transformer를 사용해서 JSX로 작성된 React 메서드를 변환시킨다. 이때 객체인 React를 가져오기 위해 `import React from 'react'`를 맨 위에 작성해서 React를 불러오게 되면 객체 react를 통해 React 메서드를 작성할 수 있게 된다.

- 추가내용
  - JSX는 React라는 객체의 메서드를 이용해서 구성요소들을 생성하기 때문에 문서의 위에 `import React from 'react'`를 작성해서 해당 JSX가 객체 React를 받아오고 추후 Babel이라는 웹팩을 통해서 React를 유효한 자바스크립트로 변환할 수 있게 해줌

#### 결론: `import React from 'react'`는 브라우저가 읽을 수 있도록 jsx를 바꾸기 위해 사용함 (상위 컴포넌트에서 작성되었을 경우 하위 컴포넌트에서는 생략할 수 있음)

<br>

# \<main>

- `<main>` 태그는 해당 문서의 `<body>`내 주요 컨텐츠를 정의할 때 사용함
- 해당 요소 내 컨텐츠는 해당 문서의 중심 주제 또는 주요 기능과 직접적으로 관련되어 있거나 확장되는 컨텐츠로 구성되어야 한다.
- 사이드바, 탐색 링크, 저작권 정보, 사이트 로고, 검색 폼 등 여러 문서 전반에 걸쳐 반복되는 내용을 포함해서는 안된다.
  (단, 검색 폼이 페이지의 주요 기능이라면 예외로 둘 수 있다)

- 따라서 하나의 문서에는 단 하나의 `<main>`요소만이 존재해야 한다
- `<main>`요소는 `<article>, <aside>, <footer>, <header>, <nav>`요소의 자손 요소가 되어서는 안된다.

- 예시

```html
<main>
  <h1>바나나</h1>
  <p>
    바나나는 바나나는 파초과 바나나 속에 속하는 숙근성 영년생 열대과수를
    총칭한다.
  </p>
  <article>
    <h2>다이어트 식품</h2>
    <p>
      바나나는 탄수화물이 약 27%이고 비타민 A와 C가 풍부하며, 100g당 87kcal의
      열량을 갖는다.
    </p>
  </article>
  <article>
    <h2>다양한 섭취법</h2>
    <p>
      바나나는 열매를 주식으로 이용할 뿐 아니라 미성숙한 열매는 채소로 다양한
      요리에 응용된다.
    </p>
  </article>
</main>
```

<br><br>

# [Javascript] onclick

- `onclick` 이벤트는 사용자가 요소를 클릭했을때 발생함

## HTML 상에서의 onclick

- 기본 꼴

```html
<element onclick="myScript"></element>
```

- 예시

```html
<p id="demo" onclick="myFunc()">Click mee.</p>
<script>
  function myFunct() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
  }
</script>
```

<br>

## Javascript 상에서의 onclick

- 기본 꼴

```js
object.onclick = function () {
  myScript;
};
```

- 예시

```javascript
<p id="demo">Click me</p>
<script>
  document.getElementById("demo").onclick = function(){myFunc()};

  function myFunc(){
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
  }
</script>
```

## Javascript 상에서의 addEventListener 사용

- 기본꼴

```js
object.addEventListener("click", myScript);
```

- 예시

```js
<p id="demo">Click me</p>
<script>
  document.getElementById("demo").addEventListener("click", myFunc);

  function myFunc(){
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
  }
</script>
```

## 추가 예시

### button 클릭시 날짜를 보여주기

```html
<button onclick = "getElementById("demo").innerHTML=Date()">What is the time?</button>
<p id ="demo"></p>
```

### h3요소 클릭시 텍스트 컬러 변경하기

```html
<h3 id="demo" onclick="myFunc()">Click this text to change the color.</h3>
<script>
  function myFunc() {
    document.getElementById("demo").style.color = "red";
  }
</script>
```

### 요소의 색상을 바꾸는 예제

```html
<h3 onclick="myFunc(this, 'red')>Click me to change my text color</h3>
<script>
  function myFunc(element, color){
    element.style.color = color;
  }
</script>
```

### 클릭을 함으로써 input field에서 다른곳으로 텍스트를 복사하기

```html
<!-- Field1안의 값이 Field2에 복사되는 예제 -->
<p>Field1: <input type="text" id="field1" value="Hello Korea!" /></p>
<p>Field2: <input type="text" id="field2" /></p>

<button onclick="myFunc()">Click to copy</button>

<script>
  function myFunc() {
    document.getElementById("field2").value =
      document.getElementById("field1").value;
  }
</script>
```

### window 객체에 "onclick" 이벤트 할당하기

```html
<html>
  <body>
    <h1>HTML DOM Events</h1>
    <p>Click anywhere in this window to change the background color of body</p>
    <script>
      window.onclick = myFunc;
      // window: 현재 스크립트가 작동 중인 창
      // 윈도우 갳: 브라우저에서 열린 창
      // 탭 기능이 있는 브라우저에서는 각각의 탭을 각각의 Window 객체로 나타냄

      function myFunc() {
        document.getElementByTagName("BODY")[0].style.backgroundcolor =
          "yellow";
      }

      // getElementsByTagName: 엘리먼트의 HTMLCollection과 주어진 태그명을 반환함
    </script>
  </body>
</html>
```

#### DOM 트리에 접근하기

- document 객체를 통해 HTML 문서에 접근이 가능하다. document는 브라우저가 불러온 웹페이지를 나타내며, DOM 트리의 진입점 역할을 수행한다.

- 이용하기

```JS
document.getElementById();   // 해당하는 Id를 가진 요소에 접근

document.getElementsByTagName();   // 해당하는 모든 요소에 접근하기

document.getElementByClassName();   // 해당하는 클래스를 가진 모든 요소에 접근하기

document.querySelector('selector');    // css 선택자로 단일 요소에 접근하기

document.querySelectorAll('selector');   // css 선택자로 여러 요소에 접근하기
```

### 드롭다운을 만들기 위해서 onclick 사용하기

```js
document.getElementById("myBtn").onclick = function () {
  myFunc();
};

function myFunc() {
  document.getElementById("myDropdown").classList.toggle("show");
}
```

#### [Element.classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)

- 기본꼴

```js
const elementClasses = elementNodeReference.classList;

// elementClasses는 elementNodeReference의 클래스 속성을 나타내는 DOMTokenList임
// 속성이 설정되어 있지 않거나 비어있다면 elementClasses.lengt는 0을 반환함
// element.classList 그 자체는 읽기 전용 프로퍼티이지만 add()와 remove() 메서드를 이용해서 변형할 수 있다
```

- 메서드

1. add

- 지정한 클래스의 값을 추가함.
- 만약 추가하려는 클래스가 엘리먼트의 class 속성이 이미 존재한다면 무시함

2. remove

- 지정한 클래스의 값을 제거함

3. item

- 콜렉션의 인덱스를 이용하여 클래스의 값을 반환함

4. toggle

- 하나의 인수만 있을 때: 클래스의 값을 토글링함
  (클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환함)

- 두번째 인수가 있을 때: 두번째 인수가 true로 평가되면 지정한 클래스의 값을 추가하고 false로 평가되면 제거함

#### DOM 제어 명령어- 클래스 제어

- DOM api 요소를 통해 요소의 class 속성을 제어할 수 있다

```js
const myBtn = document.querySelector("button");
myBtn.addEventListener("click", function () {
  // 이벤트 삽입 => target.addEventListener(type, listener)의 문법 형태를 지님
  // 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지함
  // listener 함수의 인수에는 이벤트에 대한 정보가 담겨있음
  myBtn.classList.toggle("blue"); // 클래스를 토글함 (없으면 넣어주고, 있으면 제거함)
});
```

##### DOM을 구성하는 노드 객체와 타입 5가지

- DOM을 구성하는 노드 객체는 DOM API를 통해서 자신을 제어할 수 있다.

###### DOM 타입들이 상속하는 노드 객체 타입

1. 문서 노드 (document node)

   - DOM 트리의 최상위에 존재하는 루트 노드로 돔 트리의 진입점이며, 브라우저가 렌더링한 HTML 문서 전체를 가리킴
   - Document를 이용해서 웹 페이지를 동적으로 만드는 기능을 전역적으로 사용할 수 있다

2. 요소 노드 (Element node)

   - HTML 요소를 가리키는 객체로 요소 노드느느 부모-자식관계를 통해서 문서의 구조를 표현한다. Attribute node를 가질 수 있는 유일한 노드이다.
   - Element 인터페이스는 Document 안의 다양한 객체가 부모로 갖는 기본 클래스로 `HTMLElement`, `SVGElement` 등 특정 요소를 더 잘 표현할 수 있는 클래스로 나뉜다
   - Element의 속성에는 `classList`, `className`, `innerHTML` 등이 있으며, 메서드에는 대표적으로 `addEventListener` 등이 있다

3. 어트리뷰트 노드 (Attribute node)

   - 요소 노드와 연결되어 HTML 요소의 어트리뷰트를 가리키는 객체이다

4. 텍스트 노드 (Text node)

   - HTML 요소의 텍스트를 가리키는 객체로 문서의 정보를 나타낸다. 자식 노드가 없는 leaf node로 DOM 트리의 최종단 노드이다.

5. 주석 노드 (comment node)

   - 주석을 나타내주는 노드

<br><br>

## 구조분해할당

<br><br>

# 추가 학습

## props

- props는 컴포넌트를 만들 때 넣어줄 수 있는 속성의 집합이다
- 리액트 컴포넌트는 JS의 함수와 유사하며, 컴포넌트는 props라는 임의의 입력을 받아 리액트 요소들을 화면에 어떻게 표시할지를 기술할 수 있다

### defaultProps로 기본값 설정

```jsx
function Hello({ name, color }) {
  return (
    <div>
      <h2>안녕</h2>
      <div style={{ color }}>안녕하세요 {name}</div>
      <div>비구조화 할당 문법사용했어요 {name}님</div>
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

function App() {
  return (
    <>
      <Hello name="React" color="blue" />
      <Hello color="pink" />
    </>
  );
}

export default App;
```

<br>

### props.children

- 컴포넌트 태그 사이에 넣은값을 조회하기 위해서는 `props.children`을 조회하면 됨

```jsx
function Hello({ name, color }) {
  return (
    <div>
      <h2>안녕</h2>
      <div style={{ color }}>안녕하세요 {name}</div>
      <div>비구조화 할당 문법사용했어요 {name}님</div>
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

function Wrapper({ children }) {
  const style = {
    border: "2px solid yellow",
    padding: "16px",
  };

  return <div style={style}>{children}</div>;
}

function App() {
  return (
    <Wrapper>
      <Hello name="React" color="blue" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
```
