// TypeScript

interface StudentInfo {
  name: string;
  grade: number; // grade: 4를 아래에서 사용하고 싶을 경우 추가
  isAdult: boolean; // isAdult: true를 사용하고 싶을 경우 추가
}

function printInfo(personA: StudentInfo) {
  // 매개변수의 타입: StudetnInfo
  console.log(`이름: ${personA.name}`);
  console.log(`학년: ${personA.grade}`);
  console.log(`성인여부: ${personA.isAdult}`);
}

let myInfo = { name: "danny", grade: 4, isAdult: true };
// 객체 리러털(myInfo)을 통해 값("danny", 4, true)을 가져다가 씀
// isAdult: boolean이 존재하지 않을 경우 isAdult:true는 무시됨

printInfo(myInfo);
