interface Student {
  name: string;
  grade: number;
  isAdult123: boolean;
  gender123: "male" | "female";
}

let person123: Omit<Student, "isAdult" | "gender"> = {
  name: "danny",
  grade: 4,
  isAdult123: true, // error
};
