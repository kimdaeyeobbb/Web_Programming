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
  return <div>index</div>;
}

function A() {
  return <div>A 페이지입니다.</div>;
}

function B() {
  return <div>B 페이지입니다.</div>;
}

function C() {
  return <div>C 페이지입니다.</div>;
}

function Cdetail() {
  const location = useLocation();
  const detailPage = location.pathname.split("/")[2];
  return <div>C의 디테일페이지 {detailPage}입니다.</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
        <Route path="/c/:id" element={<Cdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
