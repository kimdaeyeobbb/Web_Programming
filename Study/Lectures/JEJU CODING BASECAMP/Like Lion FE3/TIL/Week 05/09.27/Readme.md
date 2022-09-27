# 22,09.27 (Sass, Bootstrap)

- [마크다운 미리보기](https://blog.uniony.me/vscode/markdown/)

## 무료사진

- [픽사베이](https://pixabay.com/ko/)
- [Unsplash](https://unsplash.com/)
- [pexels](https://www.pexkels.com/ko-kr/)

## FE 개발 기회비용 산정

- 예) 300만원짜리 프로젝트일 경우 UI는 사는게 기회비용이 좋다. 사서 수정하는게 좋다.

## 코드펜 (HTML, CSS, JS 소스)

- [코드펜](https://codepen.io/)

## Splitcow

- splitcow

## Toptal

- [Toptal](https://www.toptal.com/)

## CSS Gradient

- [그라데이션 사이트](https://cssgradient.io/)

## Free Gradients (그라데이션)

- [그라데이션 사이트](https://webgradients.com/)

## 구분선

- [구분선 사이트](https://www.shapedivider.app/)

## ADD A CSS

= [ADD A CSS](https://css-tricks.com/add-a-css-lens-flare-to-photos-for-a-bright-touch/)

## 관공서 프로젝트할때 사용

- [관공서 프로젝트시 사용하는 아이디어](https://www.youtube.com/watch?v=dm57kWnXpEI&ab_channel=%EC%A0%95%EC%9B%90%ED%99%94%EC%9D%98Q-GIS)

## 와이어 프레임을 사용하는 이유

- 요구사항을 충족시켰는지 확인하기 위해
- 의뢰를 받았을 때, 요구사항 명세서가 없는 경우도 존재한다. (예- 가족 이나 친척의 부탁) 이러한 경우 어떻게 클릭했는지 어디로 이동했는지 보여주면서 요구사항을 조율할 수 있다
- 요구사항이 두루뭉술할때에는 세부사항 모든것을 집요하게 물어봐야 다 만들어왔을 때 잡음이없다. (그래야 결과물을 보여줬을때 만족할 수 있다)

## ProtoPie

- [ProtoPie](https://www.protopie.io/)
- 피그마와는 조금 다른 툴

## 오피스제주, 함덕 스타벅스

- 시간날떄 한 번 가볼것. 가면 유명한 개발자가 다 모여있음

## svg

- 벡터값이므로 높이와 너비값이 꼭 있어야 함

## g

- grouping 태그

## 스크립트 태그를 중간에 삽입하는 케이스 (몰라도 됨)

- `넌적스 템플릿 엔진 사용하기`와 같이 여러가지를 겹치는 경우가 발생
- 스크립트는 새로운 모듈에서 필요한 스크립트가 필요한 경우가 발생

## URL 인코딩

- 데이터를 표현하는 방법
- 이미지가 데이터베이스로 저장

- 한글로 들어가면 문제가 발생하는 케이스가 종종 있다
- 따라서 인코딩을 해주는 것임
- URL 인코딩시 `띄워쓰기`는 `%20`임

## BASE 64 인코딩

- 데이터를 표현하는 방법

## MD5 암호화

- 텍스트를 아무리 많이쳐도 글자수가 늘어나지 않음
- 암호화해서 키를 주는것임
- 해커가 해킹을 해갔을 경우 해커가 이것을 가지고 비밀번호를 알아갈 수 없음

## sha256 암호화

- 찾아볼 것

## 라이캣 같이 그리기

- [참고 사이트](https://github.com/paullabkorea/licat_CSS_tutorial)

## 넌적스, 템플릿 문법 (지금은 잘 몰라도 됨)

## Sass 등을 왜 사용하는가?

- 재사용성, 유지보수에 있어서 기하급수적으로 상승하는 비용을 줄이기 위해서 사용

- 시간이나 비용이 적게 투입되는 프로젝트의 경우 재사용성,유지보수 등을 고려하는것이 오히려 더 에너지 낭비이다

## z-index

- 회사내 코드컨벤션을 따라가야 함
- 중간중가넹 껴놓을 요소가 나중에 나오면 유지보수가 어려움

## 둥근 각도 계산하기

- [각도 깎기 계산사이트](https://9elements.github.io/fancy-border-radius/)

## CSS 변수

- [CSS 변수](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)

- [CSS 변수2](https://www.daleseo.com/css-variables/)

## Sass

- 전부 다 다른 sass파일로 만들어서 저장할 경우 style.css라는 하나의 파일로 합쳐줌

- less보다 많은 기능을 보유(그러나 각 장단점이 존재)
- sass는 mixin만 배워도 유용하게 사용할 수 있음
- .scss의 파일명이 '\_'로 시작하는 것은 코드를 작성하고 저장했을 때 .css로 만들어지지 않는다<br>(대신 import를 해서 style.css에 합쳐서 컴파일 된다)<br>(컴파일- css로 변환되는 것)

## 질의응답

```html
<body>
  <!-- style태그를 body태그 안에서 사용하는 경우는 극히 드물다 -->
  <style>
    .two {
      color: blue;
    }
  </style>
  <!-- script를 body안 중간에서 사용하는 경우는 이런 경우는 종종 있다 
  (스크립트를 중간에 컨트롤 해야하는 경우) -->
  <script></script>
  <div class="one">hello</div>
  <div class="two">hello</div>

  <script></script>
</body>
```
