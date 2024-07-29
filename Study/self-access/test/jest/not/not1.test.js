test("양수를 더한 결과는 0이 아니다", () => {
  for (let num1 = 1; num1 < 10; num1++) {
    for (let num2 = 1; num2 < 10; num2++) {
      expect(num1 + num2).not.toBe(0);
    }
  }
});

// 특정 경로의 파일만 테스트하려면 - npx jest --watch
