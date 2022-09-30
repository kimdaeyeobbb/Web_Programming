# 22.09.30

- 브라우저에서 자바스크립트를 실행 (웹에서 실행 X)
- 자바스크립트를 실행 할 수 있는 환경 <br>
  => 익스플로러, 파이어폭스, 크롬...
- 과거에 `.sort()`는 표준이 없었음 (지금은 알고리즘이 Tim sort로 통합)
- 노드

  - 서버가 아닌 실행 환경임
  - node환경 = v8 + a
  - 폴더 생성등을 수행
  - 노드로 서버를 구성

- 자바스크립트를 이루는 코어는 대부분 C++로 구성
- 생산성은 뷰가 더 높다
- script태그는 대부분 body의 밑에 존재함 (위치에 따른 차이점 파악할 것)
- 함수 vs 메서드

  - 메서드: 클래스 내부에 포함된 것
  - 예시) document뒤에 점을 찍었을 때 점 뒤에 나오는 것

- innerHTML => HTML 코드를 포함할 수 있게됨

- 메서드 체이닝

  - 점으로 연결되어 다음라인으로 옮기는 것

- 노드환경에서는 브라우저가 아닌 쉘창(터미널)이 개발자 도구가 됨

- 자바스크립트 예제

```js
document.getElementById("one").innerHTML = "hello <strong>world</strong>";
console.log("hello world 2");
window.alert("hello world 3"); // 우선순위를 가지는 것인지 파악 후 다시 기재
document.write("hello world 4");
```

- window

  - 브라우저의 크기와 관련되미

- innerHTML

  - 특정 요소의 메서드 (요소를 찍어내야만 요소에 대한 결과가 innerHTML에 들어감. 요소의 메서드이지, document의 메서드가 아니다)

- 웹페이지를 구성하는 요소

  - html, js, css, 왓슨(web assembly)

- [json-generator](https://json-generator.com/)

  - json 파일 생성함

- console 창에서 꾸미고 싶은 문자열 앞에 %c를 사용 (뒤에서 꾸며줄 것을 지정)

```js
console.log("%chello wolrd", "color:red; font-size:32px");
```

<br>

```js
console.log(
  "%chello world%chello",
  "color:blue;font-size:20px",
  "color:green;font-size:40px"
);
```

- 대부분의 회사에서 한글 코딩을 권장하지 않는다

- 변수명을 숫자로 쓰면 에러발생
- 변수명을 숫자로 시작하면 에러 발생

- 문자는 대소문자를 구별함

- [document.write가 되면 버튼이 사라지는 이유](https://ko.javascript.info/modifying-document#ref-1045)

  - 로드시 기존의 문서 내용이 사라짐

- '\_'(언더바) => 반복문 돌 때 의미없는 변수에 사용

- 특수문자도 일부 사용가능함 (잘못알려주는 블로그가 많다)

  - 하지만 특수문자를 사용하는 경우는 드물기 때문에 $,\_ 정도만 사용가능하다고 생각하는게 좋다

- 변수는 let, const, var, if, else 이런 지정된 키워드로 사용하지 않음

- 변수를 상자로 표현하는 것은 적절치 않다

  - 변수는 `포스트잇`이라고 생각하는 것이 적절하다
  - 변수는 해당 코드를 가지고 있는 공간을 가리키고 있는 것 뿐임

- 자바스크립트는 메모리 구조를 공개하지 않으므로 메모리 주소를 알 수 없다

- 형 변환 (타입 변경)

  - 형 변환시 `Number`사용은 권장 X
  - 형 변환시 `parseInt`사용을 권장 O

- onClick

  - js 스펙에 포함되지 X

- group

  - 계층구조에 포함되지 않는다면 group을 쓸 이유가 없다

- 이스케이프 문자

  - \n(개행),\t(수평 탭) 등을 넣어서 특수문자임을 알리는 것
  - 이를 이용해서 원래 형태로 출력을 할 수 있게 됨

- indexOf는 정규표현식을 허용하지 않음
- 0 이외의 다른 숫자는 true이다. (-1도 true)

- [정규 표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions)

- 정규표현식은 내부에 들어가는 것이 '패턴'이다
- [정규 표현식 실습 사이트](https://regexr.com/5nvc2)
- 유효성 검증할 때 정규표현식 사용
- 정규표현식 예제

```js
h[eao]llo

hello world  // hello 찾음
hello  world  // hello 찾음
hello, world  // hello 찾음
Hello World

hello world hello  // hello hello 찾음

hello  // hello 찾음
hallo  // hallo 찾음
hollo // hollo 찾음

```

- /gm <br> => global과 multiline을 뜻함

- 공백도 문자로 포함

- substr(시작위치, 길이)

  - 시작인덱스부터 길이만큼 반환
  - 사용을 권고하지 않음

- [substr VS substring](http://chongmoa.com/javascript/275354)

- replace(바꿀문자열, 바뀔문자열)
