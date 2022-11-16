interface Student321 {
  name: string;
  grade: number;
  isAdult2: boolean;
  gender: "male" | "female";
}

let person321: Pick<Student321, "name" | "grade"> = {
  name: "danny",
  grade: 4,
  isAdult2: true, // error
};
