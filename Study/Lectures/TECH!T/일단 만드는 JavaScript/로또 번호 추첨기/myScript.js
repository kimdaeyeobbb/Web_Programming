var num = Math.random();
console.log(num); // 0이상 ~ 1미만

console.log('\n');
num = Math.random() * 45 + 1; // 1이상 ~ 46미만 실수
var ball = parseInt(Math.random() * 45 + 1); // 1이상 ~ 45이하의 정수
console.log(ball);

console.log('로또 번호 추첨');

var lotto = [];
for (let i = 0; i < 6; i++) {
  var num2 = parseInt(Math.random()) * 45 + 1;
  lotto.push(num2);
  console.log('\n');
}

console.log(lotto);

var lotto2 = [1, 2, 3, 33, 22, 11];
lotto2.sort((a, b) => a - b);
console.log(lotto2);

// 결과물 생성

var lotto3 = [];
while (lotto3.length < 6) {
  var ball2 = parseInt(Math.random() * 45 + 1);
  if (lotto3.indexOf(ball2) == -1) {
    // 인덱스에 해당하는 번호가 존재하지 않으면 -1을 반환 (즉, 리스트 내에 해당 숫자가 존재하는지를 확인)
    lotto3.push(ball2);
  }
}
lotto3.sort((a, b) => a - b);
console.log(lotto3);

for (let i = 0; i < lotto3.length; i++) {
  document.write("<div class='ball ball[i+1]'>" + lotto3[i] + '</div>');
}
