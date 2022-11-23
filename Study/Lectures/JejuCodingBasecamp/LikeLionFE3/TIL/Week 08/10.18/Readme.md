# 22.10.18 (화) 수업

# [fetch](https://morning-heart-e2a.notion.site/8-await-async-fetch-835e5806f6be444aa02ccfd38cb7a9b7#e14a9df878334e9bbf354be403c9ccbb)

- 가볍게 훑고 지나감 (교안 훑고 지나가기)

# fetch를 이용해서 데이터를 가져오기 (어제 수업 연장선 -> 어제 수업 다시 보기)

- 069.js

```
fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())

const userData = fetch('https://jsonplaceholder.typicode.com/users/3').then(resopnse => Response.json())   // 여기에 pending 값이 들어감
console.log(userData)

const userData2 = await fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
console.log(userData2)

async function getImg() {
    const response = await fetch('https://picsum.photos/200');
    const blobImg = await (responseblob());
    console.log(blobImg)
}
```

- function => await 안됨
- async function => await 됨
- top level await => 예외적으로 await이 밖에 감싸여진 함수 없이 사용될 수 있는 것. 이것은 작동함 (생긴지 얼마 되지 않아서 언급하는 책이 거의 없을 것임)

# get & post요청

# [react json server - 참고자료, 나중에 참고할 것. 이번에는 패스](https://www.notion.so/paullabworkspace/json-server-a7b5558b5f164c2b8f3530760b23bb5f)

# delete 요청 (교안 다시보기)

# put (교안 다시 보기)

# ~09:27 코드

```js
/*
async function request() {
  const response = await fetch('url 기입',
  {
    method: "GET", //POST, DELETE, PUT
    headers: {
      "Content-type": "콘텐츠 형태",
      //application/json, text/plain 등
    },
    body: JSON.stringify(
        서버에 전달할 데이터
    );
  });
  const data = await response.json();
  console.log(data);
}
request();
*/

// function -> await 비동기 : 안됩니다.
// async function -> await 비동기 : 됩니다.
// 예외적으로 await이 밖에 감싸여진 함수 없이 사용될 수 있는 것을 top-level-await이라하고, 이건 작동합니다.(생긴지 얼마 안되서 언급하는 책이 거의 없을겁니다.)

fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => response.json())

const userData = fetch('https://jsonplaceholder.typicode.com/users/3')
.then(response => response.json())
console.log(userData)

const userData = await fetch('https://jsonplaceholder.typicode.com/users/3')
.then(response => response.json())
console.log(userData)


async function printImg(){
    const response = await fetch(`https://picsum.photos/200`);
    const blobImg= await(response.blob());
    //blob을 담을 img 태그를 만든다.
    const img = document.createElement('img');
    //html body에 위에서 만든 img 태그를 삽입한다.
    document.body.append(img);
    //img 태그의 주소를 설정한다.
    img.src = URL.createObjectURL(blobImg);
}
printImg()

// get 요청
async function get() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
}
get();


// post 요청 - 생성
// JSON.stringify() 메서드는 배열이나 객체를 JSON 포맷의 문자열로 변환해준다.
async function post() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
    method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
          body: JSON.stringify({ //문자열로 변환하지 않으면 에러발생
            "title": "오늘의 간식",
            "body": "고소미",
            "userId": 3
        })
    }
    );
    const data = await response.json();
    console.log(data);
}
post();

// delete - 삭제
async function delete() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/3',
    { method: "DELETE"}
    );
    const data = await response.json();
    console.log(data);
}
delete();


// put - 수정
async function put() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',
    {
    method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            "title" : "오늘의 간식",
            "body" : "마카다미아 쿠키",//업데이트할 내용
            "userId" : 1 //1번 user
        })
    }
    );
    const data = await response.json();
    console.log(data);
}
put();

