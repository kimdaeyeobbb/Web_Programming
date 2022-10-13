# 22.10.13 복습 파일

# 자바스크립트

- 자바스크립트는 동적인 부분을 담당

- 웹 어셈블리 속도와 최적화된 자바스크립트의 속도는 이론적으로는 동일함

- HTML은 콘텐츠와 골격, CSS는 웹페이지의 레이아웃, JavaScript는 웹페이지의 동작
  - ES1 (초판, 1997)
  - ES2 (1998)
  - ES3 (1999)
  - ES5 (2009, 엄격모드, 배열메서드(map, filter, forEach 등), JSON 등)
  - ES6 (2015, ECMAScript 2015)
  - ES7 (2016, ECMAScript 2016, 이하 생략)
  - ES6 부터 `const`, `let`, `Promise`, `Arrow function`, `class` 등의 문법들이 대거 추가
  - ECMA-인터내셔널 공식 사이트 : https://www.ecma-international.org/ (다 보는것은 비추천)

## 수업 환경 설정

- about:blank

## 자바스크립트 삽입위치

- head, body의 문서 처음, 중간, 끝
- 보통 자바스크립트 코드는 끝에 넣음(but 처음에 넣는 경우도 있음. -> 미리 노드가 되어야 하는 것들. -> 시간이 오래걸리는 것은 나중에 삽입)
- 보통 body의 맨 끝에 삽입

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="one">hello world 1</h1>
    <h1 onclick="alert('hello')">hello world 2</h1>
    <script>
        document.getElementById('two').innerHTML = 'hello'
    </script>

    <h1 id="two">hello world 2</h1>
</body>
</html>
```

## 내부 스크립트와 외부 스크립트

### 내부 스크립트

```js
<script>console.log('hello')</script>
```

### 외부 스크립트

- 변수 이름이 중복 되었을 때 에러가 발생하므로 주의해야하는 케이스
- 각각의 파일처럼 동작하는게 아니라, `a.js`, `b.js`, `c.js`등이 존재할 경우, 이들이 하나의 덩어리 내에서 부분으로 위치하여서 동작하는 것

```js
<script src="test.js"></script>
```

## JavaScript를 출력하는 4가지 방법

1. 문서 내에 요소를 선택하여 출력하는 방법(innerHTML, innerText 등)
   -> 요소를 만들어 놓고 innerHTML 넣거나 innerText 넣음
2. 문서 내에 직접 출력하는 방법(write 등)
3. 사용자 인터렉션(alert, confirm 등)
4. 콘솔에 찍는 방법(console.log, console.table, console.error 등)

## 코드 구조

- 코드의 난독화와 압축은 보통 같이 사용함

1. 문(statement)은 세미콜론으로 구분(세미콜론을 붙이지 않는 곳도 있습니다.)되어 있음
2. 문은 값, 연산자, 키워드, 명령어, 표현식(값으로 평가, 함수나 key, index를 통한 값의 호출도 표현식) 등으로 구성됩니다.
3. 공백 병합

```js
let x = 10,
  y = 20,
  z = 30;
console.log(x, y, z);
// .a()
// .b()
// .c()
```

4. 주석

```js
// 한 줄 주석입니다.
/*
여러줄 주석입니다.
*/
```

5. 엄격모드

- ES5에서 최신의 문법들이 많이 추가가 되었는데 기존에 있었던 문법을 변경하는 문법도 나옴
- 이러한 문법들은 기존 코드의 문제를 불러일으킬 수 있기 때문에 use strict라는 지시자를 통해 엄격모드를 활성화 했을 때에만 반영
- class 문법의 경우 엄격 모드가 기본
- 함수별로 엄격모드를 다르게 적용할 수 있으나 혼란을 야기할 수 있습니다.

- DTD. doctype을 안쓰면 하위호완모드
- 하위호완 모드와 엄격모드는 다름. 하위호완모드는 DTD를 쓰지 않음. 새로운 문법이 추가되지 않은 것

```js
"use strict"; // 별도로 엄격모드를 지시하는 코드
```

# 변수

- 변수 이름 규칙

  - 변수는 숫자로 시작할 수 없다.
  - 띄어쓰기가 안된다.
  - 예약어를 사용할 수 없다.(예약어가 사용 불가능한 것은 아닙니다.)
  - $, \_를 제외한 특수문자를 사용하지 않는다.
  - 대소문자를 구분한다.
  - class와 생성자 함수는 첫 문자를 대문자로, 나머지는 보통 소문자로 시작한다.

- var, let, const
  ```js
  if (true) {
    const testName = "hojun";
    let testAge = 10;
  }
  if (true) {
    var testName2 = "hojun";
    var testAge2 = 10;
  }
  ```
  - var(ES5 이전, 지금 사용 권장 X) : 함수 레벨 스코프, 재선언시 에러 X
  - let(ES5) : 블록 레벨 스코프, 재선언시 에러 O, 콘솔에서는 에러 X, 변경가능한 자료형
  - const(ES5) : 블록 레벨 스코프, 재선언시 에러 O, 콘솔에서는 에러 X, 변경이 불가능한 자료형(상수)

# 연산

- 산술 연산자(+, -, /, \*, \*\*, %)
- 할당 연산자(=, +=, -=, /=, \*=, \*\*=, %=)
- 논리 연산자(&&, ||, !, !!, &, |)

  - 참 -> true -> 1
  - 거짓 -> false -> 0
  - &&는 곱
  - ||는 합
  - !는 부정
  - 암기코드

  ```js
  for (let x = 0; x < 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
      console.log(x);
    }
  }
  ```

- 단락회로 연산자(비트단위 연산)
  - 비트 OR연산 `(|)` -> 대응되는 비트 중에서 하나라도 1이면 1을 반환함
  - 비트 AND연산 `(&)` -> 대응되는 비트가 모두 1이면 1을 반환함

```JS
console.log(9|3) //11
console.log(37 | 3); // 32+4+1 = 0010 0101 | 0000 0011 -> 0010 0111 -> 32 + 4+2+1 = 39
```

- Logical OR `(||)`

  - `expr1 || expr2` -> `expr1`이 `true`로 바뀔 수 있으면 `expr1`을, 그렇지 않으면 `expr2`를 반환함

- Logical AND `(&&)`
  - `expr1 && expr2` -> 결과값이 거짓인(하나라도 거짓인) 경우 `expr1`을, 결과값이 참인 경우(둘다 참인경우) `expr2`를 반환

```js
// 앞에 값이 널이냐를 확인하고 싶은 경우, 단락 회로 평가라고 부릅니다.
console.log(10 || 100); // 10
console.log(null || 100); // 100
console.log(0 && 100); // 0
console.log(null && 100); // null
console.log(100 && 12); // 12
console.log(true && "a"); // a

