import style from "./Searchbar.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar({ q }) {
  // 검색어를 보관할 state
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const nav = useNavigate();

  // 검색어가 변화할때마다 호출 (현재의 검색어를 q로 초기화)
  // useEffect(() => {
  //   setSearch(q);
  // }, [q]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (search !== "") {
      // 검색창이 빈문자열이 아닐때에만 검색
      // 쿼리스트링으로 navigating
      nav(`/search?q=${search}`);
    }
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onKeyDown={onKeyDown}
        onChange={onChangeSearch}
        placeholder={"검색어를 입력하세요 !"}
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
