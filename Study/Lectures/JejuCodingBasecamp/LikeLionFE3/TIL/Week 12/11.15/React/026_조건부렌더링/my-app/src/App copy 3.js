const arr = [10, 20, 30, 40, 50]

function App() {
  return (
    <>
      {/* js 코드이므로 중괄호로 감싸야 함 - 키값을 주지 않았으므로 에러 발생*/}
      {/* {arr.map(v => <p>{v}</p>)} */}

      {/* 키값을 줬으므로 에러 발생 X */}
      {arr.map(v => <p key={v.toString()}>{v}</p>)}
    </>
  );
}

export default App;