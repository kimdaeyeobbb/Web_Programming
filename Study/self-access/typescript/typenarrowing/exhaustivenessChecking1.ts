type Shape = "Circle" | "Square" | "Triangle";
const getShapeName = (shape: Shape) => {
  if (shape === "Circle") {
    return "둥근 모양";
  }
  if (shape === "Square") {
    return "사각형 모양";
  }
  // if (shape === 'Triangle'){
  //   return '삼각형 모양'
  // }
  else {
    exhaustivenessChekcing(shape); // rgument of type string is not assignable to parameter of type never
    return "모양 확인 실패";
  }
};

const exhaustivenessChekcing = (param: never) => {
  throw new Error("타입 에러");
};

getShapeName("Circle");
