function Bow(props) {
  const someStyle = { backgroundColor: "green", color: "red" };
  return (
    <div>
      <h1 style={someStyle}>안녕, {props.name} 100호</h1>
      <h2>안녕, {props.name} 101호</h2>
      <div className="newClass">크크</div>
    </div>
  );
}

function Time(props) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1 style={{ color: "red" }}>년: {year}</h1>
      <h1>
        월/일: {month}월 {date}일
      </h1>
      <h1>
        시간: {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Bow name="gary" />
      <Time />
    </div>
  );
}
