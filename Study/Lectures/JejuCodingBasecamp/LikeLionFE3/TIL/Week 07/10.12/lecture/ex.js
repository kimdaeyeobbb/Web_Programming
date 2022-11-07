let a = new Set('abc')
let b = new Set('cde')

/* 교집합 */
let cro = [...a].filter((value) => b.has(value))
console.log(cro)  // [ 'c' ]

/* 합집합 */
let union = new Set([...a].concat(...b));
console.log(union)  // Set(5) { 'a', 'b', 'c', 'd', 'e' }


/* 차집합 */
let dif = [...a].filter((value) => !b.has(value))
console.log(dif)   // [ 'a', 'b' ]
