// call by value, reference, sharing

//
let test = [10, 20, 30]
function func1(a) {
    a[0] = 1000
}

console.log(func1(test))

//
let test2 = [10, 20, 30]
function func2(a) {
    a = 1000
}

console.log(func2(test))


// 반례
// call by reference가 아님
var c = {};
function test3(d) {
    d = 1000;
}

console.log(c);  // {}. 빈 Object