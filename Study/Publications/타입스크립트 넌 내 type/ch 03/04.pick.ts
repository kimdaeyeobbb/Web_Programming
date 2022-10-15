// Pick <T,K>

interface Student {
  name: string;
  grade: number;
  isAdult: boolean;
  gender: "male" | "female";
}

let person: Pick<Student, "name" | "grade"> = {
  name: "danny",
  grade: 4,
  isAdult: true,
};
// User에서 name과 grade만 가져와서 사용할 수 있음
