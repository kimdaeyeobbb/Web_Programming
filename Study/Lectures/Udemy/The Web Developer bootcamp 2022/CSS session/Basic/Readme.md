# [Section 6] CSS Basic

## CSS 작성 스타일

1. INLINE STYLE

> - HTML 요소에 직접 스타일 작성 (권장 X)

  <br>

> - 복사하지 않고는 스타일을 공유할 수 없음

   <br>

> - 스타일 공유시 일일이 변경해야하는 문제 발생

   <br>

- 예시

  ```html
  <body>
    <h1 style="color:purple">Hello world</h1>
    <button style="background-color:palegreen">I AM A Button</button>
  </body>
  ```

<br>

2. THE \<style> element

   > - (요소와 중첩되거나 포함되지 않는 스타일 요소를 사용해) 문서 대신 CSS를 직접 작성하는 방식

   <br>

   > - 웹 사이트의 여러 문서나 여러 페이지에 동일한 스타일을 적용하려는 경우 수정사항 적용이 어려움 (하나를 바꾸면 변경사항 하나하나 모두 복사 + 붙여넣기 해야함)

<br>

3. EXTERNAL STYLESHEET

   > - 외부 스타일 시트에서 스타일을 작성하는 것

   <br>

   > - CSS 작성을 위해 완전히 별개인 새 파일을 만듦

   <br>

   > - 스타일시트 작성시 파일확장자는 .CSS로 끝나야 함

   <br>

   > - 별도의 문서인 HTML 파일에 추가할 경우, \<link> 요소를 사용하고 href 속성을 지정할 것

   <br>

   > - 새로운 스타일시트를 만들 때마다 \<link> 요소로 연결해야 함

   <br>

<br><br>

## CSS Text Properties

<br>

### :one: font-align (텍스트 정렬)

- 텍스트 정렬을 할 때 사용

<br>

### :two: font-weight (폰트 굵기)

- 선택한 텍스트에서 주어진 부분의 굵기를 조정하는 것

<br>

### :three: text-decoration

- 텍스트를 꾸미는 선을 조정

- 밑줄, 윗줄, 취소선 같은 것들이 있는 경우 이런것들을 조정한다

```css
h1 {
  text-decoration: underline;
}
```

<br>

### :four: line-height

- 텍스트의 줄 간격을 지정

<br>

### :five: letter-spacing

- 텍스트의 글자 사이의 간격을 조절

<br><br>

## FONT FAMILY

- 요소의 폰트를 변경할 때 사용

- 폰트를 변경하는 작업은 브라우저에 내제된(built-in) 폰트에 따라 다르기 때문에 또 다른 주제인 사용자 지정 폰트를 설치 또는 삽입하는 방법을 배우기 전에는 생각보다 간단하지 않을 수 있다
  (따라서 그 전까지는 브라우저 폰트나 웹 안전 폰트를 쓰도록 하자)

- 사용방법
  ```css
   {
    font-family: verdana;
  }
  ```

<br>

### font stack

- 사용하려는 폰트를 순서대로 적은 목록

- 쉼표로 구분된 목록에 원하는 폰트나 여러 폰트의 이름을 골라서 넣는다

- 백업(대체)폰트는 제네릭 패밀리에서 지정할 수 있다
  (1순위, 2순위, 3순위 ... 순서대로 백업을 넣는다)

- 항상 제네릭 대체 폰트로 타입을 지정해서 백업을 넣는 게 좋다

- 사용예시

  ```css
  /* 쉼표 앞은 첫번째 선택, 쉼표 뒤는 다음 선택 */
  h1 {
    font-family: Gill Sans Extrabold, sans-serif;
  }
  /* sans-serif: 백업용 대체 폰트임. 특정 폰트가 아니라 Sans Sarif라는 font family이다
  (따라서 Sans Serif 폰트 중에서 또다른 것들이 사용가능하다) */
  ```

<br>

- 사용자 지정 폰트를 사용하게 되면 대부분의 기기에 없지만 꼭 쓰고 싶은 멋진 폰트가 있을 때 사용자가 그 폰트에 액세스할 수 있도록 만들 수 있다
  (그 폰트를 못쓰는것은 아니고 몇 단계를 거쳐야 한다)
