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

function Resume(props) {
  const allStyle = { border: "1px solid black" };
  return (
    <div style={allStyle}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={{ color: "blue" }}>{props.color}</span>
      </h2>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Bow name="gary" />
      <Time />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
    </div>
  );
}
