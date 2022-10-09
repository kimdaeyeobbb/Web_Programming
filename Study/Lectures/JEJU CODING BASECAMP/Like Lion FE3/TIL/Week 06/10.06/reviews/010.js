let arr = [[1, 2, 3], [4, 5, 6]]
console.log(arr.flat())   // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] (원본에 영향을 미치지 않음)
console.log(arr.flat(0))  // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(arr.flat(1))  // [ 1, 2, 3, 4, 5, 6 ]

let arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10, [11, 12]]]
];

console.log(arr3)

console.log(arr3.flat(1))  // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, [ 11, 12 ] ] ]
console.log(arr3.flat(2))  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [ 11, 12 ] ]
console.log(arr3.flat(3))  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]