# 프레임워크

- 내 코드를 실행해주는 것이 내가 아니라, 프레임워크이다.
- 라이브러리보다 엄격하다
- 프레임워크는 `키트`이다. (종합선물세트 느낌)

# 제이쿼리

- 내가 쓴 코드가 메인이 되고, 그 과정에서 일부기능을 위해 불러오는 역할에서 제이쿼리를 사용하므로 제이쿼리는 라이브러리다

- 함수는 하나의 기능만 사용해야함 (함수를 구분지어 사용할 것)

- :question: 자바스크립트에서 자식요소, first 요소, parent 요소 등을 알아내는 것이 가능한가?
  - 가능하다.

# 복습 때 추가한 사항

## <main>

- 해당 문서의 <body>요소의 주 컨텐츠 (main content)를 정의할 때 사용됨
- <main>요소의 컨텐츠는 해당 문서의 중심 주제 또는 주요 기능과 직접적으로 관련되어 있거나 확장되는 컨텐츠로 구성되어 있어야 하며, 문서 전반에 반복되는 내용을 포함해서는 안된다.
- 하나의 문서에는 단 하나의 <main>요소만이 존재해야 하며, <main>요소는 <article>, <aside>, <footer>, <nav> 요소의 자손 요소가 되어서는 안된다.

<br><br>

## Document.querySelector()

- 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 요소를 반환함 (일치하는 요소가 없으면 null을 반환함)
- 기본 꼴

```js
document.querySelector(selectors);
```

- 반환값

  - 제공한 CSS 선택자를 만족하는 첫 번째 Element 객체 (결과가 없다면 null을 반환)

- cf) 선택자를 만족하는 모든 요소의 목록이 필요하다면 querySelectorAll()을 대신 참조할 것

## Element.innerHTML

- Element 속성(property) innerHTML은 요소내에 포함된 HTML 또는 XML 마크업을 가져오거나 설정함
- 요소의 내용을 변경하는 대신 HTML을 문서에 삽입하려면 insertAdjacentHTML() 메서드를 사용

- 기본꼴

```JS
const content = element.innerHTML;
```
