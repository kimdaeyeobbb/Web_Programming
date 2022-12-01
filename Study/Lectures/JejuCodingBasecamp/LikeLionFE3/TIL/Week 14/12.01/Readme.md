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

<br>

# webpack
