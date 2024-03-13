// 다형성 - 같은 이름을 사용하는 객체가 다른 특성이나 행동을 보유할 수 있는 특성

// call signature - 함수를 호출할 때, 대입되어야 하는 인자들의 타입 및 형태 (interface, type 등의 선언을 통해 호출시그니처를 함수 선언에서 분리해 줄 수 있다.)

// type 선언을 통한 호출시그니처 정의
type ArrowCS = (a: number, b: number)=> number;

const ArrowAdd: ArrowCS = (a,b) => a+b;

// 타입지정은 화살표함수로 했으나, 일반 함수도 type ArrowCS를 사용할 수 있다
const NormalAdd: ArrowCS = function (a,b) {
    return a+b;
}

// interface 선언을 통한 호출시그니처 정의
interface NormalCS {
    (arg1: number, arg2: number): number;
}

// 일반 함수
const InterfaceFunction: NormalCS = function (a,b) {
    return a+b;
}

// 화살표 함수
const interfaceArrow: NormalCS = (a,b) => a+b;

