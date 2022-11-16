interface Student321 {
  name: string;
  grade: number;
  isAdult: boolean;
  gender: "male" | "female";
}

let person321: Pick<Student321, "name" | "grade"> = {
  name: "danny",
  grade: 4,
  isAdult: true, // error
};
