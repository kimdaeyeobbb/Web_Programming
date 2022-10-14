# 22.10.14 수업

## 질의응답

```js
let foo = 1;{
    console.log(foo);
    let foo=2;
}


VM483:2 Uncaught ReferenceError: Cannot access 'foo' before initialization
    at <anonymous>:2:17
```

- let 이 블록내에서 선언되었으므로 블록 내에서 foo에 접근하게 되면 foo=2에 접근하게 되는것인데, 선언과 초기화가 동시에 진행되는 가정에서 콘솔창에 찍으려고 하니까 에러가 발생한 것
- 호이스팅이 일어나지만 호이스팅이 일어나지 않는것처럼 보임
- 변수가 TDZ에 들어가있어서 접근을 할 수 없게 됨

## 질의응답

```js
console.log(foo_let);
let foo_let =123;

VM700:1 Uncaught ReferenceError: foo_let is not defined
at <anonymous>:1:13
(anonymous) @ VM700:1
```

- foo가 정의되어 있지 않다
- foo_let에 접근하는데, 선언과 초기화가 콘솔창에 찍는것보다 뒤에 발생
- (재현님 추측) 자바스크립트 엔진이 브라우저에서 해석되는것과 달리 움직이는 경우가 종종있음

## 질의응답

```js
let myVal = 10;
let myVal = 100;
```

- 크롬콘솔에서만 예외적으로 허용
- 자바스크립트에서는 허용하지 않음
- 따라서 크롬에서 테스트하는것은 권장하지 않음. 에디터나 터미널에서 작성하는것을 권장함

<br><br>

## window

- window는 우리가 사용하는 브라우저
- window(브라우저)는 자바스크립트를 제공
- window는 DOM과 BOM을 제공

## api

- application programming interface
- 입사시 server api를 이용하게 될 것임

## BOM

- console.log가 BOM에 포함

<br><br>

## DOM

- Document Object Model. (문서객체모델)
- HTML문서의 내용을 트리형태로 구조화하여 웹페이지와 프로그래밍 언어를 연결시켜주는 역할을 함
- 문서의 내용을 객체화해서 모델링함
- 각각의 요소와 속성/컨텐츠를 표현하는 단위를 `노드`라고 함

- 브라우저에게 작성내용을 보여주면 브라우저는 HTML내용을 트리화해서 보여줌
- DOM을 이용해서 노드를 탐색할 수 있어야함
- 주석도 노드 중 하나로 인식함

<br>

## DOM TREE

- 돔 트리로 HTML을 변경함
- 변경할 돔 트리에 접근할 수 있어야함 (자바스크립트로 HTML요소를 수정하기 위해(내용 삽입, 삭제등의 수정))
- 돔을 배우는 목적: 원하는 HTML요소에 접근하여 수정하기 위해

<br>

## 돔트리에 접근

- 점(.) 연산자를 통해 메서드를 사용
- getElementById -> 해당 id를 가진 요소에 접근

- 작동순서

```js
console.log(document.getElementById("myDiv")); // 1. id로 접근하는 방법
const myDiv = document.getElementById("myDiv"); // 2. 찾아서 저장하고 사용함
```

- 태그 네임에 해당하는 모든 요소를 가져옴 (해당하는 모든 요소에 접근. `s`가 붙은것을 확인할 것)

```js
console.log(document.getElementsByTagName());
```

- DOM 변수 선언시 보통 `const`를 사용하고, 재할당을 해야하는 경우 `let`을 사용

- 해당하는 클래스를 가진 모든 요소에 접근하기

```js
console.log(document.getElementsByClassName("myDiv2"));
```

## 자료형

- 크게 2가지로나눔
  - 원시타입
  - 참조타입(객체타입)

## 유사배열객체 (객체타입에 해당됨)

- 객체

```js
const obj = { key: "value", key2: "value" };
```

- 유사배열객체 (키값이 숫자)
  - object 내에 원하는 값에 접근하기 위해 키값에다가 숫자를 넣어서 접근

```js
const obj = { 0: "value", 1: "value" };
```

## 질의응답

- [배열 vs 유사배열객체](https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2)

## 질의응답

### HTML Collection은 { } 중괄호가 아니고 [ ] 대괄호로 묶여 있는데 객체로 보는 건가요?

- 객체로 볼 수있다. 사실 js내 모든 것들은 객체라고 볼 수 있다. js는 타입기반(원시타입, 참조타입)의 언어이다. 객체는 안에있는 프로퍼티에 접근할때 점연산자로 접근하는 특징을 보여줬다.

```js
myObj = { key1: 123 };
```

- 배열이라는 자료형 내에도 프로퍼티가 존재
- 배열도 객체의 일종이다
- 배열을 까보면 Prototype: Array가 존재
- 배열도 객체를 상속한 자료형이다. (배열도 객체처럼 작동한다)

