# 미션 1 
## Q1. 3주 차에 배워본 다양한 태그들을 정리해봅시다.
빈 칸을 채워주세요. 빈 칸에 들어갈 수 있는 키워드는 다음과 같습니다.

```HTML
attribute,class, id, important, property, Style Sheets, 꾸며주는, 뒤 , 
부모 요소, 부모 요소, 상속, 자식 요소, 제일 우측, 조상 요소, 조합자
```

<br>

```html
1. 프론트엔드 개발자가 되려먼 HTML, CSS, JavaScript를 잘 다룰줄 알아야 합니다. 
웹 페이지를 사람에 비유해보자면, 마크업 언어인 HTML은 몸의 구조(뼈, 근육)를 담당하고 
CSS(Cascading _Style Sheets_의 약자)는 옷과 신발과 같이 외적으로 _꾸며주는_ 역할을 한다고 생각하면 이해하기 쉽습니다.


2. HTML에도 속성이 있고, CSS에도 속성이 있는데 둘은 같지 않습니다. 
HTML의 속성은 영어로 _attribute_이고, CSS의 속성은 _property_입니다. 
둘 다 한국어로 번역할 때 '속성'이라고 하므로 잘 구분하셔야 합니다.

3. 요소에 구애받지 않고 스타일 규칙을 적용할 때는 __class__ 선택자와 ___id__선택자를 활용할 수 있습니다.


4.선택자 중에는 문서의 구조를 이용하여 요소를 선택하는 선택자도 있습니다. 
문맥이나 요소의 구조를 기반으로 하여 선택자를 조합하는 것을 __조합자__ 또는 '결정자' 라고 부릅니다.


5. __부모 요소__는 그 요소를 포함하는 가장 가까운 상위 요소로, 그 요소의 _부모 요소_는 단 하나뿐입니다. 
_자식 요소_는 부모 요소와 반대라고 생각하면 되며, 여러 개일 수도 있습니다. 
한편, _조상 요소_는 그 요소를 포함하는 모든 요소로, 부모 요소를 포함하여 여러 개일 수도 있습니다.


6. 선택자에 요소가 많이 나열되어 있더라도 실제 선택되는 요소는 _제일 우측_에 있는 요소라는점에 주의해야 합니다.


7. _important_ 키워드는 별도의 구체성 값은 없지만, 모든 구체성을 무시하고 우선권을 갖습니다.


8. CSS에서 _상속_은 우리가 기본적으로 알고 있는 부모가 가진 특성을 자식이 물려받는 개념과 같습니다. 
어떤 스타일 규칙이 특정 요소뿐만 아니라 그 자손 요소까지 적용되는 것을 말합니다.


9. cascading은 스타일 규칙들이 어떠한 기준으로 요소에 적용되는지를 정한 규칙으로 
중요도(!important)와 출처, 구체성, 선언 순서라는 세 가지 규칙으로 구성됩니다. 
선언 순서 규칙에 따르면 _뒤_에 선언된 규칙이 우선적용됩니다.


```


<br><br><br>



# 미션 2
## Q2. 여러 요소에 스타일을 적용해 봅시다. 
만족시켜야 할 요구사항은 다음과 같습니다. (아래 입력된 question.html을 수정)
- h2 요소에 red-text 클래스를 추가합니다.
- h2 요소가 붉은색이 되도록 스타일을 수정합니다.
- 첫 번째 p 요소가 붉은색이 되도록 합니다.
- 두 번째, 세 번째 p 요소는 붉은색이 되면 안됩니다.

