# 22.11.23 (수)

# axios (cdn 방식) 예시

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <script>
      const url =
        "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json";
      axios.get(url).then((response) => {
        console.log(response);
      });
    </script>
  </body>
</html>
```

# node module best top 10

- [참고자료](https://www.google.com/search?q=node+module+best+top+10&oq=node+module+best+top+10&aqs=chrome..69i57.407j0j4&sourceid=chrome&ie=UTF-8)

# axios 설치

```bash
npm i axios
```

# 모듈

- 나중에는 모듈을 직접 확인해보면서 구성을 파악하는것도 좋다

# 리덕스

- 리덕스가 문법이 복잡해서 상태관리 툴을 직접 만들어서 쓰는 회사도 있다.

# Axios - HTTP 메서드 지원

- HTTP 메서드 지원
  - axios.get(url, conf)
  - axios.delete(url, conf)
  - axios.post(url, data, conf)
  - axios.put(url, data, conf)
  - axios.patch(url, data, conf)

# 구조분해할당을 통한 props 전달

# useLayoutEffect와 useEffect의 차이점

- 페인팅 이전에 동작하는지 유무

- 페인팅 이전에 실행 되는 것
  - useLayoutEffect

# onChange로 유효성 검사한 예시

- [참고자료](https://velog.io/@leemember/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC)

# 리덕스 참고자료

- [참고자료](https://www.youtube.com/watch?v=yjuwpf7VH74&ab_channel=%EC%83%9D%ED%99%9C%EC%BD%94%EB%94%A9)
- [참고자료2](https://www.youtube.com/watch?v=QZcYz2NrDIs&t=334s&ab_channel=%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C)

# 이미지가 왜 깨질까?

- 서버가 업데이트 되었는데 못 알아차린것

# 구조분해할당

- [참고자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

# [과제] 쇼핑몰 메인 페이지 프로젝트

- 깃허브 링크 제출 (일반 코드만 있는 페이지가 아닌 실행이 되는 github pages로 링크를 전달해주어야 함)

  - 코드를 다 짠다음 빌드하면 깃헙 페이지 완성!

- 페이지 구현 추가 (페이지는 구현하지 않고 빈 페이지로 만듦)

  - (나아가기) 상세페이지 (모달)
  - (나아가기) 장바구니 (주문페이지)

- styled component로 변경하기

## 추가 요구사항

- (나아가기) 장바구니 추가와 상품 좋아요 기능을 구현해야 함

  - 장바구니 추가와 좋아요 상품 추가는 클라이언트 내에서만 기록되고 동작해야 함

- (나아가기) GET 작업 외 POST, PUT, DELETE 작업은 요청만 보내고 반영되지 않음

  - success 메시지를 통해 제대로 전송이 되었는지만 확인이 가능함

- 쿠폰 기능 추가하기

# 폴더구조

- 폴더 내에 아무것도 없으면 깃허브에 올라가지 않음

- `.keep` : 숨파일

- `ls -al` : 숨김파일까지 확인

# 업무 자동화

- 회사에가서 자주 나오는 것을 세팅해서 업무 자동화 하면 이쁨받음.

# mv

- 파일 이름 바꾸는 명령어

```bash
$ mv Cart.css cart.css
```

# ~

- 하나의 데이터마다 통신상에서 주고 받아야 하는 패킷이 있으므로~

# 작업

- 페이지 보면서 작업할 것

# {...{}}

- 예제1

```js
test = 'hello'
test // 'hello'
{test} //{test: 'hello'}
{...test} // {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}
{...{test}} // {test: 'hello'}
```

- 예제2

```js
let thumbnailImg = 'asset/img/1/thumbnailImg.jpg'
{thumbnailImg }   //{thumbnailImg: 'asset/img/1/thumbnailImg.jpg'}
{...thumbnailImg}   //{0: 'a', 1: 's', 2: 's', 3: 'e', 4: 't', 5: '/', 6: 'i', 7: 'm', 8: 'g', 9: '/', 10: '1', 11: '/', 12: 't', 13: 'h', 14: 'u', 15: 'm', 16: 'b', 17: 'n', 18: 'a', 19: 'i', 20: 'l', 21: 'I', 22: 'm', 23: 'g', 24: '.', 25: 'j', 26: 'p', 27: 'g'}
{...{thumbnailImg}}   //{thumbnailImg: 'asset/img/1/thumbnailImg.jpg'}
```

# e.currentTarget.classList

- [참고자료](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

# 참고자료

- [리액트 프로젝트 코드리뷰](https://paullabworkspace.notion.site/8f9d7e30fd6643da9e5123bf278127e8)
- [아토믹 디자인을 활용한 디자인 시스템 도입기](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)
- [useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [React 디자인 패턴](https://woong-jae.com/react/220609-react-design-pattern)
- [유용한 리액트 패턴](https://velog.io/@dnr6054/%EC%9C%A0%EC%9A%A9%ED%95%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%8C%A8%ED%84%B4-5%EA%B0%80%EC%A7%80)