```js
let myArr = new Array(1, 2, 3); // new 키워드 사용
myArr; // [1,2,3]
```

- 원시 자료형
- 점(.)이 존재한다는 것은 객체처럼 작동한다는 것

```js
// 문자열은 원시자료형
// split이라는 메서드 사용
"1,2,3,4".split(","); //['1','2','3','4']

// 이 경우 문자열은 잠깐 객체화되어서 사용된다
```

```js
new String("1,2,3,4");
const myStr = new String("1,2,3,4");

console.log(myStr); // String{'1,2,3,4'} -> 객체 생성
```

- [자바스크립트 autoboxing](https://medium.com/weekly-webtips/autoboxing-in-javascript-a368b42d8969)
- 오토박싱: 잠깐 객체화해서 쓸것을 쓰고 다시 원시자료형으로 변환됨
- [오토박싱](http://www.tcpschool.com/java/java_api_wrapper)
- [오토박싱](https://hashnode.com/post/autoboxing-in-js-ckxqf7yni03951js11mnfe4va)

## 요소 탐색 ~ (다시 듣기)

- 탐색을 document부터 시작할 필요가 없다
- 자바스크립트가 해석되는 속도가 빨라진다. 페이지가 로딩되는 속도가 빨라진다는 뜻이다.
- 개발자가 만든 페이지가 빨리 뜨면 seo에서도 강점을 지닌다. 빠르면 빠를수록 검색결과의 상단에 배치될 가능성이 높아진다.
- 페이지가 빨리 뜨면 정보를 빨리 뜰 수 있기 때문이다.

## 쿼리셀렉터

- 탐색을 위해 명령어를 날림.
- 명령어가 css선택자와 완전히 동일
- `.`이나 `#`을 쿼리셀렉터에서 쓸 수 있다.

## 숙제

- 인덱스지정을 안하면 여러개를 찾음. -> 유사배열 HTMLCollection , NodeList등을 반환
- 이 둘의 차이점을 파악해오기
- [참고자료](https://medium.com/@layne_celeste/htmlcollection-vs-nodelist-4b83e3a4fb4b)
- [참고자료2](https://www.w3schools.com/js/js_htmldom_nodelist.asp)
- [참고자료3](https://softauthor.com/javascript-htmlcollection-vs-nodelist/)
- [참고자료4](https://dev.to/jharteaga/difference-between-htmlcollection-and-nodelist-25bp)
- [참고자료5](https://webcodespace.com/htmlcollection-vs-nodelist-in-javascript)
- HTMLCollection -> 이 안에 있는 돔은 live dom

## DOM 제어 명령어

- 이벤트 삽입
- addEventListener에는 이벤트의 type과 리스너함수 `listener`가 들어감
- target은 삽입할 요소 (button, link 등)

- [이벤트 목록](https://developer.mozilla.org/ko/docs/Web/Events)
- 심지어 인터넷이 끊겼을떄/끊기지 않았을 때에도 이벤트를 달 수 있다

## 질의응답

- html button태그 onclick 속성에 함수를 넘겨주는 것과 비교했을 때, 자바스크립트로만 삽입할 수 있다는 면에서 차이가 있나?
  - 차이가 없습니다.

## 클래스제어(다시 확인)

- DOM api를 이용해서 class 속성을 제어할 수 있음

- 클래스 제어를 위해서는 기본적으로 `classList`에 접근해야함

## 요소 제어

- createElement

  - 인자로 전달된 요소를 자바스크립트를 통해 생성

- createTextNode

  - 텍스트 자체를 생성

- appendChild
  - target 안에 인자로 들어가는 요소를 자식 요소로 배치

## 질의응답

### 1. appendChild는 맨 마지막 노드에 추가된다고 이해했습니다. myTxt를 먼저 appendChild를 해주면 myLi가 없는 상태에서 붙여 줄수 있는건가요?? 'li+txt' 합쳐지고 'ul+('li+txt')라고 생각하면 되는걸까요??

```js
myBtn.addEventListener("click", function () {
  for (let i = 0; i < 5; i++) {
    // li요소를 생성합니다.
    const myLi = document.createElement("li");

    // text 노드를 생성합니다.
    const myTxt = document.createTextNode("안녕하세용!" + i);
    //  자식으로 요소를 배치합니다.
    myLi.appendChild(myTxt);
    myUl.appendChild(myLi);
  }
});
```

- 답변

- 넵넵! myLi가 없는 상태이면 li태그 없이 텍스트가 입력이 됩니당!! 그래서 li에 먼저 자식으로 추가한 후 ul에 추가하는 것입니당!

- 'li+txt' 합쳐지고 'ul+('li+txt')라고 생각하면 되는걸까요?? 정확합니당