### 과제 완료 전
![image](https://user-images.githubusercontent.com/68424403/169806158-5630b89c-e279-43ce-85b0-f2d4dc475cf1.png)

### 과제 완료 후
![image](https://user-images.githubusercontent.com/68424403/169806215-0f494c1e-2ba8-469d-aa9b-b9f898228609.png)

###  과제 완료 전 question.html
```html
<!DOCTYPE html>

<html lang="ko">

<head>
    <title>여러 요소에 스타일 적용하기</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        /*여기에 스타일을 추가합니다.*/
    </style>
</head>

<body>
<!--문제에 맞게 요소를 수정합니다.-->
<h2>고양이 사진첩</h2>
<main>
    <p><a href="#">여기</a>를 클릭하면 더 많은 고양이 사진을 볼 수 있습니다.</p>

    <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                     alt="바닥에 등을 대고 누워있는 주황색 고양이"></a>

    <div>
        <p>고양이가 좋아하는 것:</p>
        <ul>
            <li>캣닙</li>
            <li>레이저 포인터</li>
            <li>라자냐</li>
        </ul>
        <p>고양이가 싫어하는 것 TOP3:</p>
        <ol>
            <li>막 대하는 것</li>
            <li>천둥</li>
            <li>다른 고양이</li>
        </ol>
    </div>

    <form action="https://freecatphotoapp.com/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor" checked> 집 고양이</label>
        <label><input type="radio" name="indoor-outdoor"> 야생 고양이</label><br>
        <label><input type="checkbox" name="personality" checked> 사랑스러운 성격</label>
        <label><input type="checkbox" name="personality"> 느긋한 성격</label>
        <label><input type="checkbox" name="personality"> 에너지 넘치는 성격</label><br>
        <input type="text" placeholder="내 고양이 사진 URL 주소" required>
        <button type="submit">올리기</button>
    </form>
</main>
</body>


</html>
```

<br><br><br>


### [과제 완료 후 question.html](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/BoostcourseFE1/Week03/Mission/question2.html)
```html
<!DOCTYPE html>

<html lang="ko">

<head>
    <title>여러 요소에 스타일 적용하기</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        /*여기에 스타일을 추가합니다.*/

        /* 재활용성을 활용하기 위해서 클래스를 사용 */
        .red-text {
            color: red;
        }
    </style>
</head>

<body>
    <!--문제에 맞게 요소를 수정합니다.-->
    <h2 class="red-text">고양이 사진첩</h2>
    <main>

        <!-- inline 스타일 방식으로 해당 요소에 직접 스타일 속성을 이용해서 규칙을 선언 -->
        <!-- inline 스타일은 재활용이 불가능하므로 효율이 떨어진다. 따라서 클래스의 재활용성을 이용하였음 -->
        <p class="red-text"><a href="#">여기</a>를 클릭하면 더 많은 고양이 사진을 볼 수 있습니다.</p>

        <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                alt="바닥에 등을 대고 누워있는 주황색 고양이"></a>

        <div>
            <p>고양이가 좋아하는 것:</p>
            <ul>
                <li>캣닙</li>
                <li>레이저 포인터</li>
                <li>라자냐</li>
            </ul>
            <p>고양이가 싫어하는 것 TOP3:</p>
            <ol>
                <li>막 대하는 것</li>
                <li>천둥</li>
                <li>다른 고양이</li>
            </ol>
        </div>

        <form action="https://freecatphotoapp.com/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor" checked> 집 고양이</label>
            <label><input type="radio" name="indoor-outdoor"> 야생 고양이</label><br>
            <label><input type="checkbox" name="personality" checked> 사랑스러운 성격</label>
            <label><input type="checkbox" name="personality"> 느긋한 성격</label>
            <label><input type="checkbox" name="personality"> 에너지 넘치는 성격</label><br>
            <input type="text" placeholder="내 고양이 사진 URL 주소" required>
            <button type="submit">올리기</button>
        </form>
    </main>
</body>


</html>
```

- 특이사항
<br> 클래스의 재활용성 이용하기 위해 red-text클래스 추가 후 h2 요소와 첫번째 p 요소에 한꺼번에 붉은색 적용



<br><br><br>



# 미션 3
Q3. 브라우저는 어떤 요소에 적용된 CSS 스타일이 상충할 땐 각 스타일에 구체성을 부여하고 판단하여 우선으로 적용할 것을 선택합니다. 
<br>
구체성을 제대로 이해했는지 알아봅시다. (아래 입력된 question.html을 수정)

- 요소를 분홍색(pink)으로 만들어주는 CSS 클래스를 만듭니다.
- h1 요소에 1에서 만든 클래스를 추가하면 요소가 녹색(green)이 될지, 분홍색(pink)이 될 지 예상하고 그 이유를 적어봅니다.
- h1 요소에 실제 1에서 만든 클래스를 추가해 예상에 맞는 결과가 나왔는지 확인합니다.

### 과제 완료 전
![image](https://user-images.githubusercontent.com/68424403/169806590-e9fd4171-6043-4f9e-9793-b0dbc38414f3.png)


### 과제 완료 후
![image](https://user-images.githubusercontent.com/68424403/169806608-e1120bf1-b4ea-4cb0-bae9-bd242b4cbad3.png)

### 과제 완료 전 question.html
```html
<!DOCTYPE html>

<html lang="ko">
<head>
    <title>구체성 이해하기</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        body {
            background-color: black;
            font-family: monospace;
            color: green;
        }

        /*여기에 스타일을 추가합니다.*/

    </style>
</head>
<body>
<h1>Hello World!</h1>
</body>
</html>
```

<br>

### [과제 완료 후 question.html](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/BoostcourseFE1/Week03/Mission/question3.html)
```html
<!DOCTYPE html>

<html lang="ko">

<head>
    <title>구체성 이해하기</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        body {
            background-color: black;
            font-family: monospace;
            color: green;
        }

        /*여기에 스타일을 추가합니다.*/
        /* 요소를 분홍색으로 만들어주는 CSS클래스 생성 */
        .pink-text {
            color: pink;
        }
    </style>
</head>

<body>
    <!-- css내 클래스 추가하여 해당 효과 적용 -->
    <h1 class="pink-text">Hello World!</h1>
</body>

</html>
```
#### 특이사항
- 브라우저는 어떤 요소에 적용된 CSS 스타일이 상충할 때 스타일에 구체성을 부여하고 판단하여 우선적으로 적용할 것을 선택
- 구체성: 선택자를 얼마나 명시적으로(구체적으로) 선언했느냐를 수치화한 것<br>
(구체성의 값이 클수록 우선으로 적용 됨)<br>
(값을 비교할 때 좌측에 존재하는 값부터 비교하며, 좌측 부분의 숫자가 클수록 높은 구체성 가짐)<br>

- .pink-text는 구체성이 0,0,1,0으로 계산됨
(0,0,1,0 : 선택자에 있는 모든 class 속성값, 기타 속성, 가상 클래스)

- h1 요소에 1에서 만든 클래스를 추가하여 요소가 분홍색이 될것이라 예측
=> 실제로 적용됨을 확인하였음

<br><br><br>




# 미션 4
## Q4. 가상 클래스 선택자는 특정 요소의 상태를 미리 추정해서 가상의 클래스로 스타일을 적용할 수 있는 선택자입니다. 
간단한 인풋 폼을 사용해 사용자 동작과 관련된 가상 클래스에 스타일을 적용해봅시다.

- question.html을 열어 스타일을 추가해 다음 요구사항을 만족시켜 봅시다.
- input 요소가 사용자 입력으로 활성화 된 경우, 배경색을 붉은색(red)으로 변경합니다.
- input 요소가 입력 초점을 가진 경우, 배경색을 붉은색(red)으로 변경합니다.

### 과제 완료 전
![image](https://user-images.githubusercontent.com/68424403/169806825-261bcd6e-8b2e-4723-a0bc-bae6f7003692.png)


### 과제 완료 후
![image](https://user-images.githubusercontent.com/68424403/169806839-11738a14-d956-40c0-a606-b3f771db3d45.png)

### 과제 완료 전 question.html
```html
<!DOCTYPE html>

<html lang="en">
<head>
    <title>가상 클래스 스타일 바꾸기</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        /*여기에 스타일을 추가합니다.*/

    </style>
</head>

<body>
<form action="" method="post">
    <input type="text" id="name" name="name"><label for="name">이름</label><br><br>

    <input max="10" min="1" type="number" name="age" id="age"><label for="age">나이</label><br><br>

    <fieldset>
        <legend>좋아하는 색</legend>

        <input id="blue" name="fav-color" type="checkbox" value="blue"><label for="blue">파란색</label>
        <input id="red" name="fav-color" type="checkbox" value="red"><label for="red">붉은색</label>
        <input id="green" name="fav-color" type="checkbox" value="green"><label for="green">녹색</label>
    </fieldset>
    <br>

    <input type="submit">

</form>
</body>
</html>
```


### [과제 완료 후 question.html](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/BoostcourseFE1/Week03/Mission/question4.html)
```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>가상 클래스 스타일 바꾸기</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        /*여기에 스타일을 추가합니다.*/
        /* id값은 유일해야한다는 점을 이용하기 위해 id+가상 클래스 사용
        & 구체성을 높여주는 효과 & 시각적으로 무엇에 적용시키는지 정확히 알 수 있게 됨
        */
        /* :active -> 사용자 입력으로 활성화된 요소에 적용 */
        #name:active {
            background-color: red;
        }

        /* :focus -> 현재 입력 초점을 가진 요소에 적용 */
        #name:focus {
            background-color: red;
        }
    </style>
</head>

<body>
    <form action="" method="post">
        <input type="text" id="name" name="name"><label for="name">이름</label><br><br>

        <input max="10" min="1" type="number" name="age" id="age"><label for="age">나이</label><br><br>

        <fieldset>
            <legend>좋아하는 색</legend>

            <!-- 체크 박스 - 기본적으로 체크 되어있으므로 checked 추가 -->
            <input id="blue" name="fav-color" type="checkbox" value="blue" checked="checked"><label
                for="blue">파란색</label>
            <input id="red" name="fav-color" type="checkbox" value="red" checked="checked"><label for="red">붉은색</label>
            <input id="green" name="fav-color" type="checkbox" value="green" checked="checked"><label
                for="green">녹색</label>
        </fieldset>
        <br>

        <!-- '제출' 대신 요구조건에 맞게 submit으로 제출버튼 내용 수정 -->
        <input type="submit" value="submit">

    </form>
</body>

</html>
```
- 요구사항
1. input 요소가 사용자 입력으로 활성화 된 경우, 배경색을 붉은색으로 변경
- style 태그에 #name:active 추가
id값은 유일해야한다는 점을 이용하기 위해 id="name"+가상 클래스 사용<br>
(구체성을 높여주는 효과 & 시각적으로 무엇에 적용시키는지 정확히 알 수 있게 됨)<br>
- :active 
사용자 입력으로 활성화된 요소에 적용 


<br>


2. input 요소가 입력 초점을 가진 경우, 배경색을 붉은색(red)으로 변경
- style 태그에 #name:focus 추가
id값은 유일해야한다는 점을 이용하기 위해 id="name"+가상 클래스 사용<br>
(구체성을 높여주는 효과 & 시각적으로 무엇에 적용시키는지 정확히 알 수 있게 됨)<br>
- :focus
현재 입력 초점을 가진 요소에 적용

<br>


3. 좋아하는 색 3가지 기본 체크 표시
- 기본적으로 체크 되어있으므로 checked="checked" 추가 

4. '제출' 대신 요구조건에 맞게 submit으로 제출버튼 내용 수정
```html
<input type="submit" value="submit">
```
으로 수정



<br><br><br>





# 미션 5
##  다양한 CSS 개념을 사용하여 스타일을 추가해봅시다. 
만족시켜야 할 요구사항은 다음과 같습니다. (question.html을 열어 스타일을 추가합니다.)

1-1. 메인 글 내에 있는 링크의 색은 blue이어야 하고 밑줄이 없어야 합니다.

1-2. 커서가 해당 링크 위에 올라갔을 땐 밑줄이 생깁니다.

2-1. aside 요소 안에 있는 링크 색은 black 이어야 하고, 밑줄이 있어야 합니다.

2-2. 커서가 해당 링크 위에 올라가면 밑줄이 사라집니다.

주의사항: HTML 수정은 금지합니다. 요소에 클래스 등을 추가할 수 없습니다.

### 과제 완료 전
![image](https://user-images.githubusercontent.com/68424403/169807054-25f7ab14-b4cf-49d5-8151-cde7b33ebd4d.png)

### 과제 완료 후
![image](https://user-images.githubusercontent.com/68424403/169807080-90899ceb-cc1f-4a3c-a704-22ead1eb2173.png)

### 메인 글 링크에 마우스를 올린 경우
![image](https://user-images.githubusercontent.com/68424403/169807128-aacb4ffc-f10e-4eed-adfb-ada57259ce29.png)

### aside 내 링크에 마우스 올린 경우
![image](https://user-images.githubusercontent.com/68424403/169807152-7a49cbaf-b5d2-421c-b3f9-056673f4c0bc.png)


### 과제 완료 전 question.html
```html
<!DOCTYPE html>

<html lang="en">
<head>
    <title>CSS 이해하기 종합</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 24px;
        }

        aside p:last-of-type {
            margin-bottom: 0;
        }

        aside {
            background: lightgray;
            border: 2px solid;
            padding: 16px;
        }

        /*여기에 스타일을 추가합니다.*/

    </style>
</head>

<body>
<article>
    <h2>세계 지구의 날 - 대한민국 청와대</h2>
    <p>
        오늘은 지구의 날입니다.
        세계 시민들이 뜻을 모아 정한 날로, 52년 전 미국의 대규모 원유 유출 사고를 계기로 시작되었습니다.
        <a href="">세계적인 비영리단체 ‘Earth Day’</a>가 정한 올해 지구의 날 주제는 ‘지구에 투자하자’입니다.
        우리는 저녁 8시, 10분의 소등으로 함께할 것입니다.
        어둠 속에서 잠시 우리의 특별한 행성, 지구를 생각해보았으면 합니다.
    </p>
    <p>
        지금 인류는 지구 위기의 심각성을 느끼며 지구 생명체의 한 구성원으로서 탄소중립을 실천하고 있습니다.
        우리나라 역시 세계에서 14번째로 탄소중립을 법제화했고, 2030년 국가 온실가스 감축목표도 40%로 상향하며 우리의 강력한 탄소중립 실현 의지를 국제사회에 알렸습니다.
        쉽지 않은 일이지만 지금처럼 국민과 산업계, 정부가 힘을 합한다면 우리가 앞장서 새로운 시대를 열어갈 수 있을 것입니다.
    </p>
    <p>
        우리 국민들은 세계 어느 나라보다 탄소중립 의지가 높고, 강한 실천력이 있습니다.
        에너지 절약과 분리배출, 플라스틱 줄이기에도 성숙한 시민의식을 보여주고 있습니다.
        불편함을 보람으로 바꿔내 주신 국민들의 참여와 노력만큼 탄소중립 정책이 다음 정부에서도 성공적으로 추진되길 바랍니다.
    </p>
    <p>
        우리의 지구사랑, 아직 늦지 않았습니다.
        저도 오늘 금강송 한 그루를 지구에 투자하겠습니다.
    </p>

    <aside>
        대한민국 청와대는 <strong>공식 홈페이지, 트위터, 페이스북</strong>을 통해 문재인 대통령의 말과 글을 공유합니다. <a href="">이곳</a>을 클릭하면 공식 홈페이지로 이동합니다.
    </aside>
</article>

</body>
</html>
```

<br>

### [과제 완료 후 question.html](https://github.com/kimdaeyeobbb/Web_Programming/blob/main/Study/BoostcourseFE1/Week03/Mission/qeustion5.html)
```html
<!DOCTYPE html>

<html lang="en">

<head>
    <title>CSS 이해하기 종합</title>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <style>
        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 24px;
        }

        aside p:last-of-type {
            margin-bottom: 0;
        }

        aside {
            background: lightgray;
            border: 2px solid;
            padding: 16px;
        }


        /*여기에 스타일을 추가합니다.*/

        /* 1-1. 메인 글 내에 링크색 blue & 밑줄 제거*/

        /* p태그 내 a태그에 정확하게 속성 변경될 수 있도록 부모-자식 관계 명시 */
        article p a {
            /* 링크 색상 blue로 변경*/
            color: blue;

            /* 커서가 해당 링크 위에 올라갈 경우 a 태그 내 밑줄 제거 */
            text-decoration: none;

        }

        /* 1-2. 커서가 해당 링크 위에 올라갔을 때 밑줄 생성*/
        /* p태그 내 a태그에 정확하게 속성 변경될 수 있도록 부모-자식 관계 명시 */
        article p a:hover {
            /* :hover - 커서가 링크 위에 올라갔을 때 */
            /* text-decoration:underline - 밑줄 생성 */
            text-decoration: underline;
        }

        /* 2-1. aside 요소 안에 있는 링크색은 black & 밑줄 존재*/
        /* aside태그 내 a태그에 정확하게 속성 변경사항이 적용되도록 부모-자식 관계 명시 */
        article aside a {
            /* 링크 색상 black으로 변경 */
            color: black;

            /* text-decoration: underline - 밑줄 생성 */
            text-decoration: underline;
        }



        /* 2-2. 커서가 해당 링크 위에 올라가면 밑줄이 사라짐 */
        /* aside태그 내 a태그에 정확하게 속성 변경사항이 적용되도록 부모-자식 관계 명시 */
        article aside a:hover {

            /* 커서가 해당 링크 위에 올라갈 경우 a 태그 내 밑줄 제거 */
            text-decoration: none;
        }
    </style>
</head>

<body>
    <article>
        <h2>세계 지구의 날 - 대한민국 청와대</h2>
        <p>
            오늘은 지구의 날입니다.
            세계 시민들이 뜻을 모아 정한 날로, 52년 전 미국의 대규모 원유 유출 사고를 계기로 시작되었습니다.
            <a href="">세계적인 비영리단체 ‘Earth Day’</a>가 정한 올해 지구의 날 주제는 ‘지구에 투자하자’입니다.
            우리는 저녁 8시, 10분의 소등으로 함께할 것입니다.
            어둠 속에서 잠시 우리의 특별한 행성, 지구를 생각해보았으면 합니다.
        </p>
        <p>
            지금 인류는 지구 위기의 심각성을 느끼며 지구 생명체의 한 구성원으로서 탄소중립을 실천하고 있습니다.
            우리나라 역시 세계에서 14번째로 탄소중립을 법제화했고, 2030년 국가 온실가스 감축목표도 40%로 상향하며 우리의 강력한 탄소중립 실현 의지를 국제사회에 알렸습니다.
            쉽지 않은 일이지만 지금처럼 국민과 산업계, 정부가 힘을 합한다면 우리가 앞장서 새로운 시대를 열어갈 수 있을 것입니다.
        </p>
        <p>
            우리 국민들은 세계 어느 나라보다 탄소중립 의지가 높고, 강한 실천력이 있습니다.
            에너지 절약과 분리배출, 플라스틱 줄이기에도 성숙한 시민의식을 보여주고 있습니다.
            불편함을 보람으로 바꿔내 주신 국민들의 참여와 노력만큼 탄소중립 정책이 다음 정부에서도 성공적으로 추진되길 바랍니다.
        </p>
        <p>
            우리의 지구사랑, 아직 늦지 않았습니다.
            저도 오늘 금강송 한 그루를 지구에 투자하겠습니다.
        </p>

        <aside>
            대한민국 청와대는 <strong>공식 홈페이지, 트위터, 페이스북</strong>을 통해 문재인 대통령의 말과 글을 공유합니다. <a href="">이곳</a>을 클릭하면 공식 홈페이지로
            이동합니다.
        </aside>
    </article>

</body>

</html>
```

<br><br>

- 수행사항


1-1. 메인 글 내에 링크색 blue로 변경 & 밑줄 제거

```css
/* a태그에 정확하게 속성 변경될 수 있도록 부모-자식 관계 명시 */
article p a {

    /* 링크 색상 blue로 변경*/
    color: blue;

    /* a태그 밑줄 제거*/
    text-decoration: none;
}
```


1-2. 커서가 해당 링크 위에 올라갔을 때 밑줄 생성

```css
/* a태그에 정확하게 속성 변경될 수 있도록 부모-자식 관계 명시 */
article p a:hover {
    /* :hover - 커서가 링크 위에 올라갔을 때 */
    /* text-decoration:underline - 밑줄 생성 */
    text-decoration: underline;
}
```

2-1. aside 요소 안에 있는 링크 색은 black 이어야 하고, 밑줄이 있어야 함
```css
/* aside태그 내 a태그에 정확하게 속성 변경사항이 적용되도록 부모-자식 관계 명시 */
article aside a {
    /* 링크 색상 black으로 변경 */
    color: black;

    /* text-decoration: underline - 밑줄 생성 */
    text-decoration: underline;
}
```


2-2. 커서가 해당 링크 위에 올라가면 밑줄이 사라짐
```css
/* aside태그 내 a태그에 정확하게 속성 변경사항이 적용되도록 부모-자식 관계 명시 */
article aside a:hover {

    /* 커서가 해당 링크 위에 올라갈 경우 a 태그 내 밑줄 제거 */
    text-decoration: none;
}
```

