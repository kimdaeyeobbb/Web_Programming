// 생성자 함수 호출

function genFunc(arg1, arg2) {
  console.log("바뀌기 전 this: ", this); // 빈 객체

  this.genArg1 = arg1;
  this.genArg2 = arg2;

  console.log("바뀐 this: ", this);
}

const gen = new genFunc(100, 500);
console.log(gen);
