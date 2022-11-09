# 22.11.09 (수)

# https

- 암호화/복호화 작업을 해야하므로 https가 http보다 느림
- 로그인 데이터와 같이 민감한 정보만 암호화하고, ~~~패킷 내에 암호화해서 전송

# 014. 쇼핑몰 만들기

- fetch를 사용하지 않았으므로 복잡도를 낮춤

## react atomic 디자인 패턴

- https://ui.toast.com/weekly-pick/ko_20200213
- 모두 .js나 .jsx로 만든 다음 원자단위까지 쪼개는 것
  - 아토믹 패턴의 단점: 느리다
- 회사에서는 아토믹 패턴을 a-z모두 도입하는 경우는 없다 (느리므로), 적절히 하이브리드 형태로 사용함

# 015

- key가 무엇인가?

```js
/* step2 */
function ProductList() {
  /* js 문법 사용 */
  // console.log(productData);
  let result = [];
  productData.forEach((i) => {
    // 아이템을 구분할 수 있는 key를 넣어줘야 함 (식별자 역할)
    result.push(<ProductInfo item={i} key={i.id} />);
  });
  return <ul>{result}</ul>;
}
```

- 각 그림 영역을 구분하기 위해 key가 필요
- CreateElement하는 것이 DOM임
- DOM은 여기에 백만개의 아이템을 로드할 때 DOM 컨트롤하기가 힘든 것(헤비하므로). 따라서 Virtual DOM을 사용하는 것임
- Virtual DOM이 혁신적으로 빠르다고 보기 힘들다. 아이템 개수가 적을 때에는 DOM와 Virtual DOM이 비슷하다.
- 그림 및 내용을 수정하고 싶으면 DOM은 그림을 다 다시 그림. Virtual DOM은 이와달리 KEY값으로 다시 그림

# 모듈화

- html에서 굳이 cdn을 써서 연습하니까 불필요한 코드가 늘어나는 것이다. 노드 환경에서 작업하면 이러한 코드들은 적지 않아도 실행된다.

# modularization 03

- 웹에서 굳이 react를 하고 싶은것.
- 앞으로 cdn 방식을 사용하지 않을 것임
- 직접 웹에서 설치해서 웹팩이 묶어주는 역할을 할 예정

## [API](http://test.api.weniv.co.kr/mall)

<br><br>

# 클라우드

# 서버

- 24시간 돌아가는 컴퓨터

# 리눅스

- pwd: Print Working Directory (현재 위치한 경로 출력)
- touch: 파일생산하는 명령어

## vim

- 생산속도를 매우 빠르게 만듦

<br>

# Node

- 자바스크립트를 시스템 환경에서 사용이 가능하게 만듦
- 웹브라우저에서 종속되어있던 것이 노드환경에서 실행이 가능함

# npx

- 리액트를 바로 실행할 수 있도록 세팅까지해서 돌려줌

# ㅁ
