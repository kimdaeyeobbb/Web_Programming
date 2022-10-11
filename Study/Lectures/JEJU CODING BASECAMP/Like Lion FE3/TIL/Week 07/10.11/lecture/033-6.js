let str = 'hello world'
console.log([str])  //[ 'hello world' ]

console.log([...str])
/*
 [
  'h', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]
 */

console.log('!'.repeat(10))  // !!!!!!!!!!
console.log([...'!'.repeat(10)])
/*
[
  '!', '!', '!', '!',
  '!', '!', '!', '!',
  '!', '!'
]
 */