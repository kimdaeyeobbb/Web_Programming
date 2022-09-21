/* 객체 */
// var person = {
//   name: 'Danny',
//   sayHello: function () {
//     console.log('Hello');
//   },
// };

// console.log(person.name);
// person.sayHello();

var now = new Date(); // Date 객체 생성
console.log(now.getFullYear()); // 년도 가져옴
console.log(now.getMonth() + 1); // 월을 가져옴
console.log(now.getTime()); // 특정시간을 기준으로 흐른 시간을 밀리초로 표시

/* 특정일의 객체를 가져옴 */
var christmas = new Date('2020-12-25');
console.log(christmas);

/* 특정 ms에 해당하는 Date 객체 생성 */
var ms = new Date(1000); // 기준시간인 1970.01.01 00:00:00를 기준으로 흐른시간 파악
console.log(ms);
