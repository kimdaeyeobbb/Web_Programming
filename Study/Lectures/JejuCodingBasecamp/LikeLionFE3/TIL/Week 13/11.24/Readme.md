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

- 여러 이미지들을 하나의 파일로 모아 처리하는 기법, 초기에 한번만 로딩된 후 이미지를 추가로 로딩할 필요가 없어 빠르다는 장점이 있지만, 스프라이트 내 이미지가 많아질 경우 관리하기 힘들다는 점과 일부 이미지가 변경될 경우 전체 스프라이트를 교체해야 한다는 단점이 있다운 아이콘 등이 추가되었을 때 수정이 번거롭다는 단점이 있는 것 같습니다

### 애매한 답변

- 이미지 파일을 한 파일에 모아서 (0, 0) 좌표로 사용하는기법..장점 : 이미지를 불러오는데 렌더링이 최적화됩니다. 단점: 수가 많아지면 불편하다?
  (렌더링이 최적화 된다는 것에 대해 구체적으로 설명해주는 것이 좋음)
