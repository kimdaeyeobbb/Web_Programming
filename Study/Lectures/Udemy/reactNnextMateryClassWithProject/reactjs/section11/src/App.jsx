import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Country from "./pages/Country.jsx";
import Layout from "./components/Layout.jsx";
// 브라우저의 현재 주소를 저장하고 감지하는 역할

function App() {
  return (
    // layout을 통해 공통적인 부분을 처리 -> 하위 컴포넌트들은 children으로 전달
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:code" element={<Country />} />

        {/* 상위의 Route에 걸리지 않았을 경우에 렌더링 (와일드카드) */}
        <Route path={"*"} element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
