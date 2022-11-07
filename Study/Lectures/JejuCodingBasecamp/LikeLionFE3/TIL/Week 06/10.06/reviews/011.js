const cafe = ['coffee', 'cake', 'tea', 'cookie']
cafe.splice(1, 0, 'bread')

console.log(cafe)
//expected output: ['coffee', 'bread', 'cake', 'tea', 'cookie']

const cafe2 = ['coffee', 'cake', 'tea', 'cookie']
cafe2.splice(-1, 2, 'bread')

console.log(cafe2)
//expected output: ['coffee', 'cake', 'tea', 'bread']


const cafe3 = ['coffee', 'cake', 'tea', 'cookie']
cafe3.splice(-2, 2, 'ricecake')
console.log(cafe3)  // [ 'coffee', 'cake', 'ricecake' ]

const cafe4 = ['coffee', 'cake', 'tea', 'cookie']
cafe4.splice(2, 2)
console.log(cafe4) // [ 'coffee', 'cake' ]
