/* https://en.wikipedia.org/wiki/IEEE_754  -> 국제 표준에 따라서 만들어졌다는 것을 명시 Because 'Not a Number' is not a number,
and is not equal to anything, including Not a Number. */


// 표현해드리자면 '숫자가 아님'은 '숫자가 아님'과 동일한가?
console.log(NaN == NaN); // false


// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성합니다. 이러한 비교는 다음과 같이 수행됩니다.
// x가 false를 출력하면 뒤에거를 보지 않고 false를 출력한다 

/* Type(x)가 NaN이면 false를 반환합니다. y가 NaN이면 false를 반환합니다. 
이것은 알고리즘이 먼저 피연산자 중 하나가 NaN유형을 확인하기 전에 있는지 확인하고 그렇다면 false어쨌든 반환할 것임을 의미합니다. 
*/

console.log(0 / 0); // NaN
console.log(10 / 0); // Infinity
console.log("---");

// 암기할 것
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log("---");

// isNaN는 논란의 여지가 있으므로 사용하면 안됨 (머릿속에서 잊을 것)
console.log(isNaN(undefined)); // true
console.log(isNaN(null)); // false
console.log(isNaN(NaN)); // true
console.log("---");

// ES6에서 추가 도입 (그냥 암기) 
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

/*
// https://www.designcise.com/web/tutorial/what-is-the-difference-between-isnan-and-number-isnan-in-javascript

x                Number(x)    isNaN(x)
undefined        NaN            true
{}                NaN            true
'foo'            NaN            true
new Date('')    NaN            true
new Number(0/0)    NaN            true


x               typeof x === 'number'   Number.isNaN(x)
undefined        false                    false
{}                false                    false
'foo'            false                    false
new Date('')    false                    false
new Number(0/0)    false                    false
*/