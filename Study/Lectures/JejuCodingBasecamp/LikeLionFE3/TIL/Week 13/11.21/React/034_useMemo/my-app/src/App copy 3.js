import React, { useState, useRef } from "react";
// useRef를 사용하였으므로 컨트롤하는 요소가 있을 것임을 짐작할 수 있음

export default function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]); // 빈 배열로 초기화
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleInputName(e) {
    //e: event
    console.log(e);
    setName(e.target.value); // input창이 바뀔 때마다 value를 가지고 옴
    console.log("렌더링 - 1");
  }

  function handleInputId(e) {
    //e: event
    console.log(e);
    setName(e.target.value); // input창이 바뀔 때마다 value를 가지고 옴
    console.log("렌더링 - 2");
  }

  function handleSubmit(e) {
    e.preventDefault(); // 이벤트를 막음
    // userInfo.push({});
    const newInfo = [...userInfo, { name, id }]; // 새로운 userInfo를 전개하고 새로운 user의 name과 id가 들어왔을 때 ~

    // inputName과 inputId를 초기화시켜줄 필요가 있음
    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus();
    setUserInfo(newInfo);
    console.log("렌더링 - 3");
  }

  function getNum(li) {
    // userInfo가 들어감
    console.log("getNum 렌더링 !");
    // 새로 안찍어줘도 실행이 되어버림 (값을 입력하면 실제로 변동사항이 반영되지 않고, 콘솔창에만 'getnNum 렌더링 !'이 찍힘)
    // 버튼을 눌러야 렌더링이 됨
    return li.length; // userInfo의 length
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          // 아이디가 변경딜때마다 핸들러 함수를 실행시킴
          onChange={handleInputId}
          ref={inputId}
        />
        <button type="submit" onClick={handleSubmit}>
          버튼
        </button>
      </form>

      {/* array인 userInfo 내에 입력된 정보를 출력 */}
      {/* array니까 map을 돌면서 */}
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>이름: {value.name}</h3>
            <strong>아이디: {value.id}</strong>
          </li>
        ))}
      </ul>

      {/* getNum에서 부하가 걸리는 것 중 저장해둘 필요가 있을 것임 */}
      <span>{getNum(userInfo)}</span>
    </>
  );
}
