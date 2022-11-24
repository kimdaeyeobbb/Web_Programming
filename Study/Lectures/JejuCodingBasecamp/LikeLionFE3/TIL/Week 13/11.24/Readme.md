# 22.11.24 (목)

# 면접 빈출

1. 메모리 누수 & 가비지 컬렉션
2. ㅁ

<br>

# [js 17) 최적화](https://paullabworkspace.notion.site/17-Optimization-fb912de1cfa44c359c95503346f21da9#3cdd6aa869ba458ea470502faf79242f)

## 메모리

- Solid State Disk

  - 용량이 큰편
  - 오래 저장해야하는 것들을 저장을 할 목적으로 사용
  - 메모리가 휘발성이 있음

- Random Access Memory
  - 용량이 작은 편
  - RAM의 어느 한 공간에 변수만을 위한 공간을 할당함

### 참조 카운팅 예시

```js
let me = { age: 30 };
let you = me; // 할당
```

- 객체에 대한 참조 카운팅: 2번 (me, you가 객체를 참조하고 있음)

<br>

```js
let me = { age: 30 };
let you = me; // 할당

me = null;
```

- 객체에 대한 참조 카운팅: 1번 (me의 객체에 대한 연결이 끊겼으므로 you만 객체를 참조)

<br>

```js
let me = { age: 30 };
let you = me; // 할당

me = null;
you = null;
```

- 객체에 대한 참조 카운팅: 0번 (me,you 모두 객체에 대한 연결이 끊김)
- 참조 카운트가 0이 된 대상이 가비지 컬렉션이 작업을 할 대상이 됨 (더이상 안쓰는 데이터므로 메모리에서 지워지게 됨)

### 참조 카운팅 문제점

```js
let x = { y: { z: 1 } };
let a = x; // 2)
x = 1; // 3)

let b = a.y; // 4)
a = 2; // 5)
```

- x가 참조하는 객체: obj1, y가 참조하는 객체: obj2 라고 하자

- 2. obj1의 참조카운팅: 2 (a와 x가 원래 참조하는 객체)

- 3. obj1의 참조카운팅: 1 (a)

- 4. obj2의 참조카운팅: 2 (y가 원래 바라보는 대상인 a.y와 y가 바라보는 대상을 b에도 할당한 것이므로 y와 b가 참조 중)

- 5. obj1의 참조카운팅: 0

- 불필요하게 남아있는 obj1와 같은 객체가 존재하는 경우 메모리 누수가 발생했다고 표현함

### 클로저

- 클로저는 메모리 관리에 문제가 존재함

```js
function outer() {
  let privateVal = ["test"];
  // 클로저 공간에 존재하게 됨
  // 얘는 사라지지 않음
  // 가비지 컬렉션의 대상이 되지 않음

  function getPrivate() {
    // 얘는 사라짐
    return privateVal;
  }

  return getPrivate;
}

const getPrivateData = outer(); // outer 함수 실행시키면 getPrivate이라는 함수가 g~
const secretVal = getPrivateData();
console.log(secretVal); // 값을 사용했다면(변수의 참조가 끊어졌다면)

secretVal = null; // 가비지 컬렉터는 값을 반드시 비워줘야 함 (null이나 undefined 사용)
```

- 클로저 이용시 사용한 비공개 변수를 비워줘야 함 (안그러면 계속 남아있게 됨)

<br>

## 전역변수

- 전역변수는 프로그램이 종료될 때 까지 우리가 쓰든 안쓰든 계속 메모리에 남아있음. 따라서 필요한 경우에만 뽑아서 쓰는 습관을 들이는 것이 좋음

- 변수는 클래스나 함수 등에 들어가게 됨

# 엄격모드

- 선언하지 않은 변수에 값을 할당할 수 없음
- 읽기 전용 객체에 값을 할당할 경우 에러가 발생함
- 지울 수 없는 값을 지우려고 하면 에러가 발생함
- 함수 파라미터에 중복된 이름을 사용할 수 없음

- 예제
- 키워드 없이 선언하면 전역변수로 취급함. 변수의 생존범위는 전역이 됨

