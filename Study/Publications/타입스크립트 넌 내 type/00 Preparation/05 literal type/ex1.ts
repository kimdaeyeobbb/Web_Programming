// 리터럴 타입
// const - 변하지 않는 값 선언
// let - 변할 수 있는 값 선언할 때 사용

const userName1 = "Bob1"; // 문자열 리터럴 타입 - 정해진 스트링 값을 가짐

// let userName2 = "Tom";   // 수정전
let userName2: string | number = "Tom"; // 3도 넣을 수 있게끔 타입을 명시해줌

userName2 = 3; // error

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}
