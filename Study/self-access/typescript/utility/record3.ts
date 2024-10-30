/* mapped type */
type Names = "치즈볼" | "오징어링";

type Score = {
  [name in Names]: number;
};

const scores1: Score = {
  치즈볼: 100,
  오징어링: 90,
};
