// 유니온 타입으로 선언된 값은 유니온 타입에 포함된 모든 타입이 공통으로 갖고 있는 속성에만 접근할 수 있음

interface receiptStep {
  receiptNumber: number;
  name: string;
}

interface contractStep {
  suitable: boolean;
  space: number;
}

const getResult = (step: receiptStep | contractStep) => {
  console.log(step.name); // step.name으로 접근 가능
  console.log(step.space); // step.space으로 접근 불가능
};
