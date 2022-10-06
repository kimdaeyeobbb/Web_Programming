# 22.10.06

## shift

- shift시 반환값:

- 다시 채워넣을것

## unshift

- 앞에 넣음

- unshift시 반환값: 전체 길이

## pop

- 뒤에서 뺌

## push

- 뒤에서 넣음

## fill

```js
let data = ["a", "b", "c", "d"];
data.shift(); // a
console.log(data); // 맨앞 요소 제거

data.unshift("e");
console.log(data); // 맨 앞에 요소 추가

console.log(data.indexOf("d")); // 3
console.log(data.indexOf("e")); // 0
console.log(data.indexOf("f")); // -1 (배열 내에 없는 경우 -1)

data.fill("hello"); // 전체 데이터를 이것으로 채움
console.log(data);

data.fill("world", 2); // data, start값:2
console.log(data);

data.fill("ㅋㅋㅋ", 1, 2); // ㅋㅋㅋ , start값:1, end값:2 (첫번째 인덱스부터 두번째 인덱스까지 채워짐)
console.log(data);
```

## join

- 데이터의 원본을 수정하지 않음

## split

- 데이터를 자르고 싶을 경우에 사용

- `문자열.split('-')` 꼴로 사용

## Array & fill

```js
let test = Array(100);
console.log(test); //  [ <100 empty items> ] (null 과는 다름)

let test2 = Array(100).fill("넵"); // 캐릭터 데미지 누적할 때 등의 예시에 사용
console.log(test2);
```

## repeat & split

```js
let test3 = ".".repeat(10).split("."); // repeat은 문자열의 메서드
console.log(test3); // ['', '', '', '', '', '', '', '', '', '', '']
```

## Array.from

```js
let test4 = Array.from("abcde"); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(test4);

let test5 = Array.from("a-b-c-d-e");
console.log(test5);
/**
 [
  'a', '-', 'b',
  '-', 'c', '-',
  'd', '-', 'e'
]

 */

let test6 = Array.from("a".repeat(9));
console.log(test6);
/**
 [
  'a', 'a', 'a',
  'a', 'a', 'a',
  'a', 'a', 'a'
]
 */

let test7 = Array.from("hello".repeat(10)); // 금지 (예상치 못한 결과를 뱉음)
console.log(test7);
/*
[
  'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l',
  'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h',
  'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l',
  'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e',
  'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o',
  'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l',
  'l', 'o'
]
*/
```

## split의 경우 왜 1개가 추가되는지?

- 따로 정리해서 내용 추가

## flat

```js
let test8 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(test8.flat()); // [ 1, 2, 3, 4, 5, 6 ]

let test9 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, [11, 12]]],
];
console.log(test9); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, [ 9, 10, [Array] ] ] ]
```

## includes

```js
let test10 = ["a", "b", "c", "d", "e"];
console.log(test10.includes("b")); // true
console.log(test10.includes("z")); // false
```

## splice

- a

- 전개구문 이용해서 데이터 추가하기 (splice와 유사)

```js
let a = ["a", "b"];
let b = ["c", "d"];
let c = [...a, 100, ...b];
console.log(c); // [ 'a', 'b', 100, 'c', 'd' ]
```

```js
let data11 = ["a", "b", 100, "c", "d"];
data11.slice(3);
console.log(data11.slice(3)); // [ 'c', 'd' ]
console.log(data11.slice(0, 3)); // [ 'a', 'b', 100 ]

let result11 = [...data11.slice(3), "hello world", ...data11.slice(0, 3)];
console.log(result11); // [ 'c', 'd', 'hello world', 'a', 'b', 100 ]
```

## 콜백함수 사용

- 내용 정리해서 추가 삽입하기

```js
let test1 = Array(100)
  .fill(0)
  .map((_, index) => index); // 콜백함수 생성   들어가는 값 1. value, 2.인덱스, 3.array가 들어감
console.log(test1);
/**
 [
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
  72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
  96, 97, 98, 99
]
 */

let test2 = Array(100)
  .fill(0)
  .map((_, index) => index + 1);
console.log(test2);
/*
[
   1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
  85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
  97, 98, 99, 100
]
*/

let test3 = Array(10).fill(0).fill("hello", 0, 3);
console.log(test3);
/*
[
  'hello', 'hello', 'hello',
  0,       0,       0,
  0,       0,       0,
  0
]
*/
```

- 여기서 ("\_") 언더바는 의미없는 변수일 때 사용함

## 닌자 코드

- 유지보수를 어렵게 만드는 코드 (엿 맥이는 코드)

## 알고리즘 예제

```js
let test1 = Array(100)
  .fill(0)
  .map((_, index) => index + 1)
  .filter((i) => i % 3 === 0); // filter를 추가해서 조건에 맞는것 걸러내기
console.log(test1);

let test2 = Array(100)
  .fill(0)
  .map((_, index) => index + 1)
  .filter((i) => i % 3 === 0 || i % 5 === 0);
console.log(test2); // 3의배수와 5의배수 같이 걸러냄

// 누적하고 싶으면 forEach사용
let sum = 0;
let test3 = Array(100)
  .fill(0)
  .map((_, index) => index + 1)
  .filter((i) => i % 3 === 0 || i % 5 === 0)
  .forEach((x) => (sum += x));
console.log(sum); // 2418
```
