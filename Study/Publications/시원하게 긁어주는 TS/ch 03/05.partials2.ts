interface Student {
  name: string;
  grade: number;
  isAdult: boolean;
  gender: "male" | "female";
}

let personA: Partial<Student> = {
  name: "danny",
  grade: 4,
};

console.log(personA.name);
console.log(personA.grade);
