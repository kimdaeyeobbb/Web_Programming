# 22.10.12 (수)

## 함수

## 호이스팅

- 일단 지금은 함수형 호이스팅만 기억할 것
- (function 키워드 사용시)함수를 어디에서 선언했던지 상관없이 맨 위로 간다
- (function 키워드 대신 let,const로 선언하여 함수를 만들었다면) 그 키워드를 위로 쓸 수 없다.
  => 호이스팅은 되지만, TDZ때문에 실행할 수 없다

- [참고자료](https://hanamon.kr/javascript-%ed%98%b8%ec%9d%b4%ec%8a%a4%ed%8c%85%ec%9d%b4%eb%9e%80-hoisting/)

- 지난주 내용 일부

```
js의 모든 선언은 호이스팅(선언이 먼저 메모리에 저장)이 일어남
그러나 let, const, class를 이용한 선언문은 호이스팅이 되었지만 안된 것처럼 동작함 (일시적 사각지대(TDZ)에 빠지기 때문이다)
이것이 호이스팅이 일어나지 않는다고 보기는 어려우며, 오류가 나는 이유는 var 키워드는 선언과 함께 undefined로 초기화되기 때문이다
let과 const는 초기화되지 않는 상태로 선언만 메모리에 저장된다
```

## TDZ (Temporal Dead Zone)

## 클로저

## 여기위에만 다시 체킹 (완료)

## 생성자 함수

- 앞에 new 키워드를 붙이고 첫 글자를 대문자로 시작하는 것

### 생성자 함수가 아닌 예시

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
newbook["출판일"] = "22.10.30";

// 위의 코드를 효율적으로 작성하는 것이 '생성자 함수'
console.log(newBook);
```

### 생성자 함수 예시

- 생성자 함수는 위의 코드보다 효율적인 코드임
- 메모리 상으로 더 효율적

```js
/* 생성자 함수 */
function Book2(책이름, 책가격, 저자, 출판일) {
  // this = {}   // new 키워드 사용시 내부적으로 얘가 있는것처럼 작동
  this.책이름 = 책이름; // this는 function이라는 자신을 가리키고 있음
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
  //return this    // new 키워드 사용시 내부적으로 얘가 있는것처럼 작동
}

let data = Book2("HTML", 10, "유진", "22.12.30");
console.log(data); // 함수 내에 return이 없으면 undefined

let data2 = new Book2("CSS", 20, "유진", "23.12.30"); // new 키워드를 붙이면 undefined아님
console.log(data2); // Book2 {책이름: 'CSS', 책가격: 10, 저자: '유진', 출판일: '22.12.30'}

let data3 = new Book2("js", 30, "유진", "24.12.30");

console.log(data, data2, data3); // undefined Book2 {책이름: 'CSS', 책가격: 20, 저자: '유진', 출판일: '23.12.30'} Book2 {책이름: 'js', 책가격: 30, 저자: '유진', 출판일: '24.12.30'}
```

- 예시2
- new 키워드를 사용하면 함수 내부적으로 `this = {}`와 `return this`가 있는것처럼 작동함

```js
function Clothes(옷이름, 옷가격, 생산자, 제조일) {
  this.옷이름 = 옷이름;
  this.옷가격 = 옷가격;
  this.생산자 = 생산자;
  this.제조일 = 제조일;
}

let data = Clothes("replica", 10, "nike", "22.10.12");
console.log(data); // undefined (함수 내 return 값이 없으므로)

let data2 = new Clothes("hood", 20, "adidas", "23.10.12");
console.log(data2);
/*
clothes {
  '옷이름': 'hood',
  '옷가격': 20,
  '생산자': 'adidas',
  '제조일': '23.10.12'
}
*/

let data3 = new Clothes("parka", 30, "k2", "24.10.12");
console.log(data3); // clothes { '옷이름': 'parka', '옷가격': 30, '생산자': 'k2', '제조일': '24.10.12' }
```

## 생성자 함수를 왜 사용하나요?

- 객체를 생성하기 위해서 사용

- 프로퍼티들의 집합을 만들 때 사용

- [생성자 함수 자료](https://ko.javascript.info/constructor-new)

- [객체 자료](https://ko.javascript.info/object)

## 생성자 함수 동작 과정

- 예시1(`new`연산자를 붙인 케이스)

```js
function User(name) {
  //this = {} // 1. 빈 객체를 임시로 생성
  this.name = name; // 2. 새로운 프로퍼티를 this에 추가
  this.isAdmin = false; // 2.  새로운 프로퍼티를 this에 추가
  //return this // 3. this를 임시로 반환
}

let user = new User("사자");

console.log(user.name); // 사자
console.log(user.isAdmin); // false
```

1. 빈 객체를 만들어서 `this`에 할당
2. 함수 본문을 실행. `this`에 새로운 프로퍼티를 추가해서 `this`를 수정함
3. `this`를 반환함
4. 주의) 여기서 1,2는 실제로 코드로 쓰지는 않지만 있는것처럼 동작함

- 예시2 (예시1은 예시2의 코드와 동일하게 동작)

```js
let user = {
  name: "사자",
  isAdmin: false,
};

console.log(user.name); // 사자
console.log(user.isAdmin); // false
```

## 생성자 함수의 장점

- 이처럼 생성자 함수를 사용해서 `new User('호랑이')`, `new User('강아지')`등을 이용하면 사용자 객체를 쉽게 생성할 수 있다.

- 객체 리터럴 문법으로 일일이 객체를 만드는 방법보다 훨씬 간단하고 읽기 쉽게 객체를 만들 수 있다

- 매개변수를 이용해서 객체 내부를 자유롭게 구성할 수 있음
  => 이를 통해 유연성을 확보함

- 유사한 객체를 여러 개 만들 때 유용함

- 날짜를 나타내는 데 쓰이는 `Dtae`, 집합을 나타내는 데 쓰이는 `Set`등의 내장 객체는 생성자 함수를 통해 만들 수 있음

## 생성자 함수 주의사항

- 모든 함수는 생성자 함수가 될 수 있다
- `new`를 붙여 실행한다면 어떤 함수라도 생성자 함수 메커니즘이 작동한다
- 이름의 첫 글자가 대문자인 함수는 `new`를 붙여서 실행해야 한다

## 일회용 생성자 함수

- `new function(){...}` 꼴로 사용함

- 예시

```js
let user = new (function () {
  this.name = "Danny";
  this.isAdult = false;
})();

console.log(user.name); // Danny
console.log(user.isAdult); // false
```

- 익명 생성자 함수로 코드를 감싸주면 복잡하지만 재사용할 필요가 없는 코드를 간단하고도 한번만 사용할 수 있게 만들 수 있다

- 익명 생성자 함수는 어디에도 저장되지 않고, 단 한번만 호출할 수 있다

- 익명 생성자 함수를 사용하면 재사용을 막으면서 코드를 [캡슐화](https://ko.wikipedia.org/wiki/%EC%BA%A1%EC%8A%90%ED%99%94)할 수 있다

## 생성자와 return문

- 생성자 함수에는 보통 `return`문이 없다
  (반환해야 할 것들은 모두 `this`에 저장디고, `this`는 자동으로 반환되기 때문이다)

- return문이 있는 경우

1. 객체를 `return`하면 `this`대신 객체가 반환됨

```js
function User() {
  this.name = "사자";
  return { name: "로앙이" }; // this가 아닌 객체
}

console.log(new User().name); // 로앙이
```

2. 원시형을 `return`하면 `return`문이 무시됨

3. `return`만 써주면 아무것도 `return`하지 않음

```js
function User() {
  this.name = "사자";
  return; // this를 반환
}

console.log(new User().name); // 사자
```

## 생성자 내 메서드

- 예시

```js
function User(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("제 이름은 " + this.name + "입니다.");
  };
}

