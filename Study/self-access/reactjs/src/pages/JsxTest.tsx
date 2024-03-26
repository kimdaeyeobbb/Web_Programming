import React from "react";

function JsxTest() {
  const objA = {
    a: 1,
    b: 2,
  };
  return (
    // React.Fragment -> 최상위 태그 대체
    <React.Fragment>
      <h1>body</h1>
      {/*obj로 쓰면 에러. 원시 자료형으로 프로퍼티에 접근해야 함 (objA.a)*/}
      <h2>{objA.a}</h2>
    </React.Fragment>
  );
}

export default JsxTest;
