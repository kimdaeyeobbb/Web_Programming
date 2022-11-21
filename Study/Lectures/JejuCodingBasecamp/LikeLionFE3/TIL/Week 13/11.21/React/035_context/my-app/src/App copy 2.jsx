const App = () => {
  return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
};

const HelloLicat = ({ value }) => {
  // 구조분해할당 적용

  return (
    <div>
      <h2>{value.id}</h2>
      <strong>{value.name}</strong>
      <HelloLicatTwo value={{ name: value.name, id: value.id }} />
    </div>
  );
};

const HelloLicatTwo = ({ value }) => {
  return (
    <div>
      <h2>Two : {value.id}</h2>
      <strong>Two : {value.name}</strong>
    </div>
  );
};

export default App;
