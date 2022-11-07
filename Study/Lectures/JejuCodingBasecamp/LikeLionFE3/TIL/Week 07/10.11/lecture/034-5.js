/* 기본값 할당 */

function func3(a = 10, b = 20, c = 30) {
    return a + b + c
}

console.log(func3())  // 60
console.log(func3(100))  // 150
console.log(func3(100, 200))   // 330
console.log(func3(100, 200, 300))   // 600
console.log(func3(c = 1000))  // 1050
console.log(func3(c = 1000, a = 2000))   // 3030