# [Section 7] CSS Selector

## :clipboard: Selector

### :pushpin: CSS RULES

- CSS의 기본규칙

- 선택자 뒤에 중괄호{}가 오고 설정하려는 특성이 그 뒤에 나온다

```css
selector {
  property: value;
}
```

- 예시 1

```CSS
h1{
  color: purple;
}
```

- 예시 2

```css
/* nth-of-type: 가상선택자 */
input[type="text"]: nth-of-type(2n) {
  border: 2px solid red;
}
```

<br><br>

## :clipboard: Various Selector

### :one: UNIVERSAL SELECTOR (전체 선택자)

```CSS
* {
  color: green;
}
```

- 문서(페이지)내에 있는 선택 가능한 모든 요소를 선택할 수 있다

- 텍스트 전체를 검은색으로 만들거나 특정 폰트 크기를 지정하고 싶은 경우등에 사용

- 파일 크기가 클 때에는 비효율적일 수 있다

<br><br>

### :two: ELEMENT SELECTOR (요소 선택자)

- 사용 예시

```CSS
img {
  width: 100px;
  height: 200px;
}
```

- 지정된 타입의 모든 항목을 선택<br> (이미지, 버튼 등)

<br><br>

### :three: SELECTOR LIST

- 사용 예시

```CSS
/* 모든 h1,h2 스타일에 마젠타 색 적용 */
h1, h2 {
  color: magenta;
}
```

- 쉼표를 사용해서 목록에 있는 선택자 여러 개를 합치는 방법

- 비슷한 스타일을 적용하고 싶은 두 개이상의 요소들이 있을 경우에 주로 사용

<br><br>

### :four: ID SELECTOR

- 사용예시

```CSS
#logout {
  color: orange;
  height: 200px;
}
```

- ID는 label과 input을 연결할 뿐 아니라 CSS의 모든 요소에 훅을 제공한다

- 훅: CSS가 하나의 요소를 뽑아내도록 하는 것

- ID는 HTML에 추가되는 속성으로 한 부분의 스타일을 바꿔주는 역할을 함

- ID에는 띄워쓰기가 없어야 하고, 되도록 짧으면서도 의미가 담겨 있어야 함

- 하나의 ID는 페이지 내 한 번만 나와야 함<br> (ID는 고유한 식별자이므로 중복되면 안됨)

<br><br>

### :five: CLASS SELECTOR (클래스 선택자)

- 사용예시

```css
.complete {
  color: green;
}
```

- 요소 선택자와 함께 가장 많이 사용 됨

- ID 선택자와 비슷한 개념으로 마크업에 무엇인가를 추가해서 훅을 걸어 CSS로 연결함<br>(단, 클래스는 여러 요소에 적용됨)

- 클래스가 요소를 묶어 주기 때문에 몇 개의 그룹을 만들어서 비슷한 스타일을 적용할 수 있다

<br><br>

### :six: DESCENDANT SELECTOR (자손 선택자)

- 사용예시

```css
li a {
  color: teal;
}
```

- 띄워쓰기를 사용

- 위의 예시를 보자면 li 뒤에 한 칸을 띄우고 a가 있을 경우 li 태그에 중첩된 모든 자손 요소를 선택하라는 뜻<br>(li 태그에 연결된 것을 선택하게 만듦)

- 즉, 공백이 중요하고 쉼표와는 다르다<br>(쉼표의 경우 li태그와 a태그를 선택하지만, 띄워쓰기는 li태그 안의 a태그를 선택한다)<br>(따라서 li 태그는 선택하지 않게 되고 li 태그에 속한 a 태그만 선택된다)

- 클래스 선택자와 함께 사용된다<br>(일일이 클래스를 사용하지 않아도되므로 자주 이용된다)

<br><br>

### :seven: ADJACENT SELECTOR (인접 선택자)

- 사용예시

```css
h1 + p {
  color: red;
}
```

- 인접 선택자는 결합자라고도 부른다

- h1과 p는 요소 선택자이고 +가 전체 선택의 명령을 바꾸는 결합자(인접 선택자)이다

- h1 다음에 오는 p 태그를 모두 선택하게 함<br>(h1 태그 다음에 오면서 같은 단계에 있는 p태그를 선택)

- 부모와 자식의 개념이 아닌 형제의 개념이다

<br><br>

### :eight: DIRECT CHILD (직계 자손 선택자)

- 사용예시

```CSS
div > li {
  color: white;
}
```

- 부등호 \> 를 사용하며, 한 단계 아래의 자식만 선택한다

- \> 는 div태그 바로 아래에 있는 li 태그를 선택한다<br>즉, div 태그에 속한 모든 li 태그가 아니라 직계 자손인 li 태그만 선택한다

<br><br>

### :nine: ATTRIBUTE SELECTOR (속성 선택자)

- 사용예시

```CSS
input [type="text"] {
  width: 300px;
  color: yellow;
}
```

- 특정 요소를 가진 요소를 선택할 수 있다

- 주로 앞서 type 속성에서 본 input 요소와 함께 쓰이는데 체크박스, 라디오 버튼, 텍스트 상자, 비밀번호 입력 창 등이 실제로 렌더링 된 input 태그에 변동을 주는 것을 보았다

- ㅁ
