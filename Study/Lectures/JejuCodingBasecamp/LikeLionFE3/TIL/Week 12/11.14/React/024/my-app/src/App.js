import { useState } from 'react';

const Login = () => {
  const [id, setId] = useState("");   // 아무것도 없는값으로 초기화
  const [pw, setPw] = useState("");   // 아무것도 없는값으로 초기화

  const handleLoginSubmit = (e) => {
    console.log("로그인 버튼을 클릭하셨습니다. 로그인 정보가 들어왔습니다.")
    e.preventDefault()   // 이벤트를 마아줌
    console.log("이벤트가 막혔다!")
    alert(`id: ${id}, pw: ${pw}`)
  }   // e: 제출하는 이벤트

  const handleIdInput = (e) => {
    console.log('아이디가 수정되었습니다.')
    // 실시간으로 정규표현식등을 사용해서 이상한  문자열이  포함되지는 않 았는지 체킹
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)

    setId(e.target.value)
  }

  const handlePwInput = (e) => {
    console.log('패스워드가 수정되었습니다.')
    setPw(e.target.value)
  }

  return (
    <form action="" onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleIdInput} name="" id="" />
      </label>
      <label>
        패스워드 :
        <input type="password" onChange={handlePwInput} />
      </label>
      {/* 기본이 submit이라 설정안해도 되지만, 명시적으로 보기 위해 작성 */}
      <button type="submit">로그인</button>
    </form>
  )
}

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;