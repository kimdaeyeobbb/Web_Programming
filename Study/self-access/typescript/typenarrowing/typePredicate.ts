// 타입 가드 = 타입을 좁힌다 = union type에서 구체적인 타입으로 변환시킴 = type narrowing
/*
 타입가드 구현 방식
1. typeof 연산자
2. in 연산자
3. instanceof 연산자
4. is 키워드
5. 비교 연산자
6. 사용자 지정 타입 가드 함수 (type predicate)
 */

// type predicate
// boolean 값 반환, return type으로 value is type 지정하는 함수
// return 값이 true일 경우, value가 해당 type

type Value = string | number;
const fetchSomthing = async (): Promise<Value> => {
  return "hello";
};
const value: Value = await fetchSomthing();

// 타입 가드 함수1
function isString(value: Value): value is string {
  return typeof value === "string";
}

// 타입 가드 함수2
const isString2 = <(value: Value) => value is string>(
  ((value) => typeof value === "string")
);

// 타입 가드 함수 사용
if (isString(value)) {
  console.log(value.toLowerCase());
}
