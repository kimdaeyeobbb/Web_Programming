// 제네릭을 이용하면 클래스, 함수, 인터페이스를 다양한 타입으로 재사용할 수 있음
// 선언할 때에는 타입 파라미터만 적어주고, 생성하는 시점에 타입 결정

/* 첫번쨰 */
function getSize(arr: number[] | string[] | boolean[] | object[]): number {
  // number[]로 타입을 명시해주면 에러가 사라짐
  // number[] | string[] 처럼 유니온타입 사용 -> 두번쨰의 에러 해결
  // 세번쨰, 네번쨰에 발생하는 에러를 해결하기 위해서 유니온 타입을 지속적으로 추가시켜야 함
  // 매개변수 코드량이 계속 늘어남 -> 이럴 때 제네릭을 사용하면 좋음
  return arr.length;
}

const arr1 = [1, 2, 3]; // 숫자들로 이루어진 배열 전달
console.log(getSize(arr1)); // 3

/* 두번쨰 */
const arr2 = ["a", "b", "c"];
getSize(arr2); // error -> 매개변수의 타입이 바뀌었는데 동일한 함수를 재사용하고 있음 -> 함수 오버로드 또는 유니온 타입을 사용함으로서 해결

/* 세번째 */
const arr3 = [false, true, true];
getSize(arr3); // 3

/* 네번쨰 */
const arr4 = [{}, {}, { name: "Tim" }];
getSize(arr4); // 3

/* 제네릭 사용하기 */
function getSize2<T>(arr: T[]): number {
  // <T>처럼 타입 파라미터 사용 (T대신 A,Z 등을 사용해도 좋음)
  // T는 어떤 타입을 전달받아서 사용할 수 있도록 함
  // arr: T[] -> 매개변수의 타입은 T의 배열이라는 뜻
  // 이후 사용하는 쪽에서 타입을 결정함
  return arr.length;
}

/* 첫번쨰 */
const arr5 = [1, 2, 3];
getSize2<number>(arr5);
// // 다음과 같은 모습이 된 것

// function getSize2(arr:number[]): number{
//     return arr.length;
// }

/* 두번쨰 */
const arr6 = ["a", "b", "c"];
getSize2<string>(arr2); // 사실 <string>처럼 타입을 기재해주지 않아도 타입스크립트는 전달되는 매개변수를 보고 어떤 타입인지 알 수 있음

/* 세번째 */
const arr3 = [false, true, true];
getSize2(arr3);

/* 네번쨰 */
const arr4 = [{}, {}, { name: "Tim" }];
getSize2(arr4);
