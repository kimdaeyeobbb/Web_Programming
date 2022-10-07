interface Studuent {
  name: string;
  grade: number;
  isAdult: boolean;
}

const personD: Studuent = {
  name: "danny",
  grade: 4,
  isAdult: true,
};


const personE: Record< "name"|"grade"|"isAdult", "string"|"number"|"boolean">{
    name: "kim",
    grade: 3,
    isAdult: false
};