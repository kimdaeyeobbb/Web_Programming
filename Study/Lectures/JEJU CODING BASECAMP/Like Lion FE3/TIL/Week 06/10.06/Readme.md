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

## map & filter를 정말 많이 사용함

## find & findindex

- 정리해서 채워넣을 것

- 코드 일부1

```js
cafe = ["coffee", "cake", "tea", "cookie"];
cafe = [
  {
    item: "coffee",
    amount: 5,
  },
  {
    item: "cake",
    amount: 4,
  },
  {
    item: "tea",
    amount: 7,
  },
  {
    item: "cookie",
    amount: 3,
  },
];

index = cafe.findIndex((obj) => obj.item.length <= 3);
```

## 수업 진행한 코드 일부

```js
let data = ['a', 'b', 'c', 'd']
undefined
let first = data.shift()
undefined
first
'a'
data
(3) ['b', 'c', 'd']
data.unshift('e')
4
data
(4) ['e', 'b', 'c', 'd']
data.pop()
'd'
data
(3) ['e', 'b', 'c']
data.push('f')
4
data
(4) ['e', 'b', 'c', 'f']
data.indexOf
ƒ indexOf() { [native code] }
data.indexOf('c')
2
data.indexOf('z')
-1
data.indexOf('e')
0
Array.isArray(data)
true
Array.isArray('abc')
false
Array.join('!!')
VM643:1 Uncaught TypeError: Array.join is not a function
    at <anonymous>:1:7
(anonymous) @ VM643:1
data.join('!!')
'e!!b!!c!!f'
data.join('-')
'e-b-c-f'
data.fill('hello')
(4) ['hello', 'hello', 'hello', 'hello']
data
(4) ['hello', 'hello', 'hello', 'hello']
data.fill('world', 2)
(4) ['hello', 'hello', 'world', 'world']
data.fill('FE', -1)
(4) ['hello', 'hello', 'world', 'FE']
data.fill('FE3', 1, 3)
(4) ['hello', 'FE3', 'FE3', 'FE']
data.join('-')
'hello-FE3-FE3-FE'
data
(4) ['hello', 'FE3', 'FE3', 'FE']
'hello-FE3-FE3-FE'.split('-')
(4) ['hello', 'FE3', 'FE3', 'FE']0: "hello"1: "FE3"2: "FE3"3: "FE"length: 4[[Prototype]]: Array(0)
Array(10)
(10) [empty × 10]length: 10[[Prototype]]: Array(0)
let test = Array(10)
undefined
test.length
10
Array(100).fill(0)
(100) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]0: 01: 02: 03: 04: 05: 06: 07: 08: 09: 010: 011: 012: 013: 014: 015: 016: 017: 018: 019: 020: 021: 022: 023: 024: 025: 026: 027: 028: 029: 030: 031: 032: 033: 034: 035: 036: 037: 038: 039: 040: 041: 042: 043: 044: 045: 046: 047: 048: 049: 050: 051: 052: 053: 054: 055: 056: 057: 058: 059: 060: 061: 062: 063: 064: 065: 066: 067: 068: 069: 070: 071: 072: 073: 074: 075: 076: 077: 078: 079: 080: 081: 082: 083: 084: 085: 086: 087: 088: 089: 090: 091: 092: 093: 094: 095: 096: 097: 098: 099: 0length: 100[[Prototype]]: Array(0)
Array(100).fill('')
(100) ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

Array(100).fill(0).map((_, index)=>index)
(100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
Array(100).fill(0).map((_, index)=>index+1)
(100) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
Array(10).fill(0).fill('hello', 0, 3)
(10) ['hello', 'hello', 'hello', 0, 0, 0, 0, 0, 0, 0]
Array(100).fill(0).map((_, index)=>index+1).filter(i => i % 3 === 0)
(33) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99]
Array(100).fill(0).map((_, index)=>index+1).filter(i => i % 3 === 0 || i % 5 === 0)
(47) [3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30, 33, 35, 36, 39, 40, 42, 45, 48, 50, 51, 54, 55, 57, 60, 63, 65, 66, 69, 70, 72, 75, 78, 80, 81, 84, 85, 87, 90, 93, 95, 96, 99, 100]0: 31: 52: 63: 94: 105: 126: 157: 188: 209: 2110: 2411: 2512: 2713: 3014: 3315: 3516: 3617: 3918: 4019: 4220: 4521: 4822: 5023: 5124: 5425: 5526: 5727: 6028: 6329: 6530: 6631: 6932: 7033: 7234: 7535: 7836: 8037: 8138: 8439: 8540: 8741: 9042: 9343: 9544: 9645: 9946: 100length: 47[[Prototype]]: Array(0)
let s = 0;
Array(100).fill(0).map((_, index)=>index+1).filter(i => i % 3 === 0 || i % 5 === 0).forEach(x => s += x);
undefined
s
2418

Array(100).fill(0).map((_, index)=>index+1).filter(i => i % 3 === 0 || i % 5 === 0).reduce((누적값, 현재값, 인덱스) => {
    return 누적값 + 현재값
}, 0)

'.'.repeat(10).split('.')
(11) ['', '', '', '', '', '', '', '', '', '', '']
'.'.repeat(99).split('.') // 100개
(100) ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']0: ""1: ""2: ""3: ""4: ""5: ""6: ""7: ""8: ""9: ""10: ""11: ""12: ""13: ""14: ""15: ""16: ""17: ""18: ""19: ""20: ""21: ""22: ""23: ""24: ""25: ""26: ""27: ""28: ""29: ""30: ""31: ""32: ""33: ""34: ""35: ""36: ""37: ""38: ""39: ""40: ""41: ""42: ""43: ""44: ""45: ""46: ""47: ""48: ""49: ""50: ""51: ""52: ""53: ""54: ""55: ""56: ""57: ""58: ""59: ""60: ""61: ""62: ""63: ""64: ""65: ""66: ""67: ""68: ""69: ""70: ""71: ""72: ""73: ""74: ""75: ""76: ""77: ""78: ""79: ""80: ""81: ""82: ""83: ""84: ""85: ""86: ""87: ""88: ""89: ""90: ""91: ""92: ""93: ""94: ""95: ""96: ""97: ""98: ""99: ""length: 100[[Prototype]]: Array(0)
Array.from('abcde')
(5) ['a', 'b', 'c', 'd', 'e']
Array.from('a-b-c-d-e')
(9) ['a', '-', 'b', '-', 'c', '-', 'd', '-', 'e']0: "a"1: "-"2: "b"3: "-"4: "c"5: "-"6: "d"7: "-"8: "e"length: 9[[Prototype]]: Array(0)
Array.from('a'.repeat(9))
(9) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
Array.from('a'.repeat(10))
(10) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
Array.from('hello'.repeat(10))
(50) ['h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o', 'h', 'e', 'l', 'l', 'o']
'010-5044-2903'.split('-')
(3) ['010', '5044', '2903']
let arr = [[1, 2, 3], [4, 5, 6]]
undefined
arr.flat()
(6) [1, 2, 3, 4, 5, 6]
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, [11, 12]]]]
(3) [Array(3), Array(3), Array(3)]
arr.flat(1)
(9) [1, 2, 3, 4, 5, 6, 7, 8, Array(3)]
arr.flat(2)
(11) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Array(2)]
arr.flat(3)
(12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
data = ['a', 'b', 'c', 'd', 'e']
(5) ['a', 'b', 'c', 'd', 'e']
data.includes('a')
true
data.splice(3,0,'100')
[]
data
(6) ['a', 'b', 'c', '100', 'd', 'e']
let a = ['a', 'b']
let b = ['c', 'd']

[...a, 100, ...b]
VM2647:4 Uncaught SyntaxError: Rest parameter must be last formal parameter
let a = ['a', 'b']
let b = ['c', 'd']

let c = [...a, 100, ...b]
undefined
c
(5) ['a', 'b', 100, 'c', 'd']
data.slice(3)
(3) ['100', 'd', 'e']
data.slice(0, 3)
(3) ['a', 'b', 'c']
let result = [...data.slice(3), 10000, ...data.slice(0, 3)]
undefined
result
(7) ['100', 'd', 'e', 10000, 'a', 'b', 'c']
let result = [...data.slice(0, 3), 'hello world', ...data.slice(3)]
undefined
result
(7) ['a', 'b', 'c', 'hello world', '100', 'd', 'e']

///////////////////

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.find(i => i > 5);
6
arr = [{
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
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.filter(i => i.contents == 'contents3')
//[{…}]
arr.filter(i => i.dataNum > 3)
//(2) [{…}, {…}]
arr.filter(i => i.name.includes('tit'))
//(5) [{…}, {…}, {…}, {…}, {…}]
arr = [{
    'name' : '안녕1',
    'contents' : 'contents1',
    'dataNum' : 1
}, {
    'name' : '안녕2',
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
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.filter(i => i.name.includes('tit'))
//(3) [{…}, {…}, {…}]
arr.filter(i => i.name.includes('안녕'))
//(2) [{…}, {…}]
arr = [{
    'name' : '안녕1',
    'contents' : '프론트엔드1',
    'dataNum' : 1
}, {
    'name' : '안녕2',
    'contents' : '프론트엔드2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : '프론트엔드3',
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
//(5) [{…}, {…}, {…}, {…}, {…}]
arr = [{
    'name' : '안녕1',
    'contents' : '프론트엔드1',
    'dataNum' : 1
}, {
    'name' : '프론트엔드2',
    'contents' : 'content2',
    'dataNum' : 2
}, {
    'name' : 'title3',
    'contents' : '프론트엔드3',
    'dataNum' : 3
}, {
    'name' : '안녕4',
    'contents' : 'contents4',
    'dataNum' : 4
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.filter(i => i.name.includes('프론트'))
//[{…}]
arr.filter(i => i.contents.includes('프론트'))
//(2) [{…}, {…}]
cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe = [{
    'item' : 'coffee',
    'amount' : 5
},{
    'item' : 'cake',
    'amount' : 4
},{
    'item' : 'tea',
    'amount' : 7
},{
    'item' : 'cookie',
    'amount' : 3
}];

index = cafe.findIndex(obj => obj.item.length <= 3)
cafe = ['coffee', 'cake', 'tea', 'cookie']

cafe = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}];

index = cafe.findIndex(obj => obj.item.length <= 3)
cafe2 = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}];

index = cafe2.findIndex(obj => obj.item.length <= 3)
index
2

cafe3 = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}, {
    'item' : 'x',
    'amount' : 300
}];

cafe2.findIndex(obj => obj.item.length <= 3)
2
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

arr.find(i => i > 50);
60
cafe3 = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}, {
    'item' : 'x',
    'amount' : 300
}];

cafe3.findIndex(obj => obj.item.length <= 3)
cafe4 = [{
    'item' : 'coffee',
    'amount' : 5
}, {
    'item' : 'cake',
    'amount' : 4
}, {
    'item' : 'tea',
    'amount' : 7
}, {
    'item' : 'cookie',
    'amount' : 3
}, {
    'item' : 'x',
    'amount' : 300
}];

cafe4.findIndex(obj => obj.item.length <= 3)
2
arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    'data' : [1, 2, 3]
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    'data' : [1, 2, 3]
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    'data' : [1, 2, 100]
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    'data' : [1, 2, 3]
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    'data' : [1, 2, 100]
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.map(i => i.name)
//(5) ['title1', 'title2', 'title3', 'title4', 'title5']
arr.map(i => i.contents)
//(5) ['contents1', 'contents2', 'contents3', 'contents4', 'contents5']
arr.map(i => i.dataNum)
//(5) [1, 2, 3, 4, 5]
arr.map(i => i.data)
//(5) [Array(3), Array(3), Array(3), Array(3), Array(3)]
arr.map(i => i.data[2])
//(5) [3, 3, 100, 3, 100]
arr = [{
    'name' : 'title1',
    'contents' : 'contents1',
    'dataNum' : 1,
    '지역과날짜' : [
        '한국',
        [22, 5, 4]
    ]
}, {
    'name' : 'title2',
    'contents' : 'contents2',
    'dataNum' : 2,
    '지역과날짜' : [
        '한국',
        [22, 5, 4]
    ]
}, {
    'name' : 'title3',
    'contents' : 'contents3',
    'dataNum' : 3,
    '지역과날짜' : [
        '한국',
        [23, 5, 4]
    ]
}, {
    'name' : 'title4',
    'contents' : 'contents4',
    'dataNum' : 4,
    '지역과날짜' : [
        '한국',
        [23, 5, 4]
    ]
}, {
    'name' : 'title5',
    'contents' : 'contents5',
    'dataNum' : 5,
    '지역과날짜' : [
        '한국',
        [22, 5, 4]
    ]
}];
//(5) [{…}, {…}, {…}, {…}, {…}]
arr.map(i => i['지역과날짜'][1][0])
//(5) [22, 22, 23, 23, 22]
function 호준(값){
    return 값.name
}
arr.map(호준)
//(5) ['title1', 'title2', 'title3', 'title4', 'title5']
arr = [1, 2, 4, 8, 16]
//(5) [1, 2, 4, 8, 16]




////   복구   ////
arr.map(i => i + 10)

function weniv(x){
    return x + 100
}

arr.map((value, index, array) => ([index, value.contents, array]))
```

