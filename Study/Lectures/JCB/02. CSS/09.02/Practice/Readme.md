- 레이아웃

  - 웹 사이트를 큰 덩어리로 보는 것

- 웹사이트

  - 3개의 덩어리(header, 본문, footer)로 구성 - 시각적으로 몇개의 덩어리로 나눠져 있는지 파악하는 것이 우선사항
  - 큰 것부터 -> 작은 것 순서로 진행
  - div부터 하나 만드는것부터 시작한다

- 선택자

  - 내가 만든 html요소를 꾸미기 위한 것

- CSS 예시

```css
/* 여기서 div는 selector(선택자) '역할' -> 여기서는 태그가 아님*/

/* type selector 임 */
div {
  /* background-color: property(속성)임*/

  /* orange: value(속성 값) */

  /* :(콜론) - 구분자 역할 */
  background-color: orange;
}
```

- property (속성)

  - 예시

  ```css
  /* background-color: property(속성)임*/
  background-color: orange;
  ```

  - html의 속성(attribute)과 구별할 것

- 뷰 포트

  - 창 전체를 뜻함

- initial value (초기값, 기본값)

  - css는 내가 설정하지 않아도 기본적으로 설정되어있는 default value가 존재
  - property에 대한 initail value임

  - 예시

  ```css
  /* width 미지정시 width: auto로 지정되어 있음 */
  /* 여기서 property는 width*/
  width: auto;
  ```

- 사용자 에이전트 스타일 시트

  - body에 margin 8px존재
  - 브라우저에서 확인됨
  - 브라우저가 제공하는 기본 스타일
  - 예시 => body 요소에 적용되어있는 margin 8px

- width: auto VS width: 100%

  ```css
  div {
    background-color: orange;
    width: 100%;
  }
  ```

  - width: 100%

    - 부모가 제공해주는 공간의 크기만큼 자식의 div가 100%로 꽉 차는 것. but width값의
      left가 +가 되어서 삐져나감 (마우스를 오른쪽 끝으로 스크롤시)

  - width: auto
    - 브라우저가 계산한 margin, padding, border를 고려하여 유연하게 부모가 제공하는 최대 컨텐츠 영역 너비만큼 가득채움
    - 브라우저가 우리를 대신해서 유연하게 계산해줌
    - margin이 존재시 부모가 제공하는 contents 영역만큼 가득 채워야지! 해줌
    - margin left를 고려한 것을 기반으로 가득채움 (마우스를 오른쪽 끝으로 스크롤시)
    - 부모가 제공해주는 컨텐츠 영역의 크기만큼 가득 채움. margin, padding, border등을 고려해서 가득 채움.

![unknown](https://user-images.githubusercontent.com/68424403/188040319-cb60f694-3199-4642-b76b-8f4521189986.png)

- margin

  - 외부 여백, 바깥쪽 여백

- padding

  - 예시

  ```css
  div {
    background-color: orange;
    width: auto;
    padding: 100px;
  }
  ```

- width: auto를 명시적으로 써주는 케이스

  - 예시

  ```css
  /* 미디어 쿼리, 500보다 작아졌을 때 width가 없던 시절로 되돌림 -> 이때 width: auto로 적음 */
  @media {
    max-width: 500px;
  }
   {
    div {
      width: auto;
    }
  }
  ```

- width: initial;

  - width속성의 초기값이 initial
  - width의 초기값이 무엇인지 알아서 넣어주는 것 (width: auto와 동일)
  - width: auto가 뭔지 모르는 사람들을 위해서 명시적으로 써준 것

- height

  - property initial value

  ```css
  height: auto;
  ```

- background color

  - property initial value

  ```css
  background-color: transparanet;
  ```

- height: auto와 width: auto는 별개이다

  - 같은 것이라고 생각하면 안됨
  - property에 따라서 의미가 달라짐

  ```css
  /* 여기서 div는 selector(선택자) '역할' -> 여기서는 태그가 아님*/

  /* 여기서 div -> type selector 임 */

  /* div에 높이, 너비가 지정이 되지 않으면 배경색이 나타나지 않음 */
  div {
    /* background-color: property(속성)임*/

    /* orange: value(속성 값) */

    /* :(콜론) - 구분자 역할 */
    background-color: orange;

    /* width값 미지정시 width: auto로 되어있음 */
    /* width: auto => 이 영역만큼 body에 가득 차 있는 것 */
    width: auto; /*직계 부모 기준*/
    height: auto; /* 자식 기준 */
  }
  ```

  - CSS direction

  - 우리나라는 책을 왼쪽부터 읽으므로 결과값은 왼쪽 정렬로 나타남 (우리나라는 기본값이 왼쪽 정렬)

  - 아랍권은 기본값이 오른쪽 정렬임

- background-image initial value

  - initial value는 none
    initial keyword를 통해 명시적으로 지정할 수도 있음
  - 예시

  ```css
  background-image: none;
  ```

- padding

  - border 내부 여백

- box-sizing: content-box;

  - box-sizing의 initial value

  ```css
  box-sizing: content-box;
  ```

- margin의 initial value

  - 0임

  ```css
  margin: 0;
  margin-left: 0;
  ```

- margin 상하단 auto는 되지 않음
  - 아래 공간은 다음 컨텐츠의 것
  - block level elements의 기준으로 좌우쪽만 가짐
