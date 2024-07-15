import { useRef } from "react";

const StateTestChild1 = ({ addList }) => {
  const text = useRef(null);
  const onClickSubmit = (e) => {
    e.preventDefault();
    addList(text.current.value);
    text.current.value = ""; // state 변화 후 input 값을 비움
  };

  return (
    <>
      <h2>자식 컴포넌트 1</h2>
      <form>
        <input type={"text"} ref={text} />
        <button onClick={onClickSubmit}>추가</button>
      </form>
    </>
  );
};

export default StateTestChild1;