- 코드 일부2

```js

```

## 조건문

- 구조1

```js
if (조건식){
    // 조건식이 참일 경우 실행할 코드
    console.log("중괄호를 사용했습니다..)
}
```

- 구조2

```js
if (조건식) console.log("중괄호를 생략했습니다);
```

- if ~ else문

```js
let 조건식1 = false;
let 조건식2 = true;

if (조건식1) {
  // 조건식1이 참(true)일 경우 실행될 코드
  console.log(1);
} else if (조건식2) {
  // 조건식1이 거짓(false)이고 조건식2가 참(true)일 경우 실행될 코드
  console.log(2);
} else {
  // 조건식1,2가 모두 거짓일 경우 실행될 코드
  console.log(3);
}
```

- if없이 단독으로 else if와 else문을 사용할 수 없음

- 예제

```js
let money = 1000;
let score = 89; // 시험점수 89점

if (score > 90) {
  console.log('mom: "i\'m so happy"');
  money += 10000000;
} else if (score > 80) {
  console.log('mom: "i\'m happy"');
  money += 100000;
} else if (score > 70) {
  console.log("mom: happy?");
  money += 10000;
} else if (score > 60) {
  console.log("mom: happy!!!");
} else {
  console.log('mom: "..."');
  money = 0;
}
```

