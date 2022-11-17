import { useState, useEffect, useRef } from "react";

// 미션: 검색 키워드를 가지고 와서 fetch로 보내기

// 실제로는 fetch해서 얻어온 데이터라고 생각하기
const data = [
  "개발자 키링 개리",
  "개발자 파우치 위니브",
  "담요",
  "키보드",
  "개발자 키보드",
  "코오오딩 노트",
  "일반 무지 노트",
  "위니브 스티커 팩 - 1",
  "위니브 스티커 팩 - 2",
];

export default function App() {
  // input창 내에 입력한 값을 가져오기
  const searchValue = useRef(null);

  /* 랜더링 될 때 뿌려주는 것이므로 useState 이용 */
  const [searchResult, setsearchResult] = useState([]);

  const handleSearch = (e) => {
    console.log("클릭했어요!");
    console.log(searchValue);
    console.log(searchValue.current.value); // 값에 접근 (document.getElementById 대신 사용)

    // 여기서 item은 data내의 요소들
    // -1이 아니라면 값이 있다는 얘기임
    // console.log(
    //   data.filter((item) => item.indexOf(searchValue.current.value) !== -1)
    // );
    setsearchResult(
      data
        .filter((item) => item.indexOf(searchValue.current.value) !== -1)
        .map((item) => <p key={item}>{item}</p>)
    );

    // (값을 알아넀으니) fetch 코드를 여기에 넣기
    searchValue.current.value = "world"; // 값 변경
  };

  return (
    <div>
      <label>
        검색어를 입력하세요 :
        <input type="text" ref={searchValue} />
      </label>
      <button onClick={handleSearch}>검색</button>
      {/* {여기에 컴포넌트 Array로 넣어주세요!} */}
      {searchResult}
    </div>
  );
}
