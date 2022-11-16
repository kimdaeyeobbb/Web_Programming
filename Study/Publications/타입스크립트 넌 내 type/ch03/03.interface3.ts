interface StudentInfo {
  name: string;
  grade: number;
  isAdult: boolean;
}

function printInfo(personA: StudentInfo) {
  console.log(`이름: ${personA.name}`);
  console.log(`학년: ${personA.grade}`);
  console.log(`성인여부: ${personA.isAdult}`);
}

let myInfo = { name: "danny", grade: 4, isAdult: true };

printInfo(myInfo);
