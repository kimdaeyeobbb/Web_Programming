interface Student {
  name: string;
  grade: number;
  isAdult: boolean;
  gender: "male" | "female";
}

let personA1111: Partial<Student> = {
  name: "danny",
  grade: 4,
};

console.log(personA1111.name);
console.log(personA1111.grade);
