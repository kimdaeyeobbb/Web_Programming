import React from "react";
import { useState } from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const initialState = { num1: 0, num2: 0 };
const 계산기은행원 = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    setNum1: (state, 행동) => {
      state.num1 = 행동.값; // 이렇게 넣어주면 리덕스 툴킷이 이전의 값을 알아서 관리해줌
    },
    setNum2: (state, 행동) => {
      state.num2 = 행동.값;
    },
  },
});

// const 은행원 = (상태, 행동) => {
//   switch (행동.type){
//     case "setNum1":
//       const 결과값 = 행동.값
//       return {num1: 행동.payload}    // 새로 업데이트 될 상태를 return 해준다.
//       break;
//     case "setNum2":
//       break;
//     default:
//       break;
//   }
// }
// const 은행 = createStore(은행원, initialState)

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
