interface Student2 {
  name?: string;
  grade?: number;
  isAdult?: boolean;
  gender?: "male" | "female";
}

let personA2: Partial<Student2> = {
  name: "danny",
  grade: 4,
};

console.log(personA2.name);
console.log(personA2.grade);
