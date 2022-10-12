# 22.10.12 (수)

## 함수

## 호이스팅

- 일단 지금은 함수형 호이스팅만 기억할 것
- ~ 선언시 ~ 상관없이 맨위로감
- let 선언시

## TDZ (Temporal D)

- A

## 클로저

- ㅁ

## 여기위에만 다시 듣기

## 생성자 함수

- 앞에 new 키워드를 붙이고 첫 글자를 대문자로 시작하는 것

- 비효율적 코드 (딱 봐도 코드가 길고 .. 별로..)

```js
let book = {
  책이름: "타스넌내타입",
  책가격: 10000,
  저자: "Danny",
  출판일: "22.10.11",
};

let newBook = {};

newbook["책이름"] = "javascript"; // 예를 들어 form에서 입력 받은 값
newbook["책가격"] = 1000000;
newbook["저자"] = "세원, 석규, 슬기";
newbook["책가격"] = "22.10.30";

// 위의 코드를 효율적으로 작성하는 것이 '생성자 함수'
```

- 효율적인 코드
- 메모리 상으로 더 효율적

```js
/

// 위의 코드를 효율적으로 작성하는 것이 '생성자 함수'
/* 효율적 코드 (생성자 함수) */
function Book2(책이름, 책가격, 저자, 출판일) {
    // this = {}   // new 키워드 사용시 내부적으로 얘가 있는것처럼 작동
    this.책이름 = 책이름   // this는 function이라는 자신을 가리키고 있음
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    //return this    // new 키워드 사용시 내부적으로 얘가 있는것처럼 작동
}

let data = Book2("HTML", 10, "유진", "22.12.30");
console.log(data); // 함수 내에 return이 없으면 undefined

let data2 = new Book2("CSS", 20, "유진", "23.12.30");   // new 키워드를 붙이면 undefined아님
console.log(data2); // Book2 {책이름: 'CSS', 책가격: 10, 저자: '유진', 출판일: '22.12.30'}

let data3 = new Book2("js", 30, "유진", "24.12.30");

console.log(data, data2, data3); // undefined Book2 {책이름: 'CSS', 책가격: 20, 저자: '유진', 출판일: '23.12.30'} Book2 {책이름: 'js', 책가격: 30, 저자: '유진', 출판일: '24.12.30'}
```

## 생성자 함수를 왜 사용하나요?

- 객체를 생성하기 위해서 사용

- 프로퍼티들의 집합을 만들 때 사용

- [생성자 함수 자료](https://ko.javascript.info/constructor-new)

## 콜백함수

- callback function
- 나중에 부르겠다는 뜻

- 예시

```js
function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  //return x + y;
}

console.log(sum(10, 20, console.log));
//30
//undefined(return이 없으므로)
```

- 예시2

```js
function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  //return x + y;
}

console.log(sum(10, 20, console.log));
//30
//undefined(return이 없으므로)

function documentWriter(s) {
  document.write("콜백함수", s);
}

sum(10, 20, documentWriter) - // 콜백함수 30

```

- 함수명을 argument로 전달해서 코드 어딘가에서 호출해주는 것이 '콜백함수'

- 예시3

```js
function 제곱(x) {
  return x ** 2;
}

let arr1 = [10, 20, 30, 40, 50];
arr1.map(제곱); // (5) [100, 400, 900, 1600, 2500]  여기에 함수명만 argument로 넘겨주면 됨
```

- argument로 함수를 전달하는 것이 콜백함수

- 예시4

```js
let arr1 = [10, 20, 30, 40, 50];
arr1.map(제곱); // (5) [100, 400, 900, 1600, 2500]  여기에 함수명만 argument로 넘겨주면 됨
arr1.map((x) => x ** 2); // (5) [100, 400, 900, 1600, 2500] (화살표 함수 사용)\

/* 호이스팅 */
function 제곱(x) {
  return x ** 2;
}
```

## forEach

- forEach는 순회만 함. map은 새로운 array 생성

- forEach는 메서드
- callback 함수를 넣어주면됨 (argument로 함수를 전달)

- ex

```js
function 두배(x) {
  console.log(x * 2);
}

let arr1 = [10, 20, 30, 40, 50];
arr1.forEach(두배);
// 함수를 인자로 전달 -> 콜백함수
// forEach는 순회만 함. map은 새로운 array 생성
```

- ex) map과 같은 역할을 하는 forEach문 작성하기

```js
function 두배(x) {
  console.log(x * 2);
}

let arr1 = [10, 20, 30, 40, 50];

arr1.map(제곱); // (5) [100, 400, 900, 1600, 2500]  여기에 함수명만 argument로 넘겨주면 됨
arr1.map((x) => x ** 2); // (5) [100, 400, 900, 1600, 2500] (화살표 함수 사용)\

/* 호이스팅 */
function 제곱(x) {
  return x ** 2;
}

arr1.forEach(두배);
// 함수를 인자로 전달 -> 콜백함수
// forEach는 순회만 함. map은 새로운 array 생성

/* map과 같은 기능의 forEach를 구하시오 */
let result = [];

arr1.forEach((x) => {
  result.push(x ** 2);
});

console.log(result);

let result3 = [];
let result2 = arr1.forEach((x) => result3.push(x ** 2));
console.log(result3);
```

