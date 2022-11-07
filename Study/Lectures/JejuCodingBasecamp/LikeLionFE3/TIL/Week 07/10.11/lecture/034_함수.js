function hello(parameter) {
    console.log(parameter)
    console.log('hello world')
    return 100
}

let argument = 100
hello(argument)

console.log(hello(100) + hello(100))


function hello2(parameter) {
    console.log("안녕!")
}

console.log(String(hello2()) + String(hello2()))  // undefinedundefined


/* return만 써주면 함수를 종료시켜줌 */
function hello3(parameter) {
    return  // 얘는 return undefined와 동일
}

console.log(String(hello3()) + String(hello3()))  // undefinedundefined


console.log(console.log('hellozzz'))   // console.log의 반환값은 undefined