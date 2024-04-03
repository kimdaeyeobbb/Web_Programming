import { useEffect, useState } from "react";
import fetchCountries from "../apis/fetchCountries.js";
import CountryList from "../components/CountryList.jsx";
import Searchbar from "../components/Searchbar.jsx";
import style from "./Home.module.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };
  useEffect(() => {
    setInitData(); // mount 되었을 떄 한번만 호출
  }, []);
  return (
    <div className={style.container}>
      <Searchbar />
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
