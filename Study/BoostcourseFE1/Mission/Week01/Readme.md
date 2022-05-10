# 미션 1 
## 웹 개발자들은 새로운 개념을 학습할 때, 신뢰할만한 리소스인 MDN Web Docs를 주로 참고합니다. Mozilla 재단이 만든 MDN Web Docs에서 HTML을 어떻게 정의하고 있는지 읽어보시고 아래 빈칸을 채워보세요.
- MDN Web Docs: https://developer.mozilla.org/
- HTML이란 무엇인가: https://developer.mozilla.org/ko/docs/Web/HTML


```
HTML은 _HyperText Markup Language_의 약자로 웹을 이루는 가장 기초적인 구성 요소입니다. 
웹페이지의 모양을 꾸미는데 쓰는 CSS와 기능, 동작을 구현하는데 쓰는 JavaScript와 함께 쓰입니다.
HTML 요소는 _태그_를 사용해서 다른 텍스트와 구분합니다. _태그_는 여는 홀화살괄호(<>)로 감쌉니다.
프론트엔드 개발자는 __HTML__, __CSS_, ____Javascript______를 사용해 웹을 만듭니다.
```

<br><br>


# 미션 2
## 다음 글의 밑줄에 어떤 단어가 들어갈지 적어보세요!

```html
문제

HTML 태그엔 _속성_을 추가할 수 있습니다. _속성_은 태그에 추가 정보를 제공하거나 태그의 동작이나 표현을 제어할 수 있게 해줍니다.

속성은 이름과 값으로 이루어져 있습니다. 속성값은 __ 큰따옴표("")__와 _작은따옴표('')__로 감싸 표현합니다.

한 태그에 여러 속성을 선언할 수 있는데, 여러 속성을 선언할 때는 _공백_으로 구분해서 사용합니다.
```


<br><br>


# 미션 3
## 다음 HTML은 의도한 대로 동작하지 않습니다. 어떻게 수정할 수 있을지 적어보세요! 
(이름만 굵은 색으로 표시하고, 제목과 텍스트 사이에 빈 줄을 넣고 싶음.)
- 수정 전
```html
<!-- 대한민국 국민 이보라 자기소개 -->
<h1>자기소개</h1>
<span>
    <br>
        안녕하세요. 대한민국에 사는 <strong>이보라입니다.
    </br>
</span></strong>
```

<br>

- 수정 후
```html
<!-- 대한민국 국민 이보라 자기소개 -->
<h1>자기소개</h1><br>
안녕하세요. 대한민국에 사는 <strong>이보라</strong>입니다.
```

- 결과값<br>

### 자기소개<br><br>

안녕하세요. 대한민국에 사는 <strong>이보라</strong>입니다.

<br><br>


# 미션 4
## 로그인 페이지 하나를 만들려면 다양한 태그가 사용됩니다. <br>네이버 로그인 페이지에 접속 후, 개발자 도구를 열어 어떤 태그가 쓰이고 있는지 확인해 보세요. <br>그리고 각 요소별로 어떤 태그가 사용되고 있는지 확인하고 적어보세요!
### 1.위쪽의 NAVER 로고
```html
<a href="https://www.naver.com" class="logo">
  <h1 class="blind">NAVER</h1>
</a>
```
a태그 사용 style background-image로 로고 부여

<BR>
  
### 2.아이디와 비밀번호를 입력하는 네모 상자
```HTML
<div class="id_pw_wrap">
    <div class="input_row" id="id_line">
        <div class="icon_cell" id="id_cell">
            <span class="icon_id">
                <span class="blind">아이디</span>
            </span>
        </div>
        <input type="text" id="id" name="id" placeholder="아이디" title="아이디" class="input_text" maxlength="41" value="">
        <span role="button" class="btn_delete" id="id_clear" style="display: block;">
            <span class="icon_delete">
                <span class="blind">삭제</span>
            </span>
        </span>
    </div>
    <div class="input_row" id="pw_line">
        <div class="icon_cell" id="pw_cell">
            <span class="icon_pw">
                <span class="blind">비밀번호</span>
            </span>
        </div>
        <input type="password" id="pw" name="pw" placeholder="비밀번호" title="비밀번호" class="input_text" maxlength="16">
        <span role="button" class="btn_delete" id="pw_clear" style="display: block;">
            <span class="icon_delete">
                <span class="blind">삭제</span>
            </span>
        </span>
    </div>
</div> 
```

input 태그 사용

<BR>
  
### 3.초록색 로그인 버튼
```HTML
<div class="btn_login_wrap">
  <button type="submit" class="btn_login" id="log.login">
    <span class="btn_text">로그인</span>
  </button>
</div>
```
button 태그 사용
