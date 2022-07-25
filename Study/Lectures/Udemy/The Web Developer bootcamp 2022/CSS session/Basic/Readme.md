# [Section 6] CSS Basic

## 6-60. 스타일을 올바르게 담기

### CSS 작성 스타일

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

   > - 파일확장자는 .CSS로 끝나야 함

   <br>
