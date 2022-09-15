# 9월 15일

- 차이점 파악하기

```css
/* 1) */
div[class~='weniv'] {
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
        content: '이번달 월급은 ';
      }

      /* p뒤에 요소를 넣을 거다 */
      p::after {
        content: '만원';
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

- display 속성
- 1차원 배열의 경우 flex를 먼저, 2차원 배열의 경우 grid를 먼저 고려하는게 좋다

- 프로젝트에서 익스플로러를 몇 버전까지 호환할 것인지에 대해 PM과 논의해보아야 함

- ㅁ
