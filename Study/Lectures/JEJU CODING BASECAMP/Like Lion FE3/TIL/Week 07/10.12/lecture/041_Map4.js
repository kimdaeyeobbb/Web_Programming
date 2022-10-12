/* Object는 순회가 안된다 */

let data = { 'one': 1, 'two': 2 }
for (const iterator of data) {
    console.log(iterator)
}

let data2 = { 'one': 1, 'two': 2 }
for (const i of Object.entries(data2)) {
    console.log(i)
}


/* Map은 직접 순회가 가능하다 */
let m = new Map();
m.set('하나', 1)
m.set('둘', 2)
m.set('셋', 3)
m.set('넷', 4)

for (const i of m) {
    console.log(i)
}

for (const [i, j] of m) {
    console.log(i, j)
}

console.log(m.keys())
console.log(m.values())
console.log(m.entries())