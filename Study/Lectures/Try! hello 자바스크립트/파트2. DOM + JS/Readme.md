# DOM & JS

- document 객체를 통해 자바스크립트로 html 문서에 접근이 가능하다

- 자바스크립트를 통해 html 문서에 접근이 가능한 이유?
  - HTML 문서가 DOM(Document Object Model)에 따라 기술되고, 이 DOM 인터페이스를 따라 기술된 HTML요소가 객체로서 자바스크립트와 연결되기 때문임

## DOM (Document Object Model)

- 컴퓨터가 문서를 잘 처리할 수 있도록 문서에 대한 구조를 약속한 것
- Tree형태(족보, 가계도...)를 이용해서 문서를 표현함
  - Tree형태는 HTML의 태그가 중첩되는 구조와 일맥상통함
  - 이러한 트리구조에서 DOM API를 통해 HTML 문서의 요소를 탐색할 수 있음

## Document

- 최상위 object에서 자식들에게 접근하면서 원하는 Element에 접근
- 다양한 api를 활용하면 최상위 객체인 document부터 순차적으로 접근하는 것보다 원하는 element에 한번에 접근할 수 있게 된다
- document object
  - children에는 문서의 최상위 엘리먼트인 `html`이 존재함

## document.children

- 배열안에 html이 포함된 태그가 들어있음
- document object에서 children 속성을 이용해서 document 객체의 자식인 html 태그에 접근할 수 있게 됨
- `document.children[0]`에 `html 태그`가 들어가 있음
- `document.children[0].children[0]` => `head 태그`에 접근할 수 있게 됨
- `document.children[0].children[1]` => `body 태그`에 접근할 수 있게 됨

## parent

- parent 노드 속성을 이용하면 부모에게 접근이 가능하다
- `document.children[0].children[0].parentNode`
  - body 태그에서 parent 노드의 속성을 조회할 경우, html 태그가 반환되는 것을 볼 수 있음

## Element API

### 자식, 부모 엘리먼트에 접근하는 방법

- `.children` : 해당 object의 자식 노드에 대한 배열
- `.parentNode` : 부모 노드
- `.firstElementChild` : 첫 자식 엘리먼트
- `.lastElementChild` : 마지막 자식 엘리먼트

### 같은 레벨의 형제 엘리먼트에 접근하는 방법

- `.nextElementSibling`
- `.previousElementSibling`
