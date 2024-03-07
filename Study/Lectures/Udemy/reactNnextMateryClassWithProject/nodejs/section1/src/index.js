// CJS(CommonJS) 방식
const moduleData = require("./math")
console.log(moduleData.add(1, 2)) // 3
console.log(moduleData.sub(1, 2)) // -1


// 구조 분해할당
const {add, sub} = require("./math")
console.log(add(1, 2)) // 3
console.log(sub(1, 2)) // -1