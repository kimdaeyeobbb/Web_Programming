/* 2) 제네릭을 사용할 경우 */
// 제네릭 클래스: Cup of T 라고 읽음 => Cup<T>
class Account<T> {
  // 넘겨주는 타입에 따라서 (T가 string이면)
  tag: T; // 태그가 결정됨  (태그는 string이 됨)
}
// 융통성 있게 클래스 하나만 만들면 됨

var a1 = new Account<string>();
a1.tag = "안녕하세요";

var a2 = new Account<number>();
a2.tag = 1234;

var a3 = new Account<boolean>();
a3.tag = true;
// 제네릭 사용시 융통성 있게 코드를 만들어낼 수 있다
// 넘겨주는 타입에 따라서 무엇인가를 결정할 수 있음. 이럴떄 제네릭을 사용함
// JS에서는 제네릭 처리가 복잡하므로 타입스크립트를 통해 제네릭을 쉽게 가져다 쓸 수 있음
