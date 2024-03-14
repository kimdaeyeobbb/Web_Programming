import { useEffect, useRef, useState } from "react";

const UseEffectEx1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // mount시 useEffect 실행 방지. ref 객체 -> 값을 참조하는 컴포넌트의 변수 역할
  const isMountRef = useRef(false);

  /* mount 제어 */
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);
  // 빈 배열 -> 컴포넌트가 처음 마운트 될 때만 실행

  /* update 제어 */
  useEffect(() => {
    // 머윤트시 업데이트 메시지 안뜨게 제어
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log("컴포넌트 업데이트");
    // 컴포넌트 업데이트 시점 체크
  });

  return (
    <>
      <h1>Life Cycle (w. useEffect)</h1>
      <section></section>
    </>
  );
};

export default UseEffectEx1;
