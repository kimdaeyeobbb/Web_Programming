interface StudentInfo {
  name: string;
  grade: number;
  isAdult: boolean;
}

function printInfo(personA: StudentInfo) {
  console.log(personA.name);
  console.log(personA.grade);
  console.log(personA.isAdult);
}

let myInfo = { name: "danny", grade: 4, isAdult: true };

printInfo(myInfo);
