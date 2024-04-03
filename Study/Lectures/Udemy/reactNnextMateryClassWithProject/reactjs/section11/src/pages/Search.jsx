import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchSearchResults from "../apis/fetchSearchResults.js";
import Searchbar from "../components/Searchbar.jsx";
import CountryList from "../components/CountryList.jsx";
import style from "./Search.module.css";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // 쿼리스트링으로 전달된 값을 저장
  const q = searchParams.get("q");

  const [countries, setCountries] = useState([]);
  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  // 검색어가 변화할때마다 호출
  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div className={style.container}>
      <Searchbar q={q} />
      <div>
        <b>{q}</b>에 대한 검색 결과
      </div>
      <CountryList countries={countries} />
    </div>
  );
};

export default Search;
