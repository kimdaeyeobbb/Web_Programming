function App() {
  return <Hello name="React" color="blue" />;
}

function Hello({ name, color }) {
  return (
    <div>
      <h2>안녕</h2>
      <div style={{ color }}>안녕하세요 {name}</div>
      <div>비구조화 할당 문법사용했어요 {name}님</div>
    </div>
  );
}

export default App;
