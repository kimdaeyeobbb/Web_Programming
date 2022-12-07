import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';   //  Home을 불러와야 사용할 수 있음
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Nav from './components/Nav'
import { useAuthContext } from './hooks/useAuthContext';

function App() {

  /* 값을 불러오는 훅 */
  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      {isAuthReady ? (
        <BrowserRouter>
          {/* 네이게이션은 사용자 모두에게 보여야 하므로 Routes밖으로 뺌. UI에 상관없이 공통적으로  필요한 컴포넌트 */}
          <Nav />
          <Routes>
            {/* 화면이 home, login, signup으로 3개이므로 3개의 Route가 필요함 */}
            {/* root URL. element -> ~할때 연결할 것  */}
            <Route path='/' element={user ? <Home /> : <Navigate replace={true} to="/login" />}></Route>
            {/* path - 사용자 지정 URL로 설정 */}
            <Route path='/login' element={user ? <Login /> : <Navigate replace={true} to="/" />}></Route>
            <Route path='/signup' element={!user ? <Signup /> : <Navigate replace={true} to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      ) : 'loading ...'}
    </div>
  );
}

export default App