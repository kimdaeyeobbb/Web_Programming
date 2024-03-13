function func1 (num1, num2) {
    return num1+ num2
}

const func2 = () => {
    return `key50`
}
const obj1 = {
    [`key${func1(10,20)}`] : `value:: 30`,
    [func2()] : `value:: 40`
}

console.log(obj1.key30) // value: 30
console.log(obj1.key50) // value: 40