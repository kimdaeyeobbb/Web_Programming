/* 3. 다음 array의 각 자리수의 합을 구하세요. */
// String 대신 toString쓸 경우 -> undefined인데 왜그런것인지...?
let arr = [11, 22, 33, 111, 2]
let sumArr = []  // 자리수 합을 담을 배열

for (let i = 0; i < arr.length; i++) {
    arr[i] = String(arr[i])  // 문자열로 전환
    let el = 0  // 각 자리의 합을 구할 변수
    for (let j = 0; j < arr[i].length; j++) {
        el += parseInt(arr[i][j])
    }
    sumArr.push(el)
}

let result = sumArr.reduce((prev, cur) => prev + cur, 0)
console.log(`array 각 자리수 합의 총합: ${result}`)