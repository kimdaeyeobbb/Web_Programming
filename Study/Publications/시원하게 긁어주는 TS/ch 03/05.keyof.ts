interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f"; // keyof 키워드를 사용할 경우, Userinterface의 key값들을 union형태로 받을 수 있음
}

type UserKey = keyof User; // "id"|"name"|"age"|"gender"
const uk: UserKey = ""; // error
const uk2: UserKey = "id"; // 유저 인터페이스의 키 값들 중 하나를 입력하면 에러가 사라짐
