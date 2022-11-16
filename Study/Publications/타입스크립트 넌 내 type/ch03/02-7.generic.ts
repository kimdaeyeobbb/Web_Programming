// // 제네릭의 기본문법이 적용된 형태
// function getText<T>(text: T): T {
//   return text;
// }

// // 함수를 호출할 때 함수 안에서 사용할 타입을 넘겨줄 수 있음
// getText<string>("hello");
// getText<number>(555);
// getText<boolean>(true);

let arr21: ReadonlyArray<number> = [1, 2, 3];
console.log(arr21);

let arr22: ReadonlyArray<string> = ["가", "나", "다"];
console.log(arr22);
// arr22.splice(0,1);
