/* mapped type */
// 인덱스 시그니처 문법을 사용하여 반복적인 타입 선언을 효과적으로 줄일 수 있음
// mapped type은 기존 타입의 모든 속성을 동일하게 유지하면서 일부 속성만 선택적으로 변경할 때 유용 (+ 다른 타입을 기반으로 하여 새로운 타입 선언)
type OnlyBoolsAndHeroes = {
  [key: string]: boolean | string;
};

const conforms: OnlyBoolsAndHeroes = {
  del: true,
  rodney: false,
};

// mapped type -> 제네릭 타입이며 PropertyKey 타입을 받아서 새로운 타입을 반환
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUser: () => void;
};
