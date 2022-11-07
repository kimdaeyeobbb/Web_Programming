let value = [10, 1, 100, 200, 300, 10];
let value2 = { one: 1, two: 2, three: 3, four: 4 }  // Object
console.log(Object.keys(value))   // [ '0', '1', '2', '3', '4', '5' ] (배열은 인덱스값이 키값)
console.log(Object.keys(value2))  // [ 'one', 'two', 'three', 'four' ]

for (i in value2) {   // for of로 순회를 돌 수가 없음
    console.log(i)
}

/* for of로 순회를 돌고 싶음 -> 다시 array로 만들어서 순회를 돌고 싶은 것 -> entries 이용 */
Object.entries(value)
Object.entries(value2)

console.log(Object.entries(value))
console.log(Object.entries(value2))  // [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ], [ 'four', 4 ] ]


/* error */
// for (i of value2) {
//     console.log(i)
// }

/* 정상코드 */
for (i of Object.entries(value2)) {
    console.log(i)
}

/* 구조분해 할당 */
// [i,j]를 써주면 변수를 2개를 받을 수 있음 & 변수를 바로 활용할 수 있음
for ([i, j] of Object.entries(value2)) {
    console.log(`key는 ${i}이고 value는 ${j}입니다.`)
}

/* 구조분해 할당 */
for ([i, j] of [[10, 20, 30], [30, 40, 50]]) {
    console.log(i, j) // 첫번째 array의 30과 두번쨰 array의 50을 받지 못한 것
}

for ([i, j, ...k] of [[10, 20, 30, 1, 2], [30, 40, 50, 1]]) {   // 나머지 전체를 받기 위해서 전개구문 사용
    console.log(i, j, k)
}

for ([[i, j], k] of [[[10, 20], 300], [[30, 40], 500]]) {
    console.log(i, j, k)
}

for ([i, j] of [[[10, 20], 300], [[30, 40], 500]]) {
    console.log(i, j)
}