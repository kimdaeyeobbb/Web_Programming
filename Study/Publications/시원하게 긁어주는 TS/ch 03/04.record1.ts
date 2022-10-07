/* 기존 인터페이스 사용 (record 미사용시) */
interface Score {
  "1": "A" | "B" | "C" | "D";
  "2": "A" | "B" | "C" | "D";
  "3": "A" | "B" | "C" | "D";
  "4": "A" | "B" | "C" | "D";
  "5": "A" | "B" | "C" | "D";
}

const scoreA: Score = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "F",
};

/* record 사용  */
// Type위치에 <key1|key2|key3...,value1|value2|value3...> 꼴로 적어준다

const scoreB: Record<"1" | "2" | "3" | "4" | "5", "A" | "B" | "C" | "D" | "F"> =
  {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "F",
  };

/* key와 value를 타입으로 분리해보기 */
type Grade = "1" | "2" | "3" | "4" | "5";
type Score = "A" | "B" | "C" | "D" | "F";

const scoreC: Record<Grade, Score> = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "F",
};
