/* 예시 1 */
function func1(a, b, ...c) {
    console.log(c)
    return Math.max(...c)
}

console.log(func1('hello', 'world', 10, 20, 30, 40, 50)) // 50


/* 예시 2 */
function func2([a, b], ...c) {
    console.log(a)   // 1
    console.log(b)   // 2
    console.log(c)   // [ 10, 20, 30, 40 ]
}

func2([1, 2], 10, 20, 30, 40)