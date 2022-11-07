console.log(isNaN(undefined))
console.log(isNaN({}))
console.log(isNaN('foo'))
console.log(isNaN(new Date('')))
console.log(isNaN(new Number(0 / 0)))

console.log(Number.isNaN())