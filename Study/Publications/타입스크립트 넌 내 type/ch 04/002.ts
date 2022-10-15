let arr222: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 함수 표현식
let sum2: number = arr.reduce((accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
}, 0);

// 화살표 함수
let sum3: number = arr.reduce(
  (accumulator: number, currentValue: number) => accumulator + currentValue,
  0
);

console.log(sum2); // 55
console.log(sum3); // 55
