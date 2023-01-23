# [1회차] 23.01.19 (목)

# 목차

1. 설계하기

- [다음 페이지 분석하기](#다음-페이지-분석하기)
- [SRTPlay](#srtplay-srt-예약-사이트)
- [프로그래머스 클래스룸](#프로그래머스-클래스룸)

2. CSS 사용하기

- [GRID](#grid-css)
- [Grid2](#grid-2---43-2-columns--rows-확장-그리드)
- [Grid3](#grid-3---34-columns--rows-응용-그리드-feat-order)
- [Grid4](#grid-4---area를-지정한-그리드)

3. Flexbox CSS 살펴보기

- [Flex]()

<br>

# 설계하기

# 다음 페이지 분석하기

## 작업순서

1. 3가지로 구분 (header, main, footer)

- main: 문서의 주요 컨텐츠를 담음
- footer: 추가정보(회사의 부가적인 정보, 저작권 등)를 담음

2. 상세메뉴 분석

<br>

## 상세메뉴 분석

### header

#### 포인트1

```html
<header>
  <h6>제목6</h6>
  <h1>제목1</h1>
</header>
```

##### 규칙

###### 1️⃣ `제목6`이 `제목1` 보다 시각적으로 더 작다고 해서 `h6`을 `h1`보다 먼저 사용하면 안된다

- 이렇게 사용하게 되면 구조부터 잘못짜여진게 되어버린다.
- 그러면 검색엔진은 어느것이 제목인지를 판단하기 어려워하게 된다.

###### 2️⃣ 한 페이지에는 `h1`을 한개만 사용해야 한다. 보통은 사이트의 제목이 `h1`에 해당된다.

###### 3️⃣ `main`태그는 한 페이지에 한번만 사용해야함

- main태그는 주요 컨텐츠를 담고있기 때문이다. 그러나 main 태그가 여러개 나오게 되면 검색엔진 기기나 스크린리더 기기들은 어느것이 주요컨텐츠인지 헷갈려한다. 이렇게 혼란이 시작되면 SEO 최적화나 등급에 있어서 패널티를 받게된다. `main`태그를 여러번 쓴다고해서 페이지나 안나오는 것은 아니지만 한 번 쓸때 의미에 맞게 사용하는것이 좋다.

<br>

#### 포인트2

```html
<!-- header를 보고 사이트의 제목이 나오겠음을 예측할 수 있음 -->
<header>
  <h1>
    <img src="로고 주소" alt="다음 로고 이미지" />
    <span class="ir">다음</span>
  </h1>
</header>
```

- `DAUM`로고는 header에 삽입. `h1`으로 삽입. `h1`은 한번만 나와야함
- 사이트 제목에만 h1을 사용. 한 페이지에는 h1 하나만 사용.

- `img`태그는 `alt`에 대체텍스트를 삽입함.

- `<span class="ir">다음</span>`: 스크린리더를 위한 작업

<br>

#### nav

```html
<header>
  <h1>
    <img src="로고 주소" alt="다음 로고 이미지" />
    <span class="ir">다음</span>
  </h1>

  <!-- 네비게이션 -->
  <nav>
    <h2>주요 메뉴</h2>
    <a></a>
  </nav>
</header>
```

- nav 태그내에 제목(heading)은 선택옵션 (but 멘토님은 사용하기를 추천하심)
- 이 사이트의 주요 메뉴가 `nav`태그 내에 있을것임을 예측할 수 있음

#### 헤더 정리

- 검색엔진 기기 & 스크린리더 기기가 이 페이지에 제일 처음들어왔을 때, 가장 먼저 만나는 `header`에 정보가 있다고 생각할 것임

- 그리고 `header`안에 `h1`태그가 있다면 이것이 사이트 제목임을 알아차리고, `h1`내부의 `img`와 `span`태그를 보면서 `DAUM`이라는 글자를 뽑아갈 것임 (구글에서 이미지 검색을 하는경우 `alt`태그를 기준으로 검색함)

- 그 다음 `nav`태그를 만나면 이 사이트의 주요 메뉴가 `nav`태그 내에 있음을 인식할 것임
- 그리고 나서 `nav` 내부의 `a`태그를 만나서 `a`태그를 하나씩 가져감. (가끔 구글이나 네이버 검색시 사이트명 밑에 메뉴 몇개 뜨는 경우는 `nav`태그와 `header`태그가 잘 작성되어있을 때 검색엔진 기기들이 알아서 긁어감. => `header`태그만 잘 작성해도 SEO측면에서는 +효과를 볼 수 있다)

- 그리고 나서 넣고싶은 것들을 넣는 것이다. 검색엔진 폼(검색창내 돋보기 아이콘)을 넣거나, 별도의 div로 날씨표시를 한다거나 등.

- 헤더내의 날씨표시는 시멘틱한 마크없이 없으므로 `div`로 감싸줘서 사용하면 됨

<br>
### 다음페이지 옆 날씨 & 날짜

- 큰 의미가 없으므로 `div`로 사용

### footer

- 회사의 부가적인 기능은 모두 footer에 넣음

```html
<footer>
  <!-- 한국 대상 서비스이므로 한글로 작성 -->
  <h2>사이트 푸터</h2>

  <!-- 주소를 나타내는 태그 -->
  <address></address>
</footer>
```

- `footer`내 `heading`태그는 선택옵션이다
- `header`에서 `h1`을 사용하였으므로 `footer`에서는 `h2`태그를 사용한다.
- footer는 하나의 문서(한 페이지)에 대한 부가적인 정보를 담고 있으므로 크게 의미를 안두는 경우도 있다.

### main

```html
<main>
  <!-- main 영역의 제목 -->
  <h2>콘텐츠 영역</h2>

  <!-- 덩어리1 -->
  <div>
    <section>
      <!-- 구역을 나타내기 위한 h3. section의 제목에 해당됨. ir기법 적용 -->
      <h3 class="ir">뉴스 영역</h3>
      <article></article>
    </section>
    <!-- 중간영역 -->
    <section>
      <h3 class="ir">비디오(영상) 영역</h3>
    </section>
    <!-- 아래영역 -->
    <section>
      <h3 class="ir"></h3>
    </section>

    <!-- 최하단 영역-->
    <section>
      <h3 class="ir"></h3>
    </section>
  </div>

  <!-- 덩어리2 -->
  <aside>
    <!-- 스크린 리더를 위한 ir기법 적용. 회사마다 다름 -->
    <h3 class="sr-only">로그인 영역</h3>
  </aside>

  <!-- 덩어리3 -->
  <section>
    <h2></h2>
  </section>
</main>
```

- 주요 컨텐츠를 담은 태그 (정보가 많이 담긴 컨텐츠)
- 한 페이지에 하나만 사용해야 함<br>(다른 스크린리더 기기가 어떤것이 주요 컨텐츠인지 헷갈리지 않게 만들기 위함)

- 3덩어리로 나눌 수 있음 (오늘의 포토 위왼쪽, 오늘의 포토 위오른쪽, 오늘의 포토 부분)

#### 로그인 정보 나타내는 구역

- 로그인 정보가 안보인다고 해도 main 컨텐츠에 영향을 주지않으므로 `aside`로 묶음

##### `aside`

- `main`태그 내 주요컨텐츠와 연관있으며 부가적인 내용을 나타내는 태그
- 주로 사이드바를 나타낼 때 사용 (사이드바는 없어져도 주요 컨텐츠에 크게 영향을 미치지 않음)
- `aside`의 제목태그는 optional임

#### 부가적인 정보 vs 주된 정보를 구분하기

- `section`: 단순 영역 구분. 독립적으로 표현할 수 없음.
- `article`: 하나의 정보이므로 얘만 똑 떨어져 나가서 어디에 붙어도 이상하지 않음. 뉴스는 하나만 봐도 다 이해가 되므로 article로 구분. 혹은 블로그 내 글쓴 영역이 article태그에 해당 (얘만 떨어져 나가도 정보가 전달이 됨). 독립적으로 표현이 됨.

<br>

#### <section>

- `오늘의 포토`는 하나의 단락이므로 `section`태그로 처리
- `section`태그를 사용하면 제목 태그를 사용해주어야 함
- `main`과 `footer`는 같은 레벨의 depth를 가지고 있음. 따라서 `main`영역의 제목으로 `h2`태그를 사용하고, `section`영역의 제목으로 `h3`태그를 사용하는게 좋다

<br>

#### heading 태그에 대한 고찰

- 제목이 꼭 사용자 눈에 보여야하는 것은 아니다.
- 형식만 맞춰서 계층을 유지하면서 내려가면 된다.

<br>

### 질문

#### Q1) 메일 메뉴를 눌렀을 때 메뉴바 아래로만 컴포넌트가 변한다면 해당 컴포넌트 안에서 header와 main 태그를 사용해도 되나요?

- main 태그가 가진 컨텐츠만 바뀌게 할 것 같음.

#### Q2) 상위 컴포넌트에 h2 를 쓰는 것을 생략하고 바로 하단 컴포넌트에서 h3로 넘어가면 안되나요? 모든 컴포넌트에 헤딩을 넣어줘야 하는지 궁금해요!

- 모든 컴포넌트에 `heading` 태그를 넣지 않아도 됨.
- `heading`태그를 계속 사용하면서 설명하는 이유: CSS가 깨지는 케이스를 떠올려보자. 이 경우에는 어떤 구역이 어떤 구역인지를 구분하기 위해서 `DIV`대신 `HEADING`을 사용해야 제목의 크기가 다를 것이다. (`DIV`만 사용하면 CSS가 깨지는 경우에 모든 제목의 크기가 동일해진다) <BR> (계층적으로 보여주기 위해서 `heading`태그가 필요하다)

#### Q3) 오늘의 포토

- 내부의 기사 제목은 `strong`태그 사용 (단순하게 강조하기 위해서)
- 혹은 `em`태그 사용 (`heading`태그는 잘 사용하지 않음)

### 부가적인 정보 & 주된 정보 구분

- 독립성여부에 따라 구분

<br>
<hr>
<br>

# SRTPlay (SRT 예약 사이트)

## header

```html
<header>
  <h1>SRTPlay</h1>
  <div>
    <a></a>
    <a></a>
    <a></a>
    <aside></aside>
  </div>
</header>
```

### 우상단 사이드바 메뉴

- 옆에서 항목을 불러오는 사이드바 같은 경우 보통 `aside`를 사용

## main

### `main`영역을 어디까지 끊어야하는지가 관건임

1. `고객센터` 영역까지 main영역으로 취급할 것인가
2. `공식 SNS 바로가기` 까지 main영역으로 취급할 것인가

- 우리는 `공식 SNS 바로가기`영역까지를 main 영역으로 취급할 예정임

### main 영역 파헤치기

- main 영역은 크게 6가지 영역으로 구분 (슬라이더, 승차권, 선물하기,공지사항, 고객센터, 공식 SNS 바로가기)

#### 슬라이더

- div 사용. (일반 컨텐츠를 나타내므로 시멘틱하게 쓸 필요가 없음.)
- 내부의 내용들은 heading 태그를 사용할 필요가 없음

#### 슬라이더 이외의 5가지 section

- 각 섹션에는 제목(heading 태그)을 붙임

##### 1. 승차권

```html
<section>
  <h1>SRTPlay 승차권</h1>
</section>
```

##### 2. 선물하기 & 추천 브랜드

```html
<section>
  <h2>여행과 함께, 선물하기</h2>
  <h2>추천 브랜드</h2>
</section>
```

##### 3. 공지사항

```html
<section>
  <h2>공지사항</h2>
</section>
```

- 단순한 리스트니까 `ul,li`를 사용하면 됨

###### ul & li와 ol & li 중 어느것을 사용할것인가?

- 숫자가 있어야하면 `ol`, 단순한 리스트만 나타내고 싶으면 `ul`을 사용

###### dt & dd

- dl,dt,dd는 의미가 담겨야 함. (사전적 의미)
- `예시`: 네이버 사전, 사과에 대한 설명글 등
- dl, dt, dd는 위와같은 예시 외에 아무곳에서나 사용하면 안좋음

##### 4. 고객센터

- ㅁ

##### 5. 공식 SNS 바로가기

<br>

## footer

<br>
<hr>
<br>

# 프로그래머스 클래스룸

- 영역을 크게 2개로 구분할 수 있음 (좌측, 우측)

- footer가 없는것이 특징임

## 좌측 (사이드바 부분)

- 왼쪽에 있다고 해서 `header`로 쓸 수 없는것은 아니다
- 좌측 사이드바전체는 `GNB`에 해당됨

```html
<header>
  <h1 class="ir">programmers school</h1>
  <nav>
    <h2>대시보드</h2>
    <h2>커리큘럼</h2>
    <h2>강의</h2>
    <h2>강의</h2>
    <h2>라이브 클래스룸</h2>
    <h2>코드리뷰 갤러리</h2>
    <h2>클래스톡</h2>
    <h2>공지사항</h2>
    <h2>질문답변</h2>
    <h2>알림</h2>
  </nav>
</header>
```

- `programmers school` 부분
  - 이미지니까 스크린리더를 위한 텍스트를 넣어주어야 함

### GNB

- Global Navigation Bar
- 웹사이트 전체에 동일하게 적용되는 네비게이션 바
- 웹 사이트 전역에 해당된다는 의미로 Global이라고 표현하며 메인 메뉴라고도 할 수 있음
- 메인 메뉴, 대분류 메뉴, 전체 사이트에서 사용되는 공통 메뉴바
- 웹 사이트가 제공하는 모든 서비스를 표현하며 직관적으로 구성하는것이 좋음

- [참고자료](https://www.ascentkorea.com/what-is-gnb/)

### LNB

- Local Navigation Bar
- GNB를 클릭하거나 마우스를 댔을 때 나오는 하위 카테고리 리스트
- 특정 GNB 카테고리에 해당하는 특정 페이지로 연결되는 링크 역할을 하므로 웹사이트의 특정 지역을 한정한다는 의미로 Local이라고 표현함
- 서브 메뉴라고도 할 수 있음

### FNB

- Foot Navigation Bar의 약자
- GNB와 동일하게 모든 웹페이지 가장 하단에 위치한 내비게이션 바
- 보통 웹페이지가 기업이라면, 기업의 로고와 연락처, 주소 등 웹페이지의 정보를 기재함. 가장 하단에 있다는 의미로 Foot이라고 표현함

### 기타 웹 사이트 용어

#### SNB

- Side Navigation Bar의 약자
- 보통 왼쪽이나 오른쪽에 위치해 Side라고 표현함
- 보통 메인 메뉴와 서브 메뉴를 제외한 기타 메뉴로 구성하며 사이드 메뉴라고도 할 수 있음

#### Header

- 웹사이트의 최상단을 뜻함
- GNB가 있는 위치이기도 하며, 헤더의 왼쪽 최상단에는 홈페이지로 이동 가능한 링크를 넣는 것이 보편적임
- 보통 웹사이트의 로고로 표현함
- 헤더에는 검색창, GNB, 홈페이지 연결 링크가 포함되어야 함

#### Footer

- 웹사이트의 최하단을 뜻함
- FNB가 있는 위치이기도 하며, 컨텍트 정보와 카피라이트 등 웹사이트의 정보를 기입함

## 우측

```html
<main>
  <h2>[스터디/3기] 만들면서 배우는 실전 퍼블리싱</h2>
  <section></section>
  <section></section>
  <section></section>
  <aside></aside>
</main>
```

- 제목을 `[스터디/3기] 만들면서 배우는 실전 퍼블리싱`로 둘지, `김대엽 님, 한 주의 마무리는 역시 코딩으로 👍🏻`로 둘지는 작업자마다 다를것임

- 하지만 후자는 이름이 계속 바뀌기때문에 전자를 제목으로 선정하는것이 좋을것임

- `heading` 태그 부분을 제외하고 나머지는 `section` 등으로 구분지음

### 알림영역

- `aside`태그를 사용

### 팁

- 캡쳐본 혹은 이미 만들어진 사이트를 가지고 퍼블리싱 설계 연습을 할 것
- outline은 목차에 해당됨
- css가 깨졌을 떄 구역을 어떻게 보여줄 것인가에 대해 고민해보는것도 좋음

<br>
<hr>
<br>

# CSS 사용하기

## GRID CSS 1

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GRID 1</title>
    <style>
      .grid {
        display: grid;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
  </body>
</html>
```

- 아직은 grid를 구체적으로 그려주지 않고 선언만한 상태임. 바둑판을 실제로 그려주지 않았으므로 grid라는 박스가 된 것임.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>GRID 1</title>
    <style>
      .grid {
        display: grid;
        grid-template-columns: 200px 200px 200px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
  </body>
</html>
```

- 열을 3칸씩 200px씩만 사용하겠다는 것

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>GRID 1</title>
    <style>
      .grid {
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-template-rows: 200px 200px 200px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
  </body>
</html>
```

- 열을 200px씩, 행을 200px씩 할당해서 3\*3의 grid를 생성

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>GRID 1</title>
    <style>
      .grid {
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-template-rows: 200px 200px 200px;
        gap: 16px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
  </body>
</html>
```

- gap: 격자간 간격
- 과거에는 margin과 padding을 이용해서 일일이 조정했으나 gap 하나만으로 이 두개를 통해 커버하던 영역을 다룰 수 있음

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>GRID 1</title>
    <style>
      .grid {
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-template-rows: 200px 200px 200px;
        /* gap: 16px; */
        column-gap: 16px;
        row-gap: 10px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
  </body>
</html>
```

- `column gap & row gap`: 반응형을 위해 행별 간격과 컬럼별 간격을 따로 조정할 수 있음

- 이 기능은 3\*3으로 제한을 두었기 때문에 데이터가 늘어나면 반영을 하지 않는다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>GRID 1</title>
    <style>
      .grid {
        display: grid;
        grid-template-columns: repeat(3, 200px);
        /* grid-template-rows: repeat(3, 200px); */
        gap: 16px;
        grid-auto-rows: 200px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
      <div class="item">add</div>
      <div class="item">add</div>
      <div class="item">add</div>
    </div>
  </body>
</html>
```

- `grid-auto-rows`
  - 몇 칸이 늘어나더라도 앞으로 행은 200px을 유지하게 만듦

### 단위로서의 `fr`

- 단위에는 `px`, `%`, `em`, `rem` ,`fr`등이 있다

```css
grid-template-columns: repeat(3, 1fr);
```

- `fr`은 분수를 뜻한다
- 여기서는 3칸중 1fr이므로 각각의 칼럼은 전체 영역의 크기중 `1/3`씩 차지하게 만들겠다는 의미이다.

#### `fr`단위는 왜 사용하나요?

- grid는 크기와 여백등을 계산하는 자기자신만의 계산방법이 있다.
- 음.. .멘토분의 습관이라는데 왜 쓰는지에 대한 당위성은 아직 납득이 되지 않음

<br>

## GRID 2 - [4*3] 2 columns / rows 확장 그리드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>GRID 1</title>
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        grid-template-rows: repeat(3, 200px);
        gap: 16px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }

      .item:nth-child(1) {
        grid-column: 1 / 3;
        background-color: #ffdada;
      }
      .item:nth-child(2) {
        background-color: #ffdada;
      }
      .item:nth-child(4) {
        background-color: #ffdada;
      }
      .item:nth-child(7) {
        background-color: #ffdada;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
  </body>
</html>
```

```css
.item:nth-child(1) {
  grid-column: 1 / 3;
  background-color: #ffdada;
}
```

- 1번 박스가 1번에서 시작해서 3번 시작지점까지 차지하게 만듦

```css
.item:nth-child(1) {
  grid-column: span 2;
  background-color: #ffdada;
}
```

- 하지만 이는 데이터가 늘어날때마다 반응형으로 적용하기가 힘들다. 따라서 1/3처럼 구체적인 숫자를 기입하기 보다는 `span`등을 사용해서 반응형으로 수정하는게 좋다.

### `span`의 역할?

- 한 뼘, 한 칸, 한 셀을 차지함.
- `grid-column: span 2` -> span으로서 2칸을 차지하겠다는 뜻

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>GRID 1</title>
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        grid-template-rows: repeat(3, 200px);
        gap: 16px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }

      .item:nth-child(1) {
        grid-column: span 2;
        background-color: #ffdada;
      }
      .item:nth-child(2) {
        grid-row: span 2;
        background-color: #ffdada;
      }
      .item:nth-child(4) {
        background-color: #ffdada;
      }
      .item:nth-child(7) {
        background-color: #ffdada;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
  </body>
</html>
```

```css
.item:nth-child(2) {
  grid-row: span 2;
  background-color: #ffdada;
}
```

- 현재칸에서 2칸을 row방향으로 차지하겠다는 뜻

### grid-row 유의사항

```css
.item:nth-child(2) {
  grid-row: 1/3;
  background-color: #ffdada;
}
```

- 위와 같이 적용하면 원래 의도대로 작동하지 않고 맨 앞위치로 이동하게 된다.

```css
.item:nth-child(2) {
  grid-column-start: 3;
  grid-row: 1/3;
  background-color: #ffdada;
}
```

- 이러한 경우 column start 번호를 지정해서 원래의도대로 작동시킬 수 있다.

- 이러한 예외사항을 고려헀을 때 숫자를 일일이 기입하는 것보다 `span`을 사용하는 것이 비용적인 측면에서 효율적이고 확장성이 높다고 볼 수 있다.

### 최종 결과물

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <title>GRID 1</title>
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        grid-template-rows: repeat(3, 200px);
        gap: 16px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }

      .item:nth-child(1) {
        grid-column: span 2;
        background-color: #ffdada;
      }
      .item:nth-child(2) {
        grid-row: span 2;
        background-color: #ffdada;
      }
      .item:nth-child(4) {
        grid-row: span 2;
        background-color: #ffdada;
      }
      .item:nth-child(7) {
        grid-column: span 3;
        background-color: #ffdada;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
  </body>
</html>
```

<br>

## GRID 3 - [3*4] columns / rows 응용 그리드 (feat. order)

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grid 3</title>
    <style>
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        grid-template-rows: repeat(3, 200px);
        gap: 16px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }

      .pagenation {
        order: 1;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item pagenation">페이지네이션</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
  </body>
</html>
```

### order

```css
.pagenation {
  order: 1;
}
```

- `order: 1`로 설정시 해당영역이 맨 뒤로 이동한다.
- order 속성은 0이 기본값이다. 따라서 다른것들이 order 적용이 되어있지 않다면 order의 속성값으로 0을 초과하는 값을 넣어주면 순서가 뒤로 밀리는 것이다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grid 3</title>
    <style>
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        grid-template-rows: repeat(3, 200px);
        gap: 16px;
      }

      .item {
        background-color: #ddd;
        padding: 20px;
      }

      .pagenation {
        order: 1;
      }

      .item:nth-child(7) {
        order: -1;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item pagenation">페이지네이션</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
    </div>
  </body>
</html>
```

```css
.item:nth-child(7) {
  order: -1;
}
```

- 음수값을 넣어서 제일 앞의 위치로 이동시킬수도 있다.

#### order 사용시 유의사항

- `order`는 `시각적으로만 이동`시키는것이다.
- 마크업순서는 그대로이다. 따라서 스크린리더 및 검색엔진 기기가 들어온 경우에는 `페이지네이션`-> `7->1->2->3->4->5->6`순서대로 읽는다고 보면 된다.

### 이번 파트를 실습하기 위해 참고하면 좋은 사이트

- [참고사이트](https://school.programmers.co.kr/learn)

```css
grid-column: span 3 / auto;
```

- span을 사용해서 마크업을 늘릴필요없이 하나의 div섹션내에서 페이지네이션도 같이 처리할 수 있도록 만듦

- 그리드를 안썼다면 페이지네이션을 위해 div를 추가하거나 카드를 감싸는 블록등에 대한 div로 하나 더 감싸줬어야했을 것임

- div를 최대한 줄이기 위해 grid layout css를 사용한 것이다.

<br>

## GRID 4 - Area를 지정한 그리드

### grid-template-areas

- `grid-template-areas`를 사용하면 내가 원하는 영역안에 내가 원하는 div를 모두 넣을 수 있다

- `grid-template-areas`는 부모에게 설정해주면 됨.

- 속성이 특이점: css 내에 따옴표("")를 사용함

- 구역을 나눠놓은 곳에 영역에 맞게끔 하나하나 집어넣으면 됨

- 해당 영역으로 보내놓으면 편한것이 마크업을 하고나서 footer를 맨 마지막에 읽게끔 만들고 싶을 수 있다. 이러한 경우에는 순서만 바꿔주면 된다.

### 최종코드

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grid 4</title>
    <style>
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }

      .grid {
        display: grid;
        grid-template-areas:
          "header slider slider"
          "header content content"
          "header footer banner";
        gap: 16px;
      }
      .item {
        background-color: #ddd;
        padding: 20px;
      }

      /* 각 구역에 맞게끔 내용을 채워넣음 */
      .header {
        grid-area: header;
      }

      .slider {
        grid-area: slider;
      }

      .content {
        grid-area: content;
      }

      .footer {
        grid-area: footer;
      }

      .banner {
        grid-area: banner;
      }
    </style>
  </head>
  <body>
    <div class="grid">
      <div class="item footer">footer</div>
      <div class="item header">header</div>
      <div class="item slider">slider</div>
      <div class="item content">content</div>
      <div class="item banner">banner</div>
    </div>
  </body>
</html>
```

### 정리

- `grid`는 바둑판을 만든것이고, 그 바둑판안에 `grid-template-areas`를 이용해서 구역을 구분지어놓은 것이다. 그리고 개발자도구를 이용하면 영역의 이름이 구분되어있으므로 확인이 편하다.

- 가능하다면 프로그래밍 언어가 이미 만들어놓은 키워드 (padding, margin)들은 사용하지 않는게 좋다.

### Q&A

#### 1번

##### 레이아웃을 구성하실 때 `grid-area` 를 지정해서 자주 사용하시나요? 어떨떄 grid를 사용하고 어떨 때 flex를 사용하시나요?

- 크게 봤을 때에는 div를 최대한 줄이는 방향으로 생각하면 좋다.

- 예를 들어 화면이 좌,우 2개로 분할할 수 있는 경우에는 grid를 사용할 필요는 없다. flex만으로 충분하기 때문이다.

- `div`를 줄일 수 있다면 `grid`를 쓰는게 좋고, grid를 사용하다가 작업의 속도가 늦어지면 굳이 grid를 사용하기보다는 작업속도가 빠른 flex box를 사용하는것도 좋다.

- 서비스를 만들 때에는 일단 빠르게 만들고나서 리팩토링하는게 좋다. (기능 추가 등)

- 이러한 상황을 고려해서 그리드를 써서 리팩토링할지, flex를 사용할지에 대한 고민을 해보는게 좋다.

<br>
<hr>
<br>

# Flexbox CSS 살펴보기

- ㅁ
