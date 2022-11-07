let data = [1, 2, 3, 4, 5]
let first = data.shift()
console.log(first)   // 1 (맨 앞 요소를 제거)
console.log(data)   // [2,3,4,5]

data.unshift(6)   // 맨 앞에 요소 삽입
console.log(data.unshift(7))   // 7까지 넣으면 요소는 6개 -> unshift는 요소의 길이를 반환 (6)
console.log(data)   // [7,6,2,3,4,5]