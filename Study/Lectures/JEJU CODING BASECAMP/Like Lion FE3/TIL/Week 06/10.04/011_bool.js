let one = true;   // 다른 언어는 True인 경우도 있다
let two = false;   // 

console.log(Boolean(""));    // false
one = "";

console.log(Boolean(" "));   // true (문자열이 하나라도 들어오면 true)
console.log(Boolean(0));   // false
console.log(Boolean(100));   // true (0외의 다른 숫자들은 true)
console.log(Boolean(-100));   // true (0외의 다른 숫자들은 true)
one = 0;

if (one) {
    console.log('hello');
} else {
    console.log('world');
}


console.log(Boolean([]));


console.log(Boolean({}));   // true