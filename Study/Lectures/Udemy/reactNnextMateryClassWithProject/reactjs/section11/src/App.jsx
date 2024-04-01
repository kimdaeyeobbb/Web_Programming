import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Country from "./pages/Country.jsx";
// 브라우저의 현재 주소를 저장하고 감지하는 역할

function App() {
  // 페이지를 이동시킬 수 있는 함수를 반환 (react router가 제공하는 커스텀 훅)
  const nav = useNavigate();
  const onClick = () => {
    nav("/search");
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/country/:code" element={<Country />} />

        {/* 상위의 Route에 걸리지 않았을 경우에 렌더링 (와일드카드) */}
        <Route path={"*"} element={<div>Not Found</div>} />
      </Routes>
      <div>
        {/*Link -> CSR방식으로 페이지 이동*/}
        <Link to={"/"}>Home</Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/country"}>Country</Link>
      </div>

      <button onClick={onClick}>서치 페이지로 이동</button>
    </>
  );
}

export default App;
