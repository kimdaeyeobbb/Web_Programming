import React from "react";
import Logo from "../../components/Logo";
import Profile from "../../components/Profile";

/* 단축키: RFC (React Function Componenet) */
export default function Homepage({ id, email, img }) {
  // 받는 데이터: id, email, img
  return (
    <div>
      {/* 컴포넌트 이동은 react route 부분에서 구현합니다. */}
      <Logo />
      <a href="#">About</a>
      <br />
      <a href="#">Contact</a>
      <br />
      <a href="#">Notice</a>
      <br />
      <a href="#">Service</a>
      <br />
      <a href="#">Userinfo</a>
      <br />
      Homepage
      <p>{id}님 환영합니다.</p>
      {/* 이메일과 이미지는 Profile에서 사용 */}
      <Profile email={email} img={img} />
    </div>
  );
}

/* props로 받는 방법 */
// export default function Homepage(props) {
//     return (
//       <div>
//           {/* 컴포넌트 이동은 react route 부분에서 구현합니다. */}
//           <a href="#">About</a><br/>
//           <a href="#">Contact</a><br/>
//           <a href="#">Notice</a><br/>
//           <a href="#">Service</a><br/>
//           <a href="#">Userinfo</a><br/>
//           Homepage
//           <p>{props.id}님 환영합니다.</p>
//       </div>
//     )
// }
