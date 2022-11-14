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

## aa

- 사용되지 않는 props가 컴포넌트를 통과하고 있음. 2개가 아니라 수십개가 될 경우 사용하지도 않는 props를 계속해서 전달해야 하기 때문에 문제가 됨.

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

-

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
