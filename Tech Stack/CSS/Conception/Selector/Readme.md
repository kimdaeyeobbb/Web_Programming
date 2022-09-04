# Selector (선택자)

- CSS 규칙을 적용할 요소를 정의함

<br>

## Basic Selectors (기본 선택자)

### Universal Selectors (전체 선택자)

- CSS를 적용할 대상으로 HTML 문서 내부의 모든 요소를 선택
```css
*{color: blue;}
```

<br>

### Type Selectors (유형 선택자)

- HTML 태그명 등을 사용하여 요소를 선택함

- 기본꼴
```css
element{style properties}
```


- 예시
```css
span{color: skyblue;}
```


<br>

### Class Selectors (클래스 선택자)

- 특정 집단의 요소를 한꺼번에 선택할 때 사용
- 같은 클래스의 이름을 가지는 요소를 모두 선택해줌
```html
<h1 class="heading1">헤딩 1 태그</h1>
```

```css
.heading1{color: black;}
```

<br>


### id selectors (id 선택자)

- CSS를 적용할 대상으로 특정 요소를 선택할 때 사용함
- 웹 페이지에 포함된 여러 요소 중 해당 아이디 값을 가지는 요소만을 선택해줌
- 중복된 아이디를 사용하지 않도록 유의할 것
```CSS
#heading2{color: yellow;}
```



<br>

### Attribute Selector (특성 선택자)

- 속성 선택자를 사용하여 특정 속성이나 특정 속성값을 가지고 있는 HTML 요소를 선택할 수 

```[attr=value]``` : 속석명은 atrr, 값이 value임

<br>


- 주어진 특성을 가진 모든 요소를 선택함
```css
a[href="https://manuted.com"]{
  color: red;
}
```



<br>

## Grouping Selectors (그룹 선택자)

- 여러 선택자를 같이 이용하고자 할 때 사용
- 그룹 선택자는 여러 선택자를 쉼표(,)로 구분함
- 그룹 선택자를 사용함으로써 코드 중복을 줄여 코드를 간결하게 만들 수 있음
```css
h1,h2,h3,p{
  background-color: navy;
}
```





<br>

## Combinators (결합자)

- 결합 선택자는 연관된 선택자들 간의 관계를 설정해줌

### Descendant combinator (자손 결합자)

- 해당 요소의 하위 요소 중 특정 타입의 요소를 모두 선택함
- span 태그의 하위 요소 중 p 태그를 모두 선택하는 예제
```css
span p{background-color: red;}
```

<br>

### Child combinator (자식 선택자)

- 해당 요소의 바로 밑에 존재하는 하위 요소 중 특정 타입의 요소를 모두 선택함
- span 태그의 바로 밑에 존재하는 하위 요소 중 p 태그를 모두 선택하는 예제
```css
span > p {background-color:navy;}
```





<br><br>

## sibling selector (동위 선택자)

- 동위 선택자는 동위 관게에 있는 요소들 중 해당 요소보다 뒤에 존재하는 특정 타입의 요소를 모두 선택함
- 동위 관게: HTML 요소 계층 구조상 같은 부모를 가지고 있는 요소
- 동위 관계에 있는 요소들을 형제(Sibling) 요소라고 함



<br>


### General sibling combinator (일반 동위 선택자)

- 해당 요소보다 뒤에 존재하는 특정 타입의 요소를 모두 선택함
- span 태그와 동위 관계에 있는 요소들 중 span 태그보다 뒤에 존재하는 p태그를 모두 선택하는 예제
```css
div ~ p {background-color: red;}
```






<br>


### Adjacent sibling combinator (인접 동위 선택자)

- 해당 요소와 동위 관계에 있으며, 해당 요소의 바로 뒤에 존재하는 특정 타입의 요소를 모두 선택함
- span 태그와 동위 관계에 있는 요소들 중 span 태그 바로 뒤에 존재하는 p태그를 모두 선택하는 예제
```css
span + p {background-color: red;}
```




<br>


