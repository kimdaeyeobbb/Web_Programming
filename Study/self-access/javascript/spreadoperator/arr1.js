const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
// iterable한 객체의 값을 개별 요소로 분리
console.log(arr2);
// Output: [ 1, 2, 3, 4, 5, 6 ]

const arr3 = [arr1, 4, 5, 6];
console.log(arr3);
// [[1,2,3], 4,5,6]
