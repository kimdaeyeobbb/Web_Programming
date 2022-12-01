# 22.11.30 (수)

# TDD 라이브러리의 종류

1. 자스민
2. 제스트

# [자스민](https://jasmine.github.io/)

- 행동 주도 자바스크립트

- [자바스크립트 생태계에서 개발자들이 주로 어떤 언어를 사용하는지? (2021 ver)](https://2021.stateofjs.com/ko-KR/)

## 자스민 구성 살펴보기

- spectrunner를 통해 구동

- SpecRunner.html

```html
<!-- 자스민 라이브러리 파일 -->
<script src="lib/jasmine-4.5.0/jasmine.js"></script>
<script src="lib/jasmine-4.5.0/jasmine-html.js"></script>
<script src="lib/jasmine-4.5.0/boot0.js"></script>
<!-- optional: include a file here that configures the Jasmine env -->
<script src="lib/jasmine-4.5.0/boot1.js"></script>

<!-- include source files here... -->
<!-- 작업한 원본 자바스크립트 파일 -->
<script src="src/Player.js"></script>
<script src="src/Song.js"></script>

<!-- include spec files here... -->
<!-- 테스트에 사용할 테스트 코드 -->
<script src="spec/SpecHelper.js"></script>
<script src="spec/PlayerSpec.js"></script>
```

## 예제

- 배포할 코드: tdd.html
- 테스트를 위한 파일: tdd.spec.html (spec: 테스트용. tdd_spec.html 처럼 .spec으로 작명하지 않으면 아이콘이 바뀌지 않음)
- `option > run tests in random order`: 테스트하는 함수가 여러개일 경우 랜덤하게 실행됨. 옵션을 이용해서 랜덤하게 실행해도 정상적으로 실행되는지를 판단할 수 있음

- seed값을 기준으로 작동해서 해당 값을 집어넣고 랜덤한 값을 뽑아내는 경우가 있음 <br> (현업 백엔드 개발자는 현재 시간값을 시드값으로 집어넣음)

<br>

## antiTdd.html

- 이렇게 사용하면 TDD 적용이 어렵다는 것을 보여주는 예시

- 값을 입력하고 적용하면 입력한 값이 나타나는 예시

- 문제가 존재하는 코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ANTI TDD</title>
    <style>
      article {
        display: inline-block;
        border: 3px solid black;
        border-radius: 10px;
        padding: 10px;
      }

      .viewer {
        font-size: 24px;
        color: green;
        margin: 50px 0;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <article>
      <h2 class="viewer">hello!</h2>
      <input type="text" class="inp-txt" />

      <button class="btn-push" onclick="push()">적용</button>
    </article>
    <script>
      let txt = "hello Lions!";
      const viewer = document.querySelector(".viewer");
      viewer.textContent = txt; // viewer의 기본컨텐츠가 hello lions!로 바뀜

      function push() {
        const inpTxt = document.querySelector(".inp-txt");
        viewer.textContent = inpTxt.value;
      }
    </script>
  </body>
</html>
```

- :one: 서로 다른 언어가 뒤섞여있는 문제 발생

  - 버튼은 HTML언어임. 내부에 JS코드가 들어가 있음 => 언어가 섞여있으면 테스트가 불가능

- :two: 전역변수를 사용하고 있음 (안티패턴)

  - 전역변수를 쓰는 것은 좋지 않다. 코드가 충돌할 수 있기 때문임. 메모리 관리에도 좋지 않다.

- :three: 테스트가 불가능한 코드가 존재 (함수 이전의 코드)

  - 테스트할 수 있는 것들은 함수 뿐임

- :four: querySelector등은 반복을 할때 효율적이지 않다.
- :five: 함수 내에서 document.querySelector를 찾는 것 자체가 문제이다.
  - 함수의 재사용성이 떨어진다.

### 테스트가 가능하려면 어떻게 해야하는가?

- 테스트가 가능하려면

1. js코드가 ui에서 완전히 분리 되어야 함

2. 자바스크립트를 js파일로 분리합니다. (js파일을 기능별로 쪼개놓으면 테스트하기 편하)

3. 모든 기능은 함수로 구현함.

<br>

## 테스트가 불가능한 코드를 테스트가 가능한 코드로 변환하기

- `xxx.spec.html` : 테스트용 파일

### 순서

1. 기능구현
2. 테스트코드 작성

### 파일

- textManager.js : ~
- viewMaager.js : ~

### 코드

- viewManger.js

```js
class ViewManager {
  constructor(textManager, options) {
    // textManger - 의존주입을 한 상태
    // textManager클래스의 인스턴스를 textManager 받아옴 => 검증이 필요하므로 아래에서 검증
    // option에 들어가는 것 - 값을 가져와야하는(받아와야 하는) 요소, 값을 뿌려주는 요소

    /* 예외처리 */
    if (textManager.constructor !== TextManager) {
      // textManger의 생성자가 TextManger인지 확인
      // 클래스의 인스턴스를 올바르게 받아왔는지 확인 (해당 클래스의 인스턴스가 맞는지 확인)

      throw Error("textManager 객체를 전달해야합니다!");
      // throw Error - 사용자 정의 에러. 에러 메시지를 반환하고 프로그램을 종료함.
    }

    if (!options.viewerEl || !options.btnEl || !options.inpEl) {
      // 모든값들이 제대로 들어왔는지 확인
      // options 내에 텍스트를 뿌려줄 요소를 삽입할 것임
      // options.btnEl => 뭘 눌러야 어떤 내용을 뿌려줄지를 테스트 해야 함 => 이 요소도 잘 들어갔는지 학인해야 함
      // options.inpTxt =>
      // 첫번째 truthy값을 반환
      // 셋중 하나라도 true면 안에 있는 값이 실행됨. 우리는 반대를 원함. 하나라도 false이면 if문을 발동하도록 만듦

      throw Error("필요한 요소중에 빈값이 존재합니다.");
    }

    /* 각각의 값을 선언 및 할당ㄴ */
    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;
    this.textManager = textManager;

    // 버튼은 따로 값을 할당할 목적은 아니고, 클릭이벤트를 붙여줌. (아까처럼 html과 js코드를 섞으면 안됨.)
    options.btnEl.addEventListener("click", () => {
      this.changeValue(); // 클릭시 실행. 값을 넣고 실행하면
    });
  }
  changeValue() {
    this.textManager.setValue({ data: this.inpTxt.value });
    // setValue의 newValue값으로 데이터는 inpTxt.value의 값이 들어가게 됨
    // 값을 변경

    this.updateView(); // 변경완료시 updateView 실행
  }

  updateView() {
    this.viewerEl.textContent = this.TextManager.getValue(); //우리가 받아온 값으로 넣어줌  + getValue로 ~
  }
}
```

- 코드의 명세가 작다면 객체지향적으로 코드를 작성할 필요가 없다.
- 기능이 10~100개가 될때 객체지향적으로 작성하면 유지보수가 편리하다.
- BUT 규모가 작은 어플리케이션은 TDD가 필요하지 않다.

<br><br>

## textManager의 테스트 코드 작성

<br><br>

# 제스트

- 리액트에서 가장 흔하게 사용하는 라이브러리

- 이미 리액트 자체가 객체지향적으로 구성되어 있으므로 자스민보다 이용하기 편리함

## Watch mode

## 테스트

- `npm test` 명령어 입력해서 테스트 진행

### App.test.js 기본내용

```js
import { render, screen } from "@testing-library/react"; // 리액트 테스팅 라이브러리에서 render, screen을 불러옴
import App from "./App";

// test => 자스민의 describe와 같은 역할
test("renders learn react link", () => {
  /* 기본내용 */
  render(<App />); // render -> jsx를 인자로 받음. 이를 받아서 렌더함수에 돌리면 가상돔을 생성함.
  const linkElement = screen.getByText(/learn react/i); // screen => 생성된 가상돔에 (랜더함수로 그려준 것에) 접근하기 위한 객체
  expect(linkElement).toBeInTheDocument(); // document안에 있어야함을 기대함. linkElement - 앵커 (App.js 참고)
});
```

### App.js 기본내용

```js
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // 이런 dom이 화면을 ~
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

### ARIA IN HTML

- [참고자료](https://www.w3.org/TR/html-aria/#docconformance)

### jest matcher dom

- [참고자료](https://github.com/testing-library/jest-dom)

### 질문

- 텍스트에 접근하는 프로퍼티 키 => name으로 지정되어있음 (일종의 약속)
- 내부의 표현식은 중괄호를 통해 넣어줌

### 기능

```jsx
function App() {
  const [buttonColor, setColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      {/* <button style={{ backgroundColor: 'red' }}>change to blue !</button> */}
      <button style={{ backgroundColor: buttonColor }} onClick={() => setColor(newColor)}>change to {newColor}</button>
    </div>
}
```

- 얘네는 html태그가 아닌, react문법인 jsx이므로. 결국 자바스크립트 이므로 이렇게 사용해도 된다 (자스민에서 html과 js코드를 뒤섞어서 사용하면 안된다는 개념이 여기에서는 적용되지 않는다!)

<br>

# TDD 참고자료

- [테스트 코드와 TDD](https://www.youtube.com/watch?v=Npi21gLIEZM&ab_channel=%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9)

<br>

# FE 면접 질문

## 클로저는 무엇이며, 어떻게/왜 사용하는지 설명해주세요

### 재현님 정답

- 클로져는 값을 은닉하기 위해 사용하는 테크닉으로, 함수안에 자식 함수를 만들고 밖으로 빼내어 외부에서 부모 함수의 스코프에 접근 할수 있도록 합니다.<br>

(외부에서 사용할 수 없는 비공개 프로퍼티.)<br>
(비공개 프로퍼티를 사용하므로 클로저 공간에 있는 메모리는 사용자가 직접 해제 해주어야 한다. 그렇지 않으면 사용하지 않은 변수가 메모리를 계속 차지하므로 메모리 누수현상이 발생한다. => 추가 답변으로 하면 좋은 인상을 남길 수 있음)<br>
(클로저는 현상이라기보다는 자바스크립트의 현상을 이용한 '테크닉'이다. )<br>

- [참고자료](https://meetup.toast.com/posts/86)
