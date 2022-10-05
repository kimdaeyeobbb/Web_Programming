const studentList = [
    { id: 1, product: '연필', stock: 10 },
    { id: 2, product: '노트', stock: 100 },
    { id: 3, product: '지우개', stock: 5 },
    { id: 4, product: '볼펜', stock: 30 },
]

/* stock 기준으로 정렬하는 방법1 */
let result1 = studentList.sort(function (a, b) {
    return a.stock - b.stock;
})

console.log(result1);

/* stock 기준으로 정렬하는 방법2 */
let result2 = studentList.sort(function (a, b) {
    if (a.stock < b.stock) {
        return -1;
    } else if (a.stock > b.stock) {
        return 1;
    } else {
        return 0;
    }
})

console.log(result2);