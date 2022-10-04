/* true일 것 같은 혼란스러운 녀석들 */
console.log(false == null);
console.log(false == NaN);
console.log(false == undefined);

/* 더하기 연산자를 이용한 형변환 
앞에 +가 붙으면 숫자로 형변환 */
console.log(+false);   // 0 (+연산자를 이용해서숫자로 변환)
console.log(+true);   // 1 (숫자로 변환)

/* -를 사용해도 형변환이 되지만 굳이 이렇게 사용하지 않음 */
console.log(-false);
console.log(-true);

/* 곱하기 연산자를 이용한 형변환 
true는 1, false는 0으로 */
console.log(false * 1);   // 0
console.log(true * 1);   // 1 (파란색)

/* 둘중 하나가 문자열이면 문자열로 변환 */
console.log(1 + "");   // string (검은색)
console.log(Infinity + ''); // "Infinity" (문자열 타입으로 변환)
console.log(true + '');   // "true" (문자열)
console.log(false + "");   // "false" (문자열)

console.log("" + 1); // string 
console.log("12" + 1); // "121" (string)

/* 숫자로 변환 */
console.log(+"100" + 10);  // 110 숫자 변환


console.log("a" - "a");   // NaN