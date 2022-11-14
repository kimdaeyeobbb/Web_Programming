import React, { useState } from 'react';

// 함수가 다시 호출되면 값을 다시 기억할 수 없음.
function Resume(props) {
  // useState - 함수가 다시 호출될때 값을 기억해줌. + ~~~~~~
  const [like, setLike] = useState(0);
  const [message, setMessage] = useState('hello');   // message의 초기값을 hello로 세팅
  // const [a,b] = useState(0);   // 이렇게 써도 됨
  // const 내맘대로 = useState(0); // 이렇게 써도 됨
  // 내맘대로[0], 내맘대로[1] // 이렇게 써도 됨 (구조분해 할당)

  function handleClickLike() {
    // setLike(like + 1)
    // console.log(like);
    setLike(like + 1);
  }

  function handleMouseOver() {
    console.log('hello')
    setMessage('world')   // 메시지를 변경시킴
  }

  const [prevMouseOut, afterMouseOut] = useState("not mouse out")
  function handleMouseOut() {
    console.log('마우스를 벗어나게 함')
    afterMouseOut('mouse out')
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <button onMouseOver={handleMouseOver}>마우스 오버해보세요.</button>
      <button onMouseOut={handleMouseOut}>마우스를 벗어나게 해보세요</button>
      <p>{message}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;