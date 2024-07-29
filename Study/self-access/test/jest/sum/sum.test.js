const sum = require("./sum");

test("1+2는 3과 같다", () => {
  expect(sum(1, 2)).toBe(3);
});
