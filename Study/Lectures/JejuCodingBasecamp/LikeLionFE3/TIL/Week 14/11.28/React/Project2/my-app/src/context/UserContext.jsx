import { createContext } from "react";

const UserContext = createContext(); // 비어있는것처럼 보이지만, 실제로는 로그인해서 받아온 회원정보가 통신되어 들어옴. 우리는 가짜로 로그인 했다고 생각하고 App.jsx에서 강제로 넣어준 것

export default UserContext;
