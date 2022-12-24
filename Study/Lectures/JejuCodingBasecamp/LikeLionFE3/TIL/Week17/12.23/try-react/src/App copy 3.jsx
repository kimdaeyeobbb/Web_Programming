import React from "react";

const SomeComp = () => {
  return (
    <div>
      이거 컴포넌트
      <button onClick={() => console.log("click!")}>버튼</button>
    </div>
  );
};

const SomeComp2 = (함수입력값) => {
  // console.log(props.a + props.b);
  // console.log(props);
  return (
    // <div className="simple-class"></div>
    // 위와같이 작성하지 않고 props의 name을 가져옴
    <div className={함수입력값.className}>
      {함수입력값.a + 함수입력값.b}
      {/* {props.children} */}
    </div>
  );
};

function App() {
  // const comp = SomeComp();
  // console.log("jsx로만 만든 컴포넌트", comp);
  // const props = { className: "simple-class" };
  // const reactElement = React.createElement("div", props, "테스트");

  // console.log("react createComponent를 통해 만든것", reactElement);
  // const comp = SomeComp();
  // console.log(SomeComp());
  return (
    <div className="App">
      {/* 컴포넌트에 들어간 기타 등등의 값 - props */}
      <SomeComp2
        className="className111dasd"
        a={1}
        b={3}
        함수={() => console.log()}
      >
        <SomeComp />
      </SomeComp2>
    </div>
  );
}

export default App;
