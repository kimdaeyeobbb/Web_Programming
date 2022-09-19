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
