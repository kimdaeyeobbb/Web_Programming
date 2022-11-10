import React, { Fragment } from "react";

// function App() {
//   return (
//     <Fragment>
//       <p>hello world 1</p>
//       <p>hello world 2</p>
//     </Fragment>
//   );
// }

// function App() {
//   return (
//     <React.Fragment>
//       <p>hello world 1</p>
//       <p>hello world 2</p>
//     </React.Fragment>
//   );
// }

/* 6.Component 만들기 */
function Three(props) {
  return (
    <>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age + 1}살 입니다.</p>
    </>
  );
}

// 구조분해할당
function Four({ name, age }) {
  return (
    <div>
      <p>네번째 입니다!</p>
      <p>{name}님 안녕하세요!</p>
      <p>당신의 나이는 {age + 1}살 입니다.</p>
    </div>
  );
}

function App() {
  // const 변수 = 100; // 힘수 내 변수의 생애주기 -> 함수의 생애주기와 동일
  // const 함수 = () => {
  //   return 10;
  // };
  // const 값 = 10;
  // return (
  //   <div>
  //     <p>
  //       {100 + 1}
  //       <br />
  //       {"<br/> -> 이거는 띄워쓰기가 안됨"}
  //       <br />
  //       {"hello" + "world"}
  //       <br />
  //       {"}"}
  //       <br />
  //       {[1, 2, 3].map((x) => x ** 2)}
  //       <br />
  //       {[1, 2, 3].filter((x) => x >= 2)}
  //       <br />
  //       {함수()}
  //       <br />
  //       {변수}
  //       <br />
  //       {값 ? "one" : "two"}
  //     </p>
  //   </div>
  // );

  /* Fragment 사용 - 시멘틱한 마크업 */
  return (
    <>
      <p>hello world 1</p>
      <p>hello world 2</p>
      <Three name="크크" age={16} />
      <Four name="헤헤" age={20} />
    </>
  );
}

export default App;