```

# fetch & axios

- fetch: 기본적으로 사용가능. 바닐라 js에서 많이 사용.
- axios: 모듈을 가져와야함. 리액트에서 많이 사용. 훨씬 편함.
- [참고자료, 나중에 배움](https://www.notion.so/paullabworkspace/Fetch-Axios-e834e7ceb7aa4db7bebb4f1ea9b2f0c0)

# [promise & async & await](https://www.notion.so/paullabworkspace/14-promise-async-await-42dcc3e6b6754af9aa8734f9d14be3a3)

# 렉시컬 환경으로 인해 스코프체인이 일어남

- 스코프체인 : 스코프 내에서 변수가 없어서 체인이 되어 위로 올라가서 해당되는 변수를 찾는 것
- 블록 안에 variable이 없으면 외부스코프의 주소를 참고해서 위로 올라간다음 거기서 값을 가져옴
- 렉시컬 환경은 각각이 다름(컨텍스트 환경에 따라 렉시컬 환경이 달라짐)

# 컨텍스트

- 전역 실행 컨텍스트: 박스라고 생각
- 함수 코드: 함수 실행 컨텍스트가 생성함
- 함수가 끝나면 함수의 lexical 환경이 반환됨
- 함수 실행 컨텍스트에도 variable 환경이 있음

- 전역 코드에서 코드 실행시 => 전역 실행 컨텍스트를 생성함

- 모듈 코드 => 모듈 실행 컨텍스트를 생성함

# [소스코드의 타입 - 참고자료](https://262.ecma-international.org/13.0/#sec-types-of-source-code)

- 패스할것

- 코드들이 생성되면 코드에 대한 실행 환경이 생성됨

- 함수를 정의하자마자 실행 컨텍스트를 생성하는것이 아님. 함수가 호출이 되면 그제서야 함수 실행 컨텍스트를 생성함

# 질의응답

- 클로저로 인해 렉시컬 환경이 살아있으면 스코프체인에 의해 의도치 않은 값이 들어갈 수도 있나요?

  - 그렇지 않음. 클로저 안에 렉시컬 환경은 외부에서 접근불가능한 상태가 됨
  - 오직 생성된 클로저로만 접근이 가능함

- 실행컨텍스트 안에 실행컨텍스트 안에 스택이 포함되지 않음

- lexical 환경과 variable 환경은 별도로 구성됨

- variable 환경에는 초기값만 기록되고 그 이후의 값은 추적하지 않음

# 이벤트루프

- 호출 스택 (콜 스택)
- 메모리 (메모리 힙)

- 백그라운드는 멀티스레드(브라우저 환경)

- [참고자료](https://meetup.toast.com/posts/89)

## 순서를 예측할 수 있는 정도로만 이해할 것

- 이벤트루프는 루프를 추상화해놓은것 (실제 로직으로 구현되어있지 않음. 테스크큐가 감시함)

- 비동기 함수에 await 키워드를 쓰는 등 동기적 처리를 하면 anonymous위에 놓이는 것인가?
  - ㅁㅁ

# [D3.js](D3.js - Data-Driven Documents)

- 데이터 위주의 웹 문서 작성
- [교안](https://paullabworkspace.notion.site/D3-js-44bff65b641b46eba9b7685860a771cc)

- d3는 기본적으로 svg로 그림을 그림

- 빠르게 만들 수는 없지만 일일이 컨트롤이 가능

# document.queryselector

- 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 요소를 반환 (일치하는 요소가 없으면 null을 반환)

- `querySelector`: 노드의 하위 트리에서 첫 번째로 일치하는 `Element` 노드를 반환함 (일치하는 요소가 없으면 null을 반환)

- `querySelectorAll`: 노드의 하위 트리 안에서 일치하는 모든 `Element`를 포함한 `NodeList`를 반환함. 결과가 없으면 빈 `NodeList`를 반환함

- 기본 꼴

```html
document.querySelector(selectors);
```

- selectors: 하나 이상의 선택자를 포함한 DOMstring (selector가 선택자인데, 해당 ID를 잘못 사용하여 문서 내에 여러 번 사용했을 경우 첫 번째로 그 ID를 사용한 요소를 반환함)

# chartJS

- 빠르게 만들 수 있지만 일일이 컨트롤 할 수 없음
- label, data, config, const 변수선언해서 생성하는게 핵심

# foreach

- 주어진 함수를 배열 요소의 각각에 대해 실행시킴

- 기본 꼴

```js
arr.forEach(callback(currentValue[,index[,array]])[,thisArg])
```

- 예제

```js
const arr1 = ["가", "나", "다"];
arr1.forEach((el) => console.log(el)); // 가 나 다
```

# CSS transition

- CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공함
- 속성 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있음

# Document.getElementById()

- 구문

```
document.getElementById(id);
```

- `Document.getElementById()`메서드: 주어진 문자열과 일치하는 `id`속성을 가진 요소를 찾고, 이를 나타내는 `Element`객체를 반환함. <br> id는 문서 내에서 유일해야 하므로 특정 요소를 빠르게 찾을 때 유리함

- 반환값
  - 주어진 id와 일치하는 DOM 요소를 나타내는 `Element`객체 (문서 내에 주어진 id가 없으면 `null`)
    <br>

# Document.querySelector()

- id가 없는 요소에 접근하려면 `Document.querySelector()`를 사용할 것 (`Document.querySelector`는 모든 선택자를 사용할 수 있음)

# canvas

- 내장되어있으므로 따로 스크립트가 필요하지 않음
- [canvas의 width height 프로퍼티랑 css 스타일 width height랑은 다르다](https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5)

- [width 속성 및 height 속성을 지정하지 않으면 캔버스의 처음 너비는 300 픽셀이고, 높이는 150 픽셀이다](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Basic_usage#:~:text=width%20%EB%B0%8F%20height%20%EC%86%8D%EC%84%B1%EC%9D%84,%EB%A7%9E%EA%B2%8C%20%ED%81%AC%EA%B8%B0%EA%B0%80%20%EC%A1%B0%EC%A0%95%EB%90%A9%EB%8B%88%EB%8B%A4.)

- [캔버스 튜토리얼](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)

# HTMLCanvasElement.getContext()

- 캔버스의 드로잉 컨텍스트를 반환함. 컨텍스트 식별자가 지원되지 않을 경우 `null`을 반환함
- 기본 꼴

```js
var ctx = canvas.getContext(contextType)
vat ctx = canvas.getContext(contextType, contextAttributes);
```

- `contextType`: 캔버스에 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 `DOMString`임. (2차원 렌더링 컨텍스트: `2d`, 3차원 렌더링 컨텍스트: `webgl`)

# 콜백지옥

- 081 =>

- [참고자료 - 드림코딩](https://youtu.be/s1vpVCrT8f4)

# 로컬스토리지

- [참고자료 1](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

- [참고자료 2](https://ko.javascript.info/localstorage)

- web sql -> 뜨고 있는 기술 / 웹에서 sql 다룸

- 나만 가지고 있는 데이터

- 삭제시키면 다시 복구 시킬 수 없음

# json.stringify()

- [참고사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

- js값이나 객체를 json문자열로 변환함

# 로컬스토리지 메모장 만들기

- 코드 1

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>메모장</title>
  </head>
  <body>
    <hr />
    <div class="display"></div>
    <hr />
    <input class="input" type="text" />
    <button class="submitButton">Submit</button>
    <script>
      const input = document.querySelector(".input");
      const display = document.querySelector(".display");
      const button = document.querySelector(".submitButton");
      const localStotageList = localStorage.getItem("memo") || "[]";
      let dataArray = JSON.parse(localStotageList);

      const render = () => {
        localStorage.setItem("memo", JSON.stringify(dataArray));
        display.innerHTML = dataArray.reduce((acc, e) => {
          acc = acc + `<h3>${e}</h3>`;
          return acc;
        }, "");
      };

      button.onclick = () => {
        dataArray.push(input.value);
        render();
      };
    </script>
  </body>
</html>
```

