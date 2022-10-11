/* 함수 연습문제 */
// 중간고사 점수의 평균을 구하는 코드를 함수로 작성하시오


// 연습문제
let data = [{
    반: 1,
    번: 1,
    이름: "호준",
    중간고사점수: 55
}, {
    반: 1,
    번: 2,
    이름: "길동",
    중간고사점수: 60
}, {
    반: 1,
    번: 3,
    이름: "영희",
    중간고사점수: 30
}, {
    반: 1,
    번: 4,
    이름: "철수",
    중간고사점수: 20
}, {
    반: 1,
    번: 5,
    이름: "규리",
    중간고사점수: 100
}]

// 중간고사 점수를 다 더하는 코드를 함수로 작성해주세요.


// 1번
function avg(data) {
    let sum = 0
    for (let i = 0; i < data.length; i++) {
        sum += (data[i].중간고사점수)
    }
    return sum / data.length
}

console.log(avg(data))



// 2번
console.log(data.map(function (element) {
    return element.중간고사점수;
}))


let result = data.map(element => element.중간고사점수)
console.log(result)



