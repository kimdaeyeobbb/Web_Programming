test("3+3의 값 확인", () => {
  const value = 3 + 3;
  expect(value).toBe(6);
  expect(value).toBeGreaterThan(5);
  expect(value).toBeGreaterThanOrEqual(6);
  expect(value).toBeLessThan(7);
  expect(value).toBeLessThanOrEqual(6);
  expect(value).toEqual(6);
});

test("실수 덧셈 결과 테스트", () => {
  const val = 0.1 + 0.3;
  expect(val).toBeCloseTo(0.4); // pass
  expect(val).toBeCloseTo(0.399999999); // pass
});