- 코드2

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" name="" id="input" />
    <button type="submit" id="btn">입력</button>
    <button id="btn2">삭제</button>
    <textarea name="" id="area" cols="30" rows="10"></textarea>
    <script>
      const input = document.querySelector("#input");
      const area = document.querySelector("#area");
      const btn = document.querySelector("#btn");
      const btn2 = document.querySelector("#btn2");
      const memo = [];

      function 입력() {
        let todo = input.value;
        memo.push(todo);
        localStorage.setItem("메모", JSON.stringify(memo));
        area.value = JSON.parse(localStorage.getItem("메모"));
        input.value = "";
      }
      area.value = JSON.parse(localStorage.getItem("메모"));

      function 삭제() {
        localStorage.removeItem("메모");
        area.value = JSON.parse(localStorage.getItem("메모"));
      }
      btn.addEventListener("click", 입력);
      btn2.addEventListener("click", 삭제);
    </script>
  </body>
</html>
```

- 코드3

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .memo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    </style>
    <title>로컬스토리지</title>
  </head>
  <body>
    <div class="memo">
      <input type="text" name="" id="name" />
      <textarea name="" id="text" cols="30" rows="10"></textarea>
      <button onclick="submit()">제출!</button>
    </div>
    <div class="memo-list"></div>

    <script>
      const name = document.querySelector("input");
      const text = document.querySelector("textarea");
      const memoList = document.querySelector(".memo-list");
      const submit = () => {
        localStorage.setItem("name", name.value);
        localStorage.setItem("text", text.value);
        const p = document.createElement("p");
        p.innerText = `${localStorage.getItem("name")} : ${localStorage.getItem(
          "text"
        )}`;
        memoList.appendChild(p);

        name.value = "";
        text.value = "";
      };
    </script>
  </body>
</html>
```