```html
<body>
  <script>
    "use strict"; // 엄격모드로 자바스크립트를 실행하겠다는 것
    str = "hello strict";
  </script>
</body>
```

# 변수 선언 규칙

- 예약어 사용불가
- 특수기호는 `$`와 `_`를 사용할 수 있음
- 숫자로 시작할 수 없음

```js
"use strict";

let employee = {
  firstname: "John",
  lastname: "Doe",
};

console.log(employee.firstname);
delete employee.firstname;

console.log(employee.firstname);
// delete라는 키워드를 통해 객체의 프로퍼티를 지울 수 있음
```

- 함수 파라미터에 중복된 이름을 사용할 수 없음

```js
"use strict";
function myFunc(a, a, b) {
  console.log(a + a + b);
}

myFunc(1, 2, 3); // Duplicate parameter name not allowed in this context
```

# 면접 대비

- 대답할 때에는 `~합니다`체로 대답할 것

## CSS Sprite기법에 대한 정의와 장단점에 대해서 설명할 것

- 여러 이미지들을 하나의 파일로 모아 처리하는 기법, 초기에 한번만 로딩된 후 이미지를 추가로 로딩할 필요가 없어 빠르다는 장점이 있지만, 스프라이트 내 이미지가 많아질 경우 관리하기 힘들다는 점과 일부 이미지가 변경될 경우 전체 스프라이트를 교체해야 한다는 단점이 있다운 아이콘 등이 추가되었을 때 수정이 번거롭다는 단점이 존재

### 애매한 답변

- 이미지 파일을 한 파일에 모아서 (0, 0) 좌표로 사용하는기법..장점 : 이미지를 불러오는데 렌더링이 최적화됩니다. 단점: 수가 많아지면 불편하다?
  (렌더링이 최적화 된다는 것에 대해 구체적으로 설명해주는 것이 좋음)

### 재현님 답변

- 하나의 이미지 파일에 페이지에서 사용할 여러가지 이미지들을 넣어 좌표와 범위를 통해 특정 이미지를 불러오는 기법을 말합니다. 한번의 이미지 로딩을 통해 여러가지 이미지를 불러올 수 있어 이미지 호출을 하는 성능 최적화에 장점이 있지만 서버측에서 제어할 방법이 없기 때문에 자주 교체 되어야할 이미지의 경우 Sprite 기법은 적절하지 않습니다.

<br><br>

## pixel ratio

- 기기마다 각자 가지고 있는 픽셀의 밀도가 달라 CSS에서 말하는 픽셀과 실제 물리적인 픽셀이 어떤 비율을 가지고 있는지를 말하는 것

### 재현님 답변

- 디바이스 장치의 물리적 픽셀과 CSS 픽셀의 비율을 의미합니다. 즉 하나의 css 픽셀을 그릴때 사용해야하는 디바이스 장치의 픽셀 갯수라고 할 수 있습니다.

<br><br>

## 마진 컬랩싱 현상에 대해 설명해주시고 해결방법을 알려주세요.

- 핵심 키워드: block formaiing context

### [마진 병합 참고자료](https://www.youtube.com/watch?v=c19Mjg-ivxc&ab_channel=%EB%B9%94%EC%BA%A0%ED%94%84CSS0)

