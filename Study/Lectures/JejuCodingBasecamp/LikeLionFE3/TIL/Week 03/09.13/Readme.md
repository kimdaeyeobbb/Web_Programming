# 9월 13일 수업 내용정리

- 회사에 들어가면 보통 디자인은 3개의 시안을 본다
  (휴대폰, 태블릿, pc)

- user agent styleshhet (사용자 에이전트 스타일시트)

  - 취소선이 그어져있다면 사용자가 적용한것 때문에 cascading 된것임

- hover -> 마우스 오버

## 마진 겹침

- 마진겹침이 발생하는 이유?

  - 일부러 의도한 것이다
  - 문제점으로 여겨질 요소가 아니다
  - 따로 해결하지 않아도 된다

<br>

- 마진병합 해결 방법
  - overflow: hidden
  - display: inline-block (컨텐츠 크기만큼 영역을 차지함)
  - 부모요소에 border값을 적용해줌
  - 부모요소에 display 속성으로 flow-root를 사용 (IE 지원 불가)

<br>

### 예제1

- 마진겹침이란?
  - 부모와 자식 요소가 존재할 경우, 자식 요소의 margin-top 혹은 margin-bottom 값이 부모의 높이에 영향을 미치지 않는 현상 (기본적으로 요소의 content 영역의 넓이와 높이는 자식 영역의 넓이와 높이값에 좌우됨)

```html
<style>
  .parent {
    background-color: yellow;
  }

  .child {
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>

<div class="parent">
  <div class="child"></div>
</div>
```

- div는 block level element이므로 영역 전체를 차지함
- child의 높이에 따라서 부모의 높이영역이 바뀜 (child의 높이가 100px이므로 부모의 높이도 100px. child의 높이를 50px로 수정하면 부모의 높이도 50px로 줄어듦)

<br>

### 예제2

```html
<style>
  .parent {
    margin-top: 30px;
    background-color: yellow;
  }

  .child {
    width: 100px;
    height: 50px;
    margin-top: 50px;
    background-color: red;
  }
</style>

<div class="parent">
  <div class="child"></div>
</div>
```

- 부모 영역의 margin-top값은 주나마나이다. 자식 영역의 margin-top값에 밀려나버린다.

<br>

## 마진 겹침을 해결하는 방법

### 1. 부모 요소에 overflow 속성값을 적용해줌

```html
<style>
  .parent {
    overflow: hidden;
    margin-top: 30px;
    background-color: yellow;
  }

  .child {
    width: 100px;
    height: 50px;
    margin-top: 50px;
    background-color: red;
  }
</style>

<div class="parent">
  <div class="child"></div>
</div>
```

- `overflow`: 부모의 영역을 자식이 넘어가게 되었을 때 어떻게 처리할 것인지를 결정하는 속성

- 부모에게 `overflow: hidden`을 설정할 경우 부모를 넘어가는 자식은 보여지지 않게 만듦 (부모를 넘어가는 영역의 자식을 잘리게 됨)

- child의 margin-top만큼 부모의 높이가 높아짐(부모의 높이가 50px -> 100px로 변화)
- 부모의 margin-top: 30px이 올바르게 적용이됨 (마진 겹침으로 인해 더 높은 margin-top값인 자식의 margin-top:50px이 적용된것이 해제됨)

### 2. 부모 요소에 display: inline-block을 적용시킴

```html
<style>
  .parent {
    display: inline-block;
    margin-top: 30px;
    background-color: yellow;
  }

  .child {
    width: 100px;
    height: 50px;
    margin-top: 50px;
    background-color: red;
  }
</style>

<div class="parent">
  <div class="child"></div>
</div>
```

- display를 이용해서 박스의 성질을 바꿀 수 있다
- div일 경우 박스의 성질은 block이다.
- `display: inline-block`을 적용할 경우 자식의 margin영역만큼 부모의 높이가 확장된다.

- inline-block으로 바꾸었으므로 부모의 영역 자식요소의 영역만큼 줄어듦 (inline박스와 block 박스의 특징을 모두 가지고 있는 inline-block은 요소의 컨텐츠 영역만큼의 넓이만 차지하게 만들기 때문이다)

### 3. 부모 요소에 border 값을 적용해줌

```html
<style>
  .parent {
    border: 1px solid black;
    margin-top: 30px;
    background-color: yellow;
  }

  .child {
    width: 100px;
    height: 50px;
    margin-top: 50px;
    background-color: red;
  }
</style>

<div class="parent">
  <div class="child"></div>
</div>
```

- 자식의 margin-top 값을 통해서 부모의 높이도 확장이 되었고, 부모의 margin-top값 또한 잘 적용이 되어있는 모습을 확인할 수 있음
- 단, 이 방법은 의도치 않은 테두리를 발생시킬 수 있음

<br>

<br>

- h1의 기본픽셀: 32px;

- p의 기본픽셀: 16px

- body의 기본픽셀: 16px

- 고정 단위로 주면 좋은 것(px 등): padding, margin, 모니터 크기에 따라 상관없이 보일 것들, 이미지, 반응형을 고려하지 않아도 될 때, 글씨와 관련 없는 것들, 계산하기 쉬워야 하는 것들

- 가변 단위로 주면 좋은 것들: 패딩, 마진, 이미지, 폰트(병원에 홈페이지 납품을했는데 병원장이 캔슬 -> 폰트가 너무 작아서 다시 해달라고 했음 -> 폰트를 전부 픽셀로 한 경우에는 전체를 수정해야함. -> 만약에 가변단위로 주었다면 body 폰트 하나만 수정 했으면 됨)

- 가변단위를 사용하면 계산하기가 어렵다

- 부모요소의 절반을 포함한다는 것은 어디까지 해당되는가?
  - 50%는 부모 요소의 contents넓이의 절반을 일컫는다

<br>

- 망이 연결되어있지 않은 곳이 존재할 수 있으므로 가급적이면 손필기를 권장

- [rem등으로 조절하는 케이스 -> 권장하지 않음](033_질의응답_의도적인margin과padding.html) => 얘처럼 조정하는것은 권하지 않음

-화면의 짧은 쪽을 100으로 나눈것이 vmin,
긴 쪽을 100으로 나눈것이 vmax

- 기본적으로 rem을 많이 쓰고
  ex) 버튼(large, medium, small) 등에 텍스트의 비율에 따라 달라져야 할 경우 em을 씁니다!

- overflow: hidden

- background-image
  -> html 태그 뒤에 이미지를 배치할 때 사용
  -> 웹 페이지에 이미지 넣는 방법 중 하나(다른 하나는 image 태그 이용)

- background-image vs image
  -> image 태그는 백엔드 개발자와 협업하는 경우 사용
  -> fe혼자 작업하는 공간은 background-image 사용

- div, body, html은 모두 block
  -> body에 background 지정
  -> CSS제작자가 body를 background로 해서

<br>

- cover

  - 전체 넓이를 맞춤
  - 이미지가 찌그러지지 않는 한도 내에서 제일 크게 설정 (잘릴 수도 있음)

- contain

  - 이미지가 잘리거나 찌그러지지 않는 한도 내에서 제일 크게 설정

- 디자이너가 em으로 주는지, rem으로 주는지에 따라 em/rem 선정하기도 함

- 폰트에 대해서는 디자이너가 더 지식이 많으므로 폰트에 관한 물음을 구해도 좋음
