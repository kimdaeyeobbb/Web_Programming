# 22.10.11 (화) 수업

## 구조분해할당

- 조금 더 직관적

- array, Object 등에 적용할 수 있음

- 예시
- key와 value를 for of로 순회를 돌아야 한꺼번에 출력할 수 있다

```js
let value = [10, 1, 100, 200, 300, 10];
let value2 = { one: 1, two: 2, three: 3, four: 4 }; // Object
console.log(Object.keys(value)); // [ '0', '1', '2', '3', '4', '5' ] (배열은 인덱스값이 키값)
console.log(Object.keys(value2)); // [ 'one', 'two', 'three', 'four' ]

for (i in value2) {
  // for of로 순회를 돌 수가 없음
  console.log(i);
}

/* for of로 순회를 돌고 싶음 -> 다시 array로 만들어서 순회를 돌고 싶은 것 -> entries 이용 */
Object.entries(value);
Object.entries(value2);

console.log(Object.entries(value));
console.log(Object.entries(value2)); // [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ], [ 'four', 4 ] ]

/* error */
// for (i of value2) {
//     console.log(i)
// }

/* 정상코드 */
for (i of Object.entries(value2)) {
  console.log(i);
}

/* 구조분해 할당 */
// [i,j]를 써주면 변수를 2개를 받을 수 있음 & 변수를 바로 활용할 수 있음
for ([i, j] of Object.entries(value2)) {
  console.log(`key는 ${i}이고 value는 ${j}입니다.`);
}

/* 구조분해 할당 */
for ([i, j] of [
  [10, 20, 30],
  [30, 40, 50],
]) {
  console.log(i, j); // 첫번째 array의 30과 두번쨰 array의 50을 받지 못한 것
}

for ([i, j, ...k] of [
  [10, 20, 30, 1, 2],
  [30, 40, 50, 1],
]) {
  // 나머지 전체를 받기 위해서 전개구문 사용
  console.log(i, j, k);
}

for ([[i, j], k] of [
  [[10, 20], 300],
  [[30, 40], 500],
]) {
  console.log(i, j, k);
}

for ([i, j] of [
  [[10, 20], 300],
  [[30, 40], 500],
]) {
  console.log(i, j);
}
```

## 구조분해할당 & 전개구문

```js
for ([i, j, ...k] of [
  [10, 20, 30, 1, 2],
  [30, 40, 50, 1],
]) {
  // 나머지 전체를 받기 위해서 전개구문 사용
  console.log(i, j, k);
}
```

- 구조분해할당이 for문에서만 쓰이는게 아니라 변수에서도 쓰인다

```js
let a, b, c;
[a, b] = [10, 20];
console.log(a, b); // 10 20

let one, two, three;
[one, two, three] = "010-5044-2903".split("-");
console.log(one, two, three);
```

- 콘솔창에서는 let을 재선언해도 에러가 나지 않음 (원래는 let을 재선언하면 에러 발생)

