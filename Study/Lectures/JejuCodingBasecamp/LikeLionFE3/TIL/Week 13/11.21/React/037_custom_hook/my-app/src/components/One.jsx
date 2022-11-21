import React, { useState } from "react";

function One() {
  const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
}

export default One;

// import React from 'react';
// import useInput from '../Hook/useDanny';
// import useDanny from './../Hook/useDanny';

// function InputComponent(){
//   const [value, onChange] = useDanny("");

// }
