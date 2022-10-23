# Networking

# 1. AJAX - Request 보내기

## AJAX (Asynchronous Javascript And Xml)

- 브라우저에서 페이지를 이동하지 않고 자바스크립트를 통해서 HTTP Request를 보내고 해당 응답을 받아 JS에서 처리할 수 있음
- AJAX를 사용하면 페이지를 이동하지 않고도 서버에서 새로운 정보를 받아오거나, 브라우저의 데이터를 서버로 전달할 수 있으므로 사용자에게 더 나은 사용 경험 제공할 수 있음
- 대부분의 웹사이트에서 사용되고 있는 기술

### 1. AJAX를 위한 객체 생성

```js
var req = new XMLHttpRequest(); // HTTP 요청을 만들 수 있는 새로운 객체를 생성하는 명령
```

### 2. 요청의 방식과 URL 설정

```JS
requ.open("GET","./data.txt");   // http request method와 URL 설정
```

### 3. 요청 전송

```JS
req.send();
```

### 응답 확인

- req.response에 저장됨
- 비동기 방식으로 요청하기 때문에 send 메서드를 호출 후, 바로 코드에서 접근하면 데이터가 비어 있음
- AJAX의 진행에 따라 호출되는 callback 함수를 활용해야 함

## 브라우저 옵션

- `--disable-web-security 옵션`
  - 브라우저의 보안 정책을 우회하기 위해 사용하는 옵션
  - same-origin-policy등을 비활성화 함

# 2. AJAX - Response 받아서 처리하기

## AJAX

### readyState 속성

- AJAX 요청에 따라 0~4까지 변화함<br>

| readyState |                   의미                   |
| :--------: | :--------------------------------------: |
|     0      |           open 메서드 호출 전            |
|     1      | open 메서드 호출 후, send 메서드 호출 전 |
|     2      |  보낸 요청에 대해 응답 헤더가 수신된 후  |
|     3      |      응답의 바디 부분이 수신중일 때      |
|     4      |        모든 응답이 수신되었을 때         |

### onreadystatechange 속성

- readyState가 변할 때마다 호출되는 콜백함수

### status 속성

- HTTP response의 응답 헤더에 기록된 코드

| Response Code |                 의미                 |
| :-----------: | :----------------------------------: |
|      200      | OK (정상적으로 데이터를 보낸다는 뜻) |
|      404      |              Not Found               |
|      500      |            Internal Error            |
|      ...      |                 ...                  |

### 응답을 정상적으로 수신한 경우

- readyState: 4
- status: 200

### 기타 callback function 활용 가능한 속성

- onloadstart
- onprogress
- onabort
- onerror
- onload
- ontimeout
- onloadend

## 3. JSON (JavaScript Object Notification)

- 자바스크립트의 객체를 문자열로 표현하는 방법
  - 자바스크립트의 객체를 문자열로 표현하면(JSON으로 나타내면) 프로그램간에 전달하기가 편리하다
- 서버에서 데이터를 가져와서 브라우저에 해당 데이터를 가지고 표시하려고할 때 많이 사용함
- 서버에서는 JSON 형태로 데이터를 전송하고 수신하는 브라우저는 자바스크립트를 통해 해당 데이터를 파싱하고 문서에 반영한다.

### JSON API

- `JSON.stringify(object)`

  - 인자로 받은 객체를 JSON 문자열로 반환함

- `JSON.parse(sring)`

  - 인자로 받은 문자열을 Javascript Object로 변경해서 반환함

- JSON은 자바스크립트 객체에 담긴 데이터만 문자열로 변환하고, 다시 객체로 변환하는 과정을 수행하므로 객체에 정의되어있던 메서드나 undefined는 변환되지 않는다

```js
var obj = {
  str: "문자열",
  num: 3.14,
  boolean: true,
  null: null,
  undefined: undefined,
  method: function a() {
    console.log("method");
  },
};
```

## 4. AJAX + JSON

- clonNode(true) => 자식 노드까지 복사
