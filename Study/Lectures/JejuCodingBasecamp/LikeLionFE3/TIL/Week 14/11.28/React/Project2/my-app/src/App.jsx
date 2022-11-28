import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
import "./reset.css"; // 나중에 스타일드 컴포넌트로 바꿔야 함
import "./global.css"; // 나중에 스타일드 컴포넌트로 바꿔야 함

function App() {
  // 실제로는 로그인이 되는 로직이 들어가야 함
  const [userId, setUserId] = useState(1);
  const [isLogin, setIsLogin] = useState(true);
  // 로그인 여부 확인 (false로 바꾸면 로그인이 실패했으므로 일부 내용이 사라짐)
  // useState(false)로 바꾸면 Login, Register로 바뀜
  // useState(true)로 바꾸면 Write, Logout으로 바뀜

  /* 로그인 로직 작성 */

  return (
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          {/* 페이지가 2개니까 라우트는 2개만 생성 */}
          <Route path="/" element={<Home />} />
          {/* 블로그가 들어오는데, 뒤에는 가변적인 숫자 (아이디)가 들어올 것임 */}
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
