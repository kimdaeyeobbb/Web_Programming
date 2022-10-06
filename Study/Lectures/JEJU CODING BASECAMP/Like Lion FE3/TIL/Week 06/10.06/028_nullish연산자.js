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

/* nullish 병합 연산자와 or 연산자와의 차이점 */
let height = 0; // 0이라는 값이 있는 것 (null과 undefined가 아님)
console.log(height || 100);   // 100 (OR는 앞의 0이라는 값이 false)
console.log(height ?? 100);   // 0 (nullish 병합연산자는 앞에 0이라는 값이 있는 것)
