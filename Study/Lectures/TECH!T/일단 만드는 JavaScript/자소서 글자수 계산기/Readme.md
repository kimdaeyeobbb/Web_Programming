# 22.09.21

## DOM

- Document Obejct Model

- 웹화면을 구성하는 HTML코드를 쉽게 접근할 수 있도록 만든 모델

- JS도 DOM을 이용하여 원하는대로 구성을 할 수 있음

- DOM을 이용하여 HTML요소에 접근하여 원하는 것으로 바꿀 수 있음

- 원하는 위치에 새로운 태그를 추가하고 원하는 글을 쓸 수 있음

- 태그의 속성을 변화시킬 수 있음

- JS는 DOM을 활용하여 원하는 요소에 접근하여 바꿀 수 있음

- DOM에 접근하기 예시

```JS
document.getElementById('특정 id');   // 특정 id를 가진 html 요소에 접근해서
document.getElementById('특정 id').value;   // 해당 요소의 값을 가져옴


```

- DOM에 접근하기 예시2

```HTML
 <span id="count">(0/200)</span>
    <script>
        function counter() {
            var content = document.getElementById('jasoseol').value;
            if (content.length > 200) {
                content = content.substring(0,200);
                document.getElementById('jasoseol').value = content;
            }
            document.getElementById('count').innerHTML = '(' + content.length  + '/200)';
// 어떤 값을 자바스크립트로 만들어서 그 값을 역으로 DOM에 집어넣는 작업
        }
        counter();    // 함수를 이용해서 여러줄의 코드를 한번에 실행
    </script>

```

<br><br>

## document

- DOM의 진입점 역할을 수행함

- document 예시

```HTML
<html>
<head>
</head>

<body>
    <h1>자기소개</h1>
    <textarea id="jasoseol">
        저는 인성 문제가 없습니다
    </textarea>
</body>

</html>
```

- document로 화면에 html을 불러와서 문서중에 getelementid를 이용하여 특정태그 선택가능
- document.getElementById('jasoseol').value를 이용하면 특정값만 가져올 수 있음

<br><br>

## Document.getElementById()

- 주어진 문자열과 일치하는 id속성을 가진 요소를 찾고, 이를 나타내는 Element 객체를 반환함

- id

  - 찾으려는 요소의 id를 뜻함
  - 대소문자를 구분하는 문자열이며, 문서 내에서 유일해야 함 (하나의 값은 하나의 요소만 사용가능)

- id가 없는 요소에 접근하기 위해서는 [Document.querySelector()](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)를 사용

## [Element.innerHTML](https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML)

- Element 속성(property) `innerHTML`은 요소(Element)내에 포함 된 HTML 또는 XML 마크업을 가져오거나 설정함

- `innerHTML`을 읽으면 유저 에이전트가 요소의 자손으로 구성된 HTML 또는 XML 조각을 직렬화함. 그 결과는 문자열로 반환함.

```JS
let contents = myElement.innerHTML
```

- 요소(Element)의 내용을 변경하는 대신 HTML을 문서(document)에 삽입하려면,
  [insertAdjacentHTML()](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML) 메서드를 사용해야 함

- 사용예시

```JS
const content = element.innerHTML;

element.innerHTML = htmlString;
```

<br><br>

## 함수

- 명령어의 모음

- 긴 코드를 여러번 쓰지 않아도 되게끔 만들어줌

- 긴 명령어를 쓸 필요없이 함수를 이용하면 편리함

```JS
function counter() {
    var content = document.getElementById('jasoseol').value;
    document.getElementById('count').innerHTML = '(' + content.length + '/200)';
};

counter();
```

<br><br>

## 이벤트

- 어떤 사건을 뜻함

- ex) 마우스 클릭, 키보드 누름, 값 변화, 페이지 로딩 등

<br><br>

## 이벤트 핸들링

- 어떤 이벤트가 발생하면 특정 동작을 하라고 지시하는 것

ex) 글자 수를 세주어라 (키보드 누르는 것 - 이벤트)

```html
<textarea onkeydown="counter();" class="form-control" rows="3" id="jasoseol">
저는 인성 문제가 없습니다.
</textarea>
```

- 여기서 `onkeydown (키가 눌리면 - 이벤트)` 실행시 `counter(); (counter함수를 실행 - 이벤트 핸들링)` 수행

<br><br>

## .substring

- 해당 인덱스의 문자를 자름 (잘리지 않은 문자는 남김)

```js
content = '인성 문제 없습니다'; // index: 0~10
content.substring(0, 5); // 인성 문제
```

<br><br>
