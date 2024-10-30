type Score = {
  [name: string]: number;
};

type Score2 = Record<string, number>;

const score: Score = {
  tom: 100,
  jane: 90,
  mike: 80,
};

const score2: Score2 = {
  tom: 100,
  jane: 90,
  mike: 80,
};

type IndexSignatureEx1 = {
  [name: "치즈볼" | "오징어링"]: number;
};
