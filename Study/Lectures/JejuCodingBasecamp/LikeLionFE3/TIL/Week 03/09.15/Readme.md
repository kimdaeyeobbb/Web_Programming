# 9월 15일

- 차이점 파악하기

```css
/* 1) */
div[class~="weniv"] {
  color: red;
}

/* 2) */
div.weniv {
  color: green;
}
```

- 1)은 class가 아니어도 됨 (data="weniv")여도 무관
  (뭔가를 판단하는 변수를 넘길수도 있다)

<br><br>

## 용어 정리

\*: 전체<br>
^: 시작, 반대<br>
$: 끝<br>

<br><br>

## 가상 클래스 선택자

- 클래스가 없는데 있는것처럼 처리
- 콜론이 하나

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Selector</title>
    <style>
      /* 0부터 시작하지 않음 */
      div:nth-child(1) {
        background-color: red;
      }

      /* n은 0부터 시작함 */
      /* 색깔 번갈아 넣는 데이터테이블에서 활용 */
      div:nth-child(2n) {
        background-color: red;
      }
    </style>
  </head>

  <body>
    <div>hello 1</div>
    <div>hello 2</div>
    <div>hello 3</div>
    <div>hello 4</div>
    <div>hello 5</div>
    <div>hello 6</div>
  </body>
</html>
```

## 가상 요소 선택자

- 요소가 없는데 있는것처럼 처리
- 콜론이 두개

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      p::before {
        content: "이번달 월급은 ";
      }

      /* p뒤에 요소를 넣을 거다 */
      p::after {
        content: "만원";
      }
    </style>
  </head>

  <body>
    <p>1000</p>
  </body>
</html>
```

<br>

## first child, last child

- 여백 조절할 때 많이 사용

<br>

## a:visited 논란

- 개인정보에 있어 침해를 받을 수 있음

<br>

## 가상 요소 선택자/가상 클래스 선택자

- 가상 요소 선택자는 콜론이 2개(가상 클래스 선택자는 콜론이 1개)

## CSS Combinatoor

- 복합 선택자, 연결자, 결합자라고도 부름

<br><br>

## flex

- 새로운 display 속성
- 1차원 배열의 경우 flex를 먼저, 2차원 배열의 경우 grid를 먼저 고려하는게 좋다

- 프로젝트에서 익스플로러를 몇 버전까지 호환할 것인지에 대해 PM과 논의해보아야 함

- 블록 레벨 요소의 성질을 가지며 주로 부모의 속성을 통해 자식을 컨트롤 함<br>
  (flex 적용이 된 부모 요소를 `flex-container`, 컨테이너 내부의 영향을 받는 자식들을 `flex-item` 라고 부름)

- 직계자식까지만 영향을 미침

### flex의 종류

#### 1️⃣ display: flex

- block level 요소의 성질을 지님
- display: block과 같이 한 라인을 모두 점유하는 성질을 지님

```css
display: flex;
```

##### 예시

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <style>
      ul {
        display: flex;
      }
      li {
        list-style: none;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </body>
</html>
```

- body의 영역만큼 ul이 영역을 차지하고 있음
- li도 block의 성질을 지니므로 flex를 해제하면 한 라인씩 차지하게 됨

<br>

#### :two: display: inline-flex;

- `display: inline-flex`는 `display: inline-block` 처럼 컨테이너가 가지고 있는 자식들의 넓이 만큼만 넓이를 가짐

```css
display: inline-flex;
```
