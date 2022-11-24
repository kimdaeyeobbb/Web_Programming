# 리액트

# 리액트 환경 설정

## npx create-react-app .

- `.`은 현재 디렉토리를 의미함

## npx create-react-app my-app

- my-app이라는 이름으로 리액트 초기 환경 설정을 하겠다는 뜻

## index.js

- 입구 파일에 해당.
- `npm start` 명령어를 통해 `create-react-app`을 구동시키면 `index.js` 파일을 찾고 거기에 적혀있는대로 동작함

- 코드

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // 1)
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

- 코드 뜯어보기
  - `import App from "./App"` 에서 `App`은 `./App.js`에서 온것임 (.js라는 파일 확장자명이 생략된 것임)
  - `.`은 현재디렉토리를 의미함
    - `ReactDOM` : 리액트 돔 패키지는 클라이언트단에서 앱을 초기화하는데 사용되는 클아이언트별 메서드를 제공함
    - `createRoot` : 제공된 컨테이너에 대한 React root를 생성하고 이를 반환함

## App.js

- 얘를 편집해가면서 UI를 구성해나감

<br>

# 리액트?

- 사용자 정의 태그를 만드는 기술

- 예1과 예2는 동일한 의미를 지님

- 예1

```jsx
<Header></Header>
```

- 예2

```jsx
<header>
  <h1>
    <a href="/">web</a>
  </h1>
</header>
```

## 리액트에서 사용자 정의 태그를 만드는 방법

- 연관된 것들을 하나의 태그로 묶어서 사용자 정의태그로 만든다
- 사용자 정의태그는 반드시 대문자로 써준다
- 이 사용자 정의태그를 `컴포넌트`라 한다

## 리액트 장점

- 적은 복잡도
- 생산성 향상

## PROP

- 리액트 내 속성을 뜻함
- 우리가 만든 컴포넌트의 PROP을 잘 만져야 함

## Warning: Each child in a list should have a unique "key" prop.

- 우리가 동적으로 만들어주는 태그들은 각자 key라는 prop을 가지고 있어야 함 + key라는 prop의 값은 반복문 내에서는 고유해야 함
- 애플리케이션 전체에서 고유한 것이 아니라 반복문 내에서 고유하면 됨

- 수정 전 코드

```js
function Nav(props) {
  const lis = [];

  props.topics.map((el) =>
    lis.push(
      <li>
        <a href="'/read/'+el.id">{el.title}</a>
      </li>
    )
  );
  return (
    <nav>
      <ol>
        {/* 이렇게 적어주면 리액트에 의해 배열에 있는 것들이 하나씩 꺼내짐 */}
        {lis}
      </ol>
    </nav>
  );
}
```

- 수정 후 코드

```js
function Nav(props) {
  const lis = [];

  props.topics.map((el) =>
    lis.push(
      <li key={el.id}>
        <a href="'/read/'+el.id">{el.title}</a>
      </li>
    )
  );
  return (
    <nav>
      <ol>
        {/* 이렇게 적어주면 리액트에 의해 배열에 있는 것들이 하나씩 꺼내짐 */}
        {lis}
      </ol>
    </nav>
  );
}
```

- 이렇게 적어주면 리액트에 의해 배열에 있는 것들이 하나씩 꺼내짐

- 이렇게 자동으로 생성하는 것을 추적할 때에는 리액트가 추적하는 근거가 있어야 하는데, 그 근거로서 리액트에 key라는 prop을 부여함으로써 리액트가 성능을 높이고 정확한 동작을 하는데에 협조를 하는 것이다

<br><br>

# 이벤트

- 컴포넌트에 이벤트 기능을 추가해서 컴포넌트에서 어떤 일이 발생했을 때, 사용자가 추가적인 어떤 작업을 처리할 수 있도록 만들기

## 이벤트 예시

```js
<Header title="REACT" onChangeMode={function()}></Header>

```

