# 22.09.21 미니 스타크래프트

## jQuery

- 자바스크립트를 쉽게 사용할 수 있게 해주는 라이브러리

- 제이쿼리를 활용하면 짧은 코드로 DOM을 활용하여 HTML에서 원하는 요소를 찾아서 값을 가져올 수 있음

- 간결한 문법 / 편리한 API 제공 / 크로스 브라우징 문제를 해결해줌

- jqeury CDN 코드를 script 태그안에 넣어서 사용

- 제이쿼리의 가장 기본적인 문법 형태

```JS
$(선택자).하고싶은 행위;
```

- 예시

```JS
// 선택자는 css에서 어떤 요소를 선택하는 것과 동일

console.log($('#content').val());
// id가  content인 특정요소 가져옴 + 거기에 있는 value를 가져옴

```

- 예시2

```js
<button id="click">클릭</button>;

// 위와 같은 내용의 jquery 코드
$('#click').click(hello);

// .click이라는 함수를 이용하게 되면 click을 하게 되었을 때 안에 존재하는 hello라는 함수가 실행되는 것
```

- 예시3

<br><br>

## 익명 함수

- 이름이 없는 함수

- 익명 함수는 일반함수와 달리 함수를 정의하고 호출하는 부분이 따로 제시된 것 아님

- 익명 함수는 정의하는 과정없이 바로 사용할 수 있음

- 함수를 호출하고 정의할 필요없이 바로 호출을 할 수 있음

- 사용예시

```js
$('#click').click(function () {
  console.log('hello');
});
```

<br><br>

## .animate

- .animate(properties, [duration], [easing], [complete])

  - CSS 속성으로 변화할 CSS를 넣음 , 지속시간, 트랜지션 상태, 완료되었을 때의 동작

<br><br>

## .css{propertyName}

- 제이쿼리 함수

- .css 내부에 변경하고 싶은 css를 입력하면 애니메이션 없이 바로 css가 변경되는 코드

<br><br>

## 콜백 (callback)

- a
