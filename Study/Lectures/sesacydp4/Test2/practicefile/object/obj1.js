/* eslint-disable */

/*객체 - 값을 담는 그릇. 객체에는 값을 저장한 순서가 존재하지 않음.*/
/* 객체 생성법 1 */
var grades = { egoing: 10, k8805: 6, sorialgi: 80 }; //  객체는 중괄호로 시작해서 중괄호로 끝남

/* 객체 생성법 2 */
var grades2 = {}; // 빈 객체 생성
grades2['kim'] = 100;
grades2['lee'] = 80;
grades2['park'] = 90;
console.log(grades2);
console.log(grades2['park']);
console.log(grades.k8805);

/* 객체 활용 */
var grades3 = { BRUNO: 95, FRED: 80, SANCHO: 98, RAPHAEL: 85 };
for (key in grades3) {
  // 객체를 구성하는 키값
  console.log('key: ' + key + ' || value: ' + grades3[key]);
}

/* 바교군 - 배열 */
var arr1 = ['가', '나', '다'];
for (var name in arr1) {
  console.log(name);
}