- onChangeMode의 prop의 값으로 함수를 전달함
- 헤더 컴포넌트 안에서 링크를 클릭하게 되면 컴포넌트가 함수를 호출해서 헤더를 클릭했을 때 실행되게 하는 작업이 들어있음

```js
function Header(props) {
  console.log("props: ", props, " props.title: ", props.title);
  return (
    <header>
      {/* 여기 a태그는 순수한 html이 아니다. 유사 html이다. 여기에 코드를 작성하면 리액트 개발 환경이 최종적으로 브라우저가 이해할 수 있는 HTML로 전환시켜주므로 기존의 문법과 동일하지 않음  */}
      {/* 내부에 함수를 적어주고, a태그를 클릭했을 때 해당 함수가 호출되는 것임 */}
      {/* a태그 클릭시 페이지 reload가 일어나지 않도록 하기 위해서는 함수가 호출될 때 리액트는 event를 함수의 파라미터로 주입해줌 event객체는 이벤트 상황을 제어할 수 있는 여러가지 상황이 들어있음*/}
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault(); // a태그가 동작하는 기본동작을 방지함. => 클릭해도 reload가 일어나지 않음
            props.onChangeMode(); // props.onChagenMode => onChangeMode의 속성값인 함수를 가리킴. ()를 씌워줘서 함수를 실행시키는 것
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={function () {
          alert("Header");
        }}
      ></Header>
      {/* 중괄호로 감싸면 문자열이 있는 그대로 들어감 */}
      <Nav topics={topics}></Nav>

      <Article title="welcome" body="hello, web"></Article>
      <Article title="hi" body="hello, world"></Article>
    </div>
  );
}

export default App;
```

