import React from "react";

const SomeComp = () => {
  return (
    <div>
      이거 컴포넌트
      <button onClick={() => console.log("click!")}>버튼</button>
    </div>
  );
};

function App() {
  const comp = SomeComp();
  console.log("jsx로만 만든 컴포넌트", comp);
  const props = { className: "simple-class" };
  const reactElement = React.createElement("div", props, "테스트");

  console.log("react createComponent를 통해 만든것", reactElement);
  // const comp = SomeComp();
  // console.log(SomeComp());
  return <div>{reactElement}</div>;
}

export default App;