- [자바스크립트 딥다이브](https://poiemaweb.com/es6-destructuring)

```JS

/* 예제 1 */
let data = { name: 'hojun', age: 10, money: 100 }
let { name, age } = data

console.log(name, age)  // hojun 10


/* 예제2 */
let { name2, age2 } = { name2: 'kim', age2: 20 }
console.log(name2, age2)  // kim 20


/* 예제3 */
let data2 = {
    name3: 'hojun', age3: 10, money: 100, company: 'weniv'
}

let { name3, age3, ...rest } = data2
console.log(name3, age3, rest)   // hojun 10 { money: 100, company: 'weniv' }



/* 순서 뒤바꾸면 undefined */
let data4 = {
    name4: 'hojun', money4: 100, company4: 'weniv', age4: 10
}

let { name4, age4, ...rest4 } = data4
console.log(name4, age4, rest4)  // hojun 10 { money4: 100, company4: 'weniv' }
```

- age4의 자리를 바꿔도 서로 매칭이 되므로 age4의 value에 10이 들어감

## RORO 기법

- 함수에 값을 전달할 때 Object로 전달하면 가독성이 높아진다는 기법

- RORO기법 등의 디자인 패턴에서도 구조분해할당 등이 많이 사용됨

- 놓친 것 다시 기재

## 구조분해할당 & spread 문법

- 예시

```js
let a = [10, 20, 30];
a.push(100);
a.unshift(1000);
console.log(a); // [ 1000, 10, 20, 30, 100 ]

/* spread 문법 */
a = [1000, ...a, 100];
console.log(a); // [1000, 1000, 10, 20, 30, 100, 100]

/* 이어 붙이기 */
let b = [1, 2, 3];
let c = [10, 20, 30];
let d = [...b, ...c];
console.log(d); // [ 1, 2, 3, 10, 20, 30 ]
```

- 예시2

```js
let str = "hello world";
console.log([str]); //[ 'hello world' ]

console.log([...str]);
/*
 [
  'h', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]
 */

console.log("!".repeat(10)); // !!!!!!!!!!
console.log([..."!".repeat(10)]);
/*
[
  '!', '!', '!', '!',
  '!', '!', '!', '!',
  '!', '!'
]
 */
```

## 함수

- parameter: 선언될 때 쓰이는 것
- argument: 사용될 때 쓰이는 것

```js
function hello(parameter) {
  console.log(parameter);
  console.log("hello world");
  return 100;
}

let argument = 100;
hello(argument);
```

- 예제

```js
function hello(parameter) {
  console.log(parameter);
  console.log("hello world");
  return 100;
}

let argument = 100;
hello(argument);

console.log(hello(100) + hello(100));

function hello2(parameter) {
  console.log("안녕!");
}

console.log(String(hello2()) + String(hello2())); // undefinedundefined

/* return만 써주면 함수를 종료시켜줌 */
function hello3(parameter) {
  return; // 얘는 return undefined와 동일
}

console.log(String(hello3()) + String(hello3())); // undefinedundefined
```

- 함수는 return을 만나면 종료됨
- return 자체만 쓰이면 return undefined와 동일
- [함수에서의 반환값 1](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Return_values)
- [함수에서의 반환값 2](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return)

```js
console.log(console.log("hellozzz")); // console.log의 반환값은 undefined
```

## 함수를 사용하는 이유

1. 재사용성
   - 재사용하지 않을 코드는 함수로 정의할 필요가 없나? (=> 가능하면 함수로 만드는게 좋다)
2. 유지보수
   - 3번 사항 + 변수의 scope 제한 (A영역에서 사용한 변수를 B영역에서 사용할 수 없게 만듦)
3. 구조 파악이 용이하다
4. 추상화
   - 컴퓨터 과학에서 추상화는 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는 기능을 간추려 내는 것
   - 추상화로 개발하는 것이 현대 프로그래밍언어의 철학에 맞다 (객체지향 프로그래밍)

```js
/* 집짓지 코드 */
땅파기(); // 10만줄
기반다지기(); // 10만줄
기둥세우기(); // 10만줄
벽돌쌓기(); // 10만줄
지붕올리기(); // 10만줄
```

## 함수의 다양한 형태

- 콘솔창의 기능
  - 마지막 라인에 한하여 console.log()를 찍지 않아도 return 값을 console 창에 출력해준다 (IDE말고 인터넷상의 콘솔창에 해당)
  - 두번째부터는 console.log로 감싸주지 않으면 콘솔창에 return 값이 출력되지 않음

```js
function func1(a, b, c) {
  return a + b + c;
}

func1(10, 20, 30); // 처음에만 출력. 두번째부터는 console.log로 감싸줘야 출력
console.log(func1(10, 20, 30));
```

- `console.log의 return 값`은 `undefined`

- 필요 이상의 argument를 넣었을 때 지정한 개수를 넘어가는 argument는 무시됨

- 필요 이하의 argument를 넣었을 때

```js
/* 필요 이하의 argument를 넣었을 때 */
function func1(a, b, c) {
  return a + b + c;
}

console.log(func1(10, 20)); // 10+20+undefined => NaN (c에는 할당된 값이 없으므로 undefined였음)
```

## 필요 이상의 argument가 들어 갔을 때의 처리 방법

- 구조분해할당을 이용한 argument 처리

```js
function func1(a, b, ...c) {
  console.log(c);
  return Math.max(...c);
}

console.log(func1("hello", "world", 10, 20, 30, 40, 50)); // 50

function func2([a, b], ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

func2([1, 2], 10, 20, 30, 40);
```

- 기본값 할당

```js
/* 기본값 할당 */

function func3(a = 10, b = 20, c = 30) {
  return a + b + c;
}

console.log(func3()); // 60
console.log(func3(100)); // 150
console.log(func3(100, 200)); // 330
console.log(func3(100, 200, 300)); // 600
```

- 의도와는 달리 순서대로 값이 할당될 때 해결책 => 객체를 사용하자

```js
/* 기본값 할당 */

function func3(a = 10, b = 20, c = 30) {
  return a + b + c;
}

console.log(func3((c = 1000))); // 1050
console.log(func3((c = 1000), (a = 2000))); // 3030
```

- 함수에서 객체를 argument로
- [자바스크립트 RORO](https://www.google.com/search?q=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8+RORO&oq=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8+RORO&aqs=chrome..69i57.2464j0j9&sourceid=chrome&ie=UTF-8)

```js
/* 객체를 사용해서 의도대로 값이 들어가게끔 만들자 */
/* 가독성이 떨어짐 */
function func4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) {   // 회원 등급 권한
    console.log('함수기능')
    return
}


func4('Gold', true, true, true, '대화방 전체 백업 가능', true)
// 이 true가 뭔지를 모르기 때문에 해당 파일로 이동해서 무엇인지를 직접 확인해야 함 -> 불편

/* 객체로 선언시 위의 문제점을 해결할 수 있음 */
// 가독성이 좋아짐
function func5({
    회원등급: 'Silver',
    글쓰기: false,
    글읽기: false,
    채널관리: false,
    백업: '불가',
    소셜로그인여부: true
    }) {   // 회원 등급 권한
    console.log('함수기능')
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부)
    return
}

func5({
    회원등급: 'Gold',
    글쓰기: true,
    글읽기: true,
    채널관리: false,
    백업: '부분가능',
    소셜로그인여부: true
})
```

## 재귀함수

- 내가 나를 호출하는 함수

- 재귀함수(Top down, 분할정복, 락드릴)로 구현할 수 있는것은 반복문(Bottom up)으로 구현할 수 있다

- 알고리즘 대비시 재귀함수를 잘 알아야 함

- 예제 1

```js
/* 재귀함수 */
function factorial1(n) {
  if (n <= 1) {
    // 종료조건 -> 종료조건이 없으면 무한반복이 됨
    return 1;
  }
  return n * factorial1(n - 1);
}

console.log(factorial1(5)); // 120

/* 반복문 */
let result = 1;
for (let i = 2; i < 6; i++) {
  result *= i;
}
console.log(result); // 120
```

## 시그마

- 누적합

- 에제

```js
/* 재귀함수 */
function sigma(n) {
  if (n <= 1) {
    return 1;
  }
  return n + sigma(n - 1);
}

console.log(sigma(100)); // 5050

/* 반복문 */
let result = 0;
for (let i = 1; i < 101; i++) {
  result += i;
}
console.log(result); // 5050
```

- 순회를 돌지 않고 해결할 수 있으면 돌지 않고 해결하는 것이 좋은 코드이다

```js
let n = 100;
console.log((n * (n + 1)) / 2);
```

## argumnt 없이 함수를 호출할 수 있는 예제

- 구조분해할당을 할때 매핑된 객체가 없는 것임

```js
function func2({ a = 2, b = 1, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
} // 아무것도 입력하지 않으면 {}값이 대입 (객체가 매핑이 안되었을 경우)
console.log(func2({ a: 20, b: 30, c: 10 })); // 60
func2(); // argument 없이 호출가능 -> 2 1 3

function func3({ a2 = 10, b2 = 20, c2 = 30 }) {
  return a2 + b2 + c2;
}
func3({}); // Object로 비어있는 값을 전달
console.log(func3({})); // 60

let { one = 1, two = 2 } = {}; // 매핑되는 값이 없으므로 one,two값이 그대로 남음 (할당이 되지 않아서 Object값이 그대로 남음)
console.log(one); // 1
console.log(two); // 2

let { one2 = 2, two2 = 3, three2 = 4 } = { one2: 100 };
console.log(one2, two2, three2); // 100 3 4
```

```js
////// 동현님 글 //////
function 함수({ a = 2, b = 1, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(함수({ a: 20, b: 30, c: 10 }));
함수(); // 아규먼트 없이 호출 가능

// 설명
// O
function 함수(a = 10, b = 20, c = 30) {
  return a + b + c;
}
함수();

// X
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수();

// O
function 함수({ a = 10, b = 20, c = 30 }) {
  return a + b + c;
}
함수({}); // 이 코드를 축소한 코드가 위의 코드입니다.
// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined
```

## 재귀함수 & 문자열 뒤집기

- 재귀함수 예제

```js
/* 재귀함수 & 문자열 뒤집기 */
function reverse(txt) {
  if (txt.length === 1) {
    return txt;
  }
  return reverse(txt.slice(1)) + txt[0];
}

console.log(reverse("world"));

/*
n                     txt.length <= 1        return 
reverse('wolrd')      false                  reverse(txt.slice(1)) + w = dlrow
reverse('orld')       false                  reverse(txt.slice(1)) + o = dlro
reverse('rld')        false                  reverse(txt.slice(1)) + r = dlr
reverse('ld')         false                  reverse(txt.slice(1)) + l = dl
reverse('d')          true                   d

*/
```

- 반복문 예제

```js
/* for문으로 구현 */
txt = "world";
result = "";
for (const i of txt) {
  result = i + result;
}

console.log(result);
```

## 코드 돌아가는 과정 확인하는 사이트

- [사이트 링크](https://pythontutor.com/)

## 지역변수와 전역변수

- block level scope

```js
if (true) {
  let x = 10;
  const y = 10;
}
console.log(x, y);
```

- function level scope
- 밖에서 선언딘 x는 함수 내부에서도 접근이 가능함

```js
let x = 100;
function xplus() {
  x = x + 10;
}
xplus();
console.log(x);
```

- 함수가 종료된 다음에는 선언되었던 변수는 휘발됨
- 메모리 효율을 높일 수 있음 (모두 전역변수로 선언하면 메모리 낭비가 심함)

```js
// 함수가 끝나면 메모리주소에서 잡은것을 모두 풀기 때문에 사라짐
function yplus() {
  let y = 100;
  y = y + 10;
}
yplus();
console.log(y);
```

- 예제

```js
function a() {
  console.log("a 실행");
  function b() {
    console.log("b 실행");
  }
}

a(); // a 실행
b(); // error (접근이 불가능한 함수. 함수가 끝난 다음 휘발됨) -> 안에서 선언된 함수는 밖에서 꺼내어 쓸 수 없다
```

## 스코프

- [사이트 링크](https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope)

## 화살표 함수

- 일반함수에 비해 매우 간결함

```js
/* 일반함수 vs 화살표 함수 */
function func1(x, y) {
  return x + y;
}

let func2 = (x, y) => x + y;

console.log(func1(10, 20)); // 30
console.log(func2(10, 20)); // 30

console.dir(func1); // func1
console.dir(func2); // func2
```

```js
function func3(a, b) {
  let c = a + b;
  return c;
}

let func4 = (a, b) => {
  let c = a + b;
  return c;
};

console.log(func3(20, 30)); // 50
console.log(func4(20, 30)); // 50
```

- [화살표 함수 ref](https://ko.javascript.info/arrow-functions-basics)

- 일반함수와 화살표함수는 호이스팅이 다르다

## 호이스팅

- 함수를 뒤에 선언해도 실행이 되는 것
- 강의 내용 여기 다시 정리할 것

```js
// 참고자료 : https://hanamon.kr/javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/
// JS의 모든 선언은 호이스팅(선언이 먼저 메모리에 저장)이 일어납니다.
// 그러나 let, const, class 이용한 선언문은 호이스팅이 되었지만 안된 것처럼 동작
// 이러한 현상은 일시적 사각지대(Temporal Dead Zone)에 빠지기 때문
// 중요한 포인트는 그렇다하여 호이스팅이 안된 것은 아니라는 것!
// 오류가 나는 이유는 var 키워드는 선언과 함께 undefined로 초기화
// let과 const는 초기화 되지 않는 상태로 선언만 메모리 저장
console.log(add1(10, 20)); // 30
console.log(add2(10, 20)); // 30
console.log(mul1); // undefined
// console.log(mul1(10, 20)); // not a function
// console.log(mul2); // Cannot access 'mul2' before initialization
// console.log(mul2(10, 20)); // 위와 같은 애러
// console.log(mul3) // mul3 is not defined, 호이스팅이 안되었기 때문

function add1(x, y) {
  return x + y;
}

function add2(x, y) {
  return x + y;
}

var mul1 = function (a, b) {
  return a * b;
};

let mul2 = function (a, b) {
  return a * b;
};
```

## 함수 주의사항

- 즉시 실행함수

- 즉시 실행함수 => 메모리 효율을 극대화(리소스 최적화)시키기 위해 사용 (이름이 없으므로 재사용성은 없음)

```js
// 즉시실행함수 - 메모리 효율을 극대화시키기 위해 사용 (이름이 없으므로 재사용성은 없음)

/* 익명 즉시 실행 ㅏㅁ수 */
(function () {
  let a = 1;
  let b = 2;
  return a + b;
})();

/* 기명 즉시 실행 함수 */
(function foo() {
  let a = 3;
  let b = 5;
  return a * b;
})();

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음
// 메모리를 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
```

## 함수 연습문제

```js
/* 함수 연습문제 */
// 중간고사 점수의 평균을 구하는 코드를 함수로 작성하시오

// 연습문제
let data = [
  {
    반: 1,
    번: 1,
    이름: "호준",
    중간고사점수: 55,
  },
  {
    반: 1,
    번: 2,
    이름: "길동",
    중간고사점수: 60,
  },
  {
    반: 1,
    번: 3,
    이름: "영희",
    중간고사점수: 30,
  },
  {
    반: 1,
    번: 4,
    이름: "철수",
    중간고사점수: 20,
  },
  {
    반: 1,
    번: 5,
    이름: "규리",
    중간고사점수: 100,
  },
];

// 중간고사 점수를 다 더하는 코드를 함수로 작성해주세요.

// 1번
function avg(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].중간고사점수;
  }
  return sum / data.length;
}

console.log(avg(data));

// 2번
console.log(
  data.map(function (element) {
    return element.중간고사점수;
  })
);

let result = data.map((element) => element.중간고사점수);
console.log(result);
```

- 강의 내용 다시 정리할 것

- 정답

```js
// 연습문제
let data = [
  {
    반: 1,
    번: 1,
    이름: "호준",
    중간고사점수: 55,
  },
  {
    반: 1,
    번: 2,
    이름: "길동",
    중간고사점수: 60,
  },
  {
    반: 1,
    번: 3,
    이름: "영희",
    중간고사점수: 30,
  },
  {
    반: 1,
    번: 4,
    이름: "철수",
    중간고사점수: 20,
  },
  {
    반: 1,
    번: 5,
    이름: "규리",
    중간고사점수: 100,
  },
];

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.

// 동현, 준근님 코드
function 평균값구하기(data) {
  let sum = 0;
  for (student of data) {
    sum += student["중간고사점수"];
  }
  return sum / data.length;
}

function 평균값구하기(data) {
  let 중간고사점수 = data.map((x) => x.중간고사점수);
  let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b);
  return 중간고사점수합 / data.length;
}

function 평균값구하기(data) {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
}

console.log(
  (function () {
    return (
      data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
    );
  })()
);

let a = (data) =>
  data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
console.log(a(data));

let b = (data) => {
  return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
};
console.log(b(data));
```

## call by value, reference, sharing

- 강의 내용 다시 정리
- 자바스크립트는 call by value만 존재
- 참조타입을 넘기면 주소가 넘어가는 것이 아니라 주소값을 복사한 복사본이 넘어감
- array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값의 수정이 일어남

- 변경이 되는 예제 (배열은 참조타입이라서 변경됨)
- 다른언어에서의 call by reference

```js
let test = [10, 20, 30];
function func1(a) {
  a[0] = 1000;
}

console.log(func1(test));
```

- 변경이 안되는 예제 (number 값은 원시타입이라서 변경이 안됨)
- 다른언어에서의 call by value

```js
let test = [10, 20, 30];
function func1(a) {
  a = 1000;
}

console.log(func1(test));
```

- 값을 복사해서 넣음. a자리에 100의값을 가지는 test를 넣음. a를 수정해도 test값에는 변경이 없음(test를 수정해도 a의 값에는 변경이 없다)

## call by value (값의 전달)

- 자바스크립트에서는 call by value만 존재하고, call by sharing이라고도 한다 (자바스크립트에서는 call by reference는 존재하지 않는다)
- call by sharing은 공식명칭이 아님 (js의 특징을 설명하기 위한 비공식 용어)

## call by reference(참조-주소값의 전달)

- 자바스크립트에서 call by reference는 존재하지 않음

## 반례

```js
// 반례
// call by reference가 아님
var c = {};
function test3(d) {
  d = 1000;
}

console.log(c); // {}. 빈 Object
```

- 변수가 가리키고 있는 공간에 저장된 값이 전달됨

## 클로저 (면접 질문으로 충분히 나올 수 있는 내용)

- 강의 내용 다시 정리

- 폐쇄된 공간(함수)안의 데이터에 접근하기 위한 테크닉
- 변수 은닉, 메모리 효율, 코드 효율, 안정성 극대화를 위해 사용함

```js
function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능
```

## call by value, reference, sharing

- array와 같은 conversion 자료형을 넘길 때에는 함수 안에서 값이 수정이 된다
- call by value(값의 전달)
- call by value: argument에 값이 넘어올 때 복사한 값이 넘어온다

- call by reference: argument에 값이 넘어올 때 주소값이 넘어온다 (주소값이 넘어왔으니 접근을 하면 원본이다!)
- javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘김. 그래서 call by reference가 아니라 call by value이다. '복사한 값'인 것이다. 주소값도 값이기 때문이다.

## 질의응답

1. 원시값보다 덩치가 큰 