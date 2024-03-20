const func1 = (a, b, c, d) => {
  console.log(a, b, c, d);
};

const arr1 = [1, 2, 3, 4];
func1(...arr1); // 1 2 3 4
