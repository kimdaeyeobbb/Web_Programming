import React, { useRef, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import reset = Simulate.reset;

const RefPage = () => {
  const [text, setText] = useState("");
  const txtRef = useRef<HTMLInputElement>(null);
  // useRef는 인수로 전달한 값을 초기값으로 가지는 Ref객체를 생성 -> 이 객체는 .current 프로퍼티를 가지며, 이 프로퍼티는 전달한 인수로 초기화된다.

  console.log("최초로 만들어진 ref 객체 확인: ", txtRef);
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const clickHandler = () => {
    if (text.length < 5) {
      txtRef.current?.focus();
    } else {
      alert(text);
      setText("");
    }
  };

  const resetHandler = () => {
    txtRef.current!.value = "";
    setText("");
  };
  return (
    <>
      <input type="text" value={text} onChange={changeHandler} ref={txtRef} />
      <div>입력된 텍스트: {text}</div>
      <button onClick={clickHandler}>클릭해서 작업완료시키기</button>
      <button onClick={resetHandler}>클릭해서 초기화 시키기</button>
    </>
  );
};

export default RefPage;
