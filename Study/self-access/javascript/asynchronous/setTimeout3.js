const multiplyingNum = (num) => {
  setTimeout(() => {
    const doubleNumber = num * 2;
    return doubleNumber;
  }, 1000);
};

console.log(multiplyingNum(5));
// undefined

const multiplyingNum2 = (num, callback) => {
  setTimeout(() => {
    const doubleNumber = num * 2;
    callback(doubleNumber);
  }, 1000);
};

// 콜백함수를 사용해서 비동기 작업의 결과값을 얻어냄
multiplyingNum2(5, (res) => {
  console.log(res);
});
// 10
