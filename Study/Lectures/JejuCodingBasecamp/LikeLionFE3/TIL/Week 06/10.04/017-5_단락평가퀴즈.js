/* 문제 - id와 pw를 입력해야만 회원가입성공여부가 t또는 f가 나오게 만들기
둘 중 하나라도 입력이 안되면 false */

// 정답1
"회원가입성공여부" = username || "이름을 입력하지 않으신 분";
console.log(username);
"회원가입성공여부" = !!(username && pw);


// 정답2 (드모르간의 법칙)
// not(A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
// false와 and의 조합일 경우 그 코드 자체가 불필요해지는 경우가 존재
console.log(!(x && y) === (!x || !y));


// 정답3
"회원가입성공여부" = !!pw && !!username;