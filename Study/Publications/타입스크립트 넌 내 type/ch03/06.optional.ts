interface NewStudent {
  name: string;
  grade: number;
  isAdult?: boolean;
  gender?: "male" | "female";
}

const newPerson: NewStudent = {
  name: "danny",
  grade: 4,
};

console.log(newPerson.name);
console.log(newPerson.grade);
