# 22.11.10 (목)

# 9. path 모듈

# package.json

- npm init --yes 명령어 입력
- main 밑에 "type":"module"입력

- 모듈들의 버전 명시. 우리가 만든 프로젝트가 무엇인지를 설명하면서 어떤 버전이 깔려있는지를 설명함

# 모듈

- 파일을 읽어서 출력하는 일을함
- 리액트는 노드의 모듈임

# import path from 'path';

- node의 path라는 모듈에 해당됨
- path는 node설치될 떄 기본적으로 같이 설치됨
- 최신문법임
- 얘를 사용하려면 역슬러쉬를 슬러쉬(/)로 바꿔줘야 사용이 가능함

- 리액트는 노드환경에서 시작됨

# 노드

- 노드는 백엔드가 아니다.
- 노드는 서버가 아니다.
- 프론트엔드 개발자는 노드를 필수로 알아야 한다.
- 노드로 사이트를 띄우고 나서 명령어가 입력이 안되는이유: 서버가 켜진상태에서는 그 터미널에서 서버를 계속 돌려야하기 때문에 명령어가 입력이 안되는것임

# 10. fs(file_system) 모듈

- 2번까지만 함

# 11. http, os, url, querystirng 모듈

## 008/app.js

- 파비콘 요청을 기본적으로 줌.
- 두번 요청이 들어왔는데 없는 ~~~~~~~~

## 008/app2.js

- 가볍게 볼것

## 008/app3.js

- 가볍게 볼것

## 버전

- 버전이 다르면 내 소스코드가 실행이 안됨

## npm init

- package.json만 생성해줌

<br><br>

# React

## props

- 컴포넌트들(함수)이 프롭스(재료)를 계속 내려줘야함 (재료를 계속 내려줘야하는 문제가 있음)
- [참고자료](https://www.youtube.com/watch?v=3MB8DBXzEos&ab_channel=%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C)

- 컴포넌트에서 return 뒤에 넣어준것들이 재료에 해당

# 로그인 구현?

```js
 <script type="text/babel">
      function f() {
        return 100;
      }

      const app = (
        <div>
          {f()}
          <br />
          {console.log("hello")}
          {1 + 1}
          <br />
          {"hello" + "hello"}
          <br />
          {"<br>"}
          <br />
          {"hello" + "world2"}
          <br />
          {true ? "one" : "two"}
          // 예를 들어 로그인이 되면 게시판 화면을 보여주고 로그인이 안되면
          로그인화면으로 넘어가는 것으로 이용할 수 있음
          {login ? <게시판 /> : <로그인 />}
        </div>
      );

      const domContainer = document.querySelector("#root");
      ReactDOM.render(app, domContainer);
    </script>
```

# virtual dom

- 리액트를 사용한다는 것 자체가 virtual dom을 사용한다는 것
- 리액트로 물린 요소만 가상 돔으로 동작함

# npx

- npm의 도구
- npm의 5.2.0 이상에서 지원함
- react와 관련된 모듈들을 모아서 다 한꺼번에 설치를 해줌

# 웹팩

- 필요한 모듈들(우리가 작성한 html, css,js 파일등)을 한데 모아서 index.html의 head에 쏴줌

- 노드가 index.html이 아닌 index.js를 실행시키는것임(index.html은 브라우저에 띄우기 위한 수단일뿐이다)
- 노드를 실행하려면 index.js라는 이름을 가진 파일이 꼭 필요함

# cdn

- cdn = Content-Delivery-Network
  ‘게임 클라이언트나 콘텐츠를 효율적으로 전달하기 위해 분산된 서버에 데이터를 저장해 사용자에게 전달하는 시스템.’웹 캐시의 클라우드화, 인터넷 캐시에 컨텐츠 저장하는 방식으로 콘텐츠의 효율적인 전달을 돕는다. 지리적 제약 없이 전 세계 사용자에게 빠르게 콘텐츠 전송 가능 -> 한국 사용자가 접속하면 한국 캐시 서버에서 뿌려주는 식이다.
  간단하게… 분산된 리액트 서버로부터 데이터 전송받아서 쓰신거라고 이해하시면 되실 듯해요!
  저희 강의초에 쭉 리액트 1분만에 추가해보기 할때 세원님이 말씀하신것처럼 script에 src 가져온것들이 그것입니다

- 예시 (어제 예제처럼
  html에서 리엑트를 사용하기위해
  script를 복사해왔잖아요?? 그게 cdn이에요)

```javascript
<script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">

      const app = (
        <div>
         hello world
        </div>
      );

      // DOM에 리액트 컴포넌트 랜더링하기
      const domContainer = document.querySelector("#root");
      ReactDOM.render(app, domContainer);
    </script>
```

# package.json

- 내부의 dependencies부분은 react와 같이 깔린 것

# npm run build

- 020/my-app 내부에서 터미널 명령어 실행
- build라는 폴더가 만들어짐

# 페이지 빌드

- 페이지를 빌드시킨 원작자~~~~

# SPA

- spa를 리액트로 만드면 seo의 단점이 존재함
  - 해당 검색어가 없다고 생각하고 넘어감
  - p가 어느 페이지의 p태그인지 모르니까 파싱하기가 난해하다
  -

# node_modules

- 프로제트가 끝날때마다 삭제를 해줄 것 (용량이 크다)

- 회사에 들어가면 프로젝트를 주니어가 처음부터 할 일이 거의 없어서 npx를 사용해서 초기 세팅부터 할 일은 거의 없을 것이다.
- npx로 모듈이 다운받아진다
- 새로운 폴더로 이동할때마다 기존에 있던 node_mmodules이 용량을 많이 차지하므로 모듈을 지우는 것을 권장함
- 깃허브에는 노드 모듈이 같이 올라가지 않는다 -> 깃헙에서 clone을 하면 항상 npm i를 입력해주어야 실행이 됨. (노드모듈 없이 다운로드 받은 상태에서 그냥 바로 npm start를 하면 실행이 안됨)
