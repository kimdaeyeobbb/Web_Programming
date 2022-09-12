- 가장 먼저 레이아웃을 작업할 것
- 여기서 레이아웃은 가운데 정렬
- 가운데 정렬을 하지 않고 작업을 하면 결과물이 엉망진창 일것임
- 따라서 전체 큰 틀을 먼저 잡아놓을 것

<br><br>

- 확장성과 유연함을 위해서는 각자 덩어리보다는 전체를 감싸는게 좋다

```html
<div class="wrapper">내용</div>
```

- div 부터 설정해놓고 나중에 시멘틱한 마크업으로 수정해도 좋음

<br><br>

- width: auto<br>

```CSS
/* wrapper 에 대한 마크업 */
.wrapper {
  /* width값 미지정시 auto로 지정됨 */
  /*wrapper의 직계 부모인 body가 제공해주는 contents 영역만큼 가득 차는 것*/
  width: auto;
}
```

`wrapper의 직계 부모인 body가 제공해주는 contents 영역만큼 가득 차는 것`

<br><br>

- 그림상 왼쪽 정렬 되어있을 때 오른쪽 공간이 비어있다면 가운데 정렬 하는 방법

```css
/* 사용가능한 공간을 둘로 나눠서 가운데 정렬 */
.wrapper {
  margin-left: auto;
  margin-right: auto;
}
```

<br><br>

- margin 조절시 %보다 px로 조절하는 것이 일반적

<br><br>

- 헤더
  - 어떤 의미를 지님.
  - 로고, 주요 네비게이션 메뉴 존재, 전체 페이지의 주제를 담고 있음

<br><br>

- 클래스명을 일반화해서 기재할 것
  (fox라고 작명하면 동물이 바뀔때 다시 수정해야하는 불편함이 존재)

<br><br>

- 마진병합(마진겹침)

  - [참고 자료1](https://thebook.io/006943/ch03/07/03/)

  - [참고 자료2](https://www.youtube.com/watch?v=c19Mjg-ivxc)

<br>

image.png

- 브라우저가 지정한 margin

<br><br>

- 부모와 자식간의 마진겹침현상 해결방법

1. display: flow-root;
   - 자식의 margin-top이 모두 포함되는 형태로 생성
   - 부모에 display: flow-root를 줘서 부모와 자식간의 마진겹침현상을 해결할 수 있음
   - 가장 일반적인 해결방법

<br>

2. display: inline-block;
   - 애초에 block level element가 아니도록 만듦 => 마진겹침현상 해결

<br>

3. 애초에 마진을 없애버림

   ```css
   /* Resets */
   h1,
   p {
     margin: 0;
   }
   ```

<br><br>

- 되도록이면 한 요소에 padding을 넣어주는게 좋음 (padding이 여기저기에 있는것은 옳지 않음)

<br><br>

- inline element는 다음요소의 다음 컨텐츠가 나오는 부분이므로 `margin:0 auto`가 먹지 않음<br>

```css
display: blcok;
margin: 0 auto;
```

처럼 써줘야 `margin: 0 auto`가 먹음

<br>

- main은 html 전체 페이지에서 유일해야 함

<br>

- HTML BODY의 높이는 왜 페이지 전체가 아닌지?
  - BODY는 block element이고, height가 auto일떄, 컨텐츠 크기만큼 높이가 잡힘.
  - 여우과제 전체는 뷰포트 였음

<br>

- 마진겹침현상이 block element 2개가 인접해 있을 때 나타나는 경우에서 인접은 `형제관계, 부모, 자식관계` 모두 가능하다

<br>

- inline-block끼리는 안겹침 block끼리만 겹침

<br>

- section의 좌우 margin과 h1의 padding이 결합이 되어서 최종 결과물이 나옴
  - => 유지보수에 있어서 안좋은 케이스

<br>

-
