/* Partial<T> */
// 프로퍼티를 모두 optional로 바꿔줌
// 이로인해 일부만 사용하는것이 가능해짐

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

//에러 - 책 집필시 에러메시지 첨부해주기
// let admin: User = {
//   id: 1,
//   name: "Bob",
// };

// User를 Partial로 감싸주면 에러가 사라짐
let admin: Partial<User> = {
  id: 1,
  name: "Bob",
  //   job: ""  // 인터페이스에 존재하지 않는 프로퍼티를 사용하려고 하면 에러가 발생함
};

// 위의 코드는 아래의 코드와 형태가 동일하다
// interface User{
//     id?: number,
//     name?: string,
//     age?: number,
//     gender?: "m"|"f";
// }
