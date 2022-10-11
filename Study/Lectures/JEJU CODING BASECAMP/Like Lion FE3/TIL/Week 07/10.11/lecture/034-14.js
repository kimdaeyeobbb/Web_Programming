/* 일반함수 vs 화살표 함수 */
function func1(x, y) {
    return x + y
}

let func2 = (x, y) => x + y

console.log(func1(10, 20))  // 30
console.log(func2(10, 20))  // 30


function func3(a, b) {
    let c = a + b
    return c
}

let func4 = (a, b) => {
    let c = a + b
    return c
}

console.log(func3(20, 30))  // 50
console.log(func4(20, 30))  // 50