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

<br><br>

## 단일 Element 선택

### HTML 문서상 특정 요소를 DOM API를 사용해서 가져오기

#### document.getElementBy ~

- 단일 엘리먼트를 선택하는 메서드

```js
document.getElement;
```

- document의 메서드 중 getElement로 시작하는 메서드들이 이러한 기능을 수행함
- 이러한 메서드의 element에 대한 조건을 인자로 전달하면 조건에 부합하는 element를 반환함

- 예시

```js
document.getElementById("lyricist"); // 해당 id값을 가지는 태그를 반환
var t = document.getElementById("lyricist"); // 편의를 위해 태그를 변수에 저장
t.innerHTML; // <strong>작사: </strong> <i>미상</i>  => 얻어온 element는 innerHTML 속성 조회시 해당 태그내의 HTML 코드를 얻어낼 수 있음
t.innerText; //  => HTML 코드가 모두 제거된 텍스트를 얻을 수 있음
```

### Element API

#### Element.innerHTML

- 엘리먼트 안의 HTML 코드를 변경

- Element의 속성 `innerHTML`은 요소내에 포함된 HTML 또는 XML 마크업을 가져오거나 설정함<BR>(요소의 내용을 변경하는 대신 HTML을 문서에 삽입하려면 `insertAdjacentHTML`메서드를 사용할 것)

#### HTMLElement.innerText

- 엘리먼트 안의 텍스트를 변경

- `HTMLElement` 인터페이스의 `innerText` 속성은 요소와 그 자손의 렌더링 된 텍스트 컨텐츠를 나타냄.<br> `innerText`는 사용자가 커서를 이용해서 요소의 컨텐츠를 선택하고 클립보드에서 복사했을 때 얻을 수 있는 텍스트의 근사값을 제공함

- 예시2 (innerText 변경)
  - 문자열로 적용

```js
t.innerText = "<i>Hello</i>"; // innerText를 변경 (단, innerText는 텍스트로 인식)
```

- 예시3 (innerHTML 변경)
  - 태그가 파싱이 되면서 해당 태그 내용이 적용됨

```js
t.innerHTML = "<i>Hello</i>"; // innerText를 변경
```

#### 스타일 속성에서 CSS값 변경

##### .style 속성

- css를 변경할 수 있음

- 예시

```css
t.style.color = 'blue'   // color 변경
t.style.fontSize = '10pt'   // fontsize 변경
```

#### 속성의 값 변경 / 새로운 속성 추가

- 몇몇 필수 속성은 object 속성으로 정의되어 있음

- 이미지 태그에서 대해서는 API가 src(source)프로퍼티를 동기화해주지만, 원래 source attribute가 정의되지 않는 태그에 대해서는 그 속성을 동기화해주지 않으므로 `변수명.src`와 같은 방식으로 속성에 접근할 수 없다. 하지만 `getAttribute`, `setAttribute`속성을 사용하면 이러한 문제점을 해결할 수 있다

```js
t.getAttribute("src"); //test -> 속성반환
t2.setAttribute("src", "http:~"); // -> 속성값 변경
```

##### getAttribute 메서드

- element의 속성값을 받아옴
- 하나의 인자: attribute 이름을 받음
- 직접 객체에 동기화되지 않는 속성에 대해서도 접근이 가능함

##### setAttribute 메서드

- element의 속성값을 설정함
- 두 개의 인자: attribute 이름, 설정할 속성의 값을 받음
- 직접 객체에 동기화되지 않는 속성에 대해서도 값 설정이 가능

<br>

## 다중 Element 선택

### Document API

- `document.getElementsBy~`: 다중 엘리먼트를 선택하는 메서드. 배열형태로 값을 반환함

#### document.getElementsByTagName 메서드

- 인자로 HTML element 태그의 이름을 전달하면 해당 엘리먼트들이 반한됨

#### document.getElementsClassName 메서드

- 인자로 class의 이름을 전달하면, 해당 class의 모든 엘리먼트가 배열로 반환됨

#### document.getElementsByName 메서드

- 인자로 name을 전달하면, 해당 name 속성을 가진 모든 엘리먼트가 배열로 반환이됨

### Element API

#### .value 속성

- input element에 입력된 값은 .value를 통해 얻어올 수 있음
  - getAttribute 메서드로는 받아올 수 없음

<br>

## CSS Selector를 이용한 Element 선택

### Document API

- `document.querySelector`: css selector를 기반으로 엘리먼트를 선택

  - 조건에 부합하는 element가 여러개인 경우 첫 element를 반환

- `document.querySelectorAll`: css selector를 기반으로 만족하는 모든 엘리먼트를 선택

### CSS Selector

- `#`: name을 기반으로 선택
- `.`: class를 기반으로 선택
- `,`: 여러개의 셀렉터를 사용

<br>

## Element 추가 및 삭제

### Document API

- `document.createElement()`: 문자열 인자로 element tag를 입력하면 해당 엘리먼트가 생성되어 반환됨

### Element API

- `.appendChild(인자)`: 추가할 element를 인자로 받아서 호출된 element의 자식으로 인자를 추가함 (원하는 element의 자식들 중 가장 마지막에 추가)
- `.removeChild(인자)`: 삭제할 element를 인자로 받아서 호출된 element의 자식중에서 해당 element를 삭제
- `.insertBefore(인자1, 인자2)`: 인자1로 받은 element를 호출된 element의 자식중에서 인자2의 이전에 추가함
- `.cloneNode()`: 호출된 element를 복사해서 반환함

```js
hr2 = hr.cloneNode();
<hr>​
```
