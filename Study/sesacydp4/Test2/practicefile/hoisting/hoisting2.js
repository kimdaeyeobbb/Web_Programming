/* eslint-disable */
/* JS는 초기화를 제외한 선언만 호이스팅을 함.
변수를 먼저 사용하고 그 후에 선언 및 초기화가 나타나면,
사용하는 시점의 변수는 기보 초기화 상태이다.
(var 선언시 undefined 그외에는 초기화 하지 않음) */

/* 예제1 */
console.log(num); // 호이스팅한 var로 인해 undefined 출력
var num; // 선언
num = 6; /// 초기화

/* 예제2 */
//console.log(num2); // ReferenceError
//num2 = 10; // 초기화
// 선언없이 초기화만 존재하므로 호이스팅이 없다. 변수 읽을시 ReferenceError 발생

/* 예제3 */
x = 5; // x초기화. 명령문에 var이 없으므로 호이스팅 미발생
z = 20;
console.log('x= ' + x + ' and y= ' + y + ' and z= ' + z);
// x=1, y=undefined (JS는 선언만 호이스팅한다.)
var y = 10; // y 선언 및 초기화
var z;

/* 예제4 */
hodu = '호두';
maru = '마루';

console.log(hodu + maru); //호두마루
// 호이스팅은 없으나 변수 초기화는 아직 변수 선언까지 병행하므로 변수를 사용할 수 있음.
