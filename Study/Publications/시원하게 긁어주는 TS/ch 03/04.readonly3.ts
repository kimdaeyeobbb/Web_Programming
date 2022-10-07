interface Students {
  name: string;
  grade: number;
  isAdult?: boolean;
}

let personK: Readonly<Students> = {
  name: "Danny",
  grade: 4,
  isAdult: true,
};

personK.isAdult = false;
