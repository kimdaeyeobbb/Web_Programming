interface Student1111 {
  name: string;
  grade: number;
  isAdult: boolean;
  gender: "male" | "female";
}

let person1111: Omit<Student1111, "isAdult" | "gender"> = {
  name: "danny",
  grade: 4,
  isAdult: true, // error
};
