interface StudentB123 {
  name: string;
  grade: number;
  isAdult?: boolean;
  gender?: "male" | "female";
}

let personB123: Required<StudentB123> = {
  name: "danny",
  grade: 4,
};
