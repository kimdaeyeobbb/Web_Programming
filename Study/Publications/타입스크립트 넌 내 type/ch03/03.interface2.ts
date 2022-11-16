interface ILabelledValue {
  // interface키워드를  이용

  size: number;
  label: string;
}

function printLabel(labelledObj: ILabelledValue) {
  // 매개변수의 타입으로 인터페이스를 지정
  // 이로인해 인터페이스 내 string을 가져다 쓸 수 있음
  console.log(labelledObj.label);
}

// 인터페이스를 통해 무엇인가를 구현한 경우,
let myObj = { size: 10, label: "size 10" };
// myObj와 같은 객체 리터럴을 통해서 값을 가져다가 쓸 수 있다.
printLabel(myObj);
