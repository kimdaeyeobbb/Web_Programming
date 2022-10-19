# 01

## HTML, CSS, javascript

- HTML: 웹 페이지의 구조를 나타냄
- CSS: 웹 페이지 안에 존재하는 요소들의 스타일을 나타냄
- javascript: js로직을 통해 문서의 구조와 스타일에 변화를 줄 수 있음

  - 브라우저에서는 javascript에서 HTML/CSS에 접근할 수 있는 API를 제공함

- 문서의 구조를 나타내는 HTML + 문서 각 요소들에 스타일을 나타내는 CSS + 정적인 문서에 구조와 스타일에 변화를 가하거나 로직을 추가할 수 있는 javascript가 함께 동작함

- 이떄 브라우저는 자바스크립트 코드를 실행시키면서 HTML/CSS에 변화가 생기면 다시 브라우저에게 해당 내용을 반영하여 렌더링 한다. 이로인해 사용자가 변화를 감지할 수 있게 된다.

- 자바스크립트에서 브라우저에 문서/CSS를 변경할 수 있도록 몇가지 인터페이스를 자바스크립트에 제공함 (document, window등의 객체)

<br>

## Window object

- window 객체는 자바스크립트를 실행할 때 가장 상위에 존재하는 객체이다.

- 변수를 선언하거나 함수를 선언할 경우 window 객체 안에 선언이 된다.

- 브라우저는 자바스크립트에게 window object를 제공하고, 자바스크립트는 window 객체를 통해 각종 HTML 요소나 css에 접근하여 조작을 가할 수 있음

- 객체에 바인드된 메서드로서 실행하지 않을 경우, this는 window이다<br>(window는 브라우저에서 자바스크립트 실행시 가장 상위에 있는 객체이기 떄문)

- window 예시 (window는 브라우저에서 자바스크립트 실행시 가장 상위에 있는 객체이다)

```js
var a = 1;
console.log(a); // 1

console.log(window.a); // 1 (위와 같이 a로도 접근 가능하지만, window로도 접근이 가능함)
```

- window 예시2 (window는 브라우저에서 자바스크립트 실행시 가장 상위에 있는 객체이다)

```js
function b() {
  console.log("b");
}

console.log(window.b()); // b (윈도우를 이용해서 함수를 호출)
console.log(b()); // b (window는 가장 상위에 있으므로 window를 생략하고 호출해도 됨)
```

- `prompt`, `console`등도 window 객체가 제공해주는 API이다. 해당 API를 통해 브라우저에서 동작하는 명령을 내릴 수 있다

- `window.location`

  - 현재 브라우저의 주소를 볼 수 있음

- `window.location.href`

  - `window.location`의 `href`속성을 조회한 것
  - 브라우저 주소창에 입력된 주소를 볼 수 있음
  - 값을 수정하면 실제로 페이지가 이동함. (about:blank 열어놓고 `window.location.href='http://naver.com`입력시 naver로 이동)

- `window.navigator`

  - 브라우저 자체에 대한 정보를 볼 수 있음

- `window.screen`

  - 현재 디스플레이의 사이즈(가로,세로 쌍 등)를 알 수 있음

- `window.document` 객체

  - 실제 html과 css가 모두 저장되어있음
  - 이 객체를 통해서 우리는 웹 페이지 문서의 html/css에 접근할 수 있음
    - `document.body`입력시 `body`태그 내용을 확인할 수 있음
    - `document.head`입력시 `head`태그 내용을 확인할 수 있음
    - `document.styleSheets`입력시 CSS에 반영된 값들이 저장되어있음

- 웹 클라이언트 사이드 자바스크립트 프로그래밍
  - 자바스크립트 언어로 로직을 작성하고 브라우저에서 제공하는 window api를 이용해서 html/css를 조작하는 것임
