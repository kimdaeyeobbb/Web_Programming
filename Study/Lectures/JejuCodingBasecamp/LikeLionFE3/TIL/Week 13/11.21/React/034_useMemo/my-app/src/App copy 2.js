import React, { useState, useMemo } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0); // 0으로 초기화
  const [countTwo, setCountTwo] = useState(0);

  let result = useMemo(() => {
    return 부하();
  }, [countTwo]); // 콜백함수위치에 실행할 것을 넣어줌, countTwo를 감시

  // 재렌더링을 통해 '부하'가 다시 실행됨
  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("렌더링 !");

  return (
    <div>
      <h1>계산 결과: {result}</h1>
      <div>count: {count}</div>
      <button onClick={handleCountUp}>One UP!</button>
      <div>countTwo: {countTwo}</div>
      <button onClick={handleCountUpTwo}>Two UP!</button>
    </div>
  );
}
export default App;
