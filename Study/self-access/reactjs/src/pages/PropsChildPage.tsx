import { useEffect } from "react";

const PropsChildPage = ({ props }) => {
  useEffect(() => {
    console.log("현재 숫자: ", props);
  }, [props]);
  return <div>{props % 2 === 0 ? <h1>짝수</h1> : <h1>홀수</h1>}</div>;
};

export default PropsChildPage;
