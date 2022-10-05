# 22.10.05

## 배열

- 대괄호를 이용해서 여러 개의 값을 리스트 형태로 나열한 자료구조

- '인덱스로 참조되는 요소'라는 값의 집합

- 여러개의 값을 동시에 변수에 저장할 수 있다

- 원시타입은 이와 달리 한번에 하나의 데이터만 저장할 수 있음 (string, null, undefined, Object, number, boolean 등)

- 배열에 들어있는 것들은 '요소' (혹은 '원소') 이다

- 배열의 요소: 배열을 구성하는 각각의 값

- 인덱스: 배열에서 요소의 위치를 가리키는 숫자

- 리터럴?

  - 변수에 할당되기 전의 값
  - ```js
    let myObj = {}; // 객체를 중괄호를 통해 선언 -> '리터럴'이라고 함. 얘는 객체 자료형

    ("hello"); // 문자열의 리터럴
    123; // 숫자 리터럴
    ```

- javascrip상 배열은 객체 타입으로 존재함 (배열 타입이 아니다!)

- 배열 내 값의 참조는 인덱스를 통해 이루어진다

<br>

- 배열의 크기

```js
let myObj2 = {
  val1: 10,
  val2: 30,
}; // 프로퍼티: key와 value의 쌍 (객체 리터럴은 key와 value의 쌍으로 구성)

myObj2.length;
```

<br>

- 소괄호는 연산자 우선순위에 영향을 끼침. 코드의 실행을 분리하는 역할을 함.

<br>

- 배열을 만들 때 배열의 리터럴

```js
let arr = [];
```

- 배열의 생성자함수

```js
let myArr = new Array(5); // 숫자 하나만 넣으면 길이가 5인 빈 배열
```

- 배열을 생성하는 방법

  1. 리터럴로 선언

  ```js
  let arr = [];
  ```

  2. 배열 생성자로 선언하는 방법

  ```js
  let myArr = new Array(5); // 숫자 하나만 넣으면 길이가 5인 빈 배열

  let myArr = new Array(1, 2, 3, 4); // [1,2,3,4];
  ```

<br>

- 배열안의 값에 접근하기 위해 인덱스 사용 (문자열내 문자에 접근할 때도 인덱스 사용)

```js
myArr2[0]; // 값에 접근
"hello"[2]; // 문자에 접근

myArr2[1] = 100; // 값에 접근해서 새로운 값을 할당
```

- 문자열은 불변성을 띄고 있다 (Immutable)<br> (문자열에 어떤행동을 가하더라도 바뀌지 않는다)

- 배열안에 존재하지 않는 인덱스에 접근하는 것도 가능<br> => undefined<br>=> 단, 값을 넣으려고하면 비었다는 표시가 나옴

```js
myArr3 = [5, 3, 2];
myArr3[4] = 10;
console.log(myArr3); // [ 5, 3, 2, <1 empty item>, 10 ]
```

<br><br>

## 메소드

- 메서드는 기능단위를 뜻함 (프로퍼티는 값 단위)

- 메서드는 전역 함수와 구분하기 위해 함수라고 말하지 않고 (빌트인) 메서드라고 일컫음

- `console.dir` 명령어를 통해 메서드를 확인할 수 있음

### MDN 문서를 검색할 시에는 아래 내용을 구분해서 볼 필요가 있다.

1.  `Array.메소드` : Array.메소드 형태로 사용, 여기서 ‘Array’는 문자 그대로 Array

2.  `Array.prototype.메소드` : 배열.메소드 형태로 사용, 여기서 ‘배열’은 정의된 배열, 예를 들어 [1, 2, 3].pop();

<br>

- 1과 2의 차이점 비교 예제

```js
/* Array.메서드 VS Array.prototype.메서드 */

let arr1 = [1, 2, 3, 4, 5];

/* Array.메서드 */
console.log(Array.isArray(arr1)); // true
// console.log(arr1.isArray)  // undefined
// console.log(arr1.isArray())   // error

/* Array.prototype.메서드 */
console.log(arr1.length); // 5
// console.log(arr1.length());  // error
// console.log(Array.length(arr1)); // error
```

