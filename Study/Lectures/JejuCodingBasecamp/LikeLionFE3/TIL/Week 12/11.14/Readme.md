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

#