- 코드4

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>로컬스토리지</title>
    <style>
      form {
        display: flex;
        flex-direction: column;
        width: 600px;
        margin: 50px auto;
      }

      label {
        padding: 10px 0;
      }
    </style>
  </head>
  <body>
    <main>
      <form>
        <label for="subject">제목:</label>
        <input type="text" id="subject" />
        <label for="content">내용:</label>
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
        <button type="submit">저장하기</button>
      </form>
    </main>
    <script>
      const subject = document.querySelector("#subject");
      const content = document.querySelector("#content");
      const saveBtn = document.querySelector("button");

      const memo = {
        id: "",
        subject: "",
        content: "",
      };

      saveBtn.addEventListener("click", () => {
        const date = new Date();
        memo["id"] = date;
        memo["subject"] = subject.value;
        memo["content"] = content.value;

        localStorage.setItem("메모", JSON.stringify(memo));
      });
    </script>
  </body>
</html>
```

- 코드 5

```html
<body>
  <input type="text" name="" id="" />
  <textarea name="" id="" cols="30" rows="10"></textarea>
  <button type="button">메모 생성</button>
  <div id="result">
    <h2></h2>
    <p></p>
  </div>
  <script>
    const memoTitle = document.querySelector("input");
    const memoContent = document.querySelector("textarea");
    const memoCreate = document.querySelector("button");
    const resultArea = document.getElementById("result");

    const memo = {};
    function memoCreateFun() {
      memo["title"] = memoTitle.value;
      memo["content"] = memoContent.value;
      localStorage.setItem("메모", JSON.stringify(memo));
      const getDataObj = JSON.parse(localStorage.getItem("메모"));
      resultArea.querySelector("h2").textContent = getDataObj["title"];
      resultArea.querySelector("p").textContent = getDataObj["content"];
    }
    memoCreate.addEventListener("click", memoCreateFun);
  </script>
