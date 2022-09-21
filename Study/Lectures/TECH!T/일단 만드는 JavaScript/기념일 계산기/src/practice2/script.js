var now = new Date(); // Date 객체 생성
var start = new Date('2020-06-30'); // 사귄날 시점을 기준으로 Date 객체 생성

var timeDiff = now.getTime() - start.getTime(); // 현재일 - 사귀기 시작한 날

var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1); // 일수 계산 & 사귄날을 1일로 치니까 +1

// console.log(day);

/* 몇일째인지 계산 */
$('#love').text(day + '일째');

/* 발렌타인 데이까지의 일수 계산 */
var valentine = new Date('2024-02-14');

/* 시간차이 계산 */
var timeDiff2 = valentine.getTime() - now.getTime();
var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);

/* 대입 */
$('#valentine').text(day2 + '일 남음');

/* 기념일 계산 */
var ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);

/* 1000일 */
var thousand = new Date(ms);
var thousandDate =
  thousand.getFullYear() +
  '.' +
  (thousand.getMonth() + 1) +
  '.' +
  thousand.getDay();

$('#thousand-date').text(thousandDate);

var timeDiff3 = thousand.getTime() - now.getTime();
var day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$('#thousand').text(day3 + '일 남음');
