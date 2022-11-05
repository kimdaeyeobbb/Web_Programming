function sum(a: string | number, b: string | number): string | number {
  return a + b;
}

sum(20, 30); // 50
sum("20", "30"); // '2030'
