const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("11이 있는지 찾아보자");
arr.find(function (i) {
    console.log(i === 11);
})

console.log()
console.log("2가 있는지 찾아보자")

arr.find(function (i) {
    console.log(i === 2);
})