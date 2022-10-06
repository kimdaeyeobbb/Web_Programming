//조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

let item = true ? 100 : 200

console.log(item);   // 100

const price = 7000;
const message = (price > 6000) ? "비싸요!" : "안비싸요!";
console.log(message)


let price2 = 5000;
let message2 = (price2 > 6000) ? "비싸요!" :
    (price < 3000) ? "엄청싸요!" : "적당해요";
console.log(message2);