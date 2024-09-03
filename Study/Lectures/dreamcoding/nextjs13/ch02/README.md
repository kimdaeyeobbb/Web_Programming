# Next.js 란

- React.js 기반의 프레임워크
  - 리액트는 자바스크립트 라이브러리이며, 웹/모바일 앱을 쉽게 만들 수 있게 도와줌
- SSR(Server Side Rendering) 지원

## 라이브러리란

- 특정문제를 해결하기 위한 솔루션
- 필요에 의해 가져다가 쓸 수 있음
  - UI 툴
  - 상태관리 툴
  - 라우팅 툴...

![img.png](img.png)

## 프레임워크란

- 큰 단위의 솔루션 제공 (골격 제공)
  - 이 골격 내에 우리가 원하는 것을 채워나감

<br>

# Next.js 특징

- PasS인 Vercel에서 만듦

  - cloud Platform As A Service

- 리액트로 웹 UI를 만들면서 SSR을 쉽게 적용할 수 있음

  - SEO(Search Engine Optimization)에 유리
  - 초기 로딩 속도가 빠름

- 6가지 원칙
  - **Zero Configuration**: 설정이 필요없음
  - **File System Based Router**: 파일 시스템 기반의 라우팅 제공
  - **Automatic Code Splitting**: 자동 코드 분할 (번들링 불필요. 필요한 부분만 로딩)
  - **configurable data-fetching**: 데이터 패칭을 설정가능하게 만듦. (SSR, CSR, SSG) -> 효율적인 웹앱 만듦
  - **anticipating requests**: 사용자가 요청할 페이지를 예상하게 만듦
  - **simplifying deployment**: 배포를 쉽게 만듦

# CSR

- Client Side Rendering
  - 브라우저에 표현하기 위한 모든 코드들을 다 다운로드 받아서 클라이언트측에서 코드를 실행하고 분석해서 표기하는 방식
- 한번 로딩되면 빠른 UX 제공
- 서버의 부하가 적음
- 페이지 로딩 시간 (Time To View)이 길다 -> 사용자가 처음 페이지를 보기까지의 시간이 오래걸림
  - UI요소가 모두 로딩된 후에 사용자가 보게됨
  - 자바스크립트 활성화가 필수임 (자바스크립트를 사용자가 비활성화 시켜놓으면 화면에 볼수 없음)
- SEO(Search Engine Optimization)에 불리함
  - React.js는 크롤러들이 리액트와 JS를 이용해서 가상의 브라우저에서 어떤 내용이 들어있는지 확인하지 않는 이상, 빈 페이지만 보여줌
- 보안에 취약함
  - 클라이언트의 코드를 모두 받아서 실행하기 때문에 보안에 취약함
- CDN에 캐시가 안됨
  - CDN(Content Delivery Network)에 캐시가 안되기 때문에 서버에 부하가 많이 걸림

## CSR 동작

1. 처음에 받아온 localhost (html 파일)은 UI요소가 없는 html 파일을 받아오는 것임
2. 그다음에 웹팩이 번들링한 우리 코드와 react 라이브러리 자체를 다운로드함
   (+ installhook.js, react_devtools_backend.js 등을 다운로드)

- CSR이란 처음에 아무 UI가 없는 요소를 받아오고 그 UI를 렌더링하기 위한 자바스크립트 파일을 모두 다운로드 받아야만 브라우저 자체적으로 해당 코드를 이용해서 UI 요소를 보여줌

# SSG

- Static Site Generation
- 정적인 사이트로 배포
- 렌더링하는 주체가 '서버'
- 서버에서 렌더링이 되긴하지만 언제 렌더링이 되느냐에 따라서 SSR이냐, SSG인지가 구분됨
- SSG는 어플리케이션을 서버에 배포해서 처음으로 빌드할때 렌더링 됨.
  (빌드할떄 우리가 작성한 코드를 서버에서 실행하면서 리액트 코드를 html로 변환해줌.)
- 클라이언트측에서 받아온 html을 표기만하면 되기때문에 사용자가 홈페이지에 접속하면 CDN에 캐시된 파일을 빠르게 가져올 수 있음
- 페이지 로딩시간 (Time To View)이 빠름
  (서버에서 미리 만들어둔 HTML 파일을 가져오기 때문)
- 자바스크립트 필요 없음
  (자바스크립트 활성화가 되어있지 않아도 빠르게 컨텐츠를 볼 수 있음)
- SEO 최적화가 좋음
- 불필요하게 코드를 클라이언트 측으로 보내지 않아도 되므로 보안이 뛰어남
- CDN에 캐시가 됨

- 문제점
  - 데이터가 정적임 (빌드할때 미리 렌더링해놓기 때문, 가변적인 웹사이트에는 부적절)
  - 사용자별 정보 제공이 어려움 (모든 사용자들에게 동일한 정적데이터일때에만 유용)
  - 이를 해결하기 위해 ISR, SSR이 등장

# ISR

- Incrementatl Static Regeneration
- 주기적으로 다시 만들 수 있는 방식
- 렌더링하는 주체가 서버
- 주기적으로 렌더링
- 우리가 설정한 주기만큼 페이지를 다시 만들어줌 (ex. 5분마다 ISR 설정 -> 5분마다 페이지를 만듦)
- 장점
  - SSR의 장점 + 데이터가 주기적으로 업데이트 됨 (데이터의 변경사항을 적용해서 웹 페이지를 업데이트)
- 단점
  - 여전히 실시간 데이터가 아님 (내가 설정한 주기가 지나야 업데이트)
  - 여전히 사용자별 정보 제공이 어려움
  - 이를 보완하기 위해 SSR이 등장