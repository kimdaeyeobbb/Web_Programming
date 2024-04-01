import { useEffect, useState } from "react";
import fetchCountries from "../apis/fetchCountries.js";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };
  useEffect(() => {
    setInitData(); // mount 되었을 떄 한번만 호출
  }, []);
  return <>home</>;
};

export default Home;
