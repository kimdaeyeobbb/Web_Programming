import React, { useState, useEffect } from 'react';

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
  // 콘솔창에서 숫자 올라가는것확인하기 -> 성능이휴가 발생할 수 있음 

  // 성능이슈가 발생되는 곳
  setInterval(() => {
    const t = new Date();
    setToday(t);
    setHour(t.getHours());
    setMin(t.getMinutes());
    setSec(t.getSeconds());
  }, 1000);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Time />
    </div>
  );
}

export default App;