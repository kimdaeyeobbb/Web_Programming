const isString = (value: any): value is string => {
  return typeof value === "string";
};

const isString2 = <(value: any) => value is string>(
  ((value) => typeof value === "string")
);

const hasValue = (value: any): value is any => {
  return value !== null && value !== undefined;
};

const isNumber = (value: any): value is number => {
  return typeof value === "number";
};

const notZero = (value: number | string): value is number => {
  return Number(value) !== 0;
};

const hasValueAndIsNumberAndNotZero = (value: any): value is number => {
  return hasValue(value) && isNumber(value) && notZero(value);
};

type Value = string | number;
const value: Value = 200;

if (hasValueAndIsNumberAndNotZero(value)) {
  console.log("입력된 숫자: ", value);
} else {
  console.log("숫자가 아닙니다.");
}

const value2: Value = 100;
// 타입 가드 함수 미사용
if (value2 !== null || value2 !== undefined) {
  if (typeof value2 === "number") {
    if (Number(value) !== 0) {
      console.log("입력된 숫자: ", value2);
    }
  } else {
    console.log("숫자가 아닙니다.");
  }
}