<br><br>

## Map

- Object 자료형의 단점들을 해결하기 위해서 등장

- 키와 값의 쌍을 가지는 객체 자료형의 한 종류
- Object에서 하지 못했던 작업이 가능 (새로운 객체 삽입, true,false 삽입 등)

- ex

```js
let m = new Map(); // new (생성자 함수) -> this를 받는 효과
m.set("하나", 1)
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4)
  .set(true, "트루")
  .set([1, 2], "리얼리?");
console.log(m); // Map(4) { '하나' => 1, '둘' => 2, '셋' => 3, '넷' => 4 }

console.log(m.get("하나")); // 1
console.log(m.get(true)); // 트루 (object에서는 가능하지 않음)
console.log(m.get([1, 2])); // undefined (이렇게는 사용불가. 각 객체가 다른 주소값을 가지기 때문에 새로운 [1,2]를 지칭함)
```

- 파이썬 vs javascript

1. 파이썬

```python
# 파이썬에서는 아래의 id값이 다르게 나옴
x = [1,2]
id(x)

y = [1,2]
id(y)

x == y  # true
x is y # false
```

2. 자바스크립트

```javascript
([1, 2] === [1, 2][(1, 2)]) == // false
  [1, 2]; // false
let x = [1, 2];
let y = [1, 2];

x == y; // false
x === y; // false
```

- ex2) (변수에 할당하면 같은 메모리 주소값을 바라보고 있기 때문에...~ 다시 듣고 정리)

```js

```

# 여기서부터 다시 복습

- map을 쓰면 object를 대체할 수 있다

- map은 순서가 있는 (iterable)객체에서만 작동함

```js
let data = new Map({ one: 1, two: two }); // 불가능
let data2 = new Map([
  ["one", 1],
  ["two", 2],
]); // 가능 (2)

let data3 = new Map(Object.entries({ one: 1, two: 2 })); // 위의 (2)작업을 한번에 가능하게 해줌
console.log(data3); // Map(2) { 'one' => 1, 'two' => 2 }
```

- map의 가장 큰 장점: 직접 순회가 가능하다!

```js
/* Object는 순회가 안된다 */

let data = { one: 1, two: 2 };

for (const iteratoor of data) {
  console.log(i);
}
```

```js
/* Map은 직접 순회가 가능하다 */
let m = new Map();
m.set("하나", 1);
m.set("둘", 2);
m.set("셋", 3);
m.set("넷", 4);

for (const i of m) {
  console.log(i);
}

for (const [i, j] of m) {
  console.log(i, j);
}

console.log(m.keys());
console.log(m.values());
console.log(m.entries());
```

- map과 object간 형변환

```js
/* Map - Object간의 형변환 */

// Map
let map1 = new Map(Object.entries({ one: 1, two: 2 }));
console.log(map1); // Map(2) { 'one' => 1, 'two' => 2 }

// Object
let obj1 = Object.fromEntries(map1);
console.log(obj1); // { one: 1, two: 2 }
```

<br>

## 한번 읽어볼 자료

- [폴리필](https://ko.javascript.info/polyfills)

## set

- 집합
- 집합은 중복을 허용하지 않는다 (원소를 유일하게 표현할 수 있다)
- 문제

```js
let s = new Set("abcdeeeeeeeee");
console.log(s); // Set(5) { 'a', 'b', 'c', 'd', 'e' }
console.log(s.size); // 5

/* 문제 */
board = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];

// 문제1) 몇 명이 게시판에 게시물을 썼나요?
let s2 = new Set(board);
console.log(`게시물 작성인원: ${s2.size}명`); // 3

// 문제2) 각각 몇개의 게시물을 작성하였나요?
// 데이터의 개수를 가져오기 위해 filter 사용
/* 답안1 */
for (const i of s2) {
  console.log(i, board.filter((e) => e === i).length);
}

/* 답안2 */
let m2 = new Map();
for (const i of board) {
  m2.set(i, (m2.get(i) || 0) + 1); // 순회를 돌면서  i가 map에 없으면 0을 넣어줌 & get을 뽑아오고 나서 1을 더해주면서 갱신 (순회를 돌면서 해당 key값을 업데이트)
}

console.log(m2); // Map(3) { '이호준' => 3, '김은하' => 2, '이준근' => 1 }
```

- set 순회하기

```js
let s = new Set("abcdeeee");

// set을 순회하기
for (let v of s) {
  console.log(v); // a b c d e
}

// 값이 배열인 경우
let ss = new Set("abcdeeeeeeeee".split(""));
console.log(ss); // Set(5) { 'a', 'b', 'c', 'd', 'e' }
```

- set을 쓰는이유?
  - 교집합 / 차집합 / 합집합 등을 사용하기 위해

```js
let a = new Set("abc");
let b = new Set("cde");

// 교집합
let cro = [...a].filter((value) => b.has(value));

// 합집합
let union = new Set([...a].concat(...b)); // concat은 배열과 배열을 이어붙임

// 차집합
let dif = new Set([...a].filter((x) => !b.has(x)));
```
