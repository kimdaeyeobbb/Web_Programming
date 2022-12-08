import React, { useState, useEffect } from "react";
import { useFirestore } from "./../../hooks/useFirestore";

export default function DiaryForm({ uid }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { addDocument, response } = useFirestore("myDiary"); // myDiary부분 : 저희가 저장할 컬렉션 인자
  // useFirestore에서 리턴을 객체로 주고 있고, 객체형태로 받을 것이라서 중괄호로 감싼것. 이름은 같이니까 key는 뺴준것

  const handleData = (e) => {
    if (e.target.id === "tit") {
      setTitle(e.target.value);
    } else if (e.target.id === "txt") {
      setText(e.target.value);
    }
  };

  useEffect(() => {
    if (response.success) {
      // 파이어베이스와의 통신이 성공한 경우
      setTitle("");
      setText("");
    }
  }, [response.success]); // reseponse.success가 갱신될때마다 useEffect가 작동되게 함

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, text);

    // 유저마다 쓴 글이 다르므로 로그인 한 그 유저에 대한 정보만 가져와야하므로 여기서 유저의 아이디가 필요한 것
    addDocument({
      uid,
      title,
      text,
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>일기쓰기</legend>

          <label htmlFor="tit">일기 제목 :</label>
          <input
            id="tit"
            type="text"
            required
            value={title}
            onChange={handleData}
          />

          <label htmlFor="txt">일기 내용 :</label>
          <textarea
            name=""
            id="txt"
            required
            value={text}
            onChange={handleData}
          ></textarea>

          <button>저장하기</button>
        </fieldset>
      </form>
    </>
  );
}
