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
  - ㅁ
