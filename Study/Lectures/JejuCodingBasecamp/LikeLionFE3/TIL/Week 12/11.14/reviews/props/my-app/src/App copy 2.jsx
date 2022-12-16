function Hello({ name, color }) {
  return (
    <div>
      <h2>안녕</h2>
      <div style={{ color }}>안녕하세요 {name}</div>
      <div>비구조화 할당 문법사용했어요 {name}님</div>
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

function App() {
  return (
    <>
      <Hello name="React" color="blue" />
      <Hello color="pink" />
    </>
  );
}

export default App;
