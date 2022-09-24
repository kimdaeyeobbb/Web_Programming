- Header, Contents, Footer

  - 처음부터 이들을 구분짓기는 쉽지않다
  - 우리가 파악하기 좋은 코드를 먼저 넣자
  - 아파트를 지을 때에도 철골구조를 먼저 생성

- 시각적 가중치를 위해 id보다는 class를 이용

- type selector

  - 구체적이지 않고 너무 광범위함. 좋은 방법이 아님
  - 따라서 class 시스템을 사용하는것이 좋다

- class 기재

```css
/* 친구끼리 일때는 성을 떼고 적어줘도 됨 */
/* 이 경우에는 . 앞에 *가 생략된 것*/
.민지 {
}

/* 구체적으로 적어줌 => 섬세한 디자인을 요구할 때 사용 */
조.민지 {
}
```

- \* (Universial selector)

  - 모든 요소를 선택

  ```css
  *.header {
    background-image: url(images/cover06.png);
  }
  ```

  와

  ```css
  *.header {
    background-image: url(images/cover06.png);
  }
  ```

  는 동일함

- class명으로 container OR wrapper 사용

```css
<div class="wrapper">
        <!-- class 명은 숫자로 시작하면 안됨 & 지칭대상을 구체적으로 지시 -->
        <div class="header">Header</div>
        <div class="contents">Contents</div>
        <div class="footer">Footer</div>
    </div>
```

- 언제나 레이아웃이 우선시 되어야함. 폰트 사이즈 등은 디테일한 사항이므로 나중에 할 것. 인테리어로 따지면 도배도 안하고 시계를 거는 작업을 먼저하면 안된다

- 가운데 정렬 기법

  - text-align

- inline elements

  - 내부에 있는 텍스트, 이미지까지 포함함
  - 기본적인 선이 존재
    - 이 base line 기준으로 배치됨

- 가운데 정렬 (inline elements VS block level elements)

  - 찾아서 정리할 것

- normalize
  - value를 없애기보다 올바른 초기값을 넣어주는 것

> caniuse.com 사이트 참고할것

- 가운데 정렬 2가지 방법

1. block level elements

   - 컨테이너를 뜻함 (내부의 텍스트는 inline임)
   - 한 줄에 하나씩 배치
   - div
   - ul
   - li
   - h1~h6
   - p

2. inline level elements
   - 내부의 텍스트, 이미지, 컨텐츠를 뜻함
   - 인라인 성질을 띄는 요소 (a, span 등)

- 가로 가운데 정렬

  - 예시1

  ```css
  div {
    margin: 0 auto;
  }
  /* 부모 기준으로 가득차 있으므로 의미없는 작업임 
  따라서 부모를 px값으로 설정하는 과정이 필요 (아래와 같이 설정할 것) */
  div {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  ```

- 상속되는 property

  - text-align: center
  - color: yellow

- 상속이 되지 않는 property

  - width
  -

- text-align: center

  - 상위요소에 기재시 하위요소가 이러한 특성을 상속받음

- 초기화 진행시 initial을 써주는 게 일반적

  - BUT 상속이 지원되는 property는 초기화 진행을 inherit으로 써주는 게 일반적

- \> (combinator)

  - 왼쪽과 오른쪽에 있는것을 결합해서 새로운 가치를 만들어 냄

- width: fit-content

  - 내부 텍스트 크기만큼 width값이 결정됨
  - 유사 자매품: max-content, min-content

- [CSS 네이밍 컨벤션](https://en.bem.info/methodology/css/#selectors)

- a 요소는 사용자 스타일 시트에 다음과 같은 것들이 있다

  - color: -webkit-link; => 없애주는게 좋음 (예쁘지 않으므로 기본 스타일 제거)
  - cursor: pointer; (손가락 모양) => 유용하므로 없애지 않음
  - text-decoration: > underline;

- 마크업 개행

  - html은 시각적인 부분을 담당하고 있지 않다.

  ```html
  <div class="footer">
    <!-- a는 인라인요소이므로 가로로 배치 -->
    <a class="link" href="">Github</a>
    <a class="link" href="">Facebook</a>
    <a class="link" href="">Contact</a>
  </div>
  ```

  처럼 작성할 경우 한줄에 나오더라도 `Github Facebook Contact`처럼 살짝씩 띄워져서 나온다

  - 하지만 다음과 같이 작성할 경우 `GithubFacebookContact`처럼 완전히 붙여져서 나온다

  ```html
  <div class="footer">
    <a class="link" href="">Github</a><a class="link" href="">Facebook</a
    ><a class="link" href="">Contact</a>
  </div>
  ```

  html이 시각적인 요소에 영향을 미치게 되므로 적절하지 않은 예시이다. 시각적인 요소를 css를 통해서 조정하도록 하자. (CSS에게 시각적인 부분을 일임할 것!)

- display

  - inline level element를 block level element로 만듦
  - block level element를 inline level element로 만듦

- class는 id와 달리 한 요소에 여러개를 담을 수 있다

  - 예시 1

  ```html
  <a class="link github" href="">Github</a>
  <a class="link facebook" href="">Facebook</a>
  <a class="link contact" href="">Contact</a>
  ```

  - 예시 1의 공통분모

  ```css
  .link {
    /* width가 없으면 텍스트의 양만큼 너비가 잡힘 */
    /* height가 없으면 텍스트의 높이만큼 자동으로 높이가 잡힘 */
    padding: 10px 20px;

    /* display => 블록 요소를 인라인화, 인라인요소를 블록화 함*/
    /* inline-block => 인라인의 특성과 블록의 특성이 골고루 포함되어 있음 */
    display: inline-block;
    border-radius: 40px;
    border: 4px solid;
    color: #ccc;
  }
  ```

  - 예시 1의 +a (개별특성)

  ```css
  .link.github {
    color: dodgerblue;
  }

  .link.facebook {
    color: violet;
  }

  .link.contact {
    color: black;
  }
  ```

- 그림의 역할이 단순히 꾸며주기인 경우 img보다 background로 넣는것도 좋다 (css상 배경으로 관리)

- selctor specific

  - selector가 구체적일수록 더 우선시 됨
  - 예시 1

  ```css
  .wow {
    /* 얘가 적용됨 (우선순위가 더 높으므로)*/
    background-color: purple;
  }
  h1 {
    background-color: orange;
  }
  h1 {
    background-color: dodgerblue;
  }
  /* 단순히 뒤에 있다고 해서 우선순위 적용이 되는 것이 아니다 */
  ```

  - css가 적용이 안된다면 selector specify 문제인 경우가 많다

  - 예시2

  ```css
  h1.wow {
    /* 얘가 적용됨 (wow보다 더 구체적이라 우선순위가 더 높으므로)*/
    background-color: purple;
  }
  .wow {
    background-color: orange;
  }
  h1 {
    background-color: dodgerblue;
  }
  /* 단순히 뒤에 있다고 해서 우선순위 적용이 되는 것이 아니다 */
  ```

  - 예시 3

  ```css
  h1.wow {
    /* 얘가 적용됨 => wow.wow처럼 두번불러도 wow를 부르는건 똑같음 (종찬아! 종찬아! 불러도 종찬이를 한번만 부른것과 큰 차이가 없다)*/
    background-color: purple;
  }
  wow.wow {
    background-color: orange;
  }
  h1 {
    background-color: dodgerblue;
  }
  ```

  - 구체적인 셀렉터일수록 아래에 배치하는게 좋다 (Cascading [폭포])

  ```css
  h1 {
  }

  .wow {
  }

  .wow.wow {
  }

  body h1.wow {
  }
  ```
