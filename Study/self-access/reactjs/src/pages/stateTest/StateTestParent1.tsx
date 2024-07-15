import { useState } from "react";
import StateTestChild1 from "./StateTestChild1.tsx";
import StateTestChild2 from "./StateTestChild2.tsx";

const StateTestParent1 = () => {
  const [list, setList] = useState(["a", "b", "c"]);
  const addList = (val) => {
    setList([...list, val]);
  };
  return (
    <>
      <h1>state test - 부모 컴포넌트</h1>
      <StateTestChild1 addList={addList} />
      <StateTestChild2 list={list} />
    </>
  );
};

export default StateTestParent1;
