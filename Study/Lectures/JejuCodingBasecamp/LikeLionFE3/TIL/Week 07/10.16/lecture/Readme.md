# [22.10.16] HTML/CSS 복습강의

# HTML

## 1. HTML이란 ?

- 웹에서 문서를 표현하는 방법

## 2. HTML 표준

- [HTML Living standard](https://html.spec.whatwg.org/multipage/)라고 함
  - HTML living standard 내부에 MDN 문서가 포함되어 있음

## 3. HTML 요소

- 시작태그(start tag, opening tag)
- 종료태그(end tag, closing tag) => ex) h1, p
- 빈태그(void tag, empty tag) => ex) img, hr, br

## 4. The elements of HTML

### The document element

- html element

### Document metadata

- head
- title
- base
- link
- meta

  - https://developer.twitter.com/en/docs/twitter-for-websites/cards/orverview/abouts-cards
  - https://ogp.me/ (Facebook)

- style

### Sections

- body
- article

  - `article`은 컨텐츠와 관련이 떨어짐
  - 독립적으로 볼 수 있다면 `article`
  - 컨텐츠에 의존성을 가지고 있다면 `section`
  - 범용적인 묶음 목적으로 사용하면 `section`
  - `heading`요소를 꼭 포함해야 함

- section

  - `section`은 컨텐츠와 중요하게 연관됨
  - 독립적으로 볼 수 있다면 `article`
  - 컨텐츠에 의존성을 가지고 있다면 `section`
  - 범용적인 묶음 목적으로 사용하면 `section`
  - `heading`요소를 꼭 포함해야 함

- nav
- aside

  - 광고 목적으로 사용
  - 위젯 목적으로 사용
  - 컨텐츠와 연관성이 떨어진 광고, 위젯 등의 컨텐츠 집합

- h1, h2, h3, h4, h5, h6
- hgroup

  - 문서 구획을 할 때 2차 제목 연결
  - 부제목을 붙일 때 사용
  - 거의 사용하지 않음. 앞으로도 볼일 거의 없음
  - 주의사항: hgroup은 이론적으로만 유효
  - MDN 문서를 참고할 것
    - [MDN 문서 링크](https://developer.mozilla.og/ko/docs/Web/HTML/Element/hgroup)

- header

  - 컨텐츠의 시작 부분을 나타내는 요소(구역의 제목을 포함하는 용도로 많이 사용)
  - h1 > a > img 처럼 IR기법을 사용함
  - h1(screen out) + img 처럼 IR기법을 사용함

- footer
  - 작성자의 정보, 저작권, 관련된 링크 등의 내용을 담는 구획
- address
  - 주소 정보 등을 담음

### Grouping content

- p
- hr

  - 브라우저마다 보여지는 화면이 다르므로 은행권 같은 곳에서는 사용하지 않음
  - 은행권에서는 border나 선으로 된 이미지를 사용함

- pre

  - html은 공백 병합이 되는데, 공백을 병합하지 않고 싶을 때 사용

- blockquote
- ol
  - type이 있음. i,I,1,a,A
- ul
  - 메뉴로 많이 사용함
- menu
- li
- dl
  - 정의 목록
  - 보통 dl > div > dt > dd
  - json 파일의 key(dt로)와 value(dd로)로 사용
- dt
  - 정의할 용어
- dd
  - 용어 설명
- figure
- figcaption
- main
- div
  - 최후의 수단으로 활용.
  - 실무에서는 이상과 현실의 괴리가 존재

### Text-level semantics

- a
  - anchor 태그 내부에 block 요소를 삽입할 수 있음
- em
- strong
- small
- s
- cite
- q
- dfn
- abbr
- ruby
- rt
- rp
- data
- time
- code
- var
- samp
- kbd
- sub and sup
- i
- b
- u
- mark
- bdi
- dbo
- span
  - 쏴준 데이터를 받는 용도로 사용
- br
- wbr

### Embedded content

- picture
- source
- img
  - alt가 비어있는 경우: 읽지 않고 넘어감
  - alt 속성 자체가 없는 경우: 파일명을 읽음
- iframe
- embed
- video
- audio
- track
- map
- area
- Tabular data
- table
- caption
- colgroup
- col
- tbody
- thead
- tfoot
- tr
- td
- th

### Forms

- form
  - get: URL로 데이터를 전달할 때 사용 (file같은 큰 파일은 get으로 전송하지 않음. id와 pw같은 민감데이터x)
  - POST: 패킷안에 데이터를 넣어 전달할 때 사용(민감데이터 O, 큰데이터 O)
- label
- input
- button
- select
- datalist
- opstgroup
- option
- textarea
- output
- progress
- meter
- fieldset
- legend
- Interactive elements
- details
- summary
- dialog

## 5. Emmet 자동완성

```
h1
h1+h2+p
h2*3
h1{hello world}*10
h1#hojun
h1.hoju
(div>table>(tr>(td*2))*3)+(footer>p)
div#one.c1.c2.c3
=> <div id="one" class="c1 c2 c3"></div>

ul>li.item$*5
=>
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>


table>(tr#id$>td.class$*6)*3
=>
<table>
    <tr id="id1">
        <td class="class1"></td>
        <td class="class2"></td>
        <td class="class3"></td>
        <td class="class4"></td>
        <td class="class5"></td>
        <td class="class6"></td>
    </tr>
    <tr id="id2">
        <td class="class1"></td>
        <td class="class2"></td>
        <td class="class3"></td>
        <td class="class4"></td>
        <td class="class5"></td>
        <td class="class6"></td>
    </tr>
    <tr id="id3">
        <td class="class1"></td>
        <td class="class2"></td>
        <td class="class3"></td>
        <td class="class4"></td>
        <td class="class5"></td>
        <td class="class6"></td>
    </tr>
</table>


a{Click}
lorem
img:z
<!-- lorem*5는 5개의 문장 -->
lorem*5
<!-- lorem5는 5개의 단어 -->
lorem5
[a='value1' b="value2" c=1]
a[href='https://www.naver.com']
```

- doctype 제거시 브라우저는 쿼크 (하위 호환성 모드)로 전환

- favicon

  - 로고
  - 파비콘은 서버에 저장되어 있어야 함

## 6. aa
