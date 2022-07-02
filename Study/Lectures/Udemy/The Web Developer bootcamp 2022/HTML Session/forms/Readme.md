# HTML Forms

- HTML 요소들의 모음<br>

<br>

## \<Form>

- 그룹화된 모든 입력을 담는 상자<br>

- 폼 요소는 폼을 제출하였을 때 폼 데이터를 어디로 보낼지 지시함<br>

- 데이터를 폼에서 내 서버로 보내라는 구체적인 지시를 내릴 수 있다<br>

<br>

### action 속성

- 폼이 제출되었을 때, action 속성이 데이터를 보낼 시간과 위치를 지정<br>

- action 예시

```html
<form action="/search/" autocomplete="off" method="get" role="search">
  <input
    id="header-search-bar"
    name="q"
    class="_2xQx4j6lBnDGQ8QsRnJEJa"
    placeholder="Search"
    type="search"
    value="polish chicken"
  />
</form>
```

- form이 우리를 데려간곳 => action=/search 임
- 폼 자체가 컨테이너 이며 여기에 라벨이 달려있다
- URL: 정보를 보낼 목적지이다
- 모든 데이터는 HTTP 요청을 통해 함께 전송된다
- 검색창에 뭔가를 입력한 다음 Enter를 눌러 폼을 제출하면 HTTP 요청이 /search로 전송된다
- /search는 그냥 갈수 있는 곳이 아니라 현재 접속한 사이트와 관련있다
- 그래서 reddit.com/search와 같은 곳으로 가는 것이다
- 기본적으로 reddit과 /search로 요청을 보내서 우리 데이터를 전달하는 것이다
- [silkie를 검색할 경우] https://www.reddit.com/search/?q=silkie 로 이동 <br>
  => q=silkie로 데이터를 전달<br>
  => reddit은 서버의 작업을 인식하고 silkie에 대한 질문과 함께 검색을 요청한다고 판단하여 대량의 DB를 검색하여 이미지와 결과 및 모든 게시물을 찾아 웹 페이지로 조합한 다음 그 페이지를 우리에게 보낸다 (웹 페이지는 그 결과물이다)<br>
  => reddit에서 웹 페이지를 다시 보냈고 우리가 그것을 보고 있는 것이다<br>
- https://www.reddit.com/search/?q= <br>
  다음에 검색하기를 원하는 단어를 입력하면 해당 단어에 대한 자료를 얻을 수 있다<br>
  => 폼을 버리고 요청을 보낸 것 &amp; 이 URL로 직접 이동한 것<br>
  => 폼을 직접 입력하지 않고도 단어를 검색할 수 있는 사례<br>

<br><br>

- fomr 제출 후 진행과정<br>

  1. 폼을 제출하면 HTTP 요청이 전송된다<br>

  2. 그리고 action 속성을 사용하여 해당 요청이 어디로 가는지 제어한다<br>

  3. 그리고 어떤 유형의 HTTP 메서드를 사용할지 제어한다<br>
     (method 속성을 통해 제어가 이루어진다)<br>

  4. get, post는 HTTP 메서드에 대한 두 가지 값임<br>

<br><br>

### form access

- 입력 내용을 그룹화한 뒤 작은 배송 라벨을 붙여 지정된 목적지로 함께 제출한다<br>

<br><br>

## \<input>

- 닫는 태그가 없음<br>

- input 태그를 이용하여 다양한 입력란을 생성할 수 있음<br>

  Ex) 체크박스, 색상 선택기, 날짜 선택기, 비밀번호 입력란, 일반 텍스트 입력란 등<br>

  => 작동 방식은 \<input>으로 완전히 동일)<br>

  => 단, type를 통해 작동 방식을 바꿀 수 있음<br>

- input 태그 예시

```html
<input type="text" placeholder="id" id="textInput" class="custom" size="32" />
```

<br><br>

## \<label>

- 필수 HTML form element<br>

- Inline Element <br>

- 폼을 쓰기 편하게 해준다 &amp; 접근성 측면에서 중요<br>

