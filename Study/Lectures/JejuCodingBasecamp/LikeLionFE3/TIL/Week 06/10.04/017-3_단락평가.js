/* 단락 평가 */
username = '';   // false
console.log(username && "이름을 입력하지 않으신 분");
// 앞에것이 false이면 and할 필요가 없음
console.log(Boolean(username && "이름을 입력하지 않으신 분"));   // false

username = console.log(username || "이름을 입력하지 않으신 분");  // 이름을 입력하지 않으신 분
// 앞의 것이 false이고 or 연산시 뒤의것을 읽어야함. 
// 이럴 때 바로 변수에  or 뒤의것을 읽어서 넣음. 이것이 단락평가

/* and 연산 */
console.log(0 && 1);  // 연산결과가 false인 경우 false값을 가지는 변수를 출력
console.log(false && 1);  // 연산결과가 false인 경우 false값을 가지는 변수를 출력

console.log(Boolean(NaN)); // false

console.log(NaN && 1);   // 연산결과가 false인 경우 false값을 가지는 변수를 출력
console.log(0 && NaN);   // 연산결과가 false인 경우 false값을 가지는 변수를 출력
console.log(NaN && 0);   // 연산결과가 false인 경우 false값을 가지는 변수를 출력


/* 단락 평가2 */
username2 = 'abc';  // true
username2 = username2 || '이름을 입력하지 않으신분';
// 앞의것이 true+or연산 -> 뒤의 것을 읽어서 변수에 바로 집어넣음 
// => 이것이 단락평가
console.log(username2);


/* 단락평가 3 */
username3 = '';   // false
pw3 = '';   // false
isMembership = username3 || "이름을 입력하지 않으신 분";  // 회원가입 성공여부
console.log(username3);
console.log(Boolean(username3));   // false

