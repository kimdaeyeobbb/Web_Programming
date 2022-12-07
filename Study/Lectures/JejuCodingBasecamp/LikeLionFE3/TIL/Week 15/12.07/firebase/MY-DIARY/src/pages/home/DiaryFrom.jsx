import React from "react";
import { useState } from "react";

export default function DiaryFrom() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // 전달되고 있는 이벤트의 종류에 따라 다르게 처리
  const handleData = (event) => {
    if (event.target.id === "tit") {
      setTitle(event.target.value);
    } else if (event.target.id === "txt") {
      setText(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, text);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>일기 쓰기</legend>

          <label htmlFor="">일기 제목</label>
          <input
            id="tit"
            type="text"
            required
            value={title}
            onChange={handleData}
          />

          <label htmlFor="txt">일기 내용 : </label>
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