- label을 사용하지 않고 p태그 또는 span태그 등을 사용하는 경우, 어떤 텍스트와 체크박스가 서로 연결된 것인지 &amp; 혹은 둘 간의 관계를 스크린 리더가 알 수 없다<br>

- label 요소는 실제로 특정한 입력값이나 Form control 및 텍스트와 직접적으로 연결되어 있다<br>

- 두 요소를 연결 시 label 자체를 클릭할 수 있게 만들어줌<br>

<br><br>

## \<button>

- 웹페이지의 폼에는 전형적으로 버튼이 포함되므로 아주 중요<br>

- 폼 안에 버튼이 있으면 기본값으로 해당 폼을 제출함<br>
  (아래 예시 참고)

  ```html
  form action="/tacos">
          <!-- 여기서 label태그와 input 태그가 username을 매개체로 연결되어 있다 -->
          <!-- label과 input을 중첩하지 않는 흔한 방법 -->
          <!-- 이 방법이 스타일 지정이 편하다 -->
          <button>PLEASE DO NOT SUBMIT THE FORM</button>
          <p>
              <label for="username">Enter a Username: </label>
              <input id="username" type="text" placeholder="아이디를 입력하세요">
          </p>
          <p>
              <label for="password">Enter a password: </label>
              <input id="password" type="password" placeholder="비밀번호를 입력하세요">
          </p>
          <button>IN THE MIDDLE!</button>
          <p>
              <label for="color">Enter a color: </label>
              <input id="color" type="color">
          </p>
          <p>
              <label for="number">Enter a number: </label>
              <input id="number" type="number" placeholder="숫자를 입력하세요">
          </p>

          <!-- label 요소를 사용하여 입력값에 레이블을 지정하는 또다른 방법 -->
          <!-- label 내에 input이 중첩되므로 for와 ID는 없어도 됨 -->
          <p>

              <label>Enter a time:
                  <input type="time">
              </label>
          </p>
          <!-- 버튼 클릭시 폼을 수행하는데 form의 /tacos가 없으므로 버튼 클릭시 에러 발생 -->
          <button>Submit</button>
      </form>
  ```

- \<input type="button"><br>

  => 버튼이 (클릭해도 더이상 폼을 제출하지 않고 아무것도 하지 않는) 오직 버튼으로만 기능하게 만듦<br>

  => 폼 대신에 폼을 제출하지 않는 버튼을 만들고 싶을 경우 사용<br>

<br>

- \<input type="submit"><br>

  => 버튼이 폼 안에 있을 때의 기본값<br>

  => 폼 안으로 다시 넣으면 폼을 제출함<br>

<br><br>

## name

- 입력값에 있어 매우 중요한 속성<br>

- name 속성 예시<br>

```html
...
<form action="/search/" autocomplete="off" method="get" role="search">
  <input
    id="header-search-bar"
    name="q"
    class="_2xQx4j6lBnDGQ8QsRnJEJa"
    placeholder="Search"
    type="search"
    value="silkie"
  />
</form>
...
```

- 검색 폼처럼 데이터를 전송하거나 폼을 제출할 경우, 제출을 하면 form action 측으로 HTTP 요청을 보내는데 https://www.reddit.com/search/?q=silkie의 /search에 해당된다<br>

- 그런 다음 q=silkie라는 데이터를 전송한다<br>

- silkie는 \<input>의 name에서 온 것이다<br>

- name="q"의 q는 이름이거나 레이블인 것이다<br>

  (데이터가 서버로 전송될 때 \<input> 안에 있는 값을 지칭하기 위한 것 이다)<br>

  (보통 이 값은 서버가 찾으려는 공백이 없고 짧은 값이다.)<br>

  (여기서는 reddit이 q라는 값을 찾으려고 하는 것이다)<br>

  (이 name은 데이터를 서버로 전송할 때 사용된다)<br>

- name 속성에서 데이터를 전송할 때 이용할 부분은 알맞게 레이블 해야한다<br>

- 모든 input 태그에 name 속성을 사용하여야 하므로 중요하다<br>
  (서버로 데이터를 전송할 때 사용한다)<br>

-
