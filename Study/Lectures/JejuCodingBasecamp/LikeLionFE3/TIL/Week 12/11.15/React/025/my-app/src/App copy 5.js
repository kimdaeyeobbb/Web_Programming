// 10. 조건부 랜더링 시작
function Hello({ name }) {
  if (name) {
    return <div>{name}</div>;
  }
  return <div>이름이 입력되지 않았습니다!</div>;
}

function App() {
  return (
    <div>
      <Hello name="licat" />
    </div>
  );
}

export default App;
