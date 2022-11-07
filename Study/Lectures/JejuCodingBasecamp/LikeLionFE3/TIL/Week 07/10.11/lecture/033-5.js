let a = [10, 20, 30]
a.push(100)
a.unshift(1000)
console.log(a)  // [ 1000, 10, 20, 30, 100 ]

/* spread 문법 */
a = [1000, ...a, 100]
console.log(a)  // [1000, 1000, 10, 20, 30, 100, 100]

/* 이어 붙이기 */
let b = [1, 2, 3]
let c = [10, 20, 30]
let d = [...b, ...c]
console.log(d)  // [ 1, 2, 3, 10, 20, 30 ]