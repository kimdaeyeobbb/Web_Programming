import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  // count- 상태, 초기값- 1
  // state가 업데이트 될때마다 컴포넌트는 다시 랜더링됨

  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1); // setCount를 통해 state를 업데이트
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  /* 랜더링될때마다 매번 실행됨 */
  // /* 지금은 랜더링 될때마다 useEffect가 불려짐 => 비효율적 */
  // useEffect(() => {
  //   // 인자로 콜백함수를 받음.

  //   console.log("랜더링될때 마다 불려지는지 확인");
  //   //콜백 내부에 들어갈 것들은 컴포넌트가 랜더링 될때마다 불려짐
  // });

  /* 마운트될때 & dependency의 [item]이 변경될때마다 실행됨 */

  /* name이 업데이트될때에는 무시하고 count가 변할때에만 useEffect가 불려지도록 만들어보자 */
  useEffect(() => {
    console.log("랜더링 ! & count 변화");
  }, [count]); // 이 배열은 dependency array임. 맨처음 컴포넌트가 랜더링 되었을 때 & count값이 변화될때에만 불리게 됨

  /* 마운트될때 & dependency의 [item]이 변경될때마다 실행됨 */
  /* count변화시 무시 & name 값이 바뀔때에만 useEffect가 불려지도록 만듦 */
  useEffect(() => {
    console.log("렌더링! & name 변화");
  }, [name]);

  /* 맨처음 랜더링될떄 & 마운트될때에만 실행되는 useEffect */
  useEffect(() => {
    console.log("마운팅!");
    // 맨처음 랜더링될 때 & 마운트될때에만 실행됨
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}