- [참고자료2](https://opentutorials.org/course/2418/13464)

### 재현님 답변

- 위 요소와 아래 요소에 margin이 들어가 있는 경우 그 중 큰 값의 margin만 적용 됩니다. 부모 자식 사이에도 적용됩니다. 이를 해결하기 위해서는 BFC를 생성해야 합니다. Block formatting context의 약자로 block 레벨 요소들이나 float 된 요소들이 서로 상호작용 하여 화면에 보여지게 되는 방법(block formatting)을 결정하는 구역(context)을 말합니다.

BFC 가 생성되면 마진 컬랩싱 (margin collapsing) 현상을 막습니다.

<br><br>

## 브라우저가 웹페이지를 랜더링 하는 과정을 설명해주세요.

- CSSOM(씨에스에스오엠이라고 읽음)

### [브라우저 렌더링 동작 과정 참고자료](https://tecoble.techcourse.co.kr/post/2021-10-24-browser-rendering/)

### 재현님 답변

- DOM, CSSOM파싱, 스타일 계산, 레이아웃, 페인트, 컴포지팅의 다섯단계로 이루어져 있습니다.

<BR>

## 후속질문- 브라우저 리플로우 현상에 대해 설명해주세요

- repaint와 reflow는 확실히 구분할 것

### 재현님 답변

- 브라우저 랜더링의 각 단계는 반드시 전 단계의 데이터가 필요하며, html의 레이아웃이 변경될 경우 레이아웃 단계에서 랜더 트리가 재생성되며 이를 리플로우라고 합니다.
  레이아웃에 변화를 주는 거의 모든 속성이 리플로우를 유발합니다. 이를 피하기 위해 GPU를 이용하는 transform 속성을 이용하여 레이아웃을 제어하는게 좋습니다.

(이를 피하기위해서~ 처럼 해결책을 얘기해주면 매우 좋아할 것)

<br><br>

## 이벤트 캡쳐링과 버블링에 대해 설명해주세요. (굉장히 중요)

- ㅁ

### 재현님 답변

- 브라우저 화면에서 이벤트가 발생했을때 브라우저는 이벤트 대상을 찾아갑니다.

이때 상위의 window 객체부터 document, body 순으로 DOM 트리를 따라 내려갑니다. 이를 캡처링 단계라고 하며 중간에 만나는 모든 캡처링 이벤트 리스너를 실행시킵니다.

그리고 이벤트 대상을 찾고 캡처링이 끝나면 이제 다시 DOM 트리를 따라 올라가며 만나는 모든 버블링 이벤트 리스너를 실행합니다. 이를 이벤트 버블링 단계라고 합니다.

이러한 과정에서 이벤트 리스너가 차례로 실행되는것을 이벤트 전파(event propagation)라고 합니다.

<br><br>

## 이벤트 전파와 ~ 에 대해 설명해주세요 (추가질문)

- ㅁ

<br><br>

# CORS (\*\*\* 굉장히 많이 나오는 개념)

- [CORS 참고자료](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)

- 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 자원을 부여
- HTTP 프로토콜 중 하나
- 같은 출처가 아님에도 공유할 수 있음.
- ajax등의 비동기 통신, 오픈소스 등이 활발해 지면서 출처 정책에 유연함을 가해야할 필요가 생김

- [오픈 API 자료](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json)
- [Access-control-allow-origin](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)

# SOP (동일 출처 정책. Same Origin Policy)

- [SOP 참고자료](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy)
- A와 B문서가 같은 출처라면 A에서 B에 접근해서 DOM을 수정하는 등의 작업이 가능
- 단, 동일한 출처가 아니라면 상호작용이 불가능함
- 보안을 위해서 사용

## 동일 출처?

- 두 URL의 프로토콜, 포트, 호스트가 모두 같은 경우 동일한 출처로 간주함

```
127.0.0.1.5501/test.html

// http 프로토콜은 생략된 상태
```

- `http`: 프로토콜

- `127.0.0.1`: 호스트 주소

- `5501`: 포트

- `test.html`: 리소스 저장위치

### load 이벤트가 하는 역할

- load =>

- DOMContentLoaded => 돔 트리가 생성되고 나서 ~

- iframe이 로드 되는것이 끝날 떄까지 기다려야 함. 따라서 로드 이벤트가 끝나고 나서 ~

### contentDocument

- 만약 iframe과 iframe의 부모 document가 같은 origin을 가진다면 iframe의 document 객체를 반환함
- ~~다시 듣고 기재

### sop로 같은 출처의 소스만 가져올 수 있다는 정책이 있지만, 항상 그렇지는 않다.

- 서버에서 허용할 떄에만 소스를 가져올 수 있다.
-

<br><br>

# 카카오지도 실습

- [참고자료](https://apis.map.kakao.com/web/guide/)
- [참고자료2](https://apis.map.kakao.com/web/sample/mapInfo/)
- [참고자료3](https://apis.map.kakao.com/web/sample/changeOverlay1/)

<br><br>

# 점진적 향상 기법이란?

- 구식 환경에서 동작할 수 있는 기능을 구현하고 , 최신 기술을 사용할 수 있는 환경에서는 더 나은 사용자 경험을 제공할 수 있는 최신 기술을 제공하는 기법

## 재현님 답변

- 기본적으로 예전 기술 환경에서 동작할 수 있는 기능을 구현해두고, 최신 기술을 사용할 수 있는 환경에서는 최신 기술을 제공하여 더 나은 사용자 경험을 제공할 수 있는 방법입니다.

- 교안 HTML > 8. Emedded content 참고
  <br><br>

### 우아한 성능 저하

- 점진적 향상 기법과 관련된 개념
- [관련자료](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation)
- 기능이 정제되지 않게, 최악의 사용자 경험을 회피하는 의도를 가지는 테크닉
- 성능 저하를 시킬 것이지만, 갑작스럽지 않고 우아한 방법으로 성능을 저하
- 우아한 성능 저하는 제공하고자 하는 기능이 100%라면 구형 환경(legacy)에서는 그 기능의 일부라도 제공하여 기능 정지라는 최악의 사용자 경험을 회피하고자 하는 의도를 가짐

### canvas

- canvas를 통해 화면에 이미지등을 랜더링 할 때에는 DOM과는 분리되어있음
- 필연적으로 리플로우현상이 발생함
- 리플로우 발생시 layout tree, paint tree등을 위한 계산 작업이 필요하나, canvas로 작업시 repaint, reflow가 전혀 발생하지 않으므로 고성능의 이미지 작업 등을 할 때 canvas를 사용함

### 우아한 성능 저하 구현

```html
<body>
  <video src="">
    <source src="test.mp4" type="video/mp4" />
    <source src="test.webm" type="video/webm" />

    <!-- 비디오가 제대로 나오면 이 요소는 랜더링 되지 않음. (html의 예외처리라고 생각하면 됨)-->
    <p>
      브라우저가 HTML5 비디오를 지원하지 않습니다.<a
        href="주소를 입력한다고 가정"
        >비디오 다운로드</a
      >
    </p>
  </video>

  <script>
    const canvas = document.createElement("canvas");
    const warning = document.createElement("strong");

    const ctx = canvas.getContext("webgl"); // webgl - 2D 그래픽을 포현하겠다는 뜻
    if (ctx) {
      document.body.appendChild(canvas);
    } else {
      warning.innerHTML =
        "이 사이트는 구형브라우저에서 사용되고 있습니다. 브라우저를 업그레이드 해주세요. 제발 ㅠㅠ";
      document.body.appendChild(warning);
    }
  </script>
</body>
```

<br>

# 점진적 향상 기법 VS 우아한 성능 저하

- 최신 환경 지원과 아닌 환경 모두를 지원하려고 함
- 예시
- |                    점진적 향상 기법                    |                                                                    우아한 성능 저하                                                                     |
  | :----------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: |
  | 점진적 향상 기법은 100%이상의 기능을 구현하려고 추구함 | 아한 성능 저하는 100%의 기능을 구현하는 것이 목표. 100% 달성이 불가능한 환경이라면 기능의 일부라도 구현해서 최악의 사용자 경험을 회피하려는 의도를 지님 |

- 우리가 만드는 기능이 지원이 안되는 브라우저가 존재하는 경우 우아한 성능 저하 기법을 쓰는 것이 적절
- 우리가 만드는 기능이 지원이 안되는 브라우저가 없는 경우 점진적 향상 기법을 쓰는 것이 좋음

## 재현님 답변

- 둘 다 최신 기술을 지원 하는 환경과 그렇지 못한 환경을 모두 대응 하려는 의도를 가지고 있는 방법론이지만
  점진적 향상은 기본적으로 제공하고자 하는 기능을 100%제공 하면서 최신 환경에서는 그 이상의 사용자 경험을 제공하려 합니다. (Picture 요소의 예)

우아한 성능저하는 제공하고자 하는 기능이 100%라면 구형 환경에서는 그 기능의 일부라도 제공하여 기능 정지라는 최악의 사용자 경험을 회피하고자 하는 의도를 가집니다.

<br>

# 우리 회사에 입사하고 싶은 이유가 뭔가요?

- 근거가 있어야 함

# 우리 회사에 입사한다면 어떤 기여를 할 수 있다고 생각하나요?
