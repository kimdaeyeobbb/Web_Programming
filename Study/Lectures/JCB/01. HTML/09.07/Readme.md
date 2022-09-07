- 1M

  1. 순간 부하분산 100명의 동접자
     <BR>(순간적으로 감당할 수 있는 트래픽은 부하분산 형태로 등장)
  2. 월간 트래픽(비용) 관리 측면

- 3G

  - 3000명 이상 접속하면 뻗음
  - 하지만 보통 3000명을 감당 못할것임. 보통 홈페이지에서 영상만 다루는것이 아니므로 대략 1500명 ~ 2000명만 감당할 수 있을 것임

<br>

## 코덱 vs 포멧

- 각각 브라우저에 따라 지원하는 코덱과 포멧이 다르므로 구분해서 알아둘 것

- 코덱

  - 녹화를 하면 얻는 원본 정보 영상

- 포맷
  - 포덱을 담아 재생 가능한 플레이어에 전달 되는 컨테이너의 역할

<br>

# form

- form method

  - 전달방식(택배, 직접배송, 부탁 등)에 대한 방식은 `method`에 속함

- form action

  - a

- 서버 구성

  - 서버: 서빙해주는 역할 (24시간 돌아가는 컴퓨터). 대부분 ip연결이 되어있음.
  - 웹 서버: 웹 서버는 정적 파일(홈페이지의 이미지 등 변하지 않는것. 단, 사용자가 올리는 이미지는 변하므로 동적 파일임. 동적 파일은 웹서버에서 관리하는 다른 스토리지에서 가져옴)을 서빙(PHP와 같은 프로그래밍 언어도 처리하기는 함.)
  - 앱 서버: 두뇌 역할.
  - DB: 데이터 저장. (이미지는 DB에 저장하지 않음. 이미지 경로만 저장. 이미지를 DB에 저장할 경우 DB에는 텍스트로 들어가야 함. 근데 이미지를 텍스트로 넣어가면 한 이미지당 텍스트가 굉장히 길어지는데 이것을 가져와서 뿌려주는 작업이 비효율적이다. 검색 또한 오래걸린다. 이미지는 별도의 API 이미지 서버를 따로 두어 정적 파일에서 웹 서버를 가져오게끔 만듦. 클라이언트는 API 이미지 서버에서 정보를 가져옴. 이미지 서버를 따로 두어 처리하므로 분산처리가 가능함)

- 로컬에서 작동할 경우

  - 단점:트래픽 확장이 어려움, 들어오는 트래픽 제한 (대역폭인 bandwith의 문제). 정전 (클라우드 서버같은 경우 UPS가 존재. 정전발생시 UPS가 버텨주는데, 로컬에서는 정전으로 인해 서버가 날아갈 수 있음)
  - 장점: 비용(전기세+인터넷 비용정도만 있으면 OK)

- 클라우드

  - 단점: 비용이 비쌈
  - 장점: 서버 확장이 쉽다. 똑같은 서버를 여러대 클릭만으로 서버가 클론되어 부하분산이 됨. 이전이 쉬움. IP할당받거나 URL을 연결하기 쉽다.
    도메인을 연결하기 쉽다. HTTPS 인증이 쉽다. (AWS는 인증기관임.)
  - 유튜브는 트래픽마다 많은 서버를 가지고 있음

- WAS

  - 웹 서버 + 앱 서버

- API 서버 (API를 서빙해주는 역할)

  - 구현되어있는 것을 호출해서 사용하는 것
  - 카페의 카운터 직원에 해당
  - 우리가 직접 이미지를 만들 필요, 저장할 필요가 없고 지정된 규칙으로 API서버에 URL을 보내면 해당관련 이미지를 서빙받을 수 있다

- 폼 동작 방식

  1. 웹 페이지에 있는 form에 데이터를 입력
  2. 웹 페이지내에 action이 발생하면 데이터는 웹 서버로 이동
  3. 웹 서버는 데이터를 처리하기 위해 APP을 호출함. 이때 APP은 물리적으로 별도의 서버일 수도 있음
  4. 필요에 따라 APP은 DB로 데이터를 전송함. 이때 DB는 물리적으로 별도의 서버일 수 있음
  5. DB에서 CRUD 작업이 일어나고, 작업 결과를 APP으로, WEB으로 전송함

- CRUD
  |이름|메서드|설명|
  |:--:|:--:|:--:|
  |Create|POST|생성|
  |Read|GET|ㅁ|

- get방식으로 요청하는 텍스트들은 확인이 가능하다
- GET: URL로 데이터를 전달할 때 사용 (file같은 큰 파일은 GET방식으로 전송하지 않음. ID&비밀번호 또한 노출될 수 있므으로 GET을 사용X)
- POST: 캡슐화가 되어있으므로 받아서 쓰기만 하면 됨. URL로 패킷안에 데이터를 캡슐화해서 넣어서 전달할 때 사용 (민감한 데이터, 큰 데이터O)
- 부르트포스: 무차별 대입 공격 (ID&PW 찾음)

- form의 속성
  - action
  - method

<br><br>

# input

## input 속성

- name: 태그 이름을 지정
- type: 태그 모양 변경(text, radio,password,button 등)
- readonly: 태그를 읽기 전용으로 설정(주민등록번호별 성별 설정 등)

- 회원가입시 컴퓨터 멈춰서 날아가는 패킷을 잡아서 해당 패킷을 수행하면서 해킹하는 경우가 있음 (캡쳐링 도구 이용 -> 5000만원 짜리를 숫자 1로 바꿔서 1원에 구매 등)

- required

```html
<input type="checkbox" name="test" required />
```

- pattern: 정규표현식 이용하여 특정 범위내 유효한 값을 입력받을 때 사용

# label

- 사용예시

```html
<label> 이름: <input type="text" name="name" /> </label>
```

- 사용예시 2

```html
<label for="fullname">이름: </label>
<input type="text" name="name" id="fullname" />
```

- 사용예시 3

  - 틀린예제

    ```html
    <h1>회원가입</h1>
    <form action="015.html" method="get">
      <label for="man">남</label>
      <input type="radio" name="남" value="man" id="man" />
      <label for="man">여</label>
      <input type="radio" name="여" value="woman" id="woman" />
      <button type="submit">회원가입</button>
    </form>
    ```

    - 옳은 예제

    ```html
    <h1>회원가입</h1>
    <form action="015.html" method="get">
      <label for="man">남</label>
      <input type="radio" name="성별" value="man" id="man" />
      <label for="woman">여</label>
      <input type="radio" name="성별" value="woman" id="woman" />
      <button type="submit">회원가입</button>
    </form>
    ```

  <br><br>

# 기타 내용

- 회사 내에서 디자이너가 기존의 바퀴를 새로 만들어달라고 하면 가능하면 거절할 것

- 프로토콜

  - 국가별 언어라고 생각하면 됨
  - http://www.naver.com (http 프로토콜 사용)
  - https://www.paullab.co.kr

- http 처리방식

- POST로도 불러올 수 있음. 큰 데이터 생성시 사용. POST로 단순 GET처럼 불러오는 업무 또한 가능.

- URL로 데이터를 전달할 것인가? => GET방식 사용
- URL에 데이터가 노출되면 안되는 것이냐? => POST방식 사용

- 자바스크립트로 배속조절하는 코드

```javascript
document.getElementsByTagName('video')[0].playbackRate = 2.5;
```

- 버튼 클릭시 양식이 제출되고 해당 페이지가 refresh됨
