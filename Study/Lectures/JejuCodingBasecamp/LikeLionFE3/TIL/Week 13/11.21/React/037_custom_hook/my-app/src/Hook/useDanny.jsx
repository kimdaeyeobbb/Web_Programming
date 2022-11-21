import { useState } from "react";

function useDanny(initState) {
  const [value, setValue] = useState(initState);
  function onChange(e) {
    setValue(e.target.value); // value가 세팅이 됨
  }
  return [value, onChange]; // value와 onChange 함수를 리턴
}

export default useDanny;
