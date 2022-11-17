import { useState, useEffect, useRef } from "react";

export default function App() {
  const nameInput = useRef(null);
  const ageInput = useRef(null);
  const genderInput = useRef(null);

  const handleIntroduce = (e) => {
    e.preventDefault();
    setNameInput(nameInput.current.value);
    setAgeInput(nameInput.current.value);
    setGenderInput(nameInput.current.value);
  };

  return (
    <div>
      <label>
        이름:
        <input type="text" ref="{nameInput}" />
      </label>
      <label>
        나이:
        <input type="text" ref="{ageInput}" />
      </label>
      <label>
        성별:
        <input type="text" ref="{genderInput}" />
      </label>
      <button onClick={handleIntroduce}>클릭! 자기소개</button>
      {IntroduceResult}
    </div>
  );
}

// input창이 3개 => 이름 나이 성별
