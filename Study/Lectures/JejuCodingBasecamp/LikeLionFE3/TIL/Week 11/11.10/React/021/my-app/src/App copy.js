import "./app.css";
import { One } from "./componenets/One.js";
import { Two } from "./componenets/Two.js";
// 하나씩 감싸줘서 로드하는게 좋음. default를 쓰고 괄호를 풀어서 불러오면 에러가 발생할 수 있음 (경험에 의한것)

function App() {
  const style1 = { backgroundColor: "black", color: "white" };
  return (
    // // 에러 발생하는 코드
    // <h1>hello</h1>
    // <h1>hello</h1>

    // 정상작동하는 태그
    //     {/*  <h2>hello</h2> */}
    //     {/*  <h2>
    //   hello
    // </h2> */}

    // 정상작동하는 태그ㅡ
    // <div>
    //   <h1>hello</h1>
    //   <h2>hello</h2>
    // </div>

    // className 대신 class로 사용하면 콘솔창에서 에러메시지를 띄움

    <div style={{ backgroundColor: "skyblue", color: "white" }}>
      <div style={style1}>hello world2</div>
      <One />
      <Two />
      <h2 className="hi">hello</h2>
      <h2 className="hello">hello</h2>
    </div>
  );
}

export default App;
