type TypeX = string | number | boolean;
type TypeY = Exclude<Type1, number | boolean>;

// 타입1에서 타입2를 제외하고 사용함
// Omit -> 프로퍼티들을 제거
// Exclude ->  타입으로 제거
