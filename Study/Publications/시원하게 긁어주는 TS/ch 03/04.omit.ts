interface Student {
  name: string;
  grade: number;
  isAdult: boolean;
  gender: "male" | "female";
}

let person: Omit<Student, "isAdult" | "gender"> = {
  name: "danny",
  grade: 4,
  isAdult: true, // error
};
