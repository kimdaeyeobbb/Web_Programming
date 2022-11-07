/* Map - Object간의 형변환 */

// Map으로 형변환
let map1 = new Map(Object.entries({ 'one': 1, 'two': 2 }))
console.log(map1)  // Map(2) { 'one' => 1, 'two' => 2 }


// Object로 형변환
let obj1 = Object.fromEntries(map1)
console.log(obj1)  // { one: 1, two: 2 }