- 예제2

```js
// 예제2

// 처음부터 뺴앗고 시작
if (money === 100000000) {
  money -= 10000000;
}

if (score > 90) {
  console.log('mom: "i\'m so happy"');
  money += 10000000;
} else if (score > 80) {
  console.log('mom: "i\'m so happy"');
  money += 100000;
} else if (score > 70) {
  console.log('mom: "i\'m so happy"');
  money += 10000;
} else if (score > 60) {
  console.log('mom: "i\'m so happy"');
} else {
  console.log('mom: "i\'m so happy"');
  money = 0;
}
```

## 이스케이프 문자

- 정리해서 채워넣을 것

## switch 문

- 다른 프로그래밍 언어에서는 사라지는 추세

- if문으로 구현할 수 있기 때문 (if문 <-> switch문 호환이 가능)

- 예제

```js
let value3 = "three";

switch (value3) {
  case "one":
    console.log(1);
    break;
  case "two":
    console.log(2);
    break;
  case "three":
    console.log(3);
    break;
}

// break가 없다면 3을 출력하고나서 끊지 않고 4까지 출력
```

## spread 배열

```js
const arrNum = [13, 9, 10, 2];
let arrNum_test = [13, 9, 19, 2];
let test2 = [...arrNum_test].sort(); // 원본을 만지지 않음

console.log(arrNum_test); // [ 13, 9, 19, 2 ]
console.log(test2); //  [ 13, 19, 2, 9 ]

/* 심화 */
let a = [1, 2, 3, 4];
let b = a;
b[0] = 1000;
console.log(a); // [ 1000, 2, 3, 4 ]
console.log(b); // b는 a를 가리키니까 b를 수정하면 a도 바뀜

let c = [5, 6, 7, 8];
let d = [...c];
d[0] = 2000;
console.log(c);
console.log(d); // 관련없는 새로운 배열
```

