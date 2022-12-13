function App() {
  return (
    <div className="App">
      <Hello name="danny" />
    </div>
  );
}

function Hello({ name }) {
  return <>{name ? <One name={name} /> : <Two />}</>;
}

function One({ name }) {
  return (
    <div>
      <h1>hello {name}!!!!!!!!</h1>
    </div>
  );
}

function Two() {
  return (
    <div>
      <h1>이름을 입력하지 않았습니다</h1>
    </div>
  );
}

export default App;
