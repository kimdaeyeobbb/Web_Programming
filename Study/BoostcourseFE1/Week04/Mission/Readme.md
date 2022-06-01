# 미션 1 
## Q1. 4주 차에 배운 단위, 배경, 박스 모델 관련 개념 정리해봅시다.
### 빈 칸을 채워 봐주세요. 빈 칸에 들어갈 수 있는 키워드는 다음과 같습니다.

```HTML
 16, auto,  background-color, background-image, background-repeat, background-position, background-attachment,
 border 영역, content 영역,  containing block,  content 영역,  margin 영역,  MDN Web Docs, rem,  RGB(또는 RBGA), 
padding 영역, px,  W3C, 가로, 마진 병합(margin collapse), 상대 길이, 시계 방향, 절대 길이
```

<br>

```html
1. CSS의 속성은 그 종류가 매우 다양하고 지속적으로 업데이트되는데, 
이런 변화에 대응하려면 CSS 속성을 정의하는 _W3C_에서 제공하는 공식 사이트인 
https://www.w3.org나 모질라 재단의 _MDN Web Docs_를 참고하는 게 좋습니다.




2. CSS 속성 단위는 크게 _절대 길이_와 _상대 길이_ 단위로 구분됩니다. 
절대 길이에서 _px_, 상대 길이에서  _rem_은 가장 많이 쓰이는 단위입니다.




3. 폰트에 색상을 적용할 때 사용하는 속성은 color 속성입니다. 
color 속성의 값은 다양한 방식으로 적용할 수 있는데, 컬러 키워드, _16_진법, _RGB(또는 RBGA)_ 방식이 있습니다.




4. 요소의 배경에 관련된 속성을 지정할 땐 background 속성을 사용합니다. 
우리가 강의를 통해 배운 background 속성은 _background-color, background-image, background-repeat, background-position, background-attachment_입니다.




5. "박스 모델에 대해 설명해보세요."라는 질문은 프론트엔드 개발자 면접 단골 질문 중 하나입니다. 
박스 모델은 크게 4가지 영역, _border 영역, content 영역,  padding 영역,  margin 영역_으로 이루어져 있습니다.




6. padding 속성은 축약해서 지정할 수 있는데, 이때 위쪽을 기준으로 _시계방향_으로 속성값을 지정합니다.




7. margin 속성의 값을 _auto_로 설정하면 브라우저가 자동으로 margin을 계산해 주는데, 
개발자는 이 값을 주로 수평(가로축) 중앙 정렬할 때 사용합니다(주의할 점은 요소에 width 값이 있어야 합니다).




8. _마진 병합(margin collapse)_은 인접한 두 개 이상의 수직 방향 박스의 마진이 하나로 합쳐지는 것을 의미하는데, 
이 개념을 활용하면 첫 번째와 두 번째 컴포넌트의 조합이 다양한 경우 여백을 다르게 사용할 수 있습니다.




9. 패딩값을 상대 길이 단위인 %를 사용해 지정하면 상위 요소(containing element)의 _가로_ 길이를 기준으로 그 값이 계산됩니다.
이 방식은 padding-top, padding-bottom에도 적용됩니다.




10. width와 height 속성은 박스 모델에서 _content 영역_의 너비와 높이를 지정할 때 사용합니다.




11. height 속성을 %를 사용해서 지정할 땐 _containing block_을 기준으로 그 값이 결정됩니다.


```




<br><br><br>





# 미션 2
## Q2. 4주 차에 배운 폰트, 텍스트 관련 개념을 정리해봅시다. 
### 빈칸을 채워 봐주세요. 빈칸에 들어갈 수 있는 키워드는 다음과 같습니다.

```html
1.2, @font-face, em, font-family, font-size, font-size, font-style, font-weight,  margin의 auto 값,
 generic-family, text-align: center;, text-indent, text-decoration, letter-spacing, 
vertical-align, word-break, word-spacing,  word-wrap,  white-space, 단위, 블록 레벨 요소, 웹 폰트, 
```

<br>

