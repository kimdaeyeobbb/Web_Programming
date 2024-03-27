const httpStatusFromPaths: [number, string, ...string[]] = [
  // spread operator: 동일한 자료형의 원소를 개수 제한없이 받음
  404,
  "Not Found",
  "/users/:name",
  "/uses/:name/repos",
  "/users/:name/gists",
];

console.log(httpStatusFromPaths);
