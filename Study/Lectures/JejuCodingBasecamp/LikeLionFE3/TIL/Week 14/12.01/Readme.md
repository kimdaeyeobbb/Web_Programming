# 22.12.01 (목)

- [validation](#validation)
- [webpack](#webpack)

<br><br>

# validation

- 종류

1. native validation
2. javascript validation

## native validation

- 브라우저에서 제공하는 validation
- html이 사용됨
- 퍼포먼스가 아주 우수함
- 개발자가 원하는 대로 커스터마이징이 불가능함 (브라우저에 validation이 내장되어 있으므로 브라우저가 제공한대로 사용할 수 밖에 없다)

## javascript validation

- 개발자가 원하는대로 커스터마이징이 가능하다
- [참고자료](https://www.w3schools.com/js/js_validation.asp)

## form validation

- 폼에 작성된 데이터를 서버로 전송하기 전에 전송할 데이터들이 올바른 포맷으로 잘 입력되었는지 확인하는 과정

- [참고자료](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [참고영상](https://www.youtube.com/watch?v=Z2YJvBw3pPI&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech)

## form validation을 사용하지 않는다면?

- 사용자에게 입력받은 데이터를

### client side rendering VS server side rendering

- 사용자가 볼 최종 코드를 어디서에서 조립하는지에 있어 차이점이 있음

- [참고자료](https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/)

#### 서버에서 validation을 해야하는 경우

- 서버에서 데이터를 조회해야하는 경우 (아이디, 비밀번호 등)

- 데이터베이스에 있는 데이터를 프론트엔드에서 보낸 데이터와 비교해야하는 경우
- 데이터 중복 검사를 해야하는 경우 (아이디 등)

<br>

## 패턴을 이용한 validation

### input attribute: pattern

- [참고자료](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)

#### 입력하는 글자의 수를 제한하는 예시

- `.`은 모든 숫자와 문자를 의미함

```html
<!-- pattern="..."을 이용해서 세글자만 입력할 수 있도록 강제함 -->
<label for="">세글자만 입력할 수 있습니다.</label>
<input type="text" pattern="..." />
<button>제출</button>
```

#### 선택할 수 있는 문자의 종류 지정

- 대괄호([])는 선택할 수 있는 문자의 종류를 지정할 수 있음

```html
<!-- .은 모든 숫자와 문자를 의미합니다. -->
<!-- 괄호2개라면 처음에 들어가는 것이 첫문자, 두번쨰로 들어가는것이 두번쨰 문자를 지정해주는 것임-->
<label for=""
  >첫번째 문자는 사,과,배, 두번째 문자는 1,2,3만 입력할 수 있습니다.</label
>
<input type="text" pattern="[사과배][123]" />
<button>제출</button>
```

#### 한글과 숫자 제한 없이 입력

```html
<!-- *은 글자의 수를 제한하지 않는다. -->
<label for="">한글과 숫자만 글자 수 제한없이 입력이 가능해야 함</label>
<input type="text" pattern="[ㄱ-ㅎ ㅏ-ㅣ 가-힣 0-9]*" />
<button>버튼</button>
```

#### 입력될 글자수 제한

```html
<!-- 중괄호 내에 숫자를 쓰면 그 횟수만큼 제한 -->
<label for="">한글 세글자만 가능함</label>
<input type="text" pattern="[ㄱ-ㅎ ㅏ-ㅣ 가-힣]{3}" />
<button>버튼</button>
```

## html pattern

- [참고자료](http://www.tcpschool.com/html-tag-attrs/input-pattern)
- [이메일 참고자료](http://tcpschool.com/examples/tryit/tryhtml.php?filename=html5_element_inputattr_14)

### 이메일 pattern

```html
<!-- {}은 글자의 수를 제한할 수 있음 -->
<!-- +수량자: 앞에 문자가 1개~n개, *수량자: 앞에 문자가 0개~n개 -->
<label for="">이메일을 입력하세요</label>
<input
  type="email"
  pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
/>
<button>버튼</button>
```

- [참고자료](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)

## javascript validation

- [constraint validation api](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

### ValidityState

- rangeOverflow: 값이 max보다 큰가
- rangeUnderflow: 값이 min보다 작은가
- valid: 모든 유효성 조건을 통과했다면 true로 바뀜. 아니면 false
- valueMissing: 값이 없다. 값이 존재하면 true. 아니면 false (required속성 붙여도 마찬가지임)

- badInput: false, // 잘못된 입력
- customError: false, // 커스텀 오류
- patternMismatch: false, // 패턴 오류
- rangeOverflow: false, // 범위 초과 오류
- rangeUnderflow: false, // 범위 미달 오류
- stepMismatch: false, // 간격 오류
- tooLong: false, // 길이 오류
- tooShort: false, // 길이 오류
- typeMismatch: false, // 타입 오류
- valid: false, // 검증 결과
- valueMissing: true // 필수값 오류

### 요청한 형식을 일치시키기

- 사용자의 편의성을 고려한 것

- 예시

```html
<body>
  <!-- 지금은 아무런 조작없이 -->
  <form action="">
    <label for="txt">숫자 입력: </label>
    <input type="text" id="txt" />
    <button>제출</button>
  </form>

  <script>
    const inp = document.querySelector("input");
    inp.setCustomValidity("문제가 있어요, 알수 없는 무엇인가...");
    inp.setCustomValidity(""); // 빈 문자열로 바뀌면 에러인 상태를 해제할 수 있음
  </script>
</body>
```

- inp.setCustomValidity("");

  - 빈 문자열로 바뀌면 에러인 상태를 해제할 수 있음

## 과업

- 이메일을 입력하는 인풋창을 만들고 폼을 제출했을 때
- 만약 이메일 양식에 어긋나면 ‘알맞는 양식의 이메일 주소를 입력하세요’ 메세지를 출력하도록 합니다.
- 양식이 올바르다면 제출하도록 만들어보세요.

```html
<body>
  <form action="">
    <label for="txt">입력: </label>
    <input type="email" id="txt" />
    <button>제출</button>
  </form>

  <script>
    const inp = document.querySelector("input");
    //   inp.setCustomValidity("알맞은 형식의 이메일 주소를 입력하세요");

    inp.addEventListener("input", () => {
      if (inp.validity.typeMismatch) {
        // validity중 내가 원하는 속성의 이름 -> type miss match -> 이를 이용하면 어떤점이 부족한지 구체적으로 알 수 있음
        inp.setCustomValidity("알맞은 양식의 이메일 주소를 입력하세요"); //
      } else {
        inp.setCustomValidity(""); // 알맞은 양식이 들어왔으므로 에러메시지 해제
      }
    });
  </script>
</body>
```

- submit 대신 input 이벤트를 사용하는 이유?
  - 체크하는것이 input이 여러개 있을 수도 있다. 각각의 input에 우리가 원하는 대로 각각의 커스텀 validation을 하기 위해서임.

## 여러가지 input의 validation 검사

- 중복된 리소스를 다운받으면 안된다
- preventDefault를 주면 click 이벤트가 취소됨 => [참고자료](https://developer.mozilla.org/ko/docs/Web/API/Event/cancelable)

## 퀴즈 (프로젝트 때도 반드시 진행해야하는 사항)

- 사용자가 입력한 비밀번호를 벨리데이션하는 폼을 만들어 봅시다.
  input은 비밀번호, 비밀번호 확인 두 가지가 있어야하며

이때 만약

1. input에 아무것도 입력하지 않았거나
2. 비밀번호 input과 비밀번호 확인 input의 값이 동일하지 않거나,
3. 비밀번호의 패턴이 정규표현식과 일치하지 않은 경우

에러메시지를 출력하도록 만들어보세요

- 기본 패턴 (대문자와 특수기호 포함 8글자 이상을 입력해야함)

```html
pattern="(?=.*[!@#$%^&*()_+=-])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}"
```

## id & pw validation

- [참고자료](https://www.w3schools.com/howto/howto_js_password_validation.asp)

- [pw reg exp](https://regexr.com/3bfsi)

- id와 pw를 pattern이용하지 않고 script 단에서 처리해주는 것은 효율적이지 않은건가요?

  - script단에서 처리하는 것보다 native방법을 사용하는 것이 조금 더 빠름.

- required가 빠지면 필수 입력사항이 아니므로 굳이 예외처리 해줄 필요가 없음

- [참고자료](https://lynmp.com/ko/article/nr5181b3333a2824ae)
- [회원가입 페이지](https://joooing.tistory.com/entry/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC)
- [클론코딩](https://gajua.github.io/UI-UX/passwordValidation/)
- [자료](https://www.w3resource.com/javascript/form/password-validation.php)
- [자료](https://www.javatpoint.com/confirm-password-validation-in-javascript)
- [자료](https://www.studytonight.com/javascript-howtos/password-validation-in-javascript)
- [자료](https://www.studytonight.com/javascript-howtos/password-validation-in-javascript)
- [자료](https://www.w3schools.com/howto/howto_js_password_validation.asp)

### 디자이너 요청

- validation 메시지가 마음에 안든다!고 하면 => js단에서 validation 처리하고, 마크업을 메시지에 가져다 붙이는 형식으로 해결

## [Validity State](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-validitystate-typemismatch)

<br>

# [webpack](https://paullabworkspace.notion.site/22a86c048f4643a2bc6f17c8531c6100)

- [참고자료]
- 모든 자바스크립트 애플리케이션을 위한 모듈 번들러임
- 모듈 번들러: 웹 애플리케이션을 구성하는 자원 (HTML, CSS, JS, image 등)을 모두 각각의 모듈로 보고 이들을 조합해서 하나의 결과물로 만드는 도구

## CDN

- 웹에 해당 코드가 있는 것.

## npm을 왜 사용하나요?

- 패키지를 쉽게 설치하고 버전관리를 위해서 사용

## 웹팩

- 브라우저의 성능이 높아지고 js 어플리케이션이 점점 고도화 되면서 유지보수의 난이도가 높아졌음. 이를 해결하기 위해 js를 기능 단위로 분리해서 사용하는 코드의 모듈화가 필요했음
- 여러가지 파일을 모듈화 했다가 웹팩이라는 번들러를 통해서 깨끗해서 정리해줄 수 있음.
- TDD할떄 기능구현을 하면 여러 클래스를 생성해서 JS를 분리했다 -> 이를 합칠때 번들러를 이용할 수 있다
- js파일 뿐만아니라 img파일 등을 모두 불러올 수 있음

### 실전 예제 (웹팩아님)

- export, import 기능이 웹팩 기능 중 일부분임.
- script 의 type에 module을 명시할 것

- index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>웹팩</title>
  </head>
  <body>
    <!-- 파일이 분리되어 있으므로 얘를 주석처리하면 plus에 접근할 수 없다는 에러메시지 확인가능 -->
    <!-- <script src="plus.js"></script> -->

    <!-- import, export를 이용 + script type을 module이라고 명시해줘서 모듈 시스템을 이용하고 있음을 명시 -->
    <script type="module" src="app.js"></script>
  </body>
</html>
```

- app.js

```js
import { plus } from "./plus.js";

// 함수의 결과를 콘솔로 찍는 역할
console.log(plus(3, 7));
```

- plus.js

```js
export function plus(a, b) {
  return a + b;
}
```

### 웹팩 설치

- `-D`: 개발용 환경을 구성. 이렇게 설치된 패키지들은 package.json내에 기록됨. but 실제 배포할때는 빼고 사용
- 디팬던시를 기록하는 이유

  - 용량을 작게 만들어줌. gitignore과 비슷한 역할

- package.json
  - 여기에 디팬던시가 추가된것을 통해 웹팩이 설치된것을 확인할 수 있음

```json
  "devDependencies": {
    "webpack": "^5.75.0"
  }

```

### 웹팩 참고자료

- [자료](https://tecoble.techcourse.co.kr/post/2021-06-30-webpack-intro/)
- [자료2](https://tecoble.techcourse.co.kr/post/2021-07-10-webpack-exercise/)
- [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)
- [김정환 블로그](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html)
- [제로초](https://www.zerocho.com/category/Webpack/post/58ac2d6f2e437800181c1657)
