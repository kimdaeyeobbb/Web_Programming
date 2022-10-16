interface Student1234 {
  name: string;
  grade: number;
  isAdult?: boolean;
  gender?: "male" | "female";
}

let personA1234: Student1234 = {
  name: "danny",
  grade: 4,
};

console.log(personA1234.name);
console.log(personA1234.grade);
