// required는 모든 프로퍼티를 필수로 바꿔줌

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