## 삼항연산자

- 삼항연산자를 중첩해서 사용하는 것은 매우 좋지 않다 (2개정도까지만 사용권고)

## nullish 연산자

- 스펙에 추가된지 얼마안된 문법이므로 사용할 때 유의할 것

- ` a ?? b` <br> => a가 `null`도 아니고 `undefined`도 아니면 `a`<br> => 그 외의 경우는 `b`

- 앞의 값이 `null`이나 `undefined`이면 그 다음값을 선택

- nullish 병합 연산자는 OR 연산자 `||`와 상당히 유사해 보임. 하지만 차이점이 존재 (문서 참고해서 옮겨놓기)

- 예제

```JS
let a = 10;
let b = 20;
let c = 30;

let d = a ?? b ?? c;
console.log(d);   // 100


let e = null;
let f = 20;
let g = null;

let h = e ?? f ?? g
console.log(h); // 20


let 실명;
let 별명 = 'licat'
let 기본값 = '프로도';

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;   //licat
console.log(채팅창아이디)



console.log(Array(10)[0])   // undefined
```

- 예제2 (OR 연산자와의 차이점)

```JS
/* nullish 병합 연산자와 or 연산자와의 차이점 */
let height = 0; // 0이라는 값이 있는 것 (null과 undefined가 아님)
console.log(height || 100);   // 100
console.log(height ?? 100);   // 0

```

