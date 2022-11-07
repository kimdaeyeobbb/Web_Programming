let data = new Map({ one: 1, two: two }); // 불가능
let data2 = new Map([
    ["one", 1],
    ["two", 2],
]); // 가능 (2)

let data3 = new Map(Object.entries({ one: 1, two: 2 })); // 위의 (2)작업을 한번에 가능하게 해줌
let data4 = new Map('hello world')  // 불가능