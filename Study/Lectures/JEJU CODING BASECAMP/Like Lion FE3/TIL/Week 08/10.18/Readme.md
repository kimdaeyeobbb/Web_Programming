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

# chartJS

- 빠르게 만들 수 있지만 일일이 컨트롤 할 수 없음
- label, data, config, const 변수선언해서 생성하는게 핵심

# canvas

- 내장되어있으므로 따로 스크립트가 필요하지 않음
- [canvas의 width height 프로퍼티랑 css 스타일 width height랑은 다르다](https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5)

- [width 속성 및 height 속성을 지정하지 않으면 캔버스의 처음 너비는 300 픽셀이고, 높이는 150 픽셀이다](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Basic_usage#:~:text=width%20%EB%B0%8F%20height%20%EC%86%8D%EC%84%B1%EC%9D%84,%EB%A7%9E%EA%B2%8C%20%ED%81%AC%EA%B8%B0%EA%B0%80%20%EC%A1%B0%EC%A0%95%EB%90%A9%EB%8B%88%EB%8B%A4.)

- ㅁ
