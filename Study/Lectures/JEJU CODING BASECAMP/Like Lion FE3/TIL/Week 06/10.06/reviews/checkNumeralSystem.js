data = [010, 012, 1234, 5678]
console.log(data[0].toString(10))   // 10진수로 변환시 8
let result = data.join('-')
console.log(result)   // 8-10-1234-5678
console.log(typeof (result))   // string
console.log(parseInt(result[0], 10).toString(8))  // 8진수로 다시 변환시 10