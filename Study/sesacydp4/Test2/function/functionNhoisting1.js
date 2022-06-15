/* eslint-disable */
var fullName = function () {
  var last = 'Hong';
  return function (first) {
    return last + ' ' + first; // last -> 함수 내부에서 밖에 있는 값에 접근
  };
};

x = fullName('Gildong');
console.log(x);
y = x('Gildong');
console.log(y);