<br>

### unshift

- 맨 앞에서 요소를 추가
- 배열의 길이를 반환함
- `Array.prototype.unshift()` 메서드는 배열의 맨 앞에 1개 이상의 요소를 추가하고, 배열의 새로운 길이를 반환할 수 있다

````js
const cafe = ["coffee", "cake", "tea", "cookie"];
const count = cafe.unshift("bread");

count;
// expected output: 5
cafe;
// expected output: ['bread', 'coffee', 'cake', 'tea', 'cookie']```
````

- push는 요소의 맨 뒤에 값을 추가

<br>

### shift

- 맨 앞에서 요소를 지움
- 따로 반환되는 값은 없음
- `Array.prototype.shift()` 메서드는 배열 내에서 0번째 인덱스에 오는 첫 번째 요소를 제거해서 나머지 값의 위치를 한 칸씩 앞으로 오게끔 만든다. 매개변수가 없으며, 제거된 첫 번째 요소를 반환할 수 있다 (빈 배열에서 사용하거나 배열의 length가 0인 경우 undefined를 반환함)

```js
const cafe = ["coffee", "cake", "tea", "cookie"];
const firstElement = cafe.shift();

firstElement;
// expected output: 'coffee'
cafe;
// expected output: ['cake', 'tea', 'cookie']
```

<br>

### push

- 맨 뒤에서 요소를 추가함

- `Array.prototype.push()` 메서드는 배열의 맨 끝에 1개 이상의 요소를 추가하고, 배열의 새로운 길이를 반환할 수 있다

<br>

### pop

- 맨 뒤에서 요소를 제거함

- `Array.prototype.pop()` 메서드는 배열 내에 존재하는 요소의 맨 마지막 요소를 제거하고 해당 요소를 호출자에게 반환함. (빈 배열에서 사용할 경우 `undefined`를 반환함)

<br>

### splice

- 특정한 인덱스에 요소를 위치시킬 때 사용

- 요소 내 데이터를 컨트롤할 때 빈번하게 사용함 (삭제 후 추가하는 시스템)

- `Array.prototype.splice()` 메서드는 배열 내에 새로운 요소의 추가가 가능하며 원하는 인덱스에 위치가 가능함. 또한 기존에 존재하는 요소를 삭제하거나 변경할 수 있음

- 기본 꼴

```
배열.splice(요소를 위치시키고자 하는 인덱스, 제거할 요소의 개수, 배열에 추가할 요소)
```

- 예시

```js
const cafe = ["coffee", "cake", "tea", "cookie"];
cafe.splice(1, 0, "bread");

cafe;
//expected output: ['coffee', 'bread', 'cake', 'tea', 'cookie']

const cafe = ["coffee", "cake", "tea", "cookie"];
cafe.splice(-1, 2, "bread");

cafe;
//expected output: ['coffee', 'cake', 'tea', 'bread']
```

- 예시 2

```js
const cafe = ["coffee", "cake", "tea", "cookie"];
cafe.splice(-3, 2, "bread");
console.log(cafe); // [ 'coffee', 'bread', 'cookie' ]
```

- splice는 특정 요소를 제거할 때에도 사용함

- 기본꼴

```
배열.splice(요소를 위치시키고자 하는 인덱스, 제거할 요소의 개수)
```

- 예시 1

```js
const cafe2 = ["coffe", "cake", "tea", "cookie"];
console.log(cafe2.splice(1, 2)); // [ 'cake', 'tea' ]
console.log(cafe2); // [ 'coffe', 'cookie' ]
```

<br>

### slice

- 배열 일부분을 잘라내서 새로운 배열로 반환
- 원본을 변경하는 메서드가 아님(원본 배열 요소의 얕은 복사본을 반환함)

