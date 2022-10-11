function func2({ a = 2, b = 1, c = 3 } = {}) { console.log(a, b, c); return a + b + c; } // 아무것도 입력하지 않으면 {}값이 대입 (객체가 매핑이 안되었을 경우)
console.log(func2({ a: 20, b: 30, c: 10 })); // 60
func2()// argument 없이 호출가능 -> 2 1 3


function func3({ a2 = 10, b2 = 20, c2 = 30 }) {
    return a2 + b2 + c2
}
func3({})   // Object로 비어있는 값을 전달
console.log(func3({}))   // 60


let { one = 1, two = 2 } = {}  // 매핑되는 값이 없으므로 one,two값이 그대로 남음 (할당이 되지 않아서 Object값이 그대로 남음)
console.log(one)  // 1
console.log(two)  // 2


let { one2 = 2, two2 = 3, three2 = 4 } = { one2: 100 }
console.log(one2, two2, three2)  // 100 3 4