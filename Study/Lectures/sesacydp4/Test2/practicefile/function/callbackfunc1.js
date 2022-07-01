/* eslint-disable */
function func1(x, f) {
  const y = x * 10;
  f(y);
}

func1(2, function (z) {
  console.log(z ** 2);
});
