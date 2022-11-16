# 22. 11. 16 (수)

# 기본적으로 필요한 모듈만 설치하는 명령어

- `npx create-react-app my-app --template basic-react`

# 추가로 실행하면 좋은 명령어

- `npm install styled components styled-reset`

# 금일 수업 참고 피그마

- [제주코딩베이스 캠프 파이널코딩테스트 api figma](<https://www.figma.com/file/KdWIgQ5VBQYPPlMB2ER6TX/%ED%8C%8C%EC%9D%B4%EB%84%90%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8_API(%EA%B3%B5%EA%B0%9C%EC%9A%A9)?node-id=3%3A32&t=e5KLn0XZPwaOKB15-0>)

# 숙지할 사항

- 수업이 끝나고 나서 꼭 파일 분기를 스스로 해볼 것
- reset코드 + 커스텀 reset코드 + 유틸리티 코드 , 한줄 말줄임, 두줄 말줄임 등을 숙지할 것)

# <ProductList/>와 <ProductList><ProductList/>의 차이점?

- virtualDOM?
- [Virtual DOM 참고자료 1](https://www.youtube.com/watch?v=1ojA5mLWts8&ab_channel=%EC%96%84%ED%8C%8D%ED%95%9C%EC%BD%94%EB%94%A9%EC%82%AC%EC%A0%84)
- [Virtual DOM 참고자료 2](https://www.youtube.com/watch?v=PN_WmsgbQCo&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech)
- [Virtual DOM 참고자료 3](https://www.youtube.com/watch?v=6rDBqVHSbgM&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech)
- [Virtual DOM 참고자료 4](https://edu.goorm.io/learn/lecture/16422/%EA%B0%80%EC%9E%A5-%ED%95%AB%ED%95%9C-fe-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-react-%EA%B0%80%EC%A7%80%EA%B3%A0-%EB%86%80%EC%95%84%EB%B3%B4%EA%B8%B0/lesson/784014/react%EC%9D%98-%ED%8A%B9%EC%A7%95-%EB%B0%8F-%EC%9E%A5%EC%A0%90)

# 참고자료

- [span](http://www.tcpschool.com/html-tags/span)
- [인라인요소](https://developer.mozilla.org/ko/docs/Web/HTML/Inline_elements)
- [fetch 사용하기](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)
- [fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)
- [fetch](https://ko.javascript.info/fetch)
- [async await](https://ko.javascript.info/async-await)
- [async function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)
- [async await](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)

# 스타일 컴포넌트

- 스타일 컴포넌트 하나하나마다 폴더를 나누는 경우도 있고, 아닌 경우도 있음
- 코드가 길어지면 따로 분리하는것을 권장
- [스타일드 컴포넌트 자료](https://react.vlpt.us/styling/03-styled-components.html)

# 030

- 복습하기 빡셈. 가볍게 보고 호준님이 고쳐서 피드백 주시면 그때 다시 보기
- Object들로 요소들을 이어주는 것
- DOM: 실제로 렌더링 된 것
- DOM API: 하나씩 컨트롤이 가능하게 함
- Virtual DOM: 경량화된 Object 자체

- 리액트의 장점: 리액트는 경량화된 Object를 활용한다

<br>

# children으로 들어오지 않는 이유

- ............보충 요망

<br>

# 030- 조언

- 오늘처럼 이렇게 깊게 들어갈 이유가 없음 (리액트 알고리즘을 다 뜯어본것이므로)
- 성능이슈가 생기면 그때 성능 이슈에 대한 해결책을 찾으면 되는것임
- 교재 목차에도 없는걸 한것임

<br>

# 리액트의 정체

- 경량화된 Object

<br>

# 028 부분 다시 복습함

# 리액트 UI 라이브러리

- [참고자료](https://usecode.pw/10-best-react-ui-library/)

# 중요!!! 참고사이트

- [참고자료](https://mui.com/material-ui/react-card/)

# url

- url은 대소문자를 가리지 않음

# rest api

- rest api를 지키면서 개발하는 회사는 거의 없다고 보면 됨

# URL 구조

## 프론트엔드의 URL 구조

```
// 아래의 것들은 하나의 페이지에서 이동함

hojun.com/
hojun.com/product/1
hojun.com/cart
hojun.com/buy
```

## 백엔드의 URL 구조

```
// 백엔드 라우팅
// 들어오는 값에 따라서 어떤값을 넘겨줘야할지가 다름

http://test.api.weniv.co.kr/mall   // 제품정보를 받아갈 수 있습니다
http://test.api.weniv.co.kr/asset/img/1/thumbnailimg.jpg   // 여기서는 제품의 이미지를 받아갈 수 있습니다
```
