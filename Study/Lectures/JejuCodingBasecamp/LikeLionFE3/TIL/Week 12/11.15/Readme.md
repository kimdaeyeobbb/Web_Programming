# 22.11.15 (화) 수업

# React 기본설정

## 개발환경 설정 & 새로운 프로젝트 생성

- `npx create-react-app my-app` 명령어를 입력

### 모듈따로 생성해서 명령어를 제작해놔도 됨

<br>

# 리액트 이벤트

- 리액트의 이벤트는 카멜케이스를 사용함.

  - (DOM의 이벤트는 소문자를 사용함)

- JSX를 사용하여 함수로 이벤트 핸들러를 전달함
  - (DOM은 문자열로 이벤트를 전달함)

## 이벤트 종류

- onClick
- onChange
- onInput
- onMouse
- onLeave
- [참고자료](https:/kok.reactjs.org/docs/events.html#other-events)

# 핸들러 함수

- 앞에 접두사`handle`을 붙여준다 (관습적인것, 회사 컨벤션마다 다를 수 있다)

<br><br>

# :nine: 컴포넌트 리스트 만들기

- ㅁ

# [HTTP 응답코드](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)

- 서버에서 번호를 주기 때문에 가짜 코드를 줄 가능성이 높다.
- 풋프린팅
- 해커가 일부러 번호를 속여서 준다
- 404는 잘 주지 않고, 마치 성공한것처럼 속인다.

<br><br>

# 스타일드 컴포넌트

## 장점

- 클래스명을 고민하지 않고 바로 쓰면됨

## 사용

```js
import styled from "styled-components";

const ContentsDivOne = styled.div`
  color: red;
`;

const ContentsDivTwo = styled.div`
  color: green;
`;

const ContentsDivThree = styled.div`
  color: red;
`;
```

- 태그는 내가 설정하는 것임. div 대신 다르게 써도 됨 (h2 등)
- ContentsDivThree 대신 다른 이름을 붙여도 됨 (SectionTitle 등)

- 컴포넌트 안에서만 스타일링이 되므로 독립적임
- 클래스명을 유추할 수가 없으므로 정보를 빼가기가 매우 힘들다

## 해외 대형 사이트에서 div로 뒤덮는 이유

- 보안떄문에 그렇다
- 데이터를 가져오고 싶을 때 태그나 클래스로 가져오는 경우가 많다.