username = "hojun";
result5 = username || "유저 이름이 없습니다"; // 앞의것이 true이면 뒤의 것을 보지 않고 반환

username = undefined;
result5 = username || "유저 이름이 없습니다"; // 앞의것이 false이면 두의 것을 보고 반환
```

- 비교 연산자(>, >=, <, <=, ==, !=, ===, !==)
- 단항 산술 연산자(++x, x++, --x, x--)
- nullish 병합 연산자(??) => 2020년에 도입

  - 왼쪽 피연산자가 `null`또는`undefined`일 때 오른쪽 피연산자를, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자

  ```js
  let result1;
  console.log(result1 ?? 100); // 100

  let result2 = 10;
  console.log(result2 ?? 100); // 10

  let result3 = null;
  console.log(result3 ?? 100); // 100
  ```

- null이면 자기자신의 값을 넘겨줌

```js
let result5 = null;
let result6 = result5 ??? 100;
result5 // null
result6 // 100
```

- typeof 연산자

  - prototype 시간에 다시 설명

- 프로퍼티 접근 연산자 (멤버 접근 연산자)
  1. 마침표 프로퍼티 접근 연산자
  2. 대괄호 프로퍼티 접근 연산자

```JS
let test = {'one':1, 'two':2}
test.one // 마침표 프로퍼티 접근 연산자
test['one']   // 대괄호 프로퍼티 접근 연산자
```

- 주의

```js
[10,20,30].toString() // '10,20,30'
10.toString()   // error -> 10뒤의 .이 소수점으로 인식됨 -> 다음과 같이 수정

/* 수정 */
let a = 10;
a.toString()   // '10'

```

- 관계 연산자

  - 키만 가지고 판단

  ```js
  10 in [10, 20, 30]; // false -> key만 보고 판단하므로 false인 것
  1 in [10, 20, 30]; // true
  "h" in "hello"; // error -> key와 value로 구성된 곳에서 key만 가지고 판단하기 때문
  1 in "hello"; // error
  "name" in { name: "hojun", age: 10 }; //true
  "length" in [10, 20, 30]; // true -> console.dir([10,20,30])을 찍어보면 키값이 0,1,2,length이고 value가 10,20,30,3이다. 따라서 length로도 접근이 가능한것이다
  ```

# 변수의 형

## 변수(타입, typeof로 확인 가능)

- 원시타입(primitive types) : number, string, boolean, null, undefined, symbol(ES6 추가, 변경 불가능한 유일한 값)
- 참조타입(reference types) : object(object, array, map, set), function(function은 Object처럼 사용할 수 있어서 참조타입으로 취급 -> 에전책에는 type이 object, 최근에 바뀌어서 type이 function이 됨)

  - 참조타입은 함수의 인자로 전달해줄 때 주의해야함. 주소값에 복사를 해서 변화되는 것이므로, 자료형이 안에서 바뀌지 않는한 해당값의 원본이 바뀔 수 있는 이슈가 존재함

- 예시 (`함수를 객체로 사용할 수 있다` 정도로만 이해하고 넘어가기)

```js
function aa(x){console.log()}
function aaa(x){console.log('10') return 100}
console.dir(aaa)
aaa.hello = 1000
console.dir(aaa)
aaa.hello  // 1000

```

- 참조타입의 데이터를 선언하고 함수의 인자로 전달시 원본값이 변할 수 있음

```js
let a = [10, 20, 30];
function hello(data) {
  data[0] = 1000;
}

