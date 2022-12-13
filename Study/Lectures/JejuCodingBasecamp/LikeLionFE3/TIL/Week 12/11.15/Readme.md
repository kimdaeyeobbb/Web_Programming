# 22.11.15 (화) 수업

# React 기본설정

## 개발환경 설정 & 새로운 프로젝트 생성

- `npx create-react-app my-app` 명령어를 입력

### 모듈따로 생성해서 명령어를 제작해놔도 됨

<br>

# 리액트 이벤트

- 리액트의 이벤트는 카멜케이스를 사용함.

  - (DOM의 이벤트는 소문자를 사용함)

- JSX를 사용하여 함수로 이벤트 핸들러를 전달함
  - (DOM은 문자열로 이벤트를 전달함)

## 이벤트 종류

- onClick
- onChange
- onInput
- onMouse
- onLeave
- [참고자료](https:/kok.reactjs.org/docs/events.html#other-events)

# 핸들러 함수

- 앞에 접두사`handle`을 붙여준다 (관습적인것, 회사 컨벤션마다 다를 수 있다)

<br><br>

# :nine: 컴포넌트 리스트 만들기

# [HTTP 응답코드](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)

- 서버에서 번호를 주기 때문에 가짜 코드를 줄 가능성이 높다.
- 풋프린팅
- 해커가 일부러 번호를 속여서 준다
- 404는 잘 주지 않고, 마치 성공한것처럼 속인다.

<br><br>

# 리액트 스타일드 컴포넌트

## 장점

- cascading에 종속되지 않는다. (클래스명을 고민하지 않고 바로 쓰면됨)
- 유지보수가 용이하다

## 사용

```js
import styled from "styled-components";

const ContentsDivOne = styled.div`
  color: red;
`;

const ContentsDivTwo = styled.div`
  color: green;
`;

const ContentsDivThree = styled.div`
  color: red;
`;
```

- 태그는 내가 설정하는 것임. div 대신 다르게 써도 됨 (h2 등)
- ContentsDivThree 대신 다른 이름을 붙여도 됨 (SectionTitle 등)

- 컴포넌트 안에서만 스타일링이 되므로 독립적임
- 클래스명을 유추할 수가 없으므로 정보를 빼가기가 매우 힘들다

## 해외 대형 사이트에서 div로 뒤덮는 이유

- 보안떄문에 그렇다
- 데이터를 가져오고 싶을 때 태그나 클래스로 가져오는 경우가 많다.
- div를 이용해서 코딩만하면 SEO가 좋지 않음
  - facebook, instagram등은 SEO를 지킬 이유가 딱히 없으므로 div태그로 뒤덮어 놓은 것이다.

<br><br>

# 복습

- [중요] 컴포넌트 리스트 만들기

## 컴포넌트 리스트 만들기

- 키값을 인덱스로 주면 중복될 수 있으므로 유의할 것
- 키값을 요소에 대한 내용으로 작성하는게 좋다
- 들어간 키값은 확인할 수 없다
- 키값은 문자열만 가능한것은 아니고 숫자도 가능하다

### STEP1

```JSX
const arr = [10, 20, 30, 40, 50]

function App() {
  return (
    <>
      {/* js 코드이므로 중괄호로 감싸야 함 - 키값을 주지 않았으므로 에러 발생*/}
      {/* {arr.map(v => <p>{v}</p>)} */}

      {/* 키값을 줬으므로 에러 발생 X */}
      {arr.map(v => <p key={v.toString()}>{v}</p>)}
    </>
  );
}

export default App;
```

### STEP2 - 조건부 렌더링

- 조건에 따라 다른것을 렌더링함

```JSX

/* 조건부렌더링 */
const value = 2

function App() {
  if (value === 1) {
    return <h1>hello 1</h1>
  } else if (value === 2) {
    return <h1>hello 2</h1>
  } else if (value === 3) {
    return <h1>hello 3</h1>
  }
}

export default App;
```

<br>

## 11. 스타일 적용하기

- reset은 글로벌 스타일로 한번만 사용함

### step3

- styled-components 설치하기

```Bash
npm install styled-components
```

- reset 설치하기

```Bash
npm i styled-reset
```

```jsx
import reset from "styled-reset";
import styled from "styled-components";

const ResetStyleh2 = styled.div`
  margin: 40px;
`;

// 리셋을 꼭 글로벌로 사용할 필요는 없다
```

### <></>

- fragment
- 예제

```jsx
import styled from "styled-components";

const DivBlue = styled.div`
  color: blue;
`;

const DivRed = styled.div`
  color: red;
`;

function App() {
  return (
    <>
      <DivBlue>hello</DivBlue>
      <DivRed>hello</DivRed>
    </>
  );
}

export default App;
```

- 예제2

```jsx
const DivRed = styled.div`
  color: red;
  font-size: ${({ size }) => size + "px"};
  border: ${({ border }) => border.join(" ")};
`;

export default function App() {
  return (
    <div>
      <DivRed border={["1px", "solid", "blue"]} size={32}>
        안녕
      </DivRed>
    </div>
  );
}
```

<br><br>

# props에 따른 조건부 스타일

- 교재에 있는 예제는 어려우므로 수업 때 한 에제를 잘 알아둘 것
- [예제](./React/025/my-app/src/App%20copy%206.js)

<br>

# CSS 확장

```JSX
/* CSS 확장 */
import styled, { css } from 'styled-components'

const One = css`
  color: red;
`

const Two = css`
  font-size: 32px;
`

const Three = styled.div`
  ${One}
  ${Two}
`


function App() {
  return (
    <>
      <Three>10</Three>
    </>
  )
}

export default App;
```

# module CSS

- 예제가 어려우니 수업시간 예제를 잘 숙지할 것

- 모듈로 만들어주면 서로 간섭을 안한다!

- 독립적인 모듈형태로 만들어 주고 싶을 때 사용

# 추가내용

## node_modules

- `npm i`명령어를 통해 얘만 설치할 수 있음

## 제일 중요한 형태

```jsx
import styled from "styled-components";

const ContentsDivOne = styled.div`
  color: red;
`;

const ContentsDivTwo = styled.div`
  color: green;
`;

const ContentsDivThree = styled.div`
  color: blue;
`;

const SectionTitle = styled.h2`
  color: dodgerblue;
  font-size: 32px;
`;

function App() {
  return (
    <>
      <ContentsDivOne>hello world</ContentsDivOne>
      <ContentsDivTwo>hello world</ContentsDivTwo>
      <ContentsDivThree>hello world</ContentsDivThree>
      <SectionTitle>hello world</SectionTitle>
    </>
  );
}

export default App;
```

<br>

# 합성 컴포넌트

- `npm install styled-components`: styled components 설치

<br><br>

# 추가내용

## 조건부 랜더링

```jsx
import { useState } from "react";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

function ContentsContainer({ listName }) {
  if (listName === "one") {
    return <One />;
  } else if (listName === "two") {
    return <Two />;
  } else if (listName === "three") {
    return <Three />;
  }
}

function App() {
  const [listName, setListName] = useState("one");
  const handleCheckId = (e) => {
    setListName(e.target.id); // listName의 값을 e.target.id로 변경
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="one"
            style={listName === "one" ? { color: "red" } : { color: "black" }}
            onClick={handleCheckId}
          >
            One
          </li>
          <li
            id="two"
            style={listName === "two" ? { color: "red" } : { color: "black" }}
            onClick={handleCheckId}
          >
            Two
          </li>
          <li
            id="three"
            style={listName === "three" ? { color: "red" } : { color: "black" }}
            onClick={handleCheckId}
          >
            Three
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName}></ContentsContainer>
    </>
  );
}

export default App;
```

<br><br>

## 스타일드 컴포넌트

### ES6 문법내용 - tagged template literal 문법

```js
const name = "Danny";

const age = 10;

function 인사(문구, 이름, 나이) {
  console.log(문구);
}

const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`;
// ['이름은 ', '이고 나이는 ', '입니다.', raw: Array(3)]
```

- `${}`을 기준으로 앞뒤로 split해서 문구로 들어간것.
- `${name}`은 `이름`으로, `${age+age}`는 `나이`로 들어감

<br>

```js
const name = "Danny";

const age = 10;

function 인사2(문구, 이름, 나이) {
  console.log(문구, 이름, 나이);
}

const 인사문구 = 인사2`이름은 ${name}이고 나이는 ${age + age}입니다.`;
// ['이름은 ', '이고 나이는 ', '입니다.', raw: Array(3)] 'Danny' 20
```

<br>

```js
const name = "Danny";

const age = 10;

function 인사3(문구, 이름, 나이) {
  console.log(문구, 이름, 나이);
  return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;
}

const 인사문구 = 인사3`이름은 ${name}이고 나이는 ${age + age}입니다.`;
console.log(인사문구); // 이름은 Danny이고 나이는 40입니다.
```

- 이 내용을 스타일드 컴포넌트에 적용시켜 보자

```jsx
const GlobalStyle = createGlobalStyle`
span{
  color: red;
  font-size: 12px;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
    </>
  );
}
```

- 여기서 createGlobalStyle은 함수에 해당된다.
- 이 함수를 어떠한 변수에 담아주고 나서 변수 `GlobalStyle`을 컴포넌트로 사용하는 것이다.

### Reset css

- styled-reset 패키지를 다운받아서 reset을 Global css에 적용시키자

```bash
npm i styled-reset
```

- reset css 적용 예시

```jsx
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
/* reset css 적용 */

${reset}
  span{
    color: red;
    font-size: 12px;
  }
`;
```

<br>

### 스타일드 컴포넌트를 사용해서 스타일 적용시키기

- 적용 기본꼴
  - 태그명에 해당 styled을 적용하겠다는 뜻

```js
const 변수명 = styled.태그명`
  background-color: red;
`;
```

- 예시

```jsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset css 적용 */
  ${reset}
  span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`;

/* 스타일드 컴포넌트를 이용해서 스타일 적용하기 */

const ContentDiv = styled.div`
  // 전체를 감싸는 컨테이너의 스타일
  margin: 40px;
  border: 1px solid black;
`;

const ContentH2 = styled.h2`
  color: ${(props) => (props.name === "hello" ? "red" : "black")}
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <ContentDiv>
      <ContentH2>Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        excepturi eius omnis beatae reiciendis a, placeat sed explicabo qui
        similique aspernatur maxime mollitia aliquam libero voluptates?
        Laboriosam rem nobis modi.
      </p>
    </ContentDiv>
  );
}
export default App;
```

- 스타일드 컴포넌트를 사용하면 변수명, 클래스명등을 고민하지 않아도 된다.
- 개발자 도구를 보면 우리가 설정해주지 않은 클래스명이 들어가 있는것이 확인가능하다.
- 따라서 여기서 설정해준 변수는 다른 컴포넌트에 영향을 미치지 않는다는 뜻이다. (겹침 여부를 고민할 필요가 없다.)
- js 파일 하나만으로 관리하면서 js 문법으로 처리할 수 있다.
- props처럼 조건부 스타일을 적용할 수 있다.

<br><br>
