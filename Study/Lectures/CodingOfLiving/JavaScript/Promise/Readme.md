# Promise

## 변수가 될 수 있는 것

## 콜백함수

- 다른 함수 내에 들어가서 호출이 될 수 있는 것

- Ex) JavaScript Array filter
  - 첫번째 파라미터로 콜백함수를 받음(이 함수는 3개의 파라미터를 받음 - 요소,인덱스,배열)

## Promise

### 동기와 비동기

- 동기: 앞의 명령이 끝나고 나서 뒤의 명령이 순차적으로 진행되는 것
- 비동기: 각자가 자신의 시간표에 따라서 동작함
  - 어떤 명령을 실행할떄, 명령이 언제끝나는지 예측하기 어렵거나 해당 명령이 주가 되는 작업이 아닐 경우에 비동기처리를 많이 함 (보통 통신을 할때 비동기처리를 함)
  - 웹 브라우저가 웹 서버와의 통신을 할 때 통신이 끝날때까지 아무것도 못하기보다는 다른일을 하고 있다가 통신이 끝났을 때 콜백이 호출되면서 필요한 작업을 나중에 하면 좋음

### ajax

- 브라우저와 웹 서버가 페이지 리로드를 하지않고 자바스크립트를 이용해서 통신하는 것

### fetch

- 웹 브라우저와 웹 서버가 통신을 할 때 사용하는 api
- fetch api는 promise를 사용함

### javascript fetch api

- [fake api](https://jsonplaceholder.typicode.com/)
- 언제끝날지 모르는 서버와의 통신은 비동기적으로 처리하는 경우가 많다

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
```

- then이 `promise`에 해당됨
