const compileCode = () => {
  throw new Error("you are using the wrong JDK");
};

test("compiling web goes as expected", () => {
  expect(() => compileCode()).toThrow();
  expect(() => compileCode()).toThrow(Error);
});