</body>
```

- 코드 6

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
  </head>

  <body>
    <input id="title" type="text" />
    <textarea id="content" cols="30" rows="10"></textarea>
    <button id="save">저장</button>
    <button id="load">불러오기</button>
    <div id="show"></div>
    <script>
      const title = document.getElementById("title");
      const content = document.getElementById("content");
      const save = document.getElementById("save");
      const load = document.getElementById("load");
      const show = document.getElementById("show");

      save.addEventListener("click", function () {
        localStorage.setItem(
          "memoNote",
          JSON.stringify({
            title: title.value,
            content: content.value,
          })
        );
      });

      load.addEventListener("click", function () {
        const memonote = JSON.parse(localStorage.getItem("memoNote"));
        const saved_show = document.createElement("div");
        const saved_title = document.createElement("h2");
        const saved_content = document.createElement("p");

        saved_title.textContent = memonote.title;
        saved_content.textContent = memonote.content;

        saved_show.appendChild(saved_title);
        saved_show.appendChild(saved_content);

        show.innerHTML = saved_show.innerHTML;
      });
    </script>
  </body>
</html>
```

- 코드 7

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
  </head>
  <body>
    <input type="text" class="tit-memo" />
    <textarea class="txt-memo"></textarea>
    <button>Add</button>
    <ul class="list-memo"></ul>

    <script>
      const titMemoEl = document.querySelector(".tit-memo");
      const txtMemoEl = document.querySelector(".txt-memo");
      const listMemoEl = document.querySelector(".list-memo");
      let memo = [];

      const onSubmit = (e) => {
        memo = [...memo, { title: titMemoEl.value, content: txtMemoEl.value }];
        localStorage.setItem("memo", JSON.stringify(memo));

        renderMemo();
      };

      const renderMemo = () => {
        removeChildNode(listMemoEl);
        const memoList = localStorage.getItem("memo");

        JSON.parse(memoList).forEach(({ title, content }, i) => {
          const li = document.createElement("li");

          const strong = document.createElement("strong");
          strong.textContent = title;

          const p = document.createElement("p");
          p.textContent = content;

          li.append(strong, p);
          listMemoEl.appendChild(li);
        });
      };

      const removeChildNode = (el) => {
        while (el.hasChildNodes()) {
          el.removeChild(el.firstChild);
        }
      };

      document.querySelector("button").addEventListener("click", onSubmit);
    </script>
  </body>
</html>
```

- 코드8

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>localstorage_memo</title>
  </head>
  <body>
    <input type="text" name="" id="title" />
    <textarea name="" id="text" cols="30" rows="10"></textarea>
    <button id="btn">memo</button>
    <div id="memoList"></div>
    <script>
      const title = document.querySelector("#title");
      const text = document.querySelector("#text");
      const btn = document.querySelector("#btn");
      const memoList = document.querySelector("#memoList");

      function save() {
        localStorage.setItem("title", title.value);
        localStorage.setItem("text", text.value);
        const p = document.createElement("p");
        p.innerText = `${localStorage.getItem(
          "title"
        )} - ${localStorage.getItem("text")}`;
        memoList.appendChild(p);
      }

      btn.addEventListener("click", save);
    </script>
  </body>
</html>
```

# 질의응답

- Q) 위의 코드에서 교안에 메모리에 실행함수가 제일먼저 적재된다고 나와있는데 제일 먼저 적재되는 이유는 함수의 호이스팅과 관련되어 있는 것인가요?

```js
console.log(1);
setTimeout(실행, 1000); // 핵심 : 1초를 보장하지 않는다!!
console.log(3);
function 실행() {
  console.log(2);
}
```

- A) 넵, 맞습니다. 적재만 되고, 실행은 되지 않는거에요.

# 참고자료

