import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // 이 브라우저 라우트는 바닐라 js로도 구현할 수 있음
    <BrowserRouter>
      {/* 라우트를 감싸줌 */}
      <Routes>
        <Route paht="/" element={<Index />} />
        <Route paht="/one" element={<One name="licat" />} />
        <Route paht="/two" element={<Two />} />
        <Route paht="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1 >
}

function One(props) {
  console.log(props)
  return <h1>{props.name} hello world1</h1>
}

function Two() {
  return <h1>hello world2</h1>
}

function Three() {
  return <h1>hello world3</h1>
}

export default App;
