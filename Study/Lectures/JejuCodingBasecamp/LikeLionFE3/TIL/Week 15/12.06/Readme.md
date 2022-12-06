# 파이어베이스 애플리케이션 제작하기

## index.css

- 모든 것들이 공통으로 가지는 css 스타일 저장

- 각 컴포넌트에 css 스타일 지정

## scripts

- 내부에 사용자가 입력할 수 있는 명령어가 들어가 있음

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## BrowserRouter VS HashRouter

- BrowserRouter

  - History API를 사용함
  - 이용 많이함
  - SEO에 도움이 됨

- History API
  - 세션객체에 접근할 수 있도록 도와줌
- 세션

  - 사용자의 로그인 기록을 세션에 저장
  - 사용자의 로그인 기록을 얼마나 오래 저장할지 또한 저장되어있음
  - `로그인 유지하기`를 클릭하면 세션기록이 매우 길게 남아있게 됨

- anchor 태그에서의 # 사용 (내부링크 만들기)
  - 이 방식은 SEO가 좋지않음

```html
<!DOCTYPE html>
<html>
  <head>
    <title># 사용</title>
    <style>
        section{
            heigth: 1000px;
            background-color: lightgreen;
            border: 3px solid black;
        }
    </style>
  </head>
  <body>
    <a href="#three">3으로 이동합니다.
    <section id="one">1</section>
    <section id="two">2</section>
    <section id="three">3</section>
    <section id="four">4</section>
    <section id="five">5</section>
  </body>
</html>
```

## 2. 네비게이션 컴포넌트 연결하기

- Link

  - a태그 누르면 새로고침.
  - Link는 새로고침을 막아주면서 원하는 url로 이동함

- 클래스 네임

  - 클래스네임에 중괄호를 써주어야 원하는 스타일에 접근할 수 있음
  - `className = {${styles.tit}}`처럼 써도 됨

- [식별자](https://developer.mozilla.org/ko/docs/Glossary/Identifier)

## 3. Login.js에 폼 컨트롤 추가하기

## 파이어베이스 사용하기

- 파이어베이스 설치

```bash
npm install firebase
```

- src > firebase > config.js

```js
// 파이어베이스에서 받아온 키값 넣기
```

## [가격정책](https://firebase.google.com/pricing)

- 전화인증은 돈이 나가므로 사용하지 말것

# 기술면접

## 가비지 컬렉터는 무엇이며 어떻게 동작하나요?

- [참고자료 - 자바스크립트 메모리 생존주기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)

### 모범답안

－ 메모리 누수를 막기 위해 더 이상 사용하지 않는 메모리를 삭제(Garbage Collection)하는 프로그램을 가비지 컬렉터임。 이때 메모리는 제거하는 방법으로 참조 카운팅 (reference counting)을 사용합니다. 메모리에 존재하는 값을 몇개의 변수와 함수가 참조하고 있는지 살펴보고 참조가 0이 되면 값을 메모리에서 삭제합니다

## 마지막으로 하고 싶은말?

### 모범답안

- 채용담당자가 신나서 할 수 있는 답변에 대한 질문을 던질 것

  - 신입사원으로서 입사하기 전까지 어떤 것들을 준비하면 좋을까요?
  - 코드리뷰나 스터디같은 사내 개발문화는 어떤것이 있고 얼마나 자주 이루어지나요?

- 질문을 할 때 너무 여러개를 하는 것도 별로이다. (다른사람의 기회를 박탈)

<br><br>

## createUserWithEmailAndPassword

- 인자 3개 (auth- 사용자 정보 포함, email, password)

## process.env

- nodejs 전역상수

## signup 훅 적용하기

- signup.js : 회원가입 관련 컴포넌트 제공

## 유저 정보를 Context로 관리하기

- props drilling
  - 필요없는 props를 계속해서 하위 자식요소에게 전달하는 것
  - context를 통해 데이터를 전역으로 관리하면 이 문제를 해결할 수 있음

### 받아온 유저정보를 context에 담기

## dispatch

```jsx
const AuthContextProvider = ({ children }) => {
  // 리듀서함수를 통해 데이터를 관리 (useReducer hook 사용)
  const [state, dispatch] = useReducer(authReducer, { user: null });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
```

- dispatch를 전달하는 이유?
  - useState를 사용할경우 set함수의 역할을 함. 값이 변경되었을 때 정보를 바로바로 업데이트하는 역할임.
