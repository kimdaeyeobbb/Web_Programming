const one = 10;
const two = 3;
const one_ = '10';

console.log(one > two);
console.log(one >= two);
console.log(one < two);
console.log(one <= two);
console.log(one == two);
console.log(one === two);    // 다른 언어에 없음


// 우리를 힘들게 하는 js
console.log('------------------');
console.log(one == one_);   // true (너무 관대하다)
console.log(one === one_);   // false (타입까지 비교했을 경우 false)
console.log(one != one_);   // false 
console.log(one !== one_);   // true