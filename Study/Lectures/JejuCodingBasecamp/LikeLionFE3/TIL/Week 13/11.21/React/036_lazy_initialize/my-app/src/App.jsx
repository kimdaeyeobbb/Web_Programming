import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [value, setValue] = useState(100);

  useEffect(() => {
    // useEffect는 페인팅 된 다음 실행됨
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]); // value를 감시하고 있음

  return (
    // 여기가 먼저 깔리고 나서 useEffect가 실행되는 것임
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div
        style={{ width: value, height: value, backgroundColor: "blue" }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;
