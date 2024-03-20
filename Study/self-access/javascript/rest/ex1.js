// rest -> 개별 요소를 배열로 묶음
// ..rest -> rest 매개변수가 됨
const func1 = (...rest) => {
  console.log(rest);
};

func1(1, 2, 3, 4, 5, 6, 7);
// [1, 2, 3, 4, 5, 6, 7]

const func2 = (param, ...rest) => {
  console.log(param);
  console.log(rest);
};

func2(1, 2, 3, 4, 5, 6, 7);
// 1
// [2,3,4,5,6,7]

const func3 = (param, rest) => {
  console.log(param);
  console.log(rest);
};

func3(1, 2, 3, 4, 5, 6, 7);
// 1
// 2