let danny = new User("대니");
danny.sayHi(); // 제 이름은 대니입니다.
```

## 객체 리터럴(object literal)

- 중괄호 {...}를 이용해 객체를 선언하는 것
- 객체를 선언할 땐 주로 이 방법을 사용함

## 콜백함수(callback function)

- 나중에 부르는 함수를 `콜백함수`라 함
- argument로 함수를 전달하는 것이 `콜백함수`

- 예시0

```js
function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  //return x + y;
}

console.log(sum(10, 20, console.log));
//30
//undefined(return이 없으므로)
```

- 예시1

```js
function sum2(x, y, 콜백함수) {
  콜백함수(x + y);
  return x + y;
}

console.log(sum2(10, 20, console.log));
// 30
// 30
```

- `콜백함수`위치로 `console.log`가 들어가서 호출이 된 것

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

## map

- 기본 꼴

```js
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

- 대괄호로 둘러쌓인 것은 선택사항

## forEach

- [참고자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
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
```

- ex) map과 같은 역할을 하는 forEach문 작성하기
- forEach는 순회만 함. map은 새로운 array 생성

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

console.log(result); // [ 100, 400, 900, 1600, 2500 ]

let result3 = [];
let result2 = arr1.forEach((x) => result3.push(x ** 2));
console.log(result3); // [ 100, 400, 900, 1600, 2500 ]
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

- 자바스크립트는 메모리 주소를 공개하지 않음

```javascript
[1, 2] === [1, 2]; // false
[1, 2] == [1, 2]; // false
let x = [1, 2]; // x는 y와는 다른 메모리 주소를 가리킴
let y = [1, 2]; // y는 x와는 다른 새로운 메모리 주소를 가리킴

x == y; // false
x === y; // false
```

- 호출 가능 vs 호출 불가능

```js
/* 호출 불가 케이스 */
let m2 = new Map(); // new (생성자 함수) -> this를 받는 효과
m2.set("하나", 10).set(true, "트루").set([1, 2], "리얼리?");

console.log(m2.get([1, 2])); // undefined (이렇게는 사용불가. 각 객체가 다른 주소값을 가지기 때문에 새로운 [1,2]를 지칭함)

/* 호출 가능한 케이스 */
let m = new Map();
let test = [1, 2];
m.set("하나", 10).set(true, "트루").set(test, "리얼리?"); // 이렇게는 호출이 가능

console.log(m.get(test)); // 리얼리?
```

## map의 특징

- [Object를 Map처럼 사용하지 말자](https://shanepark.tistory.com/220)
- map을 쓰면 object를 대체할 수 있다
- map은 순서가 있는 (iterable)객체에서만 작동함
  => Map 그자체가 iterable하므로 바로 사용할 수 있음
- map의 크기를 O(1)의 시간복잡도로 금새 구할 수 있다
  => (size 호출만으로도 쉽게 값을 구함)
  => (Object는 이와달리 객체의 key들을 받아와서, 그 길이를 구해야함 -> O(n))

<br>

- Map 예시

```js
let data = new Map({ one: 1, two: two }); // 불가능
let data2 = new Map([
  ["one", 1],
  ["two", 2],
]); // 가능 (2)

let data3 = new Map(Object.entries({ one: 1, two: 2 })); // 위의 (2)작업을 한번에 가능하게 해줌
console.log(data3); // Map(2) { 'one' => 1, 'two' => 2 }
```

<br>

- map의 가장 큰 장점: 직접 순회가 가능하다!
- 예시

- Object는 직접 순회가 안됨

```js
/* Object는 순회가 안된다 */

let data = { one: 1, two: 2 };

for (const i of data) {
  console.log(i);
}
```

<br>

- Map은 Object와 달리 직접 순회가 가능함

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

console.log(m.keys()); // [Map Iterator] { '하나', '둘', '셋', '넷' }
console.log(m.values()); // [Map Iterator] { 1, 2, 3, 4 }
console.log(m.entries()); // [Map Entries] { [ '하나', 1 ], [ '둘', 2 ], [ '셋', 3 ], [ '넷', 4 ] }
```

<br>

## map과 object간 형변환

- Object -> Map으로 형변환

```js
// Map으로 형변환
let map1 = new Map(Object.entries({ one: 1, two: 2 }));
console.log(map1); // Map(2) { 'one' => 1, 'two' => 2 }
```

- Map -> Object로 형변환
- [Object.fromEntries() => 메서드의 키값 쌍의 목록을 객체로 바꿈](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

```js
// Object
let obj1 = Object.fromEntries(map1);
console.log(obj1); // { one: 1, two: 2 }
```

<br>

## Map 객체 내의 함수

- 생성자

```js
let map = new Map();
```

- Map의 크기 구하기

```js
map.size;
```

- 모든 key, value 지우기

```js
map.clear();
```

- key로 value 구하기

```js
map.get(key);
```

- 특정 key를 가지고 있는지 확인하기

```js
map.has(key);
```

- 특정 key로 value를 Map에 넣기 (반환값은 Map object)

```js
map.set(key, value);
```

- [key, value]의 array를 삽입된 순서대로 가진 새로운 iterator 반환

```js
map.entries();
```

<br>

## 한번 읽어볼 자료

- [폴리필](https://ko.javascript.info/polyfills)

<BR>

## set

- 집합
- 집합은 중복을 허용하지 않는다 (원소를 유일하게 표현할 수 있다)
- 문제

```js
/* 문제 */
board = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];

// 문제1) 몇 명이 게시판에 게시물을 썼나요?
// 문제2) 각각 몇개의 게시물을 작성하였나요?
```

- 문제 1 정답
- 문제 1 : 몇 명이 게시판에 게시물을 썼나요?

```js
/* 문제 */
board = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];

// 문제1) 몇 명이 게시판에 게시물을 썼나요?
let s2 = new Set(board);
console.log(`게시물 작성인원: ${s2.size}명`); // 3

let 결과 = new Set(회사게시판);
console.log(결과.size);
```

- 문제 2 정답
- 문제2) 각각 몇개의 게시물을 작성하였나요?

```js
/* 답안1 */
for (const i of s2) {
  console.log(i, board.filter((e) => e === i).length);
} // 데이터의 개수를 가져오기 위해 filter 사용

/* 답안2 */
let m2 = new Map();
for (const i of board) {
  m2.set(i, (m2.get(i) || 0) + 1); // 순회를 돌면서  i가 map에 없으면 0을 넣어줌 & get을 뽑아오고 나서 1을 더해주면서 갱신 (순회를 돌면서 해당 key값을 업데이트)
}

console.log(m2); // Map(3) { '이호준' => 3, '김은하' => 2, '이준근' => 1 }

/* 답안3 */
let 회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];
let 결과2 = 회사게시판.reduce((a, b) => {
  a[b] = (a[b] || 0) + 1;
  return a;
}, {});

console.log(결과2);
```

<br><br>

### [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- `filter()`: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

<br><br>

### set 순회하기

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

### set을 쓰는이유?

- 교집합 / 차집합 / 합집합 등을 사용하기 위해

```js
let a = new Set("abc");
let b = new Set("cde");

/* 교집합 */
let cro = [...a].filter((value) => b.has(value));
console.log(cro); // [ 'c' ]

/* 합집합 */
let union = new Set([...a].concat(...b));
console.log(union); // Set(5) { 'a', 'b', 'c', 'd', 'e' }

/* 차집합 */
let dif = [...a].filter((value) => !b.has(value));
console.log(dif); // [ 'a', 'b' ]
```

## 엄격 모드

- `use strict`를 입력해서 최신의 방식으로 코드를 실행시키는 것
- 함수별로 `use strict`를 적용하는 것은 좋지 않다
  => 어떤 코드는 호환이되고, 다른 코드는 호환이 되지 않아 일관성에 맞지않기 때문
  (가급적 전체 코드에 `use strict`를 적용할 것)

<br><br>

## this

- [참고 자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this)
- 함수를 호출해주는 애가 this
- this는 같은 함수를 호출하는 방법에 의해 결정됨
- 대부분의 경우 `this`의 값은 함수를 호출한 방법에 의해 결정됨

```js
function a() {
  console.log(this);
}
a(); // 함수를 호출해주는 a 가 this
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

window.a();
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

<br>

- 변수 등록시 window에 등록이 됨

- 실제로 window객체가 가지는 함수 예제

```js
function b() {
  console.log("hello world");
}
b(); // hello world
window.b(); // hello world
```

<br>

- window가 test를 호출 & test가 three를 호출

```js
// window가 test를 호출
let test = {
  one: 1,
  two: 2,
  three: function () {
    console.log(this);
  },
};

//test가 three를 호출
test.three(); // {one: 1, two: 2, three: ƒ}
```

<br>

- test2는 window에 등록되어있다

```js
// window가 test를 호출
let test = {
  one: 1,
  two: 2,
  three: function () {
    console.log(this);
  },
};

// test2를 실행시킴
let test2 = test.three;

//test2가 어디에 등록되어있는지 확인 -> window에 등록
test2(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

- `test.three`라고 했을 때 `test2`를 실행하는 녀석이 `window`이므로 `window`에서 `window`객체를 출력한다

<br>

- this가 자신의 버튼 자체를 가리키는 케이스

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="btn1">클릭1</button>
    <button id="btn2">클릭2</button>
    <script>
      let test1 = {
        one: 1,
        two: 2,
        three: function () {
          console.log(this);
        },
      };

      let test2 = test1.three;

      let btn1 = document.getElementById("btn1");
      btn1.addEventListener("click", test1.three);

      let btn2 = document.getElementById("btn2");
      btn2.addEventListener("click", test2);
    </script>
  </body>
</html>
```

<br><br>

## this란 무엇인가

- 함수 내에서 함수 호출 맥락(context)를 뜻함
  (맥락: 의미가 고정되어있지 않고, 사용하는 상황에 따라 변함)
- 즉, 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다
- `this`의 값은 호출하는 방법에 의해 결정됨
- 자바스크립트에서는 this가 함수와 객체를 연결시켜주는 실질적인 연결점 역할을 함
- 자바스크립트는 선언할 때 결정되는 녀석이 있고, 호출할 때 결정되는 녀석이 있다.
  this는 호출할 때 결정되는 녀석이다.

- 호출하는 녀석이 this이다

- 예시1 (함수가 자기자신을 가리킴)

```js
let someone = {
  name: "danny",
  whoAmI: function () {
    console.log(this); // 함수가 자기자신을 가리킴
  },
};

someone.whoAmI();
// someone 자기자신이 나옴
// { name: 'danny', whoAmI: [Function: whoAmI] }
```

<br>

- 예시2 (예시1과 호출방법을 달리함)

```js
var someone = {
  name: "danny",
  whoAmI: function () {
    console.log(this); // 함수가 자기자신을 가리킴
  },
};

someone.whoAmI(); // someone이 whoAmI를  호출

var myWhoAmI = someone.whoAmI;
myWhoAmI(); // 브라우저(window)가 호출
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

- 자바스크립트의 this는 누가 실행했는지가 중요하다

- 호출한 놈(객체) === this

<br>

## bind 사례

- 예시3 (예시1,2와 호출한 놈을 달리함)

```js
var someone = {
  name: "danny",
  whoAmI: function () {
    console.log(this); // 함수가 자기자신을 가리킴
  },
};

someone.whoAmI(); // someone이 whoAmI를  호출

var myWhoAmI = someone.whoAmI;
myWhoAmI(); // 브라우저(window)가 호출
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

var bindedWhoAmI = myWhoAmI.bind(someone); // someone을 this로 고정시킴
bindedWhoAmI(); // {name: 'danny', whoAmI: ƒ}
```

<br><br>

## this는 언제 사용하는가

- class 내부에서 class 자신의 변수나 함수를 호출할 때 많이 사용함.
- 과거 리액트에서는 class 컴포넌트를 많이 선언했고, 이 경우 this를 사용하였음

<br><br>

## window

- 웹 브라우저 자바스크립트(클라이언트 자바스크립트)에서 전역객체명
- 예시1 (this는 함수 안에서 전역 객체를 의미하는 window를 뜻함)

```js
function func() {
  if (window === this) {
    console.log("window === this");
  }
}

func(); // window === this
```

<br><br>

## bind

- 함수의 호출 방법에 개의치 않고 `this`의 값을 고정적으로 설정하는 메서드

<br><br>

## 클로저

- 선언된 위치에 따라 결정됨
  => `this`는 이와달리 호출하는 방법에 따라 값이 결정됨

<br><br>

## call

- 인수에

## 모놀리식 아키텍처 vs 마이크로서비스 아키텍처

- 모놀리식

  - 유저가 있으면 하나의 서버에 접속해서 유저에게 완성된 것을 보내줌

- 마이크로서비스 아키텍처
  - 프론트엔드 웹 서버가 따로있고, 웹 서버내 이미지 서버가 따로있고, css서버가 따로있고

## JSON

- 테이블 공간안에 데이터를 쏴주려고 함
- 데이터를 화면에 뿌려주는 것인 FE의 역할

## JSON 응용

```
참고사이트: https://test.api.weniv.co.kr/mall
```

```HTML
<!-- 참고사이트: https://test.api.weniv.co.kr/mall -->

<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
  </head>
  <body>
    <div id="main"></div>
    <script>
      // 20221012153547
      // http://test.api.weniv.co.kr/mall
      let data = [
        {
          id: 1,
          productName: "버그를 Java라 버그잡는 개리씨 키링 개발자키링 금속키링",
          price: 12500,
          stockCount: 100,
          thumbnailImg: "asset/img/1/thumbnailImg.jpg",
          option: [],
          discountRate: 0,
          shippingFee: 1500,
          detailInfoImage: [
            "asset/detail/2/detail1.png",
            "asset/detail/2/detail2.png",
          ],
          viewCount: 0,
          pubDate: "2022-02-28",
          modDate: "2022-02-28",
        },
        {
          id: 2,
          productName: "우당탕탕 라이캣의 실험실 스티커 팩",
          price: 3500,
          stockCount: 1000,
          thumbnailImg: "asset/img/2/thumbnailImg.jpg",
          option: [],
          discountRate: 0,
          shippingFee: 1500,
          detailInfoImage: [
            "asset/detail/2/detail1.png",
            "asset/detail/2/detail2.png",
          ],
          viewCount: 0,
          pubDate: "2022-02-28",
          modDate: "2022-02-28",
        },
        {
          id: 3,
          productName: "딥러닝 개발자 무릎 담요",
          price: 17500,
          stockCount: 0,
          thumbnailImg: "asset/img/3/thumbnailImg.jpg",
          option: [],
          discountRate: 0,
          shippingFee: 1500,
          detailInfoImage: [
            "asset/detail/3/detail1.png",
            "asset/detail/3/detail2.png",
            "asset/detail/3/detail3.png",
          ],
          viewCount: 0,
          pubDate: "2022-02-28",
          modDate: "2022-02-28",
        },
        {
          id: 4,
          productName: "네 개발잡니다 개발자키링 금속키링",
          price: 13500,
          stockCount: 100,
          thumbnailImg: "asset/img/4/thumbnailImg.jpg",
          option: [],
          discountRate: 0,
          shippingFee: 1500,
          detailInfoImage: [
            "asset/detail/4/detail1.png",
            "asset/detail/4/detail2.png",
          ],
          viewCount: 0,
          pubDate: "2022-02-28",
          modDate: "2022-02-28",
        },
        {
          id: 5,
          productName: "Hack Your Life 개발자 노트북 파우치",
          price: 36000,
          stockCount: 230,
          thumbnailImg: "asset/img/5/thumbnailImg.jpg",
          option: [
            {
              id: 1,
              optionName: "13인치",
              additionalFee: 0,
            },
            {
              id: 2,
              optionName: "15인치",
              additionalFee: 1000,
            },
          ],
          discountRate: 19,
          shippingFee: 1500,
          detailInfoImage: [
            "asset/detail/5/detail1.png",
            "asset/detail/5/detail2.png",
          ],
          viewCount: 0,
          pubDate: "2022-02-28",
          modDate: "2022-02-28",
        },
        {
          id: 6,
          productName: "[NEW] 위니브 개발자, 캐릭터 스티커팩 2종",
          price: 5500,
          stockCount: 1000,
          thumbnailImg: "asset/img/6/thumbnailImg.jpg",
          option: [
            {
              id: 1,
              optionName: "위니브 개발자 스티커팩",
              additionalFee: 0,
            },
            {
              id: 2,
              optionName: "위니브 프랜즈 스티커팩",
              additionalFee: 0,
            },
            {
              id: 3,
              optionName: "스티커팩 세트(개발자+프렌즈)",
              additionalFee: 5000,
            },
          ],
          discountRate: 0,
          shippingFee: 1500,
          detailInfoImage: [
            "asset/detail/6/detail1.png",
            "asset/detail/6/detail2.png",
            "asset/detail/6/detail3.png",
            "asset/detail/6/detail4.png",
            "asset/detail/6/detail5.png",
          ],
          viewCount: 0,
          pubDate: "2022-02-28",
          modDate: "2022-02-28",
        },
        {
          id: 7,
          productName: "제주코딩베이스캠프 코딩 연습장 세트",
          price: 8000,
          stockCount: 1000,
          thumbnailImg: "asset/img/7/thumbnailImg.jpg",
          option: [],
          discountRate: 0,
          shippingFee: 1500,
          detailInfoImage: [
            "asset/detail/7/detail1.png",
            "asset/detail/7/detail2.png",
          ],
          viewCount: 0,
          pubDate: "2022-02-28",
          modDate: "2022-02-28",
        },
      ];

      let main = document.getElementById("main");

      // https://test.api.weniv.co.kr/asset/img/7/thumbnailImg.jpg
      let mainBodyData = [];
      for (const item of data) {
        mainBodyData.push(`
                    <img src="${
                      "https://test.api.weniv.co.kr/" + item.thumbnailImg
                    }"/>
                    <h2>${item.productName}</h2>
                    <p>${item.price}</p>
                `);
      }
      // console.log(mainBodyData.join(""));
      main.innerHTML = mainBodyData.join("");
    </script>
  </body>
</html>

```

## A
