# 9월 19일

## flex-basis

- width는 영역을 강제함(내용물이 튀어나가면 밖에 써줌)
- 이와 달리 flex-basis는 크기에 맞게 늘어남
- width와 flex-basis의 차이점 찾아서 정리할 것
-

## flex-grow

- (늘어날 수 있는 공간이 있는 경우) 모두에게 flex-grow를 주면 그 공간을 모두 동일하게 차지함
- (늘어날 수 있는 공간이 있는 경우) 2번째 아이템에만 늘어날 수 있는 공간이 있다면 그 공간을 모두 차지함

- flex-grow는 0이 초깃값

- flex-grow:1 vs flex-grow:3 => 여백의 크기가 3배가 됨
- 모두 동일하지만 한 아이템에만 flex-grow값이 다른 경우, 컨텐츠 크기를 제외한 여백의 비율. 줄어들 때에도 비율만큼 줄어듦

### flex-grow가 flex-basis와 같이 주어지는 경우

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flex-grow</title>
    <style>
      .container {
        display: flex;
      }

      .item {
        /* 1. (늘어날 수 있는 공간이 있는 경우) 모두에게 flex-grow를 주면 그 공간을 모두 동일하게 차지함 */
        /* flex-grow: 1; */

        /* 3. 모두 동일하지만 한 아이템만 flex-grow값이 다른 경우  */
        flex-grow: 1;

        width: 50px;
        height: 50px;
        background-color: aqua;
        border: 1px solid black;
      }

      .item:nth-child(2) {
        /* 2. 2번째 아이템에만 늘어날 수 있는 공간이 있다면 그 공간을 모두 차지 */
        /* flex-grow: 1; */

        /* 3. 모두 동일하지만 한 아이템에만 flex-grow값이 다른 경우, 컨텐츠 크기를 제외한 여백의 비율. 줄어들 때에도 비율만큼 줄어듦 */
        flex-grow: 3;

        /* 4. flex-grow가 flex-basis와 같이 주어지는 경우 */
        flex-grow: 1px;
        flex-basis: 200px;
        width: 200px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </body>
</html>
```

<br>

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flex-grow</title>
    <style>
      .container {
        display: flex;
      }

      .item {
        /* 1. (늘어날 수 있는 공간이 있는 경우) 모두에게 flex-grow를 주면 그 공간을 모두 동일하게 차지함 */
        /* flex-grow: 1; */

        /* 3. 모두 동일하지만 한 아이템만 flex-grow값이 다른 경우  */
        flex-grow: 1;

        width: 50px;
        height: 50px;
        background-color: aqua;
        border: 1px solid black;
      }

      .item:nth-child(2) {
        /* 2. 2번째 아이템에만 늘어날 수 있는 공간이 있다면 그 공간을 모두 차지 */
        /* flex-grow: 1; */

        /* 3. 모두 동일하지만 한 아이템에만 flex-grow값이 다른 경우, 컨텐츠 크기를 제외한 여백의 비율. 줄어들 때에도 비율만큼 줄어듦 */
        flex-grow: 3;

        /* 4. flex-grow가 flex-basis와 같이 주어지는 경우 */
        flex-grow: 1px;
        flex-basis: 100px;
        /* width: 200px; */
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </body>
</html>
```

<br>

## flex-shrink

- 컨테이너 공간이 줄어들 때 줄어들지 마!라고 하는 값

- 0의 값을 사용할 경우 컨테이너 크기가 줄어들어도 값은 고정됨
- 마이너스 숫자는 사용할 수 없으며 기본값은 1임
- [참고사이트](http://flexboxgrid.com/)

- 실무에서는 다음 코드를 많이 사용

```css
flex: 1 1 300px;
/* flex-grow:1, flex-shrink:1, flex-basis: 300px */
```

<br>

```css
flex: 1 0 300px;

/* 플렉스 안에 있는 item의 속성을 정하는데 
flex-grow: 1(컨테이너가 늘어나면 아이템들의 여백이 1:1로 늘어난다)
flex-shrink: 0(컨테이너가 줄어들면 아이템들의 여백이 같이 줄다가 고정된다)
flex-basis: 300px(아이템들의 기본 컨텐츠 크기) */
```

## align-self

- align

## order

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>order</title>
    <style>
      .container {
        display: flex;
      }

      .item {
        border: 1px solid black;
      }

      .item:nth-child(1) {
        order: 5;
      }

      .item:nth-child(2) {
        order: 2;
      }

      .item:nth-child(3) {
        order: 3;
      }

      .item:nth-child(4) {
        order: 4;
      }

      .item:nth-child(5) {
        order: 1;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </body>
</html>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>order</title>
    <style>
      .container {
        display: flex;
      }

      .item {
        border: 1px solid black;
      }

      .item:nth-child(1) {
        order: 5;
      }

      .item:nth-child(2) {
        order: 2;
      }

      .item:nth-child(3) {
        order: 3;
      }

      .item:nth-child(4) {
        order: 4;
      }

      .item:nth-child(5) {
        order: 1;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </body>
</html>
```

- 마크업 순서와 화면에 보여줘야 할 순서가 다를 때 order 사용

  - [참고 페이지](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items#use_cases_for_order)

    - 스크린리더가 날짜를 먼저 읽으면 안된다.

      - 해당 마크업

        ```html
        <div class="card">
          <h3>Another title</h3>
          <div class="date">6 Nov 2017</div>
          <p>This is the content of my news item. Very newsworthy.</p>
        </div>
        ```

- tbody에 자바스크립트를 쏴줘서 모델을 지속적으로 변경할 수 있음

- order => /_ 숫자는 순서나 순위가 아니라, 크기에 따라서면 정렬된다. _/

## 제주코딩 헤더 만들기 실습

- 다시 실습해보기 (10시~11시 수업)

- ㅁ

## grid

- flex는 1차원, grid는 2차원 레이아웃을 다룰 때 사용
- 다차원으로 유동적으로 변경하고 싶을 경우에는 flex를 사용함

- fr: fraction (분수, 일부, 비율)

- grid-template-columns를 %로 표시하면 부모의 길이에 상대적인 개념으로 적용되는 것임

## auto-fill & auto-fit

- auto-fill과 auto-fit은 기능적으로 반대이다

- auto-fill: 컬럼을 더 채울 수 있다고 했을 때 더 채우거나 늘리지 않음 (min에 기준을 맞춤)

- auto-fit: 컬럼을 더 채울 수 있다고 했을 때 컬럼의 크기만 늘어남 (max에 기준을 맞춤)

## gap

- 셀과 셀 사이의 간격을 설정할 때 사용
- gap은 IE에 사용 불가

## grid area

- 92-2 html파일 복습 요망 (누락된 부분)

## 심화

- 클래스 이름을 랜덤으로 설정: 크롤링 방지 (해커의 공격 위험 감소)

## 성배 레이아웃

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>template areas</title>
    <style>
      body {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
          "header header header"
          "main main aside"
          "footer footer footer";
      }

      header {
        grid-area: header;
        background-color: pink;
      }

      main {
        grid-area: main;
        background-color: royalblue;
      }

      aside {
        grid-area: aside;
        background-color: lightgreen;
      }

      footer {
        grid-area: footer;
        background-color: aquamarine;
      }
    </style>
  </head>

  <body>
    <header>header</header>
    <main>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellat
      earum iure id natus, consectetur, aut a adipisci, suscipit dolore in quam
      commodi recusandae magni excepturi sapiente quasi optio accusantium?
    </main>
    <aside>aside</aside>
    <footer>footer</footer>
  </body>
</html>
```

## template areas 표준 정답

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>template areas</title>
    <style>
      body {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        /* 
                    3. 간격은 맞춰 주는 것이 좋습니다. 
                    4. main 넓이를 많이 주어야 할 때에는 아래처럼 구성할 수 있습니다.
                */
        grid-template-areas:
          ".       .       .       time"
          "header  header  header  header"
          "aside-a main    main    aside-b"
          "footer  footer  footer  footer";
      }

      header {
        grid-area: header;
        background-color: pink;
      }

      main {
        grid-area: main;
        background-color: royalblue;
      }

      .aside-a {
        grid-area: aside-a;
        background-color: lightgreen;
      }

      .aside-b {
        grid-area: aside-b;
        background-color: lightgreen;
      }

      footer {
        grid-area: footer;
        background-color: aquamarine;
      }

      p {
        grid-area: time;
        background-color: blueviolet;
      }
    </style>
  </head>
  <body>
    <!-- 
            1. 위치 상으로 맨 위로 올라가는 것이 맞지 않을까요? 
            2. time 태그가 있습니다.
        -->
    <p>현재시간 :<time>22-09-19</time></p>
    <header>header</header>
    <main>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellat
      earum iure id natus, consectetur, aut a adipisci, suscipit dolore in quam
      commodi recusandae magni excepturi sapiente quasi optio accusantium?
    </main>
    <aside class="aside-a">aside</aside>
    <aside class="aside-b">aside</aside>
    <footer>footer</footer>
  </body>
</html>
```

## transition

- : (가상클래스 선택자)
- :: (가상요소 선택자)

- 성능이슈가 발생할 수 있음

- cubic-bezier 검색해서 정리

- transition은 가상 선택자(.one:hover 등)에 쓰는 경우는 잘 없음

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Transition Test</title>
    <style>
      /* 
            : - 가상클래스선택자
            :: - 가상요소선택자 
            */

      .one {
        font-size: 16px;
        width: 100px;
        height: 100px;
        background-color: red;
        transition: all 1s;
        /* transition: 1000ms; */
        /* transition-delay: 1s; */
        /* transition-duration: 1s; */
        /* transition-property: font-size, background-color; */
        /* transition-timing-function: linear; */
        /* transition-timing-function: cubic-bezier(0, 0.39, 1, 0.55); */
        /* transition-timing-function: steps(3, start); */
        /* transition-timing-function: steps(3, end); */
      }

      .one:hover {
        font-size: 32px;
        width: 300px;
        height: 300px;
        background-color: blue;
        /* transition-duration: 1s; */
      }

      .one:active {
        font-size: 32px;
        width: 1000px;
        height: 1000px;
        background-color: greenyellow;
        /* transition-duration: 10s; */
      }

      .one::before {
        content: "가상요소야!";
        display: block;
        width: 100px;
        height: 100px;
        background-color: brown;
        transition: all 1s;
      }

      .one:hover::before {
        content: "가상요소야!";
        display: block;
        width: 200px;
        height: 200px;
        background-color: green;
      }

      .two {
        width: 100px;
        height: 100px;
        background-color: blue;
        transition: all 1s;
        transition-delay: 1s;
      }

      .two:hover {
        width: 300px;
        height: 300px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="one">hello world</div>
    <div class="two">hello world</div>
  </body>
</html>
```

- transition을 모두 자세히 알필요는 없고 `transition: all 0.3s`는 꼭 알아둘 것

## transform

- 형태 변환시 사용

- 기준을 벗어나는 경우

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>transform</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: dodgerblue;
        transition: all 1s;
      }

      .box:hover {
        transform: scale(2);
      }
    </style>
  </head>

  <body>
    <div class="box">hello world</div>
  </body>
</html>
```

- 왼쪽 상단이 기준인데, transform의 기준은 x축: center, y축:center이므로 화면상의 영역을 벗어나는 것이다.

- transform-origin => 어떤 기준을 잡게 할것이냐!

## 웹 브라우저 랜더링 (매우 중요, 기술면접 단골)

1. 파싱

   - 브라우저는 우선 HTML파일을 DOM으로 변환(파싱)함

2. 스타일 계산

   - CSS 역시 파싱하여 CSSOM으로 변환함

3. 레이아웃

- 추가 내용 서술

- GPU: 한번에 다중 연산 수행

<br><br>

# 추가 내용

## 웹페이지 렌더링

- 브라우저가 html 파일을 화면에 그려내는 과정

### 1. 파싱

- 브라우저가 HTML 파일을 DOM으로 파싱(변환)함
- 오타나 잘못된 문법을 사용했을 경우 예외처리
- `<link>`, `<img>`와 같은 태그를 만나면 리소스를 다운로드함
- `<script>` 태그를 만날 경우 DOM 파싱을 중단하고 자바스크립트를 해석함

### 2. 스타일 계산

- CSS를 파싱해서 CSSOM으로 변환함
- CSSOM 정보를 통해서 노드에 대한 스타일을 결정함
- 결정된 스타일은 크롬 개발자 도구의 compute 항목에서 확인 가능함

### 3. 레이아웃

- CSSOM 정보를 토대로 레이아웃 트리(렌더 트리)를 생성함
- 돔과 계산된 스타일을 따라가며 요소의 크기나 좌표와 같은 정보를 담은 레이아웃 트리를 생성함
- 화면에 표현되는 정보만 트리에 담기게 됨 (display:none (X), 가상요소(O))

### 4. 페인트

- 레이아웃 트리(렌더 트리)가 생성되면 이 트리를 따라 페인트 기록이 생성됨
- 페인트 기록에는 요소를 렌더링하는 순서가 저장됨 & 지금까지의 정보를 바탕으로 한 페이지를 여러개의 레이어로 나눈다음 그 위에 텍스트/색/이미지/border/그림자 등의 모든 시각적인 부분을 그리는 작업이 진행됨

### 5. 컴포지팅

- 각각의 레이어를 스크린에 픽셀로 표현하고(레스터링) 나누었던 레이어를 합성해서 페이지를 그리는 작업

## 페이지 리플로우 & 리페인팅

- 브라우저는 HTML 구조상의 변화나 스타일의 변화가 있을 때 relow, repaint라는 과정을 거친다
- 브라우저의 각 단계별 렌더링 과정들은 반드시 전 단계의 데이터가 필요하다.
- 따라서 전 단계에서 변화가 일어나면 다음 단꼐에도 영향을 미칠 수 밖에 없다.

### reflow

- 레이아웃(너비, 높이 등)변경 시 영향을 받는 모든 노드(자식, 부모)의 수치를 다시 계산하여 렌더 트리를 재생성하는 작업
  - 렌더 트리: 브라우저가 HTML을 분석하여 트리형태의 구조로 재해석한 것

### repaint

- reflow 과정이 끝난 다음 재생성된 렌더 트리를 다시 그리는 작업
- 수치와 상관없는 스타일 변경시에는 reflow 과정을 생략한 repaint 과정만 수행함
- 만약 CSS를 통해 레이아웃이 바뀌는 애니메이션을 구현할 경우 브라우는 매 프레임마다 reflow, repaint 과정을 수행해야 한다.
- reflow & repaint 현상은 브라우저에 상당한 부담이 된다.

### transform

- 정적인 사이트에서 요소의 위치를 단순히 배치하는 작업의 경우 `position`을 사용해도 괜찮다
- 그러나 애니메이션이나 동적으로 요소의 위치를 이동해야하는 경우, `transform`속성을 사용하는 것이 성능에 좋다

<br>

## keyframe

- `@keyframe`은 CSS의 스타일 변화 과정을 나타낼 때 사용함
- `@transition`보다 정밀한 효과를 구현할 수 있음
