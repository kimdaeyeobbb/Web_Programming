test("문자열 테스트 - 나는 너를 사랑하지 않아 / Eng ver - I Don't love you", () => {
  expect("나는 너를 사랑하지 않아").toMatch("사랑");
  expect("사랑").not.toMatch("싫어");
  expect("I Don't love you").toMatch(/love/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
