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

<br><br>

# 추가내용

## 회원가입

- API

```js
POST / user;

// 메서드 / 전송 url
```

- Req

  - body(json)

```js

{
  "user":{
    "username": String,
    "email": String,
    "password": String,
    "accountname": String,
    "intro": String,
    "image": String    // 예시) https://mandarin.api.weniv.co.kr/1641906557953.png
  }
}
```

- header

```js
{
  "Content-type": "application/json"
}
```

- 필수작성: username, email, password, accountname
- email: 이메일 형식에 맞게 작성할 것
- accountname: 영문자, 숫자, 점(.), 밑줄(\_)만 포함해야 함
- image가 없을 경우 기본 이미지가 적용됨.

### post

- 전송 url

```
https://mandarin.api.weniv.co.kr/user
```

- 회원가입 성공시 결과

```
{
    "message": "회원가입 성공",
    "user": {
        "_id": "63a144c417ae666581d02f21",
        "username": "danny",
        "email": "dannytest4@test.com",
        "accountname": "testdanny4",
        "image": "http://146.56.183.55:5050/Ellipse.png"
    }
}
```

### get

- 전송 url

```
http://146.56.183.55:5050/Ellipse.png
```

- 결과물은 이미지로 나옴

- 우리가 검색창에 검색어를 입력해서 이미지를 얻어내는 과정이 `get요청`이었음

## 이미지

### 메서드 - post

- 전송URL: https://mandarin.api.weniv.co.kr/image/uploadfile

- HEADER

```
KEY: Content-Type
VALUE: multipart/form-data
```

- Body > form-data

```
KEY: image
VALUE: 9ivot.png
```

- 결과물

```json
{
  "fieldname": "image",
  "originalname": "9ivot.png",
  "encoding": "7bit", // 용량
  "mimetype": "image/png", // 확장자
  "destination": "uploadFiles/", // 서버상 어디 경로에 있는지
  "filename": "1671516865785.png",
  "path": "uploadFiles/1671516865785.png",
  "size": 89772
}
```

- 이미지 확인

  - 주소값 뒤에 filename을 붙여넣으면 이미지를 확인할 수 있다

- 이미지 확인용 URL
  - 인터넷 주소창에 아래의 URL을 입력해도 좋고, POSTMAN에서 해당 URL을 GET 방식으로 가져오면 이미지 결과물을 확인할 수 있다

```
https://mandarin.api.weniv.co.kr/1671516865785.png
```

## 로그인

### 메서드 - POST

- 전송URL

```
https://mandarin.api.weniv.co.kr/user/login
```

## 프로필 정보 불러오기

### API

- 메서드: GET
- 전송 URL: /user/myinfo

### Req

```json
{
  "Authorization": "Bearer {token}"
}

// Authorization: 인증, 허가
// 인증 및 허가를 받는 과정
// 토큰만 보내달라고 명
// Bearer: 서버에서 정해진 키워드
// 때에 따라서 "Authorization": "Token {token}" 으로 쓰기도 함
```

### 포스트맨 실습

- 메서드: GET
- request url

```
https://mandarin.api.weniv.co.kr/user/myinfo
```

- 결과물 Body

```json
{
  "message": "토큰이 없습니다.",
  "status": 401
}
```

- 인증을 못받았다는 뜻이다.
- 토큰?
  - API라는 놀이동산을 이용할 수 있는 자유이용권에 해당하는 팔찌

#### 토큰을 이용하자

- POST를 통해 얻어온 로그인 토큰을 GET 메서드를 사용할 때 Headers의 VALUE값에 넣어주자

  - KEY: Authorization
  - VALUE: Bearer [토큰]

- 위와 같은 설정을 하고 나서 GET 방식으로 Send를 하면 내 정보를 얻을 수 있다

```json
{
  "user": {
    "_id": "63a144c417ae666581d02f21",
    "username": "danny",
    "accountname": "testdanny4",
    "image": "http://146.56.183.55:5050/Ellipse.png",
    "isfollow": false,
    "following": [],
    "follower": [],
    "followerCount": 0,
    "followingCount": 0
  }
}
```

- 로그인을 하게 되면 서버에서 나(유저)에 대한 정보를 줌

  - 이 정보에 token이 포함되어있다
  - 토큰: 이용권한에 대한 허가증서
  - Bearer: 인증 타입. 서버에서 정해진 키워드이며 명세에 따라 달라짐.

## JWT

- Json Web Token

- 두 당사자(로그인 한 회원(토큰을 가지고 있는 클라이언트) - 토큰을 사용하게 되는 서버(혹은 인터페이스))간 클레임을 안전하게 표현하기 위한 개방형 업계 표준 방법

- JSON을 알 수 없는 규칙으로 암호화함

- 토큰을 밖으로 유출하면 안됨

## 토큰

- 토큰에는 유효기간이 있다 (자유이용권을 끊으면 1일동안 유효함 등을 떠올릴것)

- refreshToken은 Token으르 새로고침하는 `재발급`의 의미를 지니고 있다. 토큰(자유이용권 팔찌)가 하루치일 경우 리프래쉬토큰을 통해 한달치 이용권이 있으니 갱신해달라고 요청할 수 있음

## 이메일 검증

- 회원가입할 때 사용함

### API

```js
POST / user / email / valid;
```

- 주의사항) Headers의 KEY: Content-Type의 VALUE로 `application/json`을 설정하지 않아서 오류를 내는사람이 너무 많다
  - 오류 발생시 `잘못된 접근입니다`라고 오류메시지가 등장함

## 우리가 만든 서비스에서 회원가입을 하지 않아도 이용가능하게 만들기

- 로그인 화면이 만들어졌는데 회원가입 화면이 아직 만들어지지 않았을 경우 api로 직접 회원가입을 요청한 다음 postman이나 javascript의 fetch등의 로직을 사용할 수 있다.

## query string

## 유저 검색

### API

```js
GET /user/searchuser/?keyword=keyword
```

- **keyword**에 우리가 찾기를 원하는 검색어를 입력합니다.
- keyword에는 accountname, username을 검색할 수 있습니다.
- 요청하는 부분이 `user/searchuser/?keyword=keyword`와 같은 문자열로 fetch해서 결과가 나오는 것임

## 팔로워 리스트
