import { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());   // useState에 속하는 것들의 개수를 줄임
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  console.log("렌더링이 됩니다..?")
  useEffect(() => { // 랜더링에 남아있는 것들을 청소함 + ~을 재실행
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
    }, 1000);
    return () => {
      clearInterval(time);
      //  ~ 파생하지 않게 clearInterval을 사용. 얘를 빼면 콘솔창에 찍히는 시간간격이 1초간격이 아니고 몇초씩 건너뜀

    };
  }, [today]);   // useEffect로 today만 감시

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;