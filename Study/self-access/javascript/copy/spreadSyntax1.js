// spread syntax (or spread operator)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const mergedArray = [...arr1, ...arr2]
console.log(mergedArray)

const arr3 = [...arr2]
console.log(arr3)
console.log(`비교 확인- arr2==arr3: ${arr2 == arr3} / arr2===arr3: ${arr2 === arr3}`)


/* 함수로 인자 전달 */
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3]
console.log(sum(...numbers))

/* 배열/객체 프로퍼티 복사 */
const originArr = [1, 2, 3]
const copiedArr = [...originArr]
console.log(copiedArr)