interface StudentB {
  name: string;
  grade: number;
  isAdult?: boolean;
  gender?: "male" | "female";
}

let personB: Required<StudentB> = {
  name: "danny",
  grade: 4,
};
