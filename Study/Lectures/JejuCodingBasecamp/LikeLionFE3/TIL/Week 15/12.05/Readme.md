# 22.12.05 (월)

- [22.12.05 (월)](#221205-월)
  - [웹팩](#웹팩)
    - [package.json 설치](#packagejson-설치)
    - [npm init -y](#npm-init--y)
      - [package.json](#packagejson)
    - [npm i react](#npm-i-react)
    - [npm 헬퍼](#npm-헬퍼)
  - [myLoader.js 설정](#myloaderjs-설정)
  - [loader](#loader)
  - [브라우저상 설정 결과물 확인](#브라우저상-설정-결과물-확인)
  - [앞으론](#앞으론)
  - [css-loader \& style-loader 설정](#css-loader--style-loader-설정)
    - [style.css 생성](#stylecss-생성)
    - [app.js에 import "./style.css";](#appjs에-import-stylecss)
    - [npm run build](#npm-run-build)
    - [css-loader 설치](#css-loader-설치)
    - [새로운 객체를 추가해서 로더를 다운 받아야 함](#새로운-객체를-추가해서-로더를-다운-받아야-함)
    - [npm -D install style-loader](#npm--d-install-style-loader)
    - [webpack.config.js 수정](#webpackconfigjs-수정)
    - [loader](#loader-1)
    - [File-loader](#file-loader)
    - [style.css 수정](#stylecss-수정)
    - [Base64 포맷으로 이미지 불러오기](#base64-포맷으로-이미지-불러오기)
    - [app.js 수정](#appjs-수정)
    - [webpack.config.js 수정](#webpackconfigjs-수정-1)
    - [빌드](#빌드)
    - [webpack.config.js](#webpackconfigjs)
  - [플러그인](#플러그인)
    - [1. BannerPlugin](#1-bannerplugin)
      - [번들링 완료된 결과물](#번들링-완료된-결과물)
      - [$ git rev-parse HEAD](#-git-rev-parse-head)
      - [$ git rev-parse --short HEAD](#-git-rev-parse---short-head)
      - [$ git config user.name](#-git-config-username)

## 웹팩

### package.json 설치

- 웹팩 프로젝트를 설치하는 과정
- 우리가 원하는 패키지를 폴더내에 생성 (-y 명령어를 추가 입력해서 질문받지 않고 바로 기본적인 옵션으로 설치함)
- 이 파일을 보면서 패키지를 관리함

### npm init -y

```bash
npm init -y
```

#### package.json

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "test2": "echo \"Error: 그냥 만들어 봤습니다.\" && exit 1",
    "build": "webpack"
  },
```

- test라는 npm 명령어를 script라는 객체에 추가할 수 있음
- test2처럼 우리가 만든 명령어 또한 추가할 수 있다

### npm i react

```bash
npm i react
```

- 위 명령어 입력시 package.json내에 다음과 같은 항목이 추가됨

```json
"dependencies":{
    "react": "^18.2.0"
}
```

- 이로인해 npm 프로젝트는 react를 의존하게 됨

### npm 헬퍼

- npm command를 확인할 수 있음

```bash
npm -- help
```

<br><br>

~~ 빼먹은거 다시 넣기

<br><br>

## myLoader.js 설정

```js
module.exports = function myLoader(item) {
  console.log("hello loader");

  return item.replace("console.log(", "alert("); // item - loader로 처리해줄 것들 (html, css등의 파일). 이 내용물들이 문자열로 처리되므로 replace를 사용할 수 있음 | replace - js문법
};
```

## loader

- npm run build

- main.js에 alert() 설정이 되었는지 확인하기

## 브라우저상 설정 결과물 확인

- console.log대신 alert가 잘 들어갔는지 확인할 것

## 앞으론

- 이렇게 만든 loader를 이용해서 웹팩을 설정할 것임 (이전처럼 일일이 웹팩을 설정하지 않을 것임)

<br>

## css-loader & style-loader 설정

### style.css 생성

### app.js에 import "./style.css";

### npm run build

- 에러 발생
- css를 불러오기 위해서는 해당하는 loader가 필요함
- 따라서 css loader를 설치해야함

### css-loader 설치

```bash
npm insatll css-loader
```

- 설치확인

```json
{
  "name": "webpacktest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "test2": "echo \"Error: 그냥 만들어 봤습니다.\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "css-loader": "^6.7.2",
    "react": "~17.0.0"
  },
  "devDependencies": {
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.0"
  }
}
```

### 새로운 객체를 추가해서 로더를 다운 받아야 함

- webpack.config.js

- 다음을 추가할 것

```js
/* css-loader */
{
    test: /\.css$/,
    use: [
        'css-loader'
    ]
}
```

- webpack.config.js 결과물

```js
const path = require("path");

module.exports = {
  // nodejs 문법 (모듈을. 밖으로 빼냄)
  mode: "development", // js객체 문법
  entry: {
    //entry: 시작점
    main: path.resolve("./src/app.js"),
    // 경로 (./src/app.js가 시작점이라는 것)
    // path는 require해서 사용해야 함
    // OS별로 경로를 설정하는 것이 다를 수 있으나, path 모듈을 사용하면 동일하게 경로를 찾을 수 있다
  },
  output: {
    // output: 번들링한 결과물을 내놓을 위치
    filename: "[name].js", // name에는 entry의 key값이 자동으로 들어옴
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        // 로더가 처리해야할 파일의 패턴 (정규표현식)
        // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$는 .js로 끝나는 모든 파일
        // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 뜻함
        test: /\.js$/, // 이스케이프 기호를 사용
        use: [
          // 위와 일치하는 패턴의 파일이 전달될 로더를 설정함
          path.resolve("./myLoader.js"), // myLoader라는 함수로 실행을 시키겠다
        ],
      },

      /* css-loader */
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
};
```

### npm -D install style-loader

### webpack.config.js 수정

- style-loader 추가

```js
  /* css-loader */
            {
                test: /\.css$/,
                use: [
                    'css-loader',
                    'style-loader'
                ]
            }
```

- webpack.config.js 결과물

```js
const path = require("path");

module.exports = {
  // nodejs 문법 (모듈을. 밖으로 빼냄)
  mode: "development", // js객체 문법
  entry: {
    //entry: 시작점
    main: path.resolve("./src/app.js"),
    // 경로 (./src/app.js가 시작점이라는 것)
    // path는 require해서 사용해야 함
    // OS별로 경로를 설정하는 것이 다를 수 있으나, path 모듈을 사용하면 동일하게 경로를 찾을 수 있다
  },
  output: {
    // output: 번들링한 결과물을 내놓을 위치
    filename: "[name].js", // name에는 entry의 key값이 자동으로 들어옴
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        // 로더가 처리해야할 파일의 패턴 (정규표현식)
        // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$는 .js로 끝나는 모든 파일
        // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 뜻함
        test: /\.js$/, // 이스케이프 기호를 사용
        use: [
          // 위와 일치하는 패턴의 파일이 전달될 로더를 설정함
          path.resolve("./myLoader.js"), // myLoader라는 함수로 실행을 시키겠다
        ],
      },

      /* css-loader */
      {
        test: /\.css$/,
        use: ["css-loader", "style-loader"],
      },
    ],
  },
};
```

- loader는 밑에서부터 위로 읽음. 처리 순서도 아래에서부터 위로 처리
- 따라서 css가 먼저 load되고 처리되어야 하므로 css-loader와 style-loader의 순서를 바꾸고 나서 명령어를 실행시킬 것

- webpack.config.js 결과물

```js
const path = require("path");

module.exports = {
  // nodejs 문법 (모듈을. 밖으로 빼냄)
  mode: "development", // js객체 문법
  entry: {
    //entry: 시작점
    main: path.resolve("./src/app.js"),
    // 경로 (./src/app.js가 시작점이라는 것)
    // path는 require해서 사용해야 함
    // OS별로 경로를 설정하는 것이 다를 수 있으나, path 모듈을 사용하면 동일하게 경로를 찾을 수 있다
  },
  output: {
    // output: 번들링한 결과물을 내놓을 위치
    filename: "[name].js", // name에는 entry의 key값이 자동으로 들어옴
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        // 로더가 처리해야할 파일의 패턴 (정규표현식)
        // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$는 .js로 끝나는 모든 파일
        // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 뜻함
        test: /\.js$/, // 이스케이프 기호를 사용
        use: [
          // 위와 일치하는 패턴의 파일이 전달될 로더를 설정함
          path.resolve("./myLoader.js"), // myLoader라는 함수로 실행을 시키겠다
        ],
      },

      /* css-loader */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

### loader

- 이렇게 loader를 직접 만들필요는 없고, 사람들이 잘 만들어놓은 것들을 다운로드해서 사용하면 된다.

### File-loader

- 파일들을 불러오는 작업

### style.css 수정

```css
body {
  background-color: royalblue;
  background-image: url(./android.png);
}
```

### Base64 포맷으로 이미지 불러오기

- [참고자료](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- 이미지를 이미지 파일이 아닌 문자열로 표현하도록 해보자

  - 이미지를 src 폴더에 추가
  - 이미지를 app.js파일에 import 시킨 다음 body 태그 안에 추가

### app.js 수정

- app.js

```js
import { plus } from "./plus.js";
import "./style.css";
import tiger from "./tiger.png";

console.log(plus(3, 7));

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src="${tiger}">`;
});
```

### webpack.config.js 수정

```js
const path = require("path");

module.exports = {
  // nodejs 문법 (모듈을. 밖으로 빼냄)
  mode: "development", // js객체 문법
  entry: {
    //entry: 시작점
    main: path.resolve("./src/app.js"),
    // 경로 (./src/app.js가 시작점이라는 것)
    // path는 require해서 사용해야 함
    // OS별로 경로를 설정하는 것이 다를 수 있으나, path 모듈을 사용하면 동일하게 경로를 찾을 수 있다
  },
  output: {
    // output: 번들링한 결과물을 내놓을 위치
    filename: "[name].js", // name에는 entry의 key값이 자동으로 들어옴
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        // 로더가 처리해야할 파일의 패턴 (정규표현식)
        // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$는 .js로 끝나는 모든 파일
        // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 뜻함
        test: /\.js$/, // 이스케이프 기호를 사용
        use: [
          // 위와 일치하는 패턴의 파일이 전달될 로더를 설정함
          path.resolve("./myLoader.js"), // myLoader라는 함수로 실행을 시키겠다
        ],
      },

      /* css-loader */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 여기 추가합니다.
        test: /\.(png|jpg|gif|svg)$/, // 해당하는 포맷을 가진것을 처리하겠다는 뜻
        type: "asset/inline",
      },
    ],
  },
};
```

- 이미지를 경로에 있는 리소스에 접근하는 것이 아닌 svg처럼 ~해주는 것
- webpack.config.js상의 type의 asset을 지우고 ~ 작업을 하면 BASE64기반이 아니게 됨

- base64로 접근하는 것과 파일에 접근하는 것에 차이점
  - 렌더링 속도에 있어 차이가 있음
  - 리소스에 직접 접근한다면 ~
  - FE에서 만든 작업물을 서버에 저장해놓아야 BE단에서 우리가 만든 결과물을 가져다가 작업을 할 수 있다
  - 그러면 불러오게 될 때 서버는 컴퓨터에 ~을 주세요라고 계속 요청하게 됨.
  - 브라우저가 해석을 할 때 코드를 위에서부터 해석을 하게 됨
  - 이미지를 문자열로 그려버리면 브라우저에서 이 문자열을 보고 바로 그려버림. 서버에서 리소스를 요청하는 과정이 삭제되므로 렌더링이 빨라진다.

### 빌드

- 빌드를하면 dist 폴더내에 동일 이미지 파일이 저장된다
- 하지만 파일명은 해쉬코드로 작성되어있다. 외부에서 알아볼 수 없게끔 만든 것이다.
- 빌드를 진행하고 이미지 파일을 모듈에서 불러오게 되면 이미지의 이름이 해시 값으로 바뀌어 있는 것을 확인할 수 있습니다. 이는 이미지가 갱신되었을 때 파일명이 기존과 동일할 경우 브라우저가 여전히 이전 이미지를 보여주는 경우를 막기 위해서입니다. 캐쉬값이 기존의 이미지를 저장하고 다시 부르게 되는 경우에 이미지가 업데이트 되지 않도록 함을 방지합니다.

- 이름은 동일한데 이미지만 바뀌면 에전이미지를 브라우저에서 저장을 해놓고 이미 준비하고 있음. 사용자가 들어오면 브라우저 캐쉬에 있는 이 이미지를 띄움. 그래서 가끔 브라우저가 이미지를 클릭해도 예전이미지를 띄울때가 있다.

### webpack.config.js

```js
const path = require("path");

module.exports = {
  // nodejs 문법 (모듈을. 밖으로 빼냄)
  mode: "development", // js객체 문법
  entry: {
    //entry: 시작점
    main: path.resolve("./src/app.js"),
    // 경로 (./src/app.js가 시작점이라는 것)
    // path는 require해서 사용해야 함
    // OS별로 경로를 설정하는 것이 다를 수 있으나, path 모듈을 사용하면 동일하게 경로를 찾을 수 있다
  },
  output: {
    // output: 번들링한 결과물을 내놓을 위치
    filename: "[name].js", // name에는 entry의 key값이 자동으로 들어옴
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        // 로더가 처리해야할 파일의 패턴 (정규표현식)
        // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$는 .js로 끝나는 모든 파일
        // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 뜻함
        test: /\.js$/, // 이스케이프 기호를 사용
        use: [
          // 위와 일치하는 패턴의 파일이 전달될 로더를 설정함
          path.resolve("./myLoader.js"), // myLoader라는 함수로 실행을 시키겠다
        ],
      },

      /* css-loader */
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 여기 추가합니다.
        test: /\.(png|jpg|gif|svg)$/, // 해당하는 포맷을 가진것을 처리하겠다는 뜻
        // type: 'asset/inline',
        // 인라인을 남기면 무조건 문자열로 바뀌므로 parser를 적용시키고 싶다면 inline을 제거하고 적용시킬 것
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
            // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
            // 변경시켜줄 이미지의 용량을 제한시켜줌 (로딩속도를 컨트롤 하기위함)
          },
        },
      },
    ],
  },
};
```

- 이미지 요청 횟수를 줄이기 위해 이미지 스프라이트 기법을 사용했었다.
- 하지만 웹팩을 사용하면 필요한 이미지를 골라서 렌더링하기 위한 이미지 스프라이트 기법을 사용할 필요가 없다. (다운로드를 받을 필요가 없게 되기 때문이다)

<br><br>

## 플러그인

- 최종적으로 번들된 결과물을 가공하고자 할 때 사용함

### 1. BannerPlugin

- Banner: 주석
- 번들링된 파일(dist 폴더 내에 있는것들)의 최상단에 주석을 달아줌

#### 번들링 완료된 결과물

- dist > main.js의 최상단에 주석이 달린것을 확인

#### $ git rev-parse HEAD

- 깃에 커밋을 할 때마다 남는 고유한 해쉬값
- 예시) 4273ca5bbf401871fbf7b8025b3cb5031775ac35

#### $ git rev-parse --short HEAD

- 커밋 해쉬값을 짧게 보여줌
- 예시) 4273ca5

#### $ git config user.name

<br>
<br>
<br>
