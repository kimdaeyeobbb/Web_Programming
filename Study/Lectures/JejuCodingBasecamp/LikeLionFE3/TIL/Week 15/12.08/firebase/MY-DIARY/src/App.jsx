import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Nav from "./components/Nav";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
    const { isAuthReady, user } = useAuthContext();

    return (
        <div className="App">
            {isAuthReady ? (
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        {/* <Navigate to="" replace={} /> 컴포넌트
                            replace 속성의 값이 false 라면, 브라우저에서 뒤로 가기를  했을 때 리다이렉트 되기 이전의 url로 이동하는것이 가능하지만 true 라면 불가능합니다.
                            즉, 이미 진행했다면 뒤로가기 버튼을 눌렀을 때 다시 login과 signup 페이지로 돌아가지 못하게 true로 설정해줌
                        */}
                        {/* 로그인 되있으면 홈으로, 아니라면 로그인 화면으로 이동합니다. */}
                        <Route
                            path="/"
                            element={
                                user ? (
                                    <Home />
                                ) : (
                                    <Navigate replace={true} to="/login" />
                                )
                            }
                        />
                        {/* 로그인이 되어있다면 로그인 화면이나 회원가입 화면으로 가지 못하게 만듭니다. */}
                        <Route
                            path="/login"
                            element={
                                !user ? (
                                    <Login />
                                ) : (
                                    <Navigate to="/" replace={true} />
                                )
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                !user ? (
                                    <Signup />
                                ) : (
                                    <Navigate to="/" replace={true} />
                                )
                            }
                        />
                    </Routes>
                </BrowserRouter>
            ) : (
                "...is loading."
            )}
        </div>
    );
}

export default App;
