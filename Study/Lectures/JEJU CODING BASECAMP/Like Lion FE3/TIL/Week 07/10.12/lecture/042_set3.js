let a = new Set('abc')
let b = new Set('cde')

// 교집합
let cro = [...a].filter(value => b.has(value))

// 합집합
let union = new Set([...a].concat(...b))

// 차집합
let dif = new Set([...a].filter(x => !b.has(x)))
