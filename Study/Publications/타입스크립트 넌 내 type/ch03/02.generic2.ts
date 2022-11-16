// 타입스크립트에서 (사용자 정의)제네릭 클래스 만들기

// 제네릭 클래스 : 형식 매개 변수 T에 지정한 형식으로 클래스와 멤버의 성질이 결정됨
// 1. 클래스<T>형태로 제네릭 클래스 만들기
class Plate2<T> {
  // 접시에 어떤 T가 담기느냐에 따라 그 접시의 성질이 결정됨
  public Content!: T;
  // !와 :를 써줌으로써 T값이 반드시 들어오도록 지정
  // Content에 넘겨줄 타입으로 속성을 하나 만듦
}

//  [A]형식 매개 변수 T에 string을 전달하여 문자열을 저장하는 속성을 생성
let text = new Plate2<string>(); // text 객체 생성
text.Content; // Content가 string임을 확인할 수 있음
text.Content = "문자열"; // 문자열을 담을 수 있는 접시가 됨

// text.Content = 1234; // error

// [B] 형식 매개 변수 T에 number를 전달하여 정수형을 저장하는 속성을 생성
let integer = new Plate2<number>(); //number 타입의 객체 생성 -> number가 T자리에 전달이 됨 -> content는 number 타입이다.
// integer.Content = "" // error(문자열을 넣으려고 시도하였으므로)
integer.Content = 1234;

console.log(text.Content); // 문자열
console.log(integer.Content); // 1234

// 제네릭 클래스는 Plate<T> 형태로 클래스를 설계하게 되면 이 T가 형식 매개변수가 된다. 형식 매개변수인 T자리에 string을 넘겨주면 string형 content속성이 만들어짐
// T위치에 number 타입을 넘겨주면 T 가 number가 되므로 content에는 number값이 담긴다.
// 이처럼 형식 매개변수 T에 어떤 타입을 넣어주냐에 따라서 담을 수 있는 속성값이 달라진다.
// string을 넘겨주면 string형 content가 되어서 content에 문자열을 담을 수 있게 된다.

// 따라서, 문자열과 숫자 값을 저장시켜놓은 그릇을 객체 생성할 때마다 string이면 string으로 저장. number값으로 저장해주는 것이 '제네릭 클래스' 이다.
