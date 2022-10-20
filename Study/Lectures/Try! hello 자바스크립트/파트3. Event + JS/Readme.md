# Event & JS

## Callback function

- 조건을 등록해 두고 그 조건을 만족한 경우, 나중에 호출되는 함수

## 시간을 기반으로 콜백함수를 호출하는 명령

### setTimeout(function, time)

- time 시간이 지난 경우 function 함수를 콜백하는 함수
- time은 milisecond (1/1000초) 단위
- timerld를 반환함
- 한번만 호출됨

```js
function callback() {
  console.log("callback function is called");
}

setTimeout(callback, 3000); //
```

```js
function callback() {
  console.log("callback function is called");
}
setInterval(callback, 5000); // 5초가 지날 때마다 반복적으로 콜백함수 호출
```

### clearTimeout(timerld)

- setTimeout 함수 호출의 결과로 반환된 timerld를 인자로 받아 예약되어 있던 function 호출을 취소

  - 이미 function이 호출된 경우(시간이 지나 이벤트가 발생한 경우)에는 효과가 없음

- setTimeout과 setInterval 사이에 사용해야 효과적임

### setInterval(function, time)

- time 시간이 경과할때마다 function 함수를 콜백하는 함수
- timerld를 반환함

<BR>

## HTML Tag 속성에 EventHandler 추가하기

### 브라우저에서 발생하는 Event 종류

- 웹브라우저의 진화에 따라 이벤트의 종류도 점점 증가하고 있다

- `form event`: HTML 문서의 form element에 변화가 생기거나 submit 버튼을 누르는 경우 등의 상황에서 발생

- `window event`: 페이지가 모두 로드되었을 때 발생하는 onload event 등이 있음

- `mouse event`: 사용자가 마우스를 조작했을 때 발생

- `key event`: 사용자가 키보드를 조작했을 때 발생

### Event

- `click`: mouse event로 HTML element를 마우스로 클릭한 경우 발생

- `change`: form event로 form 엘리먼트의 내용이 변경된 경우 발생

- `keydown`: key event로 key가 눌린 경우 발생

### HTML Tag의 속성으로 Event Handler 추가

- Tag의 속성에 event handler 코드를 추가
  - onEvent 속성 사용 (onclick, onchange, onkeydown, ...)

```html
<h1 onclick="console.log('clicked');">..</h1>
<input
  type="text"
  onchange="console.log('changed');"
  onkeydown="console.log('typed');"
/>
```

## js에서 EventHandler 설정

### property에 직접 Handler 설정

- Element의 `"on"+"이벤트"`의 속성에 메서드를 직접 지정

```js
document.getElementById("form1").onsubmit = function eventHandler() {
  console.log("form property");
  return false; // 브라우저의 submit 처리 비활성
};
```

### addEventListener 메서드

- element의 addEventListener(이벤트, 함수) 메서드를 호출해서 eventHandler 등록
  - 여러개의 이벤트 핸들러를 등록할 수 있음

```js
document
  .getElementByID("form1")
  .addEventListener("submit", function eventHandler() {
    console.log("form addEventListener");
    return false;
  });
```

### removeEventListener 메서드

- element의 removeEventListener(이벤트, 함수)메서드를 호출해, eventHandler 삭제

### Event 종류

- submit: form태그의 submit 이벤트

  - EventHandler에서 return false시 브라우저가 자체 기능(페이지 이동)을 비활성

- keydown: 키를 누른 경우 발생하는 이벤트
  - EventHandler에서 return false시 키 입력을 비활성함
  - 실제로는 keydown event -> keypress event -> keyup event 순으로 이벤트가 발생하며 keypress event 발생시에 키가 입력됨. keydown event에서 return false를 한 경우 keypress event가 이어서 발생하지 않음