```html
1. 모든 폰트는 _em_박스를 가지고 있는데, _em_은 폰트의 전체 높이를 의미합니다.




2. font-family 속성을 지정할 땐 _generic-family_를 함께 지정해줘서 family-name으로 지정한 글꼴을 사용할 수 없을 경우를 대비해야 합니다.




3. em 박스, 상·하단의 여백을 합친 높이를 지정해주는 속성인 line-height의 기본값은 normal인데, 
브라우저에 따라 다르지만 보통 _1.2_정도로 할당되어 있습니다.




4. line-height는 계산된 값이 아닌 숫자 값을 상속하기 때문에 숫자 값을 사용하면 
부모 엘리먼트에서 계산된 값 대신 비율을 그대로 상속받을 수 있으므로, 가능하면 _단위_가 없는 값을 사용하는 것이 좋습니다.




5. 폰트의 크기는 _font-size_ 속성으로, 굵기는 _font-weight_ 속성으로, 스타일은 _font-style_ 속성으로 지정합니다.




6. 다양한 글꼴 속성을 한 번에 선언할 수 있도록 해주는 font 속성을 사용할 때, _font-size_와 _font-family_는 반드시 선언해줘야 합니다.




7. _웹폰트_는 서버에 저장해 제공하거나, 웹 경로를 통해 사용하는 폰트를 말합니다. 
웹에 있는 글꼴을 사용자의 로컬 환경(컴퓨터)으로 다운로드하여 적용할 땐 _@font-face_속성을 사용합니다.




8. _vertical-align_ 속성을 사용하면 CSS로 수직 정렬을 할 수 있는데, 
주의할 점은 _블록레벨 요소_엔 해당 속성이 적용되지 않는다는 점입니다(inline, table-cell box에는 적용).




9. 블록 요소를 가운데 정렬할 땐 _margin의 auto값_을, 인라인 요소를 가운데 정렬할 땐 _text-align:center;_를 사용합니다.




10. 들여쓰기는 _text-indent_ 속성, 밑줄이나 모양, 색상 변경 등의 장식은 _text-decoration_ 속성을 사용해야 합니다.




11. 요소 안 공백을 어떻게 처리할지는 _white-space_ 속성을, 글자(자간) 사이의 간격을 지정할 땐 _letter-spacing_ 속성을, 
단어 사이의 간격을 지정할 땐 _word-spacing_ 속성을, 단어가 라인 끝에 나올 경우 어떻게 처리할지는 _work-break_ 속성을, 
요소를 벗어난 단어의 줄 바꿈을 지정할 땐 _word-wrap_ 속성을 사용합니다.
```





<br><br><br>






# 미션 3
## Q3. question.html를 보고 검은 테두리의 상자가 실제 화면에서 가로, 세로를 몇 픽셀 차지하고 있는지 맞혀봅시다. (객관식).
### 그리고 박스모델에서 배운 개념을 사용해 그 이유를 적어봅시다. (주관식).

- 200px x 300px
- 220px x 320px
- 210px x 310px
- 220px x 220px

```html
<!DOCTYPE html>

<html lang="ko">

<head>
    <title>박스 사이즈</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        section {
            width: 400px;
            height: 400px;
        }
        .box {
            width: 50%;
            height: 75%;
            border: 10px solid;
        }
    </style>
</head>

<body>
    <section>
        <div class="box"></div>
    </section>
</body>
</html>
```


- 정답<br>
220px x 320px

<br>

- 이유<br>
box의 width는 부모요소 section의 width를 상속받아 50%만 적용하므로 200px이고, <br>
height는 section의 height를 상속받아 75%만 적용하므로 300px이다.<br>
이때 content와 padding을 감싸고 있는 border의 상하좌우 두께가 10px이므로<br>
200px에 10px 2개, 300px에 10px 2개를 더해주면 검은 테두리의 상자가 실제 화면에서 차지하고 있는 픽셀을 알아낼 수 있다.<br><br>
전체 계산 과정은 다음과 같다<br><br>
<strong>width = 400px X 0.5 + 10px+10px -> width = 220px</strong><br>
<strong>height = 400px X 0.75 + 10px+10px -> height = 320px</strong><br>





<br><br><br>



# 미션 4
## Q4. 마진 병합(margin collapse)은 CSS 박스 모델을 제대로 이해하고 응용하기 위해 꼭 필요한 필수 개념입니다. <br>question.html에 있는 여러 예시를 보고, 각 예시 별로 마진 병합이 일어나는지 여부와, 마진 병합이 일어난다면 아래 페이지를 참고하여 그 이유를 적어주세요.
### (마진 병합이 일어나지 않았다면 아래 페이지를 참고해 그 이유를 적어주시면 가산점을 드립니다).

- 참고 페이지1: https://www.boostcourse.org/cs120/lecture/92916
- 참고 페이지2: https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

