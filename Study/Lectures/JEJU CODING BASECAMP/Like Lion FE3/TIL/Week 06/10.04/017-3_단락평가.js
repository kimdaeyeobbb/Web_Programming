



/* 단락 평가 */
username = '';   // false
console.log(username && "이름을 입력하지 않으신 분");
// 앞에것이 false이면 and할 필요가 없음
username = console.log(username || "이름을 입력하지 않으신 분");   // 앞의 것이 false이고 or 연산시 뒤의것을 읽어야함. 이럴 때 바로 변수에 뒤의것을 읽어서 넣음. 이것이 단락평가

/* 단락 평가2 */
username2 = 'abc';  // true
username2 = username2 || '이름을 입력하지 않으신분';
// 앞의것이 true+or연산 -> 뒤의 것을 읽어서 변수에 바로 집어넣음 
// => 이것이 단락평가
console.log(username2);


/* 단락평가 3 */
username3 = '';   // false
pw3 = '';   // false
"회원가입성공여부" = username3 || "이름을 입력하지 않으신 분";
console.log(username3);



/* 문제 - id와 pw를 입력해야만 회원가입성공여부가 t또는 f가 나오게 만들기
둘 중 하나라도 입력이 안되면 false */


// 정답1
회원가입성공여부 = username || "이름을 입력하지 않으신 분";
console.log(username);
회원가입성공여부 = !!(username && pw);


// 정답2 (드모르간의 법칙)
// not(A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));   // false와 and의 조합일 경우 그 코드 자체가 불필요해지는 경우가 존재
console.log(!(x && y) === (!x || !y));


// 정답3
회원가입성공여부 = !!pw && !!username;
