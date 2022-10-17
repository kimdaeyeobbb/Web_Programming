
console.log(truthyAndFalsy(1))   // true
console.log(truthyAndFalsy(0))  // false

console.log('0' == 0)   // true
console.log('0' === 0)   // false

console.log(0 == false)   // true
console.log(0 === false)   // false

console.log(1 == true)   // true
console.log(1 === true)   // false


console.log('true' == true)   // false   
// 1. json에서 값을 가져올 때 true를 문자열로 가져와서 error가 난 적이 있음
// 2. json에서 값을 가져올 때 true가 true로 되어 있어서 error가 난 적이 있음 
console.log('true' === true)   // false


console.log(0 == '')   // true
console.log(0 === '')   // false

console.log(false == '')  // true
console.log(false === '')   // false

console.log(false == null)   // false
console.log(false === null)   // false

console.log(false == undefined)   // false
console.log(false === undefined)   // false


console.log(NaN == NaN)   // false
console.log(NaN === NaN)   // false

console.log('truthy & falsy 판단')

function truthyAndFalsy(value) {
    return !!value
}


console.log(truthyAndFalsy([]))   // true -> 길이라는 값을 가지고 있음 (정확히 뭐 때문에 true인지 우리는 판단할 수 없음)
console.log(truthyAndFalsy({}))   // true
console.log(truthyAndFalsy(''))   // false 

console.log(truthyAndFalsy(null))   // false
console.log(truthyAndFalsy(undefined))   // false
console.log(truthyAndFalsy(NaN))   // false
console.log(truthyAndFalsy(Infinity))   // true
console.log(truthyAndFalsy(-Infinity))   // true
console.log(truthyAndFalsy(-100))  // true
console.log(truthyAndFalsy('hello'))   // true