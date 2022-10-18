'use strict'


console.log("1");
setTimeout(function () {
    console.log("2");
}, 1000);   // 1000ms = 1초가 지나고 나서 우리가 지정한 함수가 실행되게 함
console.log("3");


console.log('같은 표현')
console.log()

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');