function One() {
  return <p>one</p>;
}

function Two() {
  return <p>two</p>;
}

function Three() {
  return <p>three</p>;
}

function f() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

export default function App() {
  return (
    <div>
      {/* 안에서 js가 작동하는지 확인하기 위한 구문중괄호를 또 쓰면 에러남. 따라서 함수로 만들어서 사용해야 함 */}
      {/* for (let i=0; i<10; i++){
            console.log(i)
        } */}

      {/* key가 없다고 뜸 */}
      {/* {[<One />, <Two />, <Three />]} */}

      {/* 다중 array 작동 확인 */}
      {[
        <One />,
        <Two />,
        <Three />,
        [
          <One />,
          <Two />,
          [
            <One />,
            <Two />,
          ]
        ]
      ]}
    </div>
  );
}
