let test = { one: 1, two: 2, three: 3 }

/* test에서 value에 접근하기 */
console.log(test.one)  // 1
console.log(test['one'])   // 1
console.log(test[one])  // error. one이 변수로 인식됨. 하지만 우리가 쓴 one은 key이다. 따라서 이처럼 헷갈리는것을 방지하기 위해 key에 ''를 씌워주는게 좋다


let test2 = {
    1: 10,
    2: 20,
    3: 30
}

console.log(test[1])  // 10
console.log(test.1)// erro
// 키값이 숫자로 되어 있을 때 멤버접근 연산자로 접근할 수 없음. Syntax error 발생