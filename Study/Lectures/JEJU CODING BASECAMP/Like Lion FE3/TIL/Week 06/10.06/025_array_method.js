let data = ['a', 'b', 'c', 'd'];
data.shift();  // a
console.log(data);  // 맨앞 요소 제거

data.unshift("e")
console.log(data);   // 맨 앞에 요소 추가

console.log(data.indexOf('d'))   // 3
console.log(data.indexOf('e'))   // 0
console.log(data.indexOf('f'))   // -1 (배열 내에 없는 경우 -1)


data.fill('hello')   // 전체 데이터를 이것으로 채움
console.log(data);

data.fill('world', 2);   // data, start값:2
console.log(data);


data.fill('ㅋㅋㅋ', 1, 2);   // ㅋㅋㅋ , start값:1, end값:2
console.log(data);


let test = Array(100);
console.log(test);   //  [ <100 empty items> ] (null 과는 다름)

let test2 = Array(100).fill("넵");
console.log(test2)


let test3 = '.'.repeat(10).split('.');   // repeat은 문자열의 메서드
console.log(test3); // ['', '', '', '', '', '', '', '', '', '', '']



let test4 = Array.from('abcde')   // [ 'a', 'b', 'c', 'd', 'e' ]
console.log(test4);



let test5 = Array.from('a-b-c-d-e');
console.log(test5);
/**
 [
  'a', '-', 'b',
  '-', 'c', '-',
  'd', '-', 'e'
]

 */

let test6 = Array.from('a'.repeat(9));
console.log(test6);
/**
 [
  'a', 'a', 'a',
  'a', 'a', 'a',
  'a', 'a', 'a'
]
 */


let test7 = Array.from('hello'.repeat(10));   // 금지 (예상치 못한 결과를 뱉음)
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


let test8 = [[1, 2, 3,], [4, 5, 6]]
console.log(test8.flat());  // [ 1, 2, 3, 4, 5, 6 ]

let test9 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, [11, 12]]]];
console.log(test9); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, [ 9, 10, [Array] ] ] ]



let test10 = ['a', 'b', 'c', 'd', 'e'];
console.log(test10.includes('b'));   // true
console.log(test10.includes('z'));   // false

test10.splice(2, 1, 'ㅋ');
console.log(test10);


let a = ['a', 'b']
let b = ['c', 'd']

let c = [...a, 100, ...b]
console.log(c);   // [ 'a', 'b', 100, 'c', 'd' ]


let data11 = ['a', 'b', 100, 'c', 'd'];
data11.slice(3);
console.log(data11.slice(3));   // [ 'c', 'd' ]
console.log(data11.slice(0, 3));  // [ 'a', 'b', 100 ]

let result11 = [...data11.slice(3), "hello world", ...data11.slice(0, 3)];
console.log(result11);   // [ 'c', 'd', 'hello world', 'a', 'b', 100 ]
