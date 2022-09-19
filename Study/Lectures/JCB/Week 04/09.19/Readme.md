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

## a
