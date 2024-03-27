import { useState } from "react";

const StatePage = () => {
  const [state, setState] = useState({
    name: "",
    age: 0,
    birth: "",
    gender: "",
    summary: "",
  });

  const handleOnChage = (e) => {
    console.log("handleOnChage의 타겟 값: ", e.target.value);
    console.log("handleOnChage의 타겟 명칭: ", e.target.name);
    setState({
      ...state, // 기존 state값
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>StatePage</h1>
      <div>
        <input
          name={"name"}
          type="text"
          value={state.name}
          placeholder={"이름을 입력하세요"}
          onChange={handleOnChage}
        />
      </div>
      <div>
        <input
          name={"age"}
          type="number"
          value={state.age}
          placeholder={"나이를 입력하세요"}
          onChange={handleOnChage}
        />
      </div>
      <div>
        <input
          name={"birth"}
          type="date"
          value={state.birth}
          onChange={handleOnChage}
        />
      </div>
      <div>
        <select name={"gender"} value={state.gender} onChange={handleOnChage}>
          <option value={"남"}>남</option>
          <option value={"여"}>여</option>
        </select>
      </div>
      <div>
        <textarea
          name={"summary"}
          value={state.summary}
          onChange={handleOnChage}
        />
      </div>
    </div>
  );
};

export default StatePage;