- [브라우저 저장소( 로컬 스토리지, 세션 스토리지, 쿠키)](https://ryuhojin.tistory.com/m/10)

- [로컬스토리지, 세션스토리지, 쿠키 정리](https://velog.io/@kler/TIL4-%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%84%B8%EC%85%98%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%BF%A0%ED%82%A4-%EC%A0%95%EB%A6%AC)

- [이벤트루프](https://youtu.be/8aGhZQkoFbQ)

# 추가내용

- JWT(JSON WEB TOKEN) 읽을 때 유효시간이 있으므로 로컬 스토리지에 넣고 써도 무관함 (만료기간이 있으므로)

- [JSON은 자바스크립트 문법이 아니다](https://youtu.be/1ID6pfTViXo)

<br><br>

# 복습 (22.11.22 (화))

## 웹 스토리지

- 쿠키의 단점을 보완하기 위해 HTML5에서 `웹 스토리지`가 탄생

- 웹 스토리지는 key & value 쌍으로 구성됨
- 브라우저 내에 key&value 쌍을 저장할 수 있게 해줌

- 웹 스토리지는 클라이언트에 대한 정보를 저장함

- 웹 스토리지 객체는 네트워크 요청 시 서버로 전송되지 않음<br>
  => 쿠키보다 더 많은 자료를 보관할 수 있게됨.

- 서버가 HTTP 헤더를 통해 스토리지 객체를 조작할 수 없음<br>
  => 웹 스토리지 객체 조작은 모두 자바스크립트 내에서 수행됨

- 웹 스토리지 객체는 도메인,프로토콜,포트로 정의되는 오리진(origin)에 묶여있음<br>
  => 따라서 프로토콜과 서브 도메인이 다르면 데이터에 접근 할 수 없음

- 웹 스토리지는 로컬에 정보를 저장

  - 쿠키 => 서버와 로컬에 정보를 저장

### 웹스토리지의 장단점

- 장점

  - 웹 스토리지 객체는 네트워크 요청 시 서버로 전송되지 않음<br>
    => 쿠키보다 더 많은 자료를 보관할 수 있게 됨
  - 서버에 불필요하게 데이터를 저장하지 않음
  - 용량이 큼 (약 5MB, 브라우저마다 차이가 존재)

- 단점
  - HTML5를 지원하지 않는 브라우저의 경우 사용할 수 없음

### 웹스토리지의 종류

#### 1️⃣ 로컬스토리지

- 브라우저에 데이터를 저장하기 위한 기술 중 하나
- 로컬스토리지를 사용하면 브라우저를 다시 실행해도 데이터가 사라지지 않고 남아있음
- 클라이언트에 대한 정보를 영구적으로 저장
- ex) 자동 로그인 저장, 로그인 저장(민감정보가 들어가지 않으므로 로그인 기능 구현시 로컬스토리지 사용해도 됨. JWT는 유효시간이 있으므로 로컬스토리지에 넣어 써도 무방함.)

- 값을 가져오는 방법

```js
let obj1 = { num1: 1, num2: 2, name: "Danny", Key4: "value4" };
localStorage.num1(k);
```

#### 2️⃣ 세션스토리지

- 세션 스토리지를 사용하면 페이지를 새로 고침해도 데이터가 사라지지 않고 남아있음
- 세션 종료시(브라우저를 닫을 경우) 클라이언트에 대한 정보를 삭제함
- ex) 입력 폼 정보 저장, 비로그인 장바구니

<br><br>

## 쿠키

-

- 만료 기한이 있는 key & value 형태의 저장소

- 서버와 로컬에 정보를 저장함

- ex) 다시 보지 않을 팝업 창

### 쿠키의 장단점

- 장점

  - 대부분의 브라우저가 지원함

- 단점
  - 매 HTTP요청마다 포함되어 API호출로 서버에 부담
  - 쿠키의 용량이 작음 (약 4KB)
  - 암호화가 존재하지 않음 => 사용자의 정보가 도난될 위험이 존재

<br><br>

## JSON.stringify()

- 자바스크립트 값이나 객체를 JSON 문자열로 변환함

## JSON 형식 직렬화/역직렬화

- [참고자료](https://curryyou.tistory.com/359)
