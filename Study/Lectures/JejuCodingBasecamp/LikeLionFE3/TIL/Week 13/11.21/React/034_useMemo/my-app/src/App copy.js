import React, { useState } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0); // 0으로 초기화
  let result = 부하();

  // 재렌더링을 통해 '부하'가 다시 실행됨
  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>계산 결과: {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;
