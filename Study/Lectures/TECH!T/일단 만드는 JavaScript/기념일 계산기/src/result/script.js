var now = new Date();
var start = new Date('2020-06-30');

//우리 몇 일째?
var timeDiff = now.getTime() - start.getTime();
var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$('#love').text(day + '일째');

//기념일까지 남은 날짜는?
var valentine = new Date('2021-02-14');
var timeDiff2 = valentine.getTime() - now.getTime();
var day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$('#valentine').text(day2 + '일 남음');

//천일은 언제인가?
var thousand = new Date(start.getTime() + 999 * (1000 * 60 * 60 * 24));
var thousandDate =
  thousand.getFullYear() +
  '.' +
  (thousand.getMonth() + 1) +
  '.' +
  thousand.getDate();
$('#thousand-date').text(thousandDate);

//기념일까지 남은 날짜는?
var timeDiff3 = thousand.getTime() - now.getTime();
var day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$('#thousand').text(day3 + '일 남음');
