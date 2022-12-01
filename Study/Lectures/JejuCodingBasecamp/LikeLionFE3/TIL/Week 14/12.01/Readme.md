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

# webpack
