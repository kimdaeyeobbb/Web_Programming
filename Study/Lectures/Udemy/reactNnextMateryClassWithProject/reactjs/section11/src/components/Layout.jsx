import style from "./Layout.module.css";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const nav = useNavigate();
  const onClickHeader = () => {
    nav("/");
  };
  return (
    <div>
      <header onClick={onClickHeader} className={style.header}>
        <div>🌎 NARAS</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
