import { useEffect, useState } from "react";

const UseEffectEx1 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Mount
  useEffect(() => {
    console.log("mount 시점!!!");
  }, []);

  // Update (deps X)
  useEffect(() => {
    console.log("Update 시점!!! (deps X)");
  });

  // Update (deps O)
  useEffect(() => {
    console.log(`Update 시점!!! (deps O), count: ${count}`);
    if (count > 4) {
      console.log("4 초과!!!");
      setCount(0);
    }
  }, [count]);
  //
  // useEffect(() => {
  //   console.log("mount 시점!!!");
  //   // todo -> 콜백함수
  // }, []); // dependency array (의존성 배열) -> 이 배열 내에 들어있는 값이 변화하면 콜백 함수가 수행됨

  useEffect(() => {
    // effect function
    return () => {
      // cleanup function -> 지정시 useEffect 훅이 재실행되기 전에 실행됨
    };
  });
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1 버튼</button>
    </>
  );
};

export default UseEffectEx1;
