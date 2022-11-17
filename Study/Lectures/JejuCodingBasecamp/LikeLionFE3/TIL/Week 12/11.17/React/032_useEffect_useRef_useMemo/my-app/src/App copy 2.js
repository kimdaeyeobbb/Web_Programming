import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  // 감시하는 count가 변경되었을 때 동작할 행동을 useEffect를 이용해서 구현
  useEffect(() => {
    if (count % 2) {
      // 1이 남는 경우가 true
      alert("홀수입니다.")
    } else {
      // 0이 남는 경우가 false
      alert("짝수입니다.")
    }
  }, [count])  // 감시할 변수 count만 넣어줌

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;