```html
<!DOCTYPE html>

<html lang="ko">

<head>
    <title>마진 병합</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        .red-box {
            width: 100%;
            background-color: red;
        }

        .blue-box {
            width: 100%;
            background-color: blue;
        }

        .horizontal-container {
            width: 600px;
            height: 200px;
            border-color: black;
            border: 2px solid;
            margin-top: 20px;
        }

        .vertical-container {
            width: 400px;
            height: 500px;
            border-color: black;
            border: 2px solid;
            margin-top: 20px;
        }

        .first-box-1 {
            height: 100%;
            width: 100px;
            display: inline-block;
            margin-right: 50px;
        }

        .second-box-1 {
            height: 100%;
            width: 150px;
            display: inline-block;
            margin-left: 130px;
        }

        .first-box-2 {
            height: 100px;
            margin-bottom: 40px;
        }

        .second-box-2 {
            height: 200px;
            margin-top: 20px;
        }

        .parent-3 {
            height: 400px;
            padding-top: 20px;
        }

        .child-3 {
            height: 200px;
            margin-top: 40px;
        }

        .parent-4 {
            height: 400px;
            margin-top: 40px;
        }

        .child-4 {
            height: 200px;
            margin-top: 40px;
        }

        .parent-5 {
            height: 400px;
        }

        .child-5 {
            height: 200px;
            margin-top: 40px;
        }

        .navigation {
            height: 200px;
            margin-bottom: 20px;
        }

        .heading {
            height: 160px;
            margin-top: 60px;
        }

    </style>
</head>

<body>
    <h1>예시1</h1>
    <div class="horizontal-container">
        <div class="first-box-1 red-box"></div>
        <div class="second-box-1 blue-box"></div>
    </div>

    <h1>예시2</h1>
    <div class="vertical-container">
        <div class="first-box-2 red-box"></div>
        <div class="second-box-2 blue-box"></div>
    </div>

    <h1>예시3</h1>
    <div class="vertical-container">
        <div class="parent-3 red-box">
            <div class="child-3 blue-box"></div>
        </div>
    </div>

    <h1>예시4</h1>
    <div class="vertical-container">
        <div class="parent-4 red-box">
            <div class="child-4 blue-box"></div>
        </div>
    </div>

    <h1>예시5</h1>
    <div class="vertical-container">
        <div class="parent-5 red-box">
            <div class="child-5 blue-box"></div>
        </div>
    </div>

</body>
</html>
```

* 수행사항 <br><br>
* 마진병합이란..? <br>
  - 인접한 공간에 margin-bottom과 margin-top을 적용할 경우 두 속성 중 큰 속성값이 작은 속성값을 병합하는 현상 <br>
  - 웹 사이트 레이아웃 작업 진행 시 margin-top과 margin-bottom 속성이 제대로 적용되지 않을 때가 존재함 <br>
  => 마진 병합(collapsing margins)때문에 발생할 가능성이 높음<br>
  - top값과  bottom 값이 겹치게 되면 작은 값은무시되고, 더 큰값으로 적용이 됨<br>
  - 형제간에 발생하는 마진 병합 현상은 형제 HTML 태그에 margin-bottom과 margin-top 속성을 적용했을 경우 공백이 큰 속성값을 기준으로 설정됨<br>
  - 부모 자식 간에 발생하는 마진 병합 현상은 margin-top 속성이 parent와 child에 모두 적용되어 함께 여백이 생기는것을 뜻한다. (함께 내려간다)<br><br>


1. 예시1 <br>
   - 마진병합이 일어나지 않았음.<br>
   - 이유 : 마진 병합은 상하에서만 일어나는 현상이므로 margin-left와 margin-right에서는 발생하지 않음<br>
   따라서 Block 요소의 성격을 띄고 있는 태그에서만 마진 병합이 발생함 <br><br>


2. 예시2<br>
   - 두 요소가 상하로 인접하므로 마진병합이 일어납니다.<br>
   - 이유: first-box-2의 margin-bottom: 40px가 second-box-2의 margin-top: 20px보다 크므로 큰 속성값인 40px가 작은 속성값 20px를 병합한다.<br>
   따라서 red-box와 blue-box 사이에는 40px의 margin이 존재하게 된다.<br><br>


3. 예시3<br>
   - 마진병합이 일어나지 않았음.<br>
   - 이유: 부모요소에 마진이 존재하지 않기 때문에 마진병합은 일어나지 않습니다.<br>
   만약에 .parent-3에 maring-top이 존재한다면 .child-3 또한 margin-top에 대한 적용을 함께 받는다.<br><br>


4. 예시4<br>
   - 마진병합이 일어남.<br>
   - 이유: 부모요소의 상단마진과 첫번째 자식요소의 상단 마진 병합이 일어납니다.<br>
   .parent-4와 .child-4 모두에게 margin-top: 40px가 적용된다. 여기서 margin-top을 키우면 둘 중 더 큰쪽의 영향을 받아 추가 여백이 생긴다.<br><br>


5. 예시5<br>
   - 마진병합이 일어남.<br>
   - 이유: div는 block format context가 아니므로 자식의 영역을 모두 커버하지 못한다.<br>
   따라서 자식의 margin이 부모 바깥으로 튀어나가게 된다.<br>