- 컴포넌트 내부의 {a태그는 순수한 html이 아니다. 유사 html이다. 여기에 코드를 작성하면 리액트 개발 환경이 최종적으로 브라우저가 이해할 수 있는 HTML로 전환시켜주므로 기존의 문법과 동일하지 않음
- 내부에 함수를 적어주고, a태그를 클릭했을 때 해당 함수가 호출되는 것임
- a태그 클릭시 페이지 reload가 일어나지 않도록 하기 위해서는 함수가 호출될 때 리액트는 event를 함수의 파라미터로 주입해줌 event객체는 이벤트 상황을 제어할 수 있는 여러가지 상황이 들어있음

- 우리의 컴포넌트에 이벤트 기능을 부여해서 컴포넌트 사용자가 헤더를 클릭했을 때 해야할 작업을 정의할 수 있다

## 이벤트를 가진 컴포넌트

```js
import "./App.css";

function Nav(props) {
  const lis = [
    // <li><a href="/read/1">html</a></li>,
    // <li><a href="/read/2">css</a></li>,
    // <li><a href="/read/3">js</a></li>,
  ];

  props.topics.map((el) =>
    lis.push(
      <li key={el.id}>
        <a
          id={el.id}
          href="'/read/'+el.id"
          onClick={(event) => {
            event.preventDefault(); // a태그 클릭시 동작하지 않게 만듦
            props.onChangeMode(event.target.id); // a태그에 id={el.id} 처럼 아이디값을 부여해주는게 id값을 얻어오는 가장 쉬운 방법임
            // 이벤트 함수안에서 a태그의 id속성을 얻어내기 위해 event객체이용
            // event.target => 이벤트를 유발시킨 태그를 가리킴 => a태그를 지칭 => a태그가 가진 id값을 가져오고 싶으면 event.target.id라고 쓰면 됨
          }}
        >
          {el.title}
        </a>
      </li>
    )
  );
  return (
    <nav>
      <ol>
        {/* 이렇게 적어주면 리액트에 의해 배열에 있는 것들이 하나씩 꺼내짐 */}
        {lis}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Header(props) {
  console.log("props: ", props, " props.title: ", props.title);
  return (
    <header>
      {/* 여기 a태그는 순수한 html이 아니다. 유사 html이다. 여기에 코드를 작성하면 리액트 개발 환경이 최종적으로 브라우저가 이해할 수 있는 HTML로 전환시켜주므로 기존의 문법과 동일하지 않음  */}
      {/* 내부에 함수를 적어주고, a태그를 클릭했을 때 해당 함수가 호출되는 것임 */}
      {/* a태그 클릭시 페이지 reload가 일어나지 않도록 하기 위해서는 함수가 호출될 때 리액트는 event를 함수의 파라미터로 주입해줌 event객체는 이벤트 상황을 제어할 수 있는 여러가지 상황이 들어있음*/}
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault(); // a태그가 동작하는 기본동작을 방지함. => 클릭해도 reload가 일어나지 않음
            props.onChangeMode(); // props.onChagenMode => onChangeMode의 속성값인 함수를 가리킴. ()를 씌워줘서 함수를 실행시키는 것
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={function () {
          alert("Header");
        }}
      ></Header>
      {/* 중괄호로 감싸면 문자열이 있는 그대로 들어감 */}
      {/* onChagenMode 내부에 prop이 전달됨.  */}
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>

      <Article title="welcome" body="hello, web"></Article>
      <Article title="hi" body="hello, world"></Article>
    </div>
  );
}

export default App;
```

<br>

# state

## React component

- 입력: prop
- prop을 통해 입력된 데이터를 우리가 만든 컴포넌트 함수가 처리해서 리턴값을 만듦

- return 값: 새로운 UI가 됨

## state

- prop과 함께 컴포넌트함수를 다시 실행해서 새로운 리턴값을 만들어 주는 데이터
- prop, state => 값이 변경되면 새로운 return 값을 리턴해서 UI를 바꿈

## prop VS state

|                   prop                   |                 state                  |
| :--------------------------------------: | :------------------------------------: |
| 컴포넌트를 사용하는 외부자를 위한 데이터 | 컴포넌트를 만드는 내부자를 위한 데이터 |

### state 예시

#### 함수 내부값 값이 변경 되었을 때 event 발생시키기

##### UI가 변동되지 않음

```js
function Nav(props) {
  const lis = [];

  props.topics.map((el) =>
    lis.push(
      <li key={el.id}>
        <a href="'/read/'+el.id">{el.title}</a>
      </li>
    )
  );

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Header(props) {
  console.log(`props: ${props}, props.title: ${props.title}`);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.prevetDefault();
            props.onChangeMode();
          }}
        >
          헤더 - WEB
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

export default function App() {
  const mode = "WELCOME"; // mode의값에 따라 본문을 다르게 만들 것
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  let content = null; // 선언 및 초기화

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB MODE"></Article>;
  } else if (mode === "READ") {
    content = <Article title="READ" body="Hello, READ MODE"></Article>;
  }

  return (
    <>
      <Header
        title="헤더입니다"
        onChangeMode={function () {
          mode = "WELCOME";
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          mode = "READ";
        }}
      />
      {content} {/* 내부의 값 */}
    </>
  );
}
```

#### useState

- 배열을 리턴함
- 배열의 0번째 원소는 상태의 값을 읽을 때 쓰는 데이터
- 배열의 1번쨰 원소는 상태의 값을 변경할 때 사용하는 함수

```js
const _mode = useState("WELCOME"); // 1.
const mode = _mode[0]; // 2.
const setMode = _mode[1]; // 3.
```

1. state의 초기값. 상태가 리턴되게 만듦
2. 상태의 값. state의 값은 0번쨰 인덱스로 읽음.
3. state를 바꿀 때에는 1번째 인덱스의 값인 함수로 바꿈. 1번쨰 원소인 setMode를 통해서 \_mode의 값을 바꿀 수 있다

### useState 개선작업

- 위의 1,2,3과 동일한 코드임 (축약형)

```js
const [mode, setMode] = useState("WELCOME");
```

- `useState("WELCOME")` : state의 초기값. 상태가 리턴되게 만듦ㅁ
- `mode` : 상태의 값. useState는 배열을 리턴하는데, 0번쨰 값이 state의 값임.
- `setMode`: 함수. useState의 1번쨰 값이며, state의 값을 바꿀 때 사용. (여기서는 mode를 바꿀 때 사용하는 함수)

##### UI가 변동되는 예시

- 함수 내부의 값의 값이 바뀌면 App이라는 컴포넌트 함수가 새로 실행되면서 새로운 리턴값이 만들어지고 그 리턴값이 UI에 반영되기를 원함. 이런 경우에 state를 사용하면 됨

```js
import { useState } from "react"; // 이 훅은 리액트에서 기본 제공하는 함수

function Header(props) {
  console.log(`props: ${props}, props.title: ${props.title}`);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.prevetDefault();
            props.onChangeMode();
          }}
        >
          헤더 - WEB
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Nav(props) {
  const lis = [];

  props.topics.map((el) =>
    lis.push(
      <li key={el.id}>
        <a href="'/read/'+el.id">{el.title}</a>
      </li>
    )
  );

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

export default function App() {
  // const _mode = useState('WELCOME');  // 상태가 리턴되게 만듦
  // const mode = _mode[0];   // _mode의 0번쨰 원소 => 상태의 값을 읽어옴
  // const setMode = _mode[1];   // 1번쨰 원소인 setMode를 통해서 _mode의 값을 바꿀 수 있다
  const [mode, setMode] = useState("WELCOME");

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];

  let content = null; // 선언 및 초기화

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB MODE"></Article>;
  } else if (mode === "READ") {
    content = <Article title="READ" body="Hello, READ MODE"></Article>;
  }

  return (
    <div>
      <Header
        title="헤더입니다"
        onChangeMode={function () {
          setMode("WELCOME"); //값을 바꿀 때 setMode 사용
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ"); // 값을 바꿀 때 setMode 사용
        }}
      />
      {content} {/* 내부의 값 */}
    </div>
  );
}
```

- mode의 값이 setMode로 인해 바뀜
- 그렇게 되면 App 컴포넌트가 다시 실행됨
- 이후 useState가 mode의 값을 READ로 다시 세팅해줌
- 그 다음 content = <Article title="READ" body="Hello, READ MODE"></Article>; 로 바뀌고
- 이것이 화면에 렌더링 되어서 UI가 바뀜

<br><br>

# CRUD

## Create

```js
const [value, setValue] = useState(PRIMITIVE); // 상태를 나타낼 때, 상태의 데이터는 원시 데이터 타입이다.
```

- Primitive type
  - string, number, boolean
  - 예전 방식 그대로 데이터를 만듦

<br><br>

- 우리가 만드려는 데이터가 범객체라면, 처리방식이 다르다.
- 상태를 다룰 떄, 상태가 객체와 같이 복합적인 데이터인 경우에 사용하면 좋은방식임

```js
const [value, setValue] = useState(Object);
newValue = { ...value }; // value값을 복제한 새로운 데이터가 newValue의 값이 되어 들어감. 이렇게하면 오리지널 데이터를 손대지 않고 value값을 바꿀 수 있음 (오리지널 데이터가 아닌 복제본 데이터를 바꾼 것)
newValue 변경
setValue(newValue); // 이때 비로소 컴포넌트가 다시 실행됨
```

- 범객체에 속하는 것들
- object, array

- 추가내용

```js
const [value, setValue] = useState([1]); // 배열로 만들어진 상태. 즉, 객체.
value.push(2); // 오리지널 데이터를 바꿈
setValue(value); // 오리지널 데이터를 입력해줌. setValue 호출시 value 데이터와 오리지널 데이터가 같은 지를 확인 => 애초에 같으니까 다시 랜더링 하지 않음
```

- 추가내용2

```js
const [value, setValue] = useState(1); // 원시 데이터타입인 1을 넣음.
setValue(2); // 2는 새로운값. 오리지널 데이터-1 vs 새로운 데이터-2이므로 컴포넌트가 다시 랜더링 됨
```

## Create 구성 과정

```js
export default function App(){
    const [mode, setMode] =
}
```
