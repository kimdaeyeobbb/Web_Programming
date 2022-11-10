# 22.11.08 (화)

# React

- 리액트를 설치하면 복잡도가 올라감.
- 우리가 익숙한 환경인 .html 파일에서 충분히 연습을하고 NODE 환경으로 넘어가는 것이 좋음
- 리액트는 보통 <div id="root"> </div>하나만 있고 html이 거의 비어있는 상태에서 레이아웃을 잡아감

## 001.html

- 지금 이해하려고 하지말것

## 함수혈 컴포넌트

- 함수로 만든것을 태그로 사용함
- 맨위에 감싸주고 있는 태그가 존재해야 함

```js
const app = (
  <div>
    <Title />
    <Contents />
    <Contents />
    <Contents />
    <Contents />
    <HelloButton />
    <HelloButton />
    <HelloButton />
    <HelloButton />
    <HelloButton />
    <HelloButton />
  </div>
);
```

- 코드를 쏴줄 때 리턴값으로 바꿔서 쏴줌

- 리액트 돔이 쏴주는 역할을 함

## 돔 컨테이너

- 작스문법으로 되어있는 것을 return해서 얹어줘라! 함

## 클래스형 컴포넌트

- 요즘에는 함수형 컴포넌트를 사용함
- 클래스형은 복잡도가 올라간다
- 클래스형의 생애주기가 복잡도를 더 올린다
- 함수형 컴포넌트에는 Hook이 존재하는데, 이 Hook을 이용해서 함수형 컴포넌트를 클래스형 컴포넌트로 사용할 수 있게 됨

## 이미지 CDN

- [이미지 CDN을 사용하여 이미지 최적화](https://web.dev/i18n/ko/image-cdns/)
- [이미지 CDN 예제로 가져오기 좋은 사이트](https://to-moneyking.tistory.com/m/44)

## 작스문법

```js
/* 작스문법, 중괄호 내부의 공간은 js로 인식 */
const app = <div>{[<ImageSlide />, <Title />, <Info />, <Price />]}</div>;

// 위의 코드를 얘처럼 생각
/* 작스문법, 중괄호 내부의 공간은 js로 인식 */
const app = (
  <div>
    {json.map((i) => {
      return (
        <div>
          <ImageSlide />
          <Title />
          <Info />
          <Price />
        </div>
      );
    })}
  </div>
);
```

## 작스 문법2

- Javascript + XML

- 예시

```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>리액트 1분만에 추가해보기!</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">
      /* 함수로 만듦 */
      function Hello() {
        return <h1>hello world</h1>;
      }

      /* 변수로 만듦 */
      const Hello2 = <h2>Hello world 2</h2>;

      /* 넣을 데이터를 app으로 만듦 */
      const app = (
        <div>
          <Hello />  // 이자리에 <h1>hello world</h1>; 얘가 들어간 것 (작스문법)
        </div>
      );

      const domContainer = document.querySelector("#root");
      ReactDOM.render(app, domContainer);
    </script>
  </body>
</html>

```

## 리액트의 핵심

- 컴포넌트를 만들어서 조립식으로 쓰겠다는 것

## 함수와 변수

- 변수는 중괄호로 감싸서 사용해야 함. 변수를 <변수명 />꼴로 사용하면 화면에 나타나지 않음
- 함수는 {함수명()} 꼴이나 <함수명 />꼴로 사용해도 됨

```js
    <script type="text/babel">
      /* 함수로 만듦 */
      function Hello() {
        return <h1>hello world</h1>;
      }

      /* 변수로 만듦 */
      const Hello2 = <h2>Hello world 2</h2>;

      /* 넣을 데이터를 app으로 만듦 */
      /* <Hello2 />꼴로 쓰면 안됨 */
      const app = (
        <div>
          <Hello />
          <Hello />
          <Hello />
          {Hello2}
          {Hello()}
        </div>
      );

      const domContainer = document.querySelector("#root");
      ReactDOM.render(app, domContainer);
    </script>
```

## 리액트의 장점

- 재사용성
- 구조 파악이 용이함
- 코드를 찾아가는데 드는 리소스가 줄어듦
- 유지보수성이 급격히 증가함

```js
const header = (
  <header>
    <h1>wenive 홈페이지</h1>
    <div>메뉴</div>
  </header>
);

const section1 = (
  <section>
    <p>제품 소개</p>
  </section>
);

const section2 = (
  <section>
    <p>회사 소개</p>
  </section>
);

const section3 = (
  <section>
    <p>팀 소개</p>
  </section>
);

const footer = (
  <footer>
    <p>회사 정보</p>
  </footer>
);

const app = (
  <main>
    {header}
    {section1}
    {section2}
    {section3}
    {footer}
  </main>
);
const domContainer = document.querySelector("#root");
ReactDOM.render(app, domContainer);
```

## 리액트의 단점

- 코드량이 증가할수록 복잡도가 급격히 증가함
- 생산속도가 느리다

## Vanilla JS를 이용한 SPA 웹페이지 만들기

- 입사문제이지, 실제 기업내에서 이렇게 하는 경우는 없음

## [API](http://test.api.weniv.co.kr/mall)

## jsx

- JSX라는 문법에서 props가 예약어처럼 쓰려고함
- 꼭 그렇게 하지않고 매개변수처럼 넘겨도 됨

## 소괄호 쓰고 싶을 경우

- 엔티티 코드를 사용할 것

## 바닐라 JS로도 컴포넌트를 적절히 나누면 비슷한 정도의 유지보수성을 유지할 수 있을까?

- 노드 환경과 리액트를 고집하는 이유?

  - 노드환경에서 작업을 하게되면 리액트말고도 여러 라이브러리를 조합해서 사용할 수 있다.
  - 나중에 웹팩을 이용해서 얘네들을 다 묶어서 하나의 결과물로 뽑아낼 수 있다
  - :one:즉, 노드 생태계의 여러 라이브러리를 사용할 수 있다

- :two: 최신의 노드문법을 사용할 수 있다
- :three: 리액트를 사용하면 리액트와 관련된 여러 상태관리 툴과 연계해서 사용할 수 있다. (확장성이 높아진다.)

<br>

# 추가내용

## React Render HTML

- [참고자료](https://www.w3schools.com/react/react_render.asp)

- 예제

```html
<div id="root"></div>
<script type="text/babel">
  /* 함수로 만듦 */
  function Hello() {
    return <h1>hello world</h1>;
  }

  /* 변수로 만듦 */
  const Hello2 = <h2>Hello world 2</h2>;

  /* 넣을 데이터를 app으로 만듦 */
  // {}안에는 js 코드가 사용 가능함
  // <Hello2 />의 형태는 가능하지 않음
  // hello()는 작동하지 않음
  const app = (
    <div>
      <Hello />
      <Hello />
      <Hello />
      {Hello2}
    </div>
  );

  const domContainer = document.querySelector("#root");
  ReactDOM.render(app, domContainer);
</script>
```

- `ReactDOM.render()` 함수는 2가지 인자를 받는다. (HTML 코드, HTML 요소)
- ReactDOM.render()함수를 호출해서 React가 HTML을 웹 페이지에 랜더링한다.
- 지정된 HTML 요소 내부에 지정된 HTML 코드를 표시한다.
- 결과는 querySelector에서 선택한 rood라는 id를 가진 요소에 표시됨
