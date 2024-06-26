import React from "react";
import { useState } from "react";

function AddCalculator() {
  let num1 = 0;
  let num2 = 0;

  console.log("더하기 컴포넌트 함수가 실행되었습니다.");

  return (
    <div>
      <h2>더하기</h2>
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={(e) => (num1 += Number(e.target.value))}
      />
      <input
        type="number"
        name="num2"
        value={num2}
        onChange={(e) => (num2 += Number(e.target.value))}
      />
      결과 : {num1 + num2}
    </div>
  );
}
function SubCalculator() {
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
      <h2>빼기</h2>
      <input type="number" name="num1" value={num1} onChange={handleNum1} />
      <input type="number" name="num2" value={num2} onChange={handleNum2} />
      결과 : {num1 - num2}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>계산기</h1>
      <AddCalculator />
      <SubCalculator />
    </div>
  );
}

export default App;