- 정리

```
|| : 0, null, undefined
?? : null, undefined

falsy하다 : 0, null, undefined, "", NaN
nullish하다 : null, undefined
```

## 반복문

- forOf, forIn문을 사용해서 명확성을 높여라 (에어비엔비 컨벤션)

  - 하지만 이를 사용해서 에러가 발생하는 케이스 또한 존재함

## 스코프

- 블록 레벨 스코프

  - 안에서 선언한 변수는 밖에서 쓸 수 없다

- 렉시컬 스코프

  - ㅁ

- 예제

```js
if (true) {
  var a = "1";
  let b = "2"; // if 밖에서 쓸 수 없음 (블록 레벨 스코프)
  const c = "3"; // if 밖에서 쓸 수 없음 (블록 레벨 스코프)
}

console.log(a);
// console.log(b)
// console.log(c)

for (let i = 0; i < 10; i++) {
  console.log(i);
  // i라는 변수를 스코프마다 잠근다
  var e = "1";
  let f = "2"; // if 밖에서 쓸 수 없음 (블록 레벨 스코프)
  const g = "3"; // if 밖에서 쓸 수 없음 (블록 레벨 스코프)
}

console.log(`var: ${e}`);
```

- `var`을 사용하면 안되는 이유 <br> => 변수명이 겹치면 혼란을 야기할 수 있다

- let으로 선언하고나서 또 선언을 하게 되면 오류 발생 (var는 이와달리 변수를 덮어쓰므로 에러를 던져주지 않음)

- 조금더 찾아보고 내용 보충할것

## 문제) 수학점수 평균 찾기

```js
let 수학점수 = [10, 99, 88, 85, 21, 35];

/* 수학점수의 평균을 구하기 */

/* 방법 1 */
// sum = 0

// for (let i = 0; ; i++) {
//     sum += 수학점수[i]
//     console.log(sum)
//     if (i > 수학점수.length - 1) {
//         break;
//     }
// }

// let avg = sum / (수학점수.length)

// console.log(avg)

/* 방법2 */
let result1 =
  (수학점수[0] +
    수학점수[1] +
    수학점수[2] +
    수학점수[3] +
    수학점수[4] +
    수학점수[5]) /
  6;
console.log(result1);

/* 방법3 */
let s2 = 0;
let result2 = 수학점수.forEach((val2) => (s2 += val2));
console.log(s2 / 6);

/* 방법4 */
console.log(수학점수.reduce((a, b) => a + b, 0) / 6);

/* 방법5 */
let s5 = 0;
for (let i = 0; i < 수학점수.length; i++) {
  s5 += 수학점수[i];
}

console.log(s5 / 수학점수.length);
```

## function

