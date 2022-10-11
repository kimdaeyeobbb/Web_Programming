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

## 날짜
