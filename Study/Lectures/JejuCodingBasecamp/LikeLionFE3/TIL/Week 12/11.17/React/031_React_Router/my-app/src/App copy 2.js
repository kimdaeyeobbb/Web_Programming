/* Hook이 아닌 Outlet을 사용하는 방법 */

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from "react-router-dom";

function Index() {
  return <div>hello world</div>;
}

function Login() {
  return <div>Login!</div>;
}

function Study() {
  return <div>Study!</div>;
}

function StudyDetail(props) {
  // props로 아무것도 안들어왔음
  // console.log(props)  // 이전버전에서는 props로 처리했었음.

  /* 내가 짠 코드 */
  // useLocation();
  // useParams();
  // console.log(useLocation());
  // const n = useParams()["num"];
  // return (
  //   <p>
  //     {n}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {n}번
  //     게시물을 요청하셔야 합니다.
  //   </p>
  // );

  /* 호준님 정답 */
  const location = useLocation();
  const params = useParams();
  const { num } = useParams(); // 객체 구조분해할당
  console.log(location);
  console.log(params);
  console.log(num);

  // fetch 예시
  // fetch(`www.test.abc/${num}`) 이런식으로 데이터를 가지고 와서 아래에다가 데이터를 뿌려주면 blog 형식이 완성됨

  return (
    <div>
      {num}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터{" "}
      {num}번 게시물을 요청하셔야 합니다.
    </div>
  );
}

// function Test() {
//   const location = useLocation();
//   const { test } = useParams();

//   console.log(location);
//   console.log(test);
//   return <div>hello</div>;
// }

function Chat() {
  const location = useLocation();
  const params = useParams();
  console.log(location);
  console.log(params);

  // 호준님이 자주 사용하는 방식 (권장하지는 않음)
  // url의 주소 깊이가 깊어졌을 때 www.~@!$@%.com/a/b/c/d/e처럼 되었을 때 앞에 있는 값이 필요한 경우가 종종 있기 때문
  const 채팅방번호 = location.pathname.split("/")[2];

  return (
    <p>
      {채팅방번호}번 게시물에 오신것을 환영합니다. 여기는 {채팅방번호}번
      게시물의 채팅방입니다. 여러분이 fetch를 통해 백앤드에서 채팅 정보를
      받아와야 함
    </p>
  );
}

function Memo() {
  const location = useLocation();
  const params = useParams();
  console.log(location);
  console.log(params);

  /* 깔끔한 방식 */
  const { num } = useParams();

  return (
    <p>
      {num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의
      메모방입니다.
    </p>
  );
}

function Notice() {
  return <div>Notice !</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/study" element={<Study />} />
        <Route path="/study/:num" element={<StudyDetail />} />
        {/* <Route path="/study/:num/:test" element={<Test />} /> */}
        {/* <Route path="/study/:num/chat" element={<Chat />} /> */}
        {/* <Route path="/study/:num/memo" element={<Memo />} /> */}

        {/* 에스터리스크- 그 이후에 오는 모든것을 여기에서 처리하겠다는 뜻 */}
        <Route path="/study/:num/*" element={<Outlet />} />
          <Route path="chat" element={<Chat />} />
          <Route path="memo" element={<Memo />} />
        </Route>
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