```js
function에 사용가능한 파라미터 문법

파라미터라고 하면 어려우니까 구멍이라고 하자.
함수 내에 구멍을 뚫어줄 수 있음.

function 알림창열기(구멍) {
    document.getElementById('alert').style.display = 구멍;
}


구멍을 왜 뚫나요?
-> 구멍을 뚫으면 함수를 업그레이드 해서 사용할 수 있습니당


구멍이 뚫려있으면 이제 함수를 쓸 때 그냥 쓰는 게 아니라,
소괄호 내에 뭔가 문자나 숫자 등을 입력해서 사용 가능하다.

function 알림창열기(구멍) {
    document.getElementById('alert').style.display = 구멍;
}

알림창열기('안녕');
알림창열기('바보');


업그레이드 된 함수를 사용할 때는 소괄호 구멍자리에 뭔가 내가 원하는 문자를 입력할 수 있다.
문자를 입력하면 아까 그 {} 중괄호 내부의 '구멍' 자리에 문자가 쇽하고 들어가게 됨.


그럼 알림창열기('안녕') 이렇게 실행하면
document.getElementById('alert').style.display = '안녕';
요런 코드가 실행된다는 것이다.

function 알림창열기(구멍) {
    document.getElementById('alert').style.display = 구멍;
}

알림창열기('none'); // 이거 실행하면 알림창 열릴 듯
알림창열기('block'); // 이거 실행하면 닫힐 듯


이렇게 하면 아까처럼 함수 2개나 만들 필요가 없다!



이거 구멍 문법을 어디다 쓰죠?
문법만 외우고 땡이 아니라 언제 이 문법을 써야하는지 알아야 나중에 혼자서도 코드 잘 짠다.
비슷한 함수가 여러개 있으면 굳이 여러개 만들 필요 없이 하나 가지고 구멍만 뚫어보길.
함수 하나 가지고 다양한 기능을 실행할 수 있게 됨.
이거 외엔 쓸데없음 ㅋ



파라미터 문법 이해를 위한 예시
function plus() {
    2 + 1
}


코드를 짜다가 2 + 1 같은 어렵고 복잡한 수식을 함수로 축약해서 사용하고 있다.
근데, 갑자기 2 + 2 도 필요하고, 2 + 3 도 필요해졌다. 그럼 어떻게 하지?

function plus() {
    2  + 1
}

function plus2() {
    2 + 2
}

function plus3() {
    2 + 3
}

이렇게 하면 되겠지? 근데 비슷한 함수들은 굳이 많이 만들 필요가 없다.
구멍 문법이 있기 때문에!

function plus(구멍) {
    2 + 구멍
}

가변적인 부분을 구멍 뚫어주면 이제 함수 쓸 때마다
plus(1) 하면 2 + 1 해주고, plus(2) 하면 2 + 2 해주니까 함수 하나로 해결 가능!
그래서 쓰는 문법이 구멍 문법이다.



파라미터 문법 특징
이제 파라미터가 익숙해졌으니 구멍 말고 파라미터라고 하자.
파라미터 문법 세부사항 2개가 있는데


파라미터는 자유롭게 작명 가능함
function plus(a) {
    2 + a
}


파라미터는 2개 이상 사용 가능함

function plus(a, b) {
    a + b
}
plus(2, 5);

이렇게 콤마로 구분하면 됨. 그럼 함수 사용할 때도 자료 2개 입력 가능!
```

```js
참고. 함수는 원래 수학에서 온 건데

실은 수학시간의 함수 vs 자바스크립트의 함수는 둘다 같은 역할을 함.

중학교 수학시간을 떠올려보자.

f(x) = x + 1 일 때
f(3)은 뭘까요? -> 4
f(5)는 뭘까요? -> 6


x 를 구멍으로 바꾸면 자바스크립트랑 똑같음.
실은 함수는 수학에서 "뭔가 input 넣으면 규칙에 따라 output을 출력해주는 마법의 모자" 만들 때 사용함.

외국에선 중학교 수학시간에 함수를 마법의 모자, 블랙박스 이렇게 비유해서 표현하곤 한다.
자바스크립트 함수도 "구멍에 뭐 집어넣음 규칙에 따라 각각 다른 기능 실행해주는 마법의 모자" 일 뿐. 아무튼 비유하자면 그렇다~!
```

- a
