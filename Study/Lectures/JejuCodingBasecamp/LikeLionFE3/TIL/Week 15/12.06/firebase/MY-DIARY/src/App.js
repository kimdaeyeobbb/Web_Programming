import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';   //  Home을 불러와야 사용할 수 있음
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 네이게이션은 사용자 모두에게 보여야 하므로 Routes밖으로 뺌. UI에 상관없이 공통적으로  필요한 컴포넌트 */}
        <Nav></Nav>
        <Routes>
          {/* 화면이 home, login, signup으로 3개이므로 3개의 Route가 필요함 */}
          {/* root URL. element -> ~할때 연결할 것  */}
          <Route path='/' element={<Home />}></Route>
          {/* path - 사용자 지정 URL로 설정 */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App