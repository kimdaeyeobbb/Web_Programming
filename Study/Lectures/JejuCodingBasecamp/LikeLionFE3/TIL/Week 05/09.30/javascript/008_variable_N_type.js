console.log('hello world');   // String
console.log(100);             // Number
console.log(NaN);             // Number
console.log(true);           // Boolean
console.log(undefined);       // undefined
console.log(Symbol);        // Symbol
console.log(null);            // Object, 여기서부터 js가 어려워 집니다.
console.log([]);              // Object, 여기서부터 js가 어려워 집니다. 왜 Array가 아닐까요?
console.log({});             // Object
console.log(function () { });  // function
console.log(/정규표현식/gi); // Object

// Object.prototype.toString.call(데이터).slice(8, -1);
// 로 확실하게 알 수 있습니다.

console.log(10 + 10);  // 20
console.log('10' + 10);  // 1010
console.log(10 + '10');  // 1010
console.log('10' + '10');  // 1010

console.log(10 - '10');   // 0
console.log('10' - 10);   // 0

console.log(String(10) + 10);   // 1010 - 권장하지 않음