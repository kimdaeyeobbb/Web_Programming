# 22.11.25 (금)

# 왜? (\*\*\*\*\* 중요)

- 이 기술을 왜 써야하는가에 대해서 고민을 해오고 팀원끼리 얘기해보기

# API (Application Programming Interface)

- 애플리케이션 프로그래밍시 상호작용할 수 있게 도와 줌

# 감귤마켓

- 게시글리스트를 아직 구현하지 못했을 때 빈화면만 일단 띄워놓는 걸로 진행

## 검색창

- 검색창에 타이핑을 칠 때 keyup이나 keydown을 이용해서 '안녕하세요'를 칠 때~
- 입력이 끝나고 특정 초가 지난 이후에 서버로 전송하기
- 글자가 완성되면 요청?

## 채팅기능

- 채팅 API는 제공하지 않음
- 채팅은 디자인만 구현해도 좋음. (아니면 로컬스토러지 이용해서 구현해도 됨)
- 채팅하는 것처럼 채팅하는 척 해도됨.
- 대부분은 디자인만 구현함.

## API 툴

- [POST MAN](https://www.postman.com/)

## 포스트맨 다루기

### token

- token: 로그인을 했다는 증거. 토큰에 권한이 들어있음. 롯데월드 입장시 손목에 차는 자유이용권 팔찌정도로 생각하면 됨.
- 토큰이 없다: 너는 아직 준비가 안되었다. 입장권이없다. 자유이용권 팔찌가 없다.

- 서버에서 토큰을 찍으면 내 정보가 나옴.

- 방법: 브라우저에 let 변수로 사용해도됨 (페이지 닫으면 로그아웃 됨) / 쿠키 / 로컬스토리지 (페이지 닫아도 로그아웃되지 않음)

- 내부에 유통기한이 적혀있음
- 1달치 이용권을 사고 자유

- 토큰을 공유? => 넷플릭스 아이디를 공유하는 느낌이라고 생각하면 됨

### refreshToken

- token을 새로고침하기 위해서 필요함
- 검색하면서 공부하라고 넣어놓은 것임. 너무 걱정하지 말것.

### Authorization

- 서버에서 토큰을 받아서 통과를 해줌 (놀이기구의 슈퍼패스 같은 것)
- 토큰은 직접 구현해야 함

### JWT

- Json Web Token

### 우리는 서버에 보내주면 서버에서 알아서 토큰을 만들어줌

- JSON을 알 수 없는 규칙으로 해서 ~

<br>

# 특강- 실전

- [특강 레포 주소](https://github.com/weniv/frontend-school-22-11-25)

```html
<input
  type="file"
  id="profileImg"
  name="profile-img"
  accept="image/*"
  class="ir"
/>
```

- `accept="image/*"` : 이미미지 형식의 파일만 확인할 수 있다는 것

## 개발자란?

- 문제를 찾아서 해결하는 사람

## 기능넣기

1.  submit을 하기 위해서 필요한 데이터를 읽고/만들기 (input창의 데이터를 모음)<br>
    js로 서버에 직접 요청을 할것이므로 button type="button"을 사용한 것<br>

        1. submit 버튼을 클릭했을 때 잘 클릭이 되는지 확인<br>
        document - 브라우저가 켜졌을 때의 화면<br>
        dom - 객체형태로 나타낸 모델<br>
        doument.querySelector() - 화면에 쿼리를 선택해 달라는 것. ()내부에 아이디 클래스등을 사용할 수 있음<br>
        `document.querySelectorAll()`: `문서.명령선택전체`꼴임<br>
        2. aㅇ
        3.

2.  a
3.  a
4.

## 데이터 전송과 관련된 element학습해서 채워넣기

## 비동기 처리

## fetch 이해하기

```js
const 요청명세생성기 = (배송형태, 요청사항, 주문정보) => {
  const 뭔가데이터오브젝트 = {
    method: 배송형태, // post, get, delete 등 적기
    headers: 요청사항,
    body: JSON.stringify(주문정보), //body data 문자열형태로 넣기
  };
  return 뭔가데이터오브젝트;
};
const 가게 = "http://146.56.183.55:5050/user";
const 요청명세 = 요청명세생성기(
  "POST",
  { "Content-type": "application/json" },
  userData
);

fetch(가게, 요청명세)
  .then((res) => res.json())
  .then((json) => console.log(json));
```

- fetch는 서버에 요청하기 위한 도구이다
- 비동기로 진행되는 fetch는 web API가 코드를 순서대로 처리해주고 그 결과를 테스트큐에 넣어준 뒤 콜스택이 비면 결과가 나오게 됩니다.

- [자바스크립트 동작원리](https://www.youtube.com/watch?v=v67LloZ1ieI
  YouTube)

## async await

- [비동기 처리](https://www.yalco.kr/21_async/)

## 로컬스토리지

- 키와 값이 문자열로 되어있음
- 저장해야 하는 것: 토큰 (입장권만 있으면 됨. 아이디,패스워드 저장하면 큰일남. )
- 로그인 했을 때 토큰을 json에서 가져와서 저장함
