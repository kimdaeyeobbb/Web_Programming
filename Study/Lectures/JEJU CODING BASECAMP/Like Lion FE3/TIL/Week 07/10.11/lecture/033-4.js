
/* 예제 1 */
let data = { name: 'hojun', age: 10, money: 100 }
let { name, age } = data

console.log(name, age)  // hojun 10


/* 예제2 */
let { name2, age2 } = { name2: 'kim', age2: 20 }
console.log(name2, age2)  // kim 20


/* 예제3 */
let data2 = {
    name3: 'hojun', age3: 10, money: 100, company: 'weniv'
}

let { name3, age3, ...rest } = data2
console.log(name3, age3, rest)


/* 순서 뒤바꾸면 error */
// let data4 = {
//     name4: 'hojun', money4: 100, company4: 'weniv', age4: 10
// }

// let { name4, age4, ...rest4 } = data2
// console.log(name4, age4, rest4)