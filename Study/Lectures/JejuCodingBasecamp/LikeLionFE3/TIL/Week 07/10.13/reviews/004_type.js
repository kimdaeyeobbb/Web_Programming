let a = [10, 20, 30];
function hello(data) {
    data[0] = 1000;
}

hello(a);
a; // [1000,20,30]   -> 원본값이 변함


console.log("0".repeat(100))
console.log("0".repeat(100).split(""))
console.log("0".repeat(100).split("").map(Number))
console.log("0".repeat(100).split("").map(parseInt))

console.log("hellO".repeat(100))
console.log("0".repeat(100))
console.log("5".repeat(100).split("").map(Number))


let test1 = [100, 200, 300]
test1.map(e => console.log(e))
console.log(test1.map((e) => e))
test1.forEach(e => console.log(e))