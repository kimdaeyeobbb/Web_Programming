let func = function (arg1, arg2) {
  return arg1 + arg2;
};

alert(func(1, 2)); // 사용자가 확인 버튼을 누를때까지 메시지 보여줌

let sum = (a, b) => a + b;
// (a,b) => a+b는 인수 a,b를 받는 함수. 실행시 표현식 a+b를 평가 후 결과 반환
// {a+b;}; 라고 작성시 undefined
alert(sum(5, 6));

/* 다음 두 함수는 동일한 함수 */
let test1 = (n) => n * 2;
let test2 = function (n) {
  return n * 2;
};

alert(test1(3));
alert(test2(3));

/* 인수가 없다면 괄호를 비워놓아도 된다. */
let sayHello = () => "안녕하세요 !";
alert(sayHello());

const sayHiii = () => alert("안녕하십니까 !");
sayHiii();

/* 화살표 함수의 동적 사용 */
let age = prompt("나이를 알려주세요 !", 19);
let welcome =
  age < 19
    ? () => alert(age, "살이구나. 안녕")
    : () => alert(age, "세 이시군요. 안녕하세요.");

welcome();
