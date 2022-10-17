# 22.10.17 월

# truthy & falsy

- 주의 (그냥 그렇구나. 하고 알고가는 것임. 우리가 결과로 유추하는 것이지 '왜 그런가'에 대해 깊이 빠지지 말것)

```js
console.log(truthyAndFalsy(1)); // true
console.log(truthyAndFalsy(0)); // false

console.log("0" == 0); // true
console.log("0" === 0); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log(1 == true); // true
console.log(1 === true); // false

console.log("true" == true); // false
// 1. json에서 값을 가져올 때 true를 문자열로 가져와서 error가 난 적이 있음
// 2. json에서 값을 가져올 때 true가 true로 되어 있어서 error가 난 적이 있음
console.log("true" === true); // false

console.log(0 == ""); // true
console.log(0 === ""); // false

console.log(false == ""); // true
console.log(false === ""); // false

console.log(false == null); // false
console.log(false === null); // false

console.log(false == undefined); // false
console.log(false === undefined); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log("truthy & falsy 판단");

function truthyAndFalsy(value) {
  return !!value;
}

console.log(truthyAndFalsy([])); // true -> 길이라는 값을 가지고 있음 (정확히 뭐 때문에 true인지 우리는 판단할 수 없음)
console.log(truthyAndFalsy({})); // true
console.log(truthyAndFalsy("")); // false

console.log(truthyAndFalsy(null)); // false
console.log(truthyAndFalsy(undefined)); // false
console.log(truthyAndFalsy(NaN)); // false
console.log(truthyAndFalsy(Infinity)); // true
console.log(truthyAndFalsy(-Infinity)); // true
console.log(truthyAndFalsy(-100)); // true
console.log(truthyAndFalsy("hello")); // true
```

<br>

# 드모르간의 법칙

```js
console.log("---------------");
console.log("드모르간의 법칙");

// or: ||
// and: &&

/*
not (A or B) = (not A) and (not B)
NOT (A and B) = (not A) or (not B)
*/

const x = 0;
const y = 1;

console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));
```

<br>

# NaN (심도 있게 보지 말것. 가볍게 보고 넘어갈 것)

- https://en.wikipedia.org/wiki/IEEE_754 -> NaN라는 것이 국제 표준에 따라서 만들어졌다는 것을 명시

```js
/* https://en.wikipedia.org/wiki/IEEE_754  -> 국제 표준에 따라서 만들어졌다는 것을 명시 Because 'Not a Number' is not a number,
and is not equal to anything, including Not a Number. */

// 표현해드리자면 '숫자가 아님'은 '숫자가 아님'과 동일한가?
console.log(NaN == NaN); // false

// javascript 내부적으로는 비교 x === y(여기서 x와 y는 값)는 true 또는 false를 생성합니다. 이러한 비교는 다음과 같이 수행됩니다.

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
```

<br>

# 비동기 프로그래밍