hello(a);
a; // [1000,20,30]   -> 원본값이 변함
```

- Number(숫자)

  - 형태 : 10, 10.123, -10
  - 호출 : 변수명
  - 메서드 :
    - 10.toString()는 안됩니다. 이유는 무엇일까요? 소수점 때문에 그렇습니다.(JavaScript의 parsing때문이고, 아는 분이 많지는 않습니다.) -> 한국에서 이슈가 되었었음
    - (10).toString()와 변수명.toString()은 가능합니다.
    - num.toFixed() // 고정 소수점 표기 (아무것도 기재하지 않으면 0으로 ㅊ리)
    ```js
    (10.1).toFixed(); // '10'
    ```
    - 은행권은 (.)을 매우 주의해야함. 소수점만 모아서 자기 통장으로 입금된 사례가 있음
  - Number()
  - parseInt() - 권고, parseFloat()

  ```js
  parseInt("1hello world"); // 1
  Number("hello world"); // NaN
  ```

- [Number vs parseInt](https://thisthat.dev/number-constructor-vs-parse-int/)

  - Math
    - Math.PI
    - Math.max() (그냥 얘만 쓰면 -Infinity -> ()안의 값과 Infinity를 비교해서 가장 큰 값을 출력) (Math.max([10,20,30])처럼 쓰면 안되고 ...[10,20,30]처럼 전개해서 사용할 것)
    - Math.min() (그냥 얘만 쓰면 Infinity -> ()안의 값과 Infinity를 비교해서 가장 작은 값을 출력)
    - Math.floor()
    - Math.round()
    - Math.random() (0이상 1미만의 숫자 중 랜덤숫자)
    - Math.abs()
    - Math.sqrt() (루트. 100\*\*0.5처럼 0.5승을 사용해도 됨)
    - Math.pow()
  - NaN
  - Infinity, -Infinity

- 0이상 10이하의 정수 뽑아내기

```js
Math.floor(Math.random() * 11);
```

- String(문자열)

  - 형태 : 'abcde', "abcde", \`abcde ${변수명}\`(`템플릿 리터럴` 혹은 `틸트`나 `백틱`이라고 부름)
  - 호출 : 변수명, 변수명[0] (변수명[index], 호출은 할 수 있지만 개별 값 변경 불가)
  - 메서드 :
    - str.length (길이 출력)
    - str.indexOf()
    - str.lastIndexOf()

```js
'hello world hello'처럼 마지막에 포함되는것을 출력
```

- str.includes() (포함여부 확인)

```js
"hello".includes("h"); // true
"hello".includes("hl"); // false
```

- str.slice()

```js
"hello".slice(4); // 'o'
"hello".slice(-2); // 'lo'
```

- str.splice() -> 배열에 있는 메서드 (str에는 없음),[참고자료](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- str.split()

```js
"he!l!lo wo!rld".split("!"); // ['he','l','lo wo','rld']
"0".repeat(100);
"5".repeat(100).split("").map(Number); // Number -> 콜백함수
"5".repeat(100).split("").map(parseInt); // parseInt -> 콜백함수. NaN가 삽입됨
/*
혹시 궁금하신 분들을 위해...

https://medium.com/dailyjs/parseint-mystery-7c4368ef7b21

아까 '5'.repeat(10).split('').map(parseInt)에서 NaN이 출력되는 이유입니다. 
요약하면 parseInt는 인자를 최대 2개까지 입력 받을 수 있고 각각을 문자열, 문자열의 진수로 처리하고 map은 따로 지정해주지 않았을 경우 콜백 함수에 인자로 value, index, array를 전달해줍니다. 

따라서 위와 같은 경우 parseInt(5, 0, array(무시됨)), parseInt(5, 1, array(무시됨)), parseInt(5, 2, array(무시됨)), ... 이런 식으로 들어가는데 '5'를 1진수(원래 안됨), 2진수, 3진수, 4진수로는 해석할 수 없어서 NaN이 나온다고 합니다...
*/
```

- str.substring()
- str.substr()
- str.toLowerCase()
- str.toUpperCase()
- str.trim()
- str.replace()
- str.concat()
- str.repeat()

```js
"hello".repeat(100);
"0".repeat(100);
"5".repeat(100).split("").map(Number);
```

- Boolean(논리값)

  - 형태 : true, false
  - 호출 : 변수명
  - 어떤 것이 true이고 어떤 것이 false인지 판단할 수 있어야 합니다.(truthy, falsy -> 우리가 매우 깊이 다뤘던 내용입니다.)

- undefine : undefind

  - 형태 : let a, console.log(a)

- null : object(타입임)

  - 형태 : let a = null

- Array(배열) : object(타입임)

  - 형태 : ['하나', '둘', '셋'], [100, 200, 300],
  - 호출 : 변수명, 변수명[0], 변수명[0][0] (변수명[index], 개별값 변경 가능)
  - Array
  - 메서드 :
    - length
    - forEach (단순순회)
    - map (데이터를 매핑해서 뽑아냄) (순회하여 리턴된 값으로 새로운 array를 뽑아냄)

```js
test = [100, 200, 300];
test.map((e) => console.log(e)); // 리턴값: [undefined, undefined, undefined]
test2.map((e) => e); // 리턴값: [100, 200, 300]
```

- filter (해당 조건에 포함되는 것들을 뽑아냄)

```js
test = [100, 200, 300];
test.filter((e) => e >= 200); // -[200,300]
```

- push / pop - mutable(원본이 수정됨) (수정이 가능함)
- slice - immutable(원본이 수정되지 않음) (수정이 불가능함)

```js
test = [100, 200, 300]; //(3) [100, 200, 300]
test.slice(1); // (2) [200, 300]
```

- splice - mutable
- reduce - immutable
- join
- indexOf
- includes
- find
- concat
- [every](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

```js
fucntion 콜백함수(e){
    return e == true
}

[false,true,true].every(콜백함수)  // false

/* 예시2 */
function 콜백함수2(e){
    return e>5
}
[1,10,9,6,5].every(콜백함수)   // false


/* 에시3 */
```

    - [some](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some) -> 하나라도 통과하면 true

```js
fucntion 콜백함수3(e){
    return e >= 5
}

[1,10,9,6,5].some(콜백함수3)   // true
```

    - fill — mutable
    - shift — mutable
    - unshift — mutable
    - reverse — mutable
    - sort — mutable

# 다시듣기 (11:00~11:06)

```js
Array(100).fill(0);
Array(100).fill("hello");
Array(100).fill("hello".repeat(2));

/* 많이사용, 0부터 100까지 원하는값을 한번에 채움*/
Array(100)
  .fill(0)
  .map((value, index) => value + index); // 0부터 99까지 채운 Array

