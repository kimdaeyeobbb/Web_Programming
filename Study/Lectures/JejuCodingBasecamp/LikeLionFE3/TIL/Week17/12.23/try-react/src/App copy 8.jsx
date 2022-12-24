import React from "react";
import { useState } from "react";
import { createStore } from "redux";

const initialState = { num1: 0, num2: 0 };
const 은행원 = (상태, 행동) => {
  switch (행동.type) {
    case "setNum1":
      return { num1: 행동.payload }; // 새로 업데이트 될 상태를 return 해준다.
      break;
    case "setNum2":
      break;
    default:
      break;
  }
};
const 은행 = createStore(은행원, initialState);

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1 = (e) => {
    const newNum1 = parseInt(e.target.value);
    setNum1(newNum1);
  };

  const handleNum2 = (e) => {
    const newNum2 = parseInt(e.target.value);
    setNum2(newNum2);
  };

  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
