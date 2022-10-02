// 인터페이스처럼 함수의 매개변수도 optional로 지정할 수 있다
function hello(name) {
    return "Hello, ".concat(name || "world");
    // name이 없을 때를 대비한 코드
    // -> ts에서는 이보다 더 명확하게 알려주어야 한다.
    // -> 매개변수 위치에? 를 붙여줘야 함
    // (name이 있어도 되고 없어도 되는 선택적 매개변수가 됨 -> string 이거나 undefined이거나)
}
var result = hello();
var result2 = hello("Sam");
function hello2(name) {
    // js에게 매개변수에 default값을 줄 수 있음
    if (name === void 0) { name = "world"; }
    return "Hello, ".concat(name);
}
/* 매개변수 2개 */
function hello3(name, age) {
    // 선택적 매개변수가 필수 매개변수보다 앞에오면 에러가 발생함 (age가 name보다 앞에오면 에러발생)
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You are ").concat(age, ".");
    }
    else {
        return "Hello, ".concat(name);
    }
}
console.log(hello3("Sam"));
console.log(hello3("Sam", 30));
/* 선택적 매개변수를 필수 매개변수보다 앞에 두고 선택적으로 사용하고 싶다면  */
// age가 number와 undefined를 받을 수 있게 해두고 명시적으로 undefined를전달하는 방식으로 사용
function hello4(age, name) {
    if (age !== undefined) {
        return "Hello, ".concat(name, ". You are ").concat(age, ".");
    }
    else {
        return "Hello, ".concat(name);
    }
}
console.log(hello4(undefined, "Sammm")); // age가 number와 undefined를 받을 수 있게 해두고 명시적으로 undefined를전달하는 방식으로 사용
