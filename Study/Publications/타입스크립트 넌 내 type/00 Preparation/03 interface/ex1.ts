/* js */

// let person:object;

// person = {
//     name1: 'XXX',
//     age: 24
// }

// console.log(person.name1)
// // error -> object에는 특정 속성에 대한 정보가 없기 때문
// // 프로퍼티를 정의해서 객체로 표현하고자 하는 경우, 인터페이스를 사용함

/* ts */
type Score = "A" | "B" | "C" | "F"; // A,B,C,F중에서 성적 받음

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number; // 최초생성시에만 할당이 가능하고 이후에는 수정불가
  [grade: number]: Score; // number를 key, Score를 value로 하는 프로퍼티
}

let user: User = {
  // 아무것도 적지 않으면 name과 age를 적으라는 에러메시지가 발생

  name: "xx",
  age: 24,
  birthYear: 1999, // 최초생성하여 할당
  1: "A", // 1학년 성적은 A
  2: "B", // A,B,C,F가 아닌 다른값을 넣으면 에러 발생
  3: "C",
  4: "F", // 4학년 성적은 F
};

user.age = 10;
user.gender = "male";
// error -> 유저 인터페이스에 gender?:string 추가 후 사용해야 함 (?를 붙였으므로 얘는 있어도 되고 없어도 되는 optional property가 됨)

user.birthYear = 1991; // error (인터페이스에 프로퍼티를 읽기전용속성으로 설정했으므로)
console.log(user.age); // user.만 입력해도 어떤 프로퍼티들이 있는지 나옴
