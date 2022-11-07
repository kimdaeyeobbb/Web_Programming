function 두배(x) {
    console.log(x * 2)
}

let arr1 = [10, 20, 30, 40, 50]


arr1.map(제곱)  // (5) [100, 400, 900, 1600, 2500]  여기에 함수명만 argument로 넘겨주면 됨 
arr1.map(x => x ** 2)  // (5) [100, 400, 900, 1600, 2500] (화살표 함수 사용)\

/* 호이스팅 */
function 제곱(x) {
    return x ** 2
}

arr1.forEach(두배)
// 함수를 인자로 전달 -> 콜백함수
// forEach는 순회만 함. map은 새로운 array 생성


/* map과 같은 기능의 forEach를 구하시오 */
let result = []

arr1.forEach(x => {
    result.push(x ** 2)
})

console.log(result)  // [ 100, 400, 900, 1600, 2500 ]


let result3 = []
let result2 = arr1.forEach(x => result3.push(x ** 2))
console.log(result3)  // [ 100, 400, 900, 1600, 2500 ]