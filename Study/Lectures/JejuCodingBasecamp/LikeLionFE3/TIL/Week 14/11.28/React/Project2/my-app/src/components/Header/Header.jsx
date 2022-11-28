import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/Logo.svg";
import "./header.css";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";

export default function Header() {
  const { isLogin } = useContext(UserContext);
  // 로그인이 되었다면 true, 아니면 false
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to="/">
              <img src={imgLogo} alt="My Blog" />
            </Link>
          </h1>
          <ul>
            {/* 로그인이 되었다면 로그인을, 안되었다면 로그아웃을 넣어줌 */}
            {isLogin ? <Login /> : <Logout />}
          </ul>
        </div>
      </header>
    </>
  );
}