Object.keys(Array(100).fill(0)).map(Number); // 0부터 99까지 채운 Array
[...Array(100).fill(0).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

Array.from({ length: 100 }, (v, i) => i + 1); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

/*
사용 아이디어 
let test = [] //undefined
test.length = 100  //100
test // (100) [empty × 100]
*/
```

- [참고자료](https://medium.com/dailyjs/parseint-mystery-7c4368ef7b21)

- Object(객체)

  - 형태 :
    ```js
    {
        "지역이름": "전국", // key : value(key와 value로 구성된 2개의 집합을 가리켜 객체 프로퍼티)
        "확진자수": 24889,
        "격리해제수": 23030,
        "사망자수": 438,
        "십만명당발생율": 48.0
    }
    {
        'one' : 1,
        'o n e' : 1,
        '1 one' : 1
    }
    {
        one : 1,
        o n e : 1, // error
        1 one : 1 // error
    }
    /* 객체의 구조분해 할당 */
    let x=1, y=2, z=3
    let object = {x, y, z} // {x: 1, y: 2, z: 3}
    ```
  - 호출 : 변수명, 변수명.지역이름, 변수명['지역이름'] (호출방법: 변수명.key, 변수명[key])
  - 수정, 삭제 :
    - 수정 방법: value['hello'] = 'world', value['hello'] = null
    - 삭제 방법: delete value['hello']처럼 delete키워드 사용하는것을 추천하지 않음 (메모리 상에 'world'가 남아있음, value['hello'] = null을 권장)
  - 속성 :
    ```js
    console.log(Object.getOwnPropertyDescriptor(person, "name"));
    Object.getOwnPropertyDescriptors(person);
    // {10: {…}, name: {…}, age: {…}, height: {…}, weight: {…}, 이력: {…}}
    // value: '이호준',
    // writable: true, // 변경 가능 여부, 기본값 false
    // enumerable: true, // 열거(for) 가능 여부, 기본값 false
    // configurable: true // 재정의 가능 여부, 기본값 false
    ```
  - 메서드 : Object.keys, Object.values, Object..entries

  ```js
  //변수명.keys()와 같은 형식은 안됩니다.
  x.keys();
  ```

- Map : object (map은 key ,value로 매칭. key에는 여러가지 자료형이 들어갈 수 있다)

  - 메서드 : set(데이터 세팅), get(데이터를 가져옴), has, delete, size

  ```js
  let map = new Map();
  map.set("one", 100);
  map.set("two", 200);
  map.set("three", 300);
  map.set("four", [10, 20]);
  map.set(5, [100, 200]);
  map.set([1, 2], [100, 200]);
  map.get(5);

  let human = {
    name: "hojun3",
    age: 30,
    local: "jeju",
  };
  let hojun = new Map(Object.entries(human));
  ```

```js
let test = { one: 1, two: 2, three: 3 }

/* test에서 value에 접근하기 */
console.log(test.one)  // 1
console.log(test['one'])   // 1
console.log(test[one])  // error. one이 변수로 인식됨. 하지만 우리가 쓴 one은 key이다. 따라서 이처럼 헷갈리는것을 방지하기 위해 key에 ''를 씌워주는게 좋다


let test2 = {
    1: 10,
    2: 20,
    3: 30
}

console.log(test[1])  // 10
console.log(test.1)// erro
// 키값이 숫자로 되어 있을 때 멤버접근 연산자로 접근할 수 없음. Syntax error 발생
```

- Set : object
  - 메서드 : add, delete, has, size
  - 중복을 허락하지 않는다
  - 합집합, 교집합, 차집합 등에 메서드가 있진 않지만, 이러한 합집합, 교집합, 차집합을 구현하기 위해 Set을 사용하는 경우가 많습니다.
  ```js
  let set = new Set();
  set.add(1);
  set.add(1);
  set.add(2);
  set.add(2);
  set.add(3);
  set.add(3);
  set.add(3);
  set.add(3);
  set.size;
  // let set = new Set([1, 2, 3, 3, 3, 3])
  // let set = new Set('helllllllllo')
  ```
  ```js
  let a = new Set([1, 2, 3]);
  let b = new Set([3, 4, 5]);
  const 합집합 = new Set([...a, ...b]);
  const 교집합 = new Set([...a].filter((x) => b.has(x))); // new Set을 지워도 됨
  const 차집합1 = new Set([...a].filter((x) => !b.has(x))); // new Set을 지워도 됨
  const 차집합2 = new Set([...b].filter((x) => !a.has(x))); // new Set을 지워도 됨
  ```

# 조건문과 반복문

## 조건문

- if
- else if
- else
- switch
  ```js
  if (false) {
    console.log("hello 1");
  }
  if (false) {
    console.log("hello 2");
  }
  if (true) {
    console.log("hello 3");
  }
  if (true) {
    console.log("hello 4");
  }
  ```
  ```js
  if (false) {
    console.log("hello 1");
  } else if (false) {
    console.log("hello 2");
  } else if (true) {
    console.log("hello 3"); // 얘만 출력됨
  } else if (true) {
    console.log("hello 4");
  } else {
    console.log("!!");
  }
  ```
  ```js
  let result = true ? 1 : 100;
  ```

## 반복문

- for
- for in
- for of
- while
- do while
- forEach
- break
- continue

- [var 사용 자제 이유1](https://ko.javascript.info/var)
- [var 사용 자제 이유2](051_var을_사용하면_안되는이유.html)

```js
//예제
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- foreach는 break와 continue를 사용할 수 없는 것으로 알고 있는데 for문과 비교했을 때 어떤 이점이 있을지 궁금합니다

```js
foreach는 메서드임. array에서 가볍게 쓸 때 사용하는게 좋음. foreach는 array를 순회할 때 사용
```

- 예제

```js
//예제
let a = [10, 20, 30, 40];
for (let i of a) {
  console.log(i);
}
// for of는 배열의 요소를 가져옴
```

```js
//예제
let a = [10, 20, 30, 40];
for (let i in a) {
  console.log(i);
}
let a = { one: 1, two: 2 };
for (let i in a) {
  console.log(i);
}

// for in은 배열의 키값을 가져옴
```

```js
//예제
let x = 0;
while (x < 10) {
  console.log(x);
  x++;
}
```

```js
//예제
let x = 0;
do {
  console.log(x);
  x++;
} while (x < 10);
```

```js
//예제
let a = [10, 20, 30, 40];
a.forEach((e) => console.log(e ** 2));
```

- [for과 foreach문의 차이점](https://milooy.github.io/dev/220810-abstraction-and-declarative-programming/)

- break: 가장 가까운 블럭을 탈출

```js
//예제
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
```

```js
//예제
for (let i = 0; i < 10; i++) {
  if (i == 5) break;
  console.log(i);
}
```

```js
//예제
for (let i = 0; i < 10; i++) {
  if (i == 5) break;
  console.log(i);
}
```

```js
//예제
for (let i = 0; i < 10; i++) {
  if (i == 5) continue;
  console.log(i);
}
```

# 함수와 클래스

## 함수

- 함수 표현식과 함수 선언식
  - 함수 표현식은 TDZ에 들어가서 호이스팅이 안되는것처럼 보인다
  ```js
  let 함수표현식 = function () {}; // 호이스팅 X
  function 함수선언식() {} // 호이스팅 O
  ```
- 함수(파선아실) -> 파라미터는 선언할 때, 아규먼트는 실행할 때 사용

  - 여기서 x, y를 보통 한국에서는 인자
  - 매개변수(파라미터, parameter) : x, y
  - 전달인자(아규먼트, argument) : 3, 5
  - 사용이유
    1. 재사용성
    2. 아키텍처 파악
    3. 유지보수
    ```js
    function 땅다지기() {}
    function 시멘트작업() {}
    function 철근() {}
    function 벽돌() {}
    function 지붕() {}
    땅다지기(); // 여러번 들어가야하면 이 함수를 여러번 실행
    시멘트작업();
    철근();
    벽돌();
    지붕();
    ```
  - 예제

  ```js
  function add(x, y) {
    return x + y;
  }

  add(3, 5);

  function add(a = 100, b = 200) {
    console.log(a, b);
    return a + b;
  }

  add(10, 20);
  // 30
  add(10);
  // 210
  add();
  // 300
  add((b = 300)); // a에 입력
  // 500
  add(undefined, 300);
  // 400

  function add({ a = 100, b = 200 }) {
    console.log(a + b);
  }

  add({ b: 300 }); // 400
  ```

- 콜백함수

  - 함수를 인자로 전달

  ```js
  function add(x, y) {
    return x + y;
  }

  function mul(x, y) {
    return x * y;
  }

  function cal(a, b) {
    return a(10, 10) + b(10, 10);
  }

  cal(add, mul);
  ```

  - 화살표 함수를 콜백함수로 사용했을 경우의 장단점
    - 장점 : 네이밍을 안해도 됩니다.
    - 장점..? -> 단점인듯? : 다른 곳에서 사용할 수가 없다.
    - 단점 : 콜백지옥에 빠질 수가 있습니다.

  ```js
  function cal(a, b) {
    return a(10, 10) + b(10, 10);
  }

  cal(
    (a, b) => a + b,
    (a, b) => a * b
  );

  /* 아래의 코드는 동일한 기능을 하는 코드 */
  function add(x, y) {
    return x + y;
  }

  function mul(x, y) {
    return x * y;
  }

  function cal(a, b) {
    return a(10, 10) + b(10, 10);
  }

  cal(add, mul);
  ```

- 화살표함수

  ```js
  function 제곱(x) {
    return x ** 2;
  }

  // 함수표현식, 호이스팅 X
  let 제곱 = (x) => x ** 2; // 호이스팅 디지만 사용할 수 없다는 것이 더 정확

  function f(a, b) {
    let z = 10;
    let result = z + a + b;
    return result;
  }

  // 함수표현식, 호이스팅 X
  let f = (a, b) => {
    let z = 10;
    let result = z + a + b;
    return result;
  };
  ```

- 기명 함수

  ```js
  // 기명 함수
  let aa = function sum(x, y) {
    return x + y;
  };

  // 익명 함수인것 같지만 바뀜
  let bb = function (x, y) {
    return x + y;
  };
  // ES5에서는 빈 문자열이었는데 ES6에서 name 값을 가지는 것으로 바뀌었습니다. (NAME을 찍으면 찍힘. 예전 책 내용과 다를것임)
  let cc = (x, y) => x + y;
  ```

- 익명 함수
  ```js
  console.dir(function (x, y) {
    return x + y;
  });
  ```

## 클래스

- 클래스는 생성자 함수로 어느정도가 대체 가능하다
- 클래스는 static sugar일뿐이다 (약 2년전이면 맞는말이지만, 현재는 클래스만의 문법이 많이 생겼다)

- 클래스 -> 붕어빵 찍는 틀, 공장, 자동차 공장, 게시물 찍는 틀로 사용
- 인스턴스 -> 붕어빵, 제품, 자동차
- 클래스는 그대로 사용하면 안됨 (자동차 공장을 타고다니면 안됨!ㄴ)
- 클래스 사용하면 아키텍쳐 파악이 용이

- 클래스 예시

```js
/* 이렇게 틀만 만들어 놓음 */
class 게시물{
    글,
    작성자,
    제목,
    댓글,
    조회수,
    발행일,
    수정시간
}

/* 이후에 인스턴스를 사용해서 값을 입력 */
게시물하나 = new 게시물("오늘도 js에게 조져졌다","danny")
게시물둘 = new 게시물("오늘도 js에게 조져졌다","daniel")
```

```js
class Human {
  constructor() {}
  // 인스턴스 메서드, 인스턴스 프로퍼티 메서드, 프로토타입 메서드
  a() {}
  // 클래스 메서드, 클래스 프로퍼티 메서드, 정적 메서드
  static b() {}
}

hojun = new Human("호준"); // 인스턴스(찍혀져 나옴) = 클래스 꼴

typeof hojun; // object
typeof Human; // function

// getter - 획득
// setter - 설정
// # = private 필드
class Student {
  subject = "javascript study";
  #level;
  constructor(level, name, skill) {
    this.#level = level;
    this.name = name;
    this.skill = skill;
  }
  get level() {
    // hojun.level로 출력
    return this.#level;
  }
  set level(level) {
    // hojun.level = 10
    this.#level = level;
  }
  attack() {
    console.log("파이어볼!");
  }
}

class Mento extends Student {
  codeReview() {
    console.log("코드리뷰를 진행합니다.");
  }
}

let hojun = new Student(999, "호준", ["python", "js", "...생략..."]);

let hojun2 = new Mento(999, "호준", ["python", "js", "...생략..."]);
```

# 예외처리, 전개표현식, 정규표현식, 리터럴 등

## 예외처리

```js
try {
  // 코드
} catch (e) {
  // 코드
} finally {
  // 코드
}
//throw new Error(message);
//throw new SyntaxError(message);
//throw new ReferenceError(message);
```

## 전개구문 사용

- spread 용법
- `...`을 사용

- 전개구문 사용 예제

  ```js
  function f(...x) {
    return x;
  }

  f(1, 2, 3, 4, 5);
  ```

  ```js
  let arr1 = [1, 2, 3, 4];
  let arr2 = [10, 20, 30, 40];
  let arr3 = [100, ...arr1, 200, ...arr2, 300];
  let arr4 = [100, arr1, 200, arr2, 300];
  console.log(arr3);
  Math.max(...arr3);
  let [a, b, c, ...d] = [10, 20, 30, 40, 50, 60, 70];
  ```

## 정규표현식(언젠간 만나니까 필수로 해야함)

- 특정 패턴을 찾아낼 때 사용
- 연습사이트 : https://regexr.com/5nvc2

```js
// 0 문자 제거
let s = "010100020201020304812123";
s.replace(/[^1-9]/g, "");
("11221234812123");

// 앞 뒤 공백 제거(캐릭터 클래스 `\s`사용)
s = "   010100020201020304812123    ";
s.replace(/^\s+|\s+$/g, "");
("010100020201020304812123");

// 문자열 내 공백 제거
s = "  01010002020   102030  4812123  ";
s.replace(/\s/g, "");
("010100020201020304812123");

// 개행 제거
s = `
a
b
c
d
`;
("\na\nb\nc\nd\n");
s.replace(/\n/g, "");
("abcd");

s = "hello world HELLO WORLD";
s.match(/hello/gi);

s1 = "010-5000-2000";
s2 = "010 5000 2000";
s3 = "010~5000!2000";
s4 = "010!!5000!!2000";
s5 = "01050002000";

s1.split(/-/g);

// hint
// s.split(/([a-z])([0-9])/g)
// s.split(/([a-z]{3})/g)

s1.split(/([0-9]{3})[- ~!]*([0-9]{4})[- ~!]*([0-9]{4})/);

/*
- `^` : 문자열의 시작
- `$` : 문자열의 종료. 옵션에 따라 문장의 끝 또는 문서의 끝에 매치된다.
- `.` : 임의의 한 문자
- `[]`: 문자 클래스. 문자 클래스 안에 들어가 있는 문자는 그 바깥에서 하나의 문자로 취급된다.
- `^` : 문자 클래스 내에서 ^는 not
- `-` : ex) a-z는 a에서 z까지의 문자
- `|` : or를 나타냄
- `?` : 앞 문자가 없거나 하나 있음
- `+` : 앞 문자가 하나 이상임
- `*` : 앞 문자가 0개 이상임
- `{n,m}` : 앞 문자가 `n`개 이상 `m`개 이하. `{0,1}` 은 `?`와 같은 의미다.
- `{n,}` : 앞 문자가 `n`개 이상. 위의 형태에서 `m`이 생략된 형태이다. `{0,}` 이면 `*`와 같고 `{1,}` 이면 `+`와 같은 의미이다.
- `{n}` : 앞 문자가 정확히 `n`개. `{n,n}` 과 같은 의미이다.
- `()` : 하나의 패턴구분자 안에 서브 패턴을 지정해서 사용할 경우 괄호로 묶어주는 방식을 사용한다.
- `\s` : 공백문자
- `\b` : 문자와 공백 사이를 의미한다.
- `\d` : 숫자 [0-9]와 같다.
- `\t` : 탭문자
- `\w` : 단어 영문자+숫자+_(밑줄) [0-9a-zA-Z_]문자 이스케이프는 대문자로 적으면 반대를 의미한다.
[a-z] : a ~ z 사이의 문자를 찾음
[1-9] : 1 ~ 9 사이의 문자를 찾음
[abc] : a, b, c중 하나를 찾음
[^abc] : a, b, c를 제외한 문자를 찾음
.z : 아무 문자 하나를 . 기호로 찾으며 z로 끝남을 의미
a+ : a가 1개 이상을 의미함
a* : a가 0개 또는 그 이상을 의미함
s : 공백 문자를 찾음(스페이스, 탭 등), 대문자의 경우 아닌 문자를 찾음
d : 숫자를 찾음, 대문자의 경우 아닌 문자를 찾음
w : 알파벳 영문과 숫자와 언더바 _ 기호를 찾음, 대문자의 경우 아닌 문자를 찾음
t : 탭 공간을 찾음
g : 검색범위를 전역으로 확장
i : 대소문자를 구분하지 않음
gi : 검색 범위를 전역으로 확대하면서 대소문자를 구분하지 않음
m : 여러줄을 동시에 매칭함
*/
```

## 리터럴

- 리터럴은 약속된 기호를 사용해 값을 생성하는 것입니다. 예를 들어 문자를 생성하기 위해서는 작은 따옴표, 큰 따옴표, 템플릿 리터럴 중 하나를 사용하죠. 배열을 생성하려면 대괄호를, 오브젝트를 생성하려면 중괄호를 사용해야 합니다.

```js
let hello = "hello world"; // ''로 감싸서 문자열임을 나타냄
```

- new String(), new Array(), new Object()의 형식으로 만들어야 하는 것을 약속된 기호로 만들 수 있게 해준 것입니다.
- new Object() 의 리터럴 표현이 {}, new Number(1) 의 리터럴 표현이 1, new String("hello") 의 리터럴 표현이 "hello" 입니다.
- new Object()는 생성자 함수를 이용한 것이죠.
- 정규표현식 리터럴

```js
let x = /[a-zA-Z0-9]/g;
```

- 2진수, 8진수, 16진수 리터럴

```js
// 따옴표로 감싸지 않아도 됨
let a = 0b1001; // a == 9
let b = 0o1001; // b == 513
let c = 0x1001; // c == 4097
```

## 사용자와 상호작용

- prompt('hello')
  - prompt로 얻어진 값은 모두 string이다 (숫자가 아니므로 숫자로 쓰고 싶다면 형변환을 해줄것)
- comfirm('hello')
- alert('hello')

## 구조분해할당

- 예제

  ```js
  for (let [[i, j], k] of [
    [[1, 2], 2],
    [[1, 2], 4],
  ]) {
    console.log(i, j);
  }
  ```

  ```js
  let x = 10,
    y = ((20)[(x, y)] = [y, x]);

  let { a, b } = { b: "hello", a: "world" };
  ```

- 다른 언어에서는 언패킹이라고 부르기도 합니다.

## 동기와 비동기

- js는 일을 처리할 수 있는 thread가 1개, 싱글쓰레드라고 함.
- 하지만 모든 일을 여러명이 처리할 수 없다면 항상 기다려야 하는 문제가 생길 수도 있고, 무한대기에 빠질 수도 있음.
- 동기는 앞선 업무가 끝나야 진행할 수 있음
- 한꺼번에 일을 할 수 있는게 비동기

```js
// 순서대로 한다면 덧셈, 곱셈, hello world 순이지만
// 비동기이기 때문에 hello world, 곱셈, 덧셈 순이 됨
function 덧셈(a, b, 콜백함수) {
  setTimeout(() => {
    let result = a + b;
    console.log(result);
  }, 2000);
}
function 곱셈(a, b, 콜백함수) {
  setTimeout(() => {
    let result = a * b;
    console.log(result);
  }, 1000);
}

덧셈(20, 30);
곱셈(2, 6);
console.log("hello world");
```

- Promise
  - pending(대기상태) - resolve(해결) - fulfilled(성공)
  - pending(대기상태) - reject(거부) - rejected(실패)
  - 비동기 프로그래밍
  - 프로미스를 하면 코드가 바로 실행되는게 아니고, 앞의 코드가 성공이 되면 다음 단계로 넘어감
  - fetch가 promise를 반환
  - 비동기 프로그래밍이 resolve나 reject을 내뱉음
  - 성공하면 then, 실패하면 catch로 넘어감

```js
new Promise((resolve, reject) => {
  //code
})
  .then((result) => result)
  .then((result) => result)
  .catch((err) => err)
  .finally((result) => result);

let p = new Promise(function (resolve, reject) {
  resolve("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  });

p;
//Promise {<fulfilled>: undefined}

let p = new Promise(function (resolve, reject) {
  // resolve('hello world');
  reject("hello world");
})
  .then((메시지) => {
    alert(메시지);
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  })
  .catch((메시지) => {
    alert("catch 실행!! :" + 메시지);
  });

let p = new Promise(function (resolve, reject) {
  // resolve('hello world');
  reject("hello world");
})
  .then((메시지) => {
    alert(메시지);
    throw Error("에러 발생!");
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  })
  .catch((메시지) => {
    alert("catch 실행!! :" + 메시지);
  });

let p = new Promise(function (resolve, reject) {
  resolve("hello world");
  //reject('hello world');
})
  .then((메시지) => {
    alert(메시지);
    throw Error("에러 발생!");
    return 메시지.split(" ")[0];
  })
  .then((메시지) => {
    alert(메시지);
    return 메시지[0];
  })
  .then((메시지) => {
    alert(메시지);
  })
  .catch((메시지) => {
    alert("catch 실행!! :" + 메시지);
  });

let p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("끝남!"), 3000);
});
console.log("hello world");
console.log(p);
//VM92:4 hello world
//VM92:5 Promise {<pending>}

// 3초 후
console.log(p);
//</pending>/VM139:1 Promise {<fulfilled>: '끝남!'}

let p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("끝남!"), 10000);
});
console.log("hello world");
console.log(p);
//VM180:1 Promise {<pending>}

console.log(p);
// VM184:1 Promise {<pending>}

console.log(p);
// VM184:1 Promise {<pending>}

console.log(p);
// VM184:1 Promise {<pending>}

console.log(p);
//VM204:1 Promise {<fulfilled>: '끝남!'}

// 실행하지 마세요. pending에 빠집니다.
//let p = new Promise(function(resolve, reject) {
//  console.log('hello world')
//}).then(d => console.log(d)).catch(e => console.log(e));

let snack = async function () {
  return "cake!";
};

snack;
// async ƒ () {
// 		return "cake!";
// }
snack();
//Promise {<fulfilled>: 'cake!'}

/* 여기서 데이터틑 가져옴 -> 데이터를 가져와서 요리를 하곘다는 것 */
const f = fetch(
  "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"
);
f;

//Promise {<fulfilled>: Response}
const f = fetch(
  "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
    return json;
  });

const f = fetch(
  "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"
)
  .then((d) => d.json())
  .then((d) => console.log(d));

//VM458:7 (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {시·도별(1): '전국', 총인구 (명): 52980961, 1차 접종 누계: 15199919, 2차 접종 누계: 4521785, 1차 접종 퍼센트: 28.6893984426, …}1: {시·도별(1): '서울', 총인구 (명): 9911088, 1차 접종 누계: 2811191, 2차 접종 누계: 835878, ...중략...

/////////
// 동기처리 //

setTimeout(() => {
  console.log("5초 끝!");
}, 5000);

setTimeout(() => {
  console.log("10초 끝!");
}, 10000);

function cook(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const myCake = async () => {
  await cook(3000);
  return "케이크";
};

const myCoffee = async () => {
  await cook(2000);
  return "커피";
};
const myCookie = async () => {
  await cook(5000);
  return "쿠키";
};

async function asyncProcess() {
  const cake = await myCake();
  console.log(cake);
  const coffee = await myCoffee();
  console.log(coffee);
  const cookie = await myCookie();
  console.log(cookie);
}

asyncProcess();

///////////
// 비동기처리 //

setTimeout(() => {
  console.log("5초 끝!");
}, 5000);

setTimeout(() => {
  console.log("10초 끝!");
}, 10000);

function cook(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const myCake = async () => {
  await cook(3000);
  return "케이크";
};

const myCoffee = async () => {
  await cook(2000);
  return "커피";
};
const myCookie = async () => {
  await cook(5000);
  return "쿠키";
};

async function promiseProcess() {
  const results = await Promise.all([myCake(), myCoffee(), myCookie()]);
  console.log(results);
}

promiseProcess();

// 질의응답
async function a() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 0);
  console.log(3);
}
a();
// 1, 3, 2

async function a() {
  console.log(1);
  await setTimeout(() => {
    console.log(2);
  }, 1000);
  console.log(3);
}

a();
// 1, 3, 2

// why? await은 promise 앞에서만 사용
// await [[Promise 객체]] 의 형식
```

- fetch
  - https://ko.javascript.info/fetch
  - Fetch는 비동기 네트워크 통신을 구현하기 위해 사용하는 Web API이다. (fetch와 axios를 정말 많이 사용함 - 실무에서 필수적으로 다룸 -> 이쪽으로 통신해서 데이터를 가져옴)
  - 자바스크립트를 이용하여 브라우저가 서버에게 비동기적으로 데이터를 요청하고, 응답 받은 데이터를 동적으로 페이지 렌더링 하는 방식을 Ajax(Asynchronous Javascript and XML)라고 하고 대표적인 Web API로는 XMLHttpRequest 객체, JQuery, fetch 등이 있다.
    - response.text()
    - response.json()
    - response.formData() - FormData 객체 반환
    - response.blob() - Blob(타입이 있는 바이너리 데이터) 형태 반환
      - Blob(Binary Large Object)은 이미지 등과 같은 멀티미디어 데이터를 다룰 때 사용하는 데이터 형식
      - https://heropy.blog/2019/02/28/blob/ 블로그 글 추천
    - response.arrayBuffer() – ArrayBuffer(바이너리 데이터를 로우 레벨 형식으로 표현한 것) 형태 반환

```js
fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => response.json())
  .then((json) => console.log(json));

async function getUserEmail(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  const email = user.email;
  console.log(email);
}

async function printImg() {
  const response = await fetch(`https://picsum.photos/200`);
  const blobImg = await response.blob();

  //blob을 담을 img 태그를 만든다.
  const img = document.createElement("img");
  //html body에 위에서 만든 img 태그를 삽입한다.
  document.body.append(img);
  //img 태그의 주소를 설정한다.
  img.src = URL.createObjectURL(blobImg);
}
printImg();

fetch("http://35.76.53.28:8080/mall")
  .then(function (response) {
    console.log(1);
    return response.json();
  })
  .then((json) => {
    const imgURL = "http://35.76.53.28:8080/" + json[0]["thumbnailImg"];
    console.log(imgURL);
    const img2 = document.createElement("img");
    //html body에 위에서 만든 img 태그를 삽입한다.
    document.body.append(img2);
    img2.src = imgURL;
  });

/*
async function request() {
const response = await fetch('url 기입',
{
    method: "GET", //POST, DELETE, PUT
    headers: {
    "Content-type": "콘텐츠 형태",
    //application/json, text/plain 등
    },
    body: JSON.stringify(
        서버에 전달할 데이터
    );
});
const data = await response.json();
console.log(data);
}
request();
*/
```

# DOM

DOM을 탐색해봅시다.

```js
// body>h1{hello world}+p{hello}+div>h1{hello world}+p{hello}
document.body.childNodes;
document.body.childNodes[1] = "hello hojun";
document.body.childNodes[3].childNodes[1];
```

```js
// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll("selector");

// target 요소를 생성합니다.
document.createElement(target);

// target 텍스트를 생성합니다.
document.createTextNode(target);

// target 요소를 element의 자식으로 위치합니다.
element.appendChild(target);

// element의 target 자식 요소를 제거합니다.
element.removeChild(target);
```

```js
// parentElement.insertBefore(target, location); target요소를 parentElement의 자식인 location 위치 앞으로 이동합니다.

var span = document.createElement("span");
var sibling = document.getElementById("childElement");
var parentDiv = document.getElementById("parentElement");
parentDiv.insertBefore(span, sibling);

const myP = document.querySelector("p");
myP.innerHTML = "<strong>I'm Strong!!</strong>";

///////////////

const cont = document.querySelector(".cont");
console.log(cont.firstElementChild); // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild); // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling); // 이전 형제노드를 찾습니다.
console.log(cont.children); // 모든 직계자식을 찾습니다.
console.log(cont.parentElement); // 부모 요소를 찾습니다.

// 브라우저의 기본 이벤트 동작을 취소
event.preventDefault();
```
