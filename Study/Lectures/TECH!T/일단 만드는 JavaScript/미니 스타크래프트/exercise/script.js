// 선택자는 css에서 어떤 요소를 선택하는 것과 동일

console.log($('#content').val()); // id가  content인 특정요소 가져옴 + 거기에 있는 value를 가져옴

// javascript 이용
function hello() {
  console.log('hello');
}

// jquery 이용
function hello2() {
  console.log('hello');
}
$('#click2').click(hello2);
// hello2라는 함수 호출
// 미니 브라우저와 콘솔 화면을 동시에 열어서 클릭버튼을 눌렀을 때 누를 때마다 콘솔창에 hello가 찍힘
// click이라는 제이쿼리 함수는 함수의 함수를 실행하는것이 아닌 이름만 넘겨주면 됨

/* 익명 함수 */
$('#click3').click(function () {
  console.log('hello');
});
