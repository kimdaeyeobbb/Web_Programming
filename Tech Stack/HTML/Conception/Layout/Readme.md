# HTML Layout

- 특정 공간에 여러 구성 요소를 보기 좋게 효과적으로 배치하는 작업

<BR>

## HTML 레이아웃 작성법

1. HTML5 Layout - Semantic element(의미 요소)

    - HTML5상에서는 웹 페이지 레이아웃을 위한 별도의 요소인 Semantic element를 제공함


![image](https://user-images.githubusercontent.com/68424403/188335712-70028bf5-0566-472a-b7a0-1bc4fcf47d04.png)


```html
<header><h1>헤더 영역</h1></header>
<nav><h2>Nav 영역</h2></nav>
<section><p>Section 영역</p></section>
<footer><h3>Footer 영역</h3></footer>
```

<br>

- semantic element

|semantic element(의미 요소)|description(서술/기술/묘사/표현)|
|:--:|:--:|
|\<header>|HTML 문서나 섹션 부분에 대한 헤더(도입부의  컨텐츠를 포함하는 부분)를 정의함|
|\<nav>|HTML 문서간 탐색할 수 있는 링크 집합을 정의함|
|\<section>|HTML 문서에서 섹션 부분을 정의함|
|\<article>|HTML 문서에서 독립적인 하나의 기사(article)부분을 정의함)<br>웹 사이트의 나머지 부분과는 별도로 읽을 수 있어야 하며, 그자체만으로 이해가 되어야 함|
|\<aside>|HTML 문서에서 페이지 부분 이외의 컨텐츠를 정의함|
|\<footer>|HTML 문서나 섹션 부분에 대한 footer(사이트의 작성자, 저작권, 연락처 등)를 정의함|



<br><br>

- semantic element는 그 자체만으로도 의미를 가지는 요소이다
- 요소가 브라우저와 개발자 모두에게 본인이 사용된 의미를 명확히 전달해준다
- 이와 달리, div element나 span element 등은 해당 요소가 무슨 목적으로 사용되었는지 직관적으로 알기 어렵다

![제목 없음](https://user-images.githubusercontent.com/68424403/188335702-ccab208d-1d77-4c2c-820b-2a8bfe4038a2.png)


2. div element 사용
    ```html
    <div id="header"><h1>헤더 영역</h1></div>
    <div id="section"><p>섹션 영역</p></div>
    <div id="footer"><h3>footer 영역</h3></div>
    ```



3. table element 사룡

    - table element를 이용하여 레이아웃을 작성하면 수정이 어렵다 (테이블 요소는 레이아웃을 작성하기 위해 설계된 요소가 아니기 때문)
    - 현재 거의 사용하지 않음
