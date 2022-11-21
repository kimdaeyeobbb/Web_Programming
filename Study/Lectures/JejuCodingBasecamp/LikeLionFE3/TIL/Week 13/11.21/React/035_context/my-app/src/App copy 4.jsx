import React from "react";

function Three({ price }) {
  return <div>{price}</div>;
}

// 이경우 One과 Two는 price의 전달자로서의 역할만 수행함
function Two({ price }) {
  return (
    <div>
      <Three price={price} />
    </div>
  );
}

function One({ price }) {
  return (
    <div>
      <Two price={price} />
    </div>
  );
}

export default function App() {
  const value = 1000; // 이 값을 Three에서 출력하고 싶음
  return (
    <div>
      <One price={value} />
    </div>
  );
}