- 첫 번쨰 매개변수가 `undefined`인 경우, 0번 인덱스부터 `Array.prototype.slice()`메서드가 사용된다.
- 첫 번쨰 매개변수가 해당 배열 길이보다 큰 경우, 빈 배열을 반환한다.
- 두 번째 매개변수: 잘라낼 배열의 종료지점 인덱스이며, 잘라낼 배열에 포함하지 않음
- 두 번째 매개변수는 생략이 가능. (생략할 경우 첫번쨰 매개변수부터 배열의 마지막 요소까지 추출)

```js
const cafe = ["coffee", "cake", "tea", "cookie"];

cafe.slice(1, 3);
//expected output: ['cake', 'tea']

cafe.slice(2);
//expected output: ['tea', 'cookie']

cafe.slice(-2, -1);
//expected output: ['tea']

cafe.slice(0, -2);
//expected output: ['coffee', 'cake']
```

- [slice vs splice 참고자료](https://im-developer.tistory.com/103)

<br>

### reverse

- 순서를 거꾸로 뒤집을 때 사용
- 원본 배열을 변형시킴

<br>

### indexOf()

- 요소의 인덱스를 찾고 싶을 때 사용

- `Array.prototype.indexOf()` 메서드는 배열에서 지정한 요소를 찾아서 해당 요소의 인덱스를 탐색함. 배열에 존재하지 않는 요소를 찾거나 해당 인덱스에서 지정된 요소가 탐색되지 않을 경우 `-1`을 출력함

- 첫 번쨰 매개변수: 탐색하고자 하는 요소를 입력
- 두 번째 매개변수: 탐색을 시작하고자 하는 인덱스를 입력 (생략 가능)

```js
const cafe = ["coffee", "cake", "tea", "cookie"];

cafe.indexOf("tea");
//expected output: 2

cafe.indexOf("coffe", 1);
//expected output: -1

cafe.indexOf("bread");
//expected output: -1
```

<br>

### join()

- 배열 내 모든 원소들을 연결함 & 연결자가 인자로 전달됨 (연결된 요소를 string으로 반환)

- 중간에 연결자가 없다면 요소들끼리 이어붙어 있음
- 요소에 null이나 undefined가 있을 경우 제외시킴 (요소가 `null`, `undefined`일 경우 빈 문자열로 반환)
- join의 결과를 다시 배열로 만들고 싶다면 split을 사용

<br>

### 메서드 체이닝

- 메서드가 줄지어 있는 것 (메서드를 연달아 사용하는 것)
- 결과로 반환되는 것들이 해당 메서드를 가지고 있다면 메서드 체이닝이 가능 (반환값이 존재하지 않는 메서드 체이닝은 불가능)

```
cafe2 = ['coffee','cake','tea','cookie'];
cafe2.join('/').split('/');   // 메서드 체이닝
```

<br>

### includes()

- 배열 안에 값이 존재하는지 확인할 때 사용

```js
cafe = ["tea", "coffee", "tea", "cake", "tea", "cookie"];
cafe.includes(coffee, 3); // false
```

<br>

### find()

- 하나의 요소라도 조건을 만족하는지 확인할 때 사용
- 조건을 만족시키는 요소를 찾으면 즉시 종료됨

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.find((i) => i > 5)); // 6을 반환 (6이 처음으로 5를 넘기므로)
```

- 예시2

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("11이 있는지 찾아보자");
arr.find(function (i) {
  console.log(i === 11);
});
// 결과값
// false
// false
// false
// false
// false
// false
// false
// false
// false
// false

console.log();
console.log("2가 있는지 찾아보자");

arr.find(function (i) {
  console.log(i === 2);
});
// 결과값
// false
// true
// false
// false
// false
// false
// false
// false
// false
// false
```

<br>

### filter()

- 배열 내 요소가 객체 자료형
- 배열의 형태로 반환
- find는 최초에 걸리는것 하나만 반환하지만 filter는 조건에 걸리는 것들 모두를 반환

````js
const arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];

arr.filter(i => i.dataNum > 3);
//expected output:
	[{
	    'name' : 'title4',
	    'contents' : 'contents4',
	    'dataNum' : 4
	}, {
	    'name' : 'title5',
	    'contents' : 'contents5',
	    'dataNum' : 5
	}]```
````

<br>

### map()

- 각각 요소에 함수를 호출할 때 사용

- Array.prototype.map() 메소드는 배열 내에 있는 요소에 오름차순으로 접근해서 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환함

- 예시

```js
const arr = [
  {
    name: "title1",
    contents: "contents1",
    dataNum: 1,
    data: [1, 2, 3],
  },
  {
    name: "title2",
    contents: "contents2",
    dataNum: 2,
    data: [1, 2, 3],
  },
  {
    name: "title3",
    contents: "contents3",
    dataNum: 3,
    data: [1, 2, 100],
  },
  {
    name: "title4",
    contents: "contents4",
    dataNum: 4,
    data: [1, 2, 3],
  },
  {
    name: "title5",
    contents: "contents5",
    dataNum: 5,
    data: [1, 2, 100],
  },
];

const newArr = arr.map(function (i) {
  return i.name;
});

console.log(newArr); // [ 'title1', 'title2', 'title3', 'title4', 'title5' ]
```

- map이라는 메서드를 통해 내부 함수를 실행하고 있는데, 내부의 i는 원소가 하나씩 들어가면서 전체를 훑는 것임. return 값은 i의 name값임
- 반환된 값들이 모여서 배열로 반환됨 (이것이 map 메서드의 역할)

### filter와 map의 차이

- 두 메서드의 목적이 다르다 (조건의 여부가 다르다)
- filter는 조건식이 존재 & 조건식에 맞는 값을 새로우 배열로 반환
  - 단순히 우리가 제시한 조건에 맞는것만 반환
- map은 조건식이 원하는 값만 뽑아내서 새로운 배열로 반환

  - 우리가 원하는 데이터를 단순히 뽑아내기만 하기도 하고, 가공해서 주기도 함

- filter는 조건 메서드가 자체적으로 있고, map은 따로 없다 (함수 자리에 조건문을 걸면 메서드처럼 쓸 수 있다)

- [filter vs map 참고자료](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-map-%EA%B3%BC-filter-%EC%B0%A8%EC%9D%B4)

<br>

### forEach()

- 각각의 요소를 실행시키고 싶을 때 사용
- 배열 안의 요소 전체를 훑는 (순환하는) 메서드
- 배열 내 요소를 모두 순환하면서 명령어를 실행시킴
- forEach는 map과 달리 결과값 하나씩을 반환할 뿐임 (map은 결과값을 모아서 반환)

- 예시 1

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (i) {
  console.log(i);
});
```

<br>

### sort()

- 배열 내 요소를 정렬할 때 사용 (정렬시 요소를 string으로 바꿔서 정렬)
- 배열 순서는 유니코드상 순서대로 배열

<br>

### compare function

- a-b값이 음수일 때에는 a와 b의 위치를 바꿔줌
- 두 값의 차이값이 양수라면 위치를 바꾸지 않음
- 원본 배열이 정렬됨

```js
/* compare function */
const arrNum = [13, 9, 10, 2];

let result = arrNum.sort(function (a, b) {
  console.log("a: ", a, ", b: ", b, ", a-b:", a - b);
  return a - b;
});
console.log(result); // [ 2, 9, 10, 13 ]

arrNum.sort((a, b) => a - b); // [2, 9, 10, 13]
```

- 순서대로 뜯어보기

```
[13,9,10,2]

9-13 => 음수 => [9,13,10,2]
10-9 => 양수 => [9,13,10,2]
10-13 => 음수 => [9,10,13,2]
10-9 => 양수 => [9,10,13,2]
2-10 => 음수 => []
```

<br>

### 추가 내용

- 지역공간에 있을 경우 콘솔창에 찍을 수 없다

### 질의응답

- 원소와 원소 사이를 기준으로 인덱스를 세는 방법이 덜 헷갈릴 수 있다
- 원시값: 값 자체를 복사해서 저장함 (const에서 변경 x)
- 객체 자료형: 값이 저장되어 있는 메모리상의 주소를 저장함 (주소가 아닌 주소에 가서 주소 내에 저장된 값을 바꿈)
