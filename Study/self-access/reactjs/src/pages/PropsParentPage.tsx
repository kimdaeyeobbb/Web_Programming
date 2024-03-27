import PropsChildPage from "./PropsChildPage.tsx";
import { useEffect, useState } from "react";
import MemoHeaderEx from "../components/memo/memoHeaderEx.tsx";

const PropsParentPage = () => {
  const [number, setNumber] = useState(0);

  const makeIncrease = () => {
    setNumber(number + 1);
  };
  const makeDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <PropsChildPage props={number} />
      <MemoHeaderEx />
      <div>
        <button onClick={makeIncrease}>+1</button>
        <button onClick={makeDecrease}>-1</button>
      </div>
    </>
  );
};

export default PropsParentPage;
