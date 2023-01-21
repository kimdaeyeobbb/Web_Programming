import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  // 처음에 실행시키고 싶지 않다면 얘를 false로 둔다
  // 만약에 bool이 true일 경우에 원하는 동작이 일어나게 만들면 됨

  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    /* bool이 true일 경우에만 일어남 - 처음부터 실행시키고 싶지는 않은 부분 */
    // 실행시키고 싶을 경우 true로 바꿔서 이 부분이 실행되게 만듦
    if (bool) {
      count % 2 ? alert("홀수입니다.") : alert("짝수입니다.");
    }
    setBool(true);
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}
