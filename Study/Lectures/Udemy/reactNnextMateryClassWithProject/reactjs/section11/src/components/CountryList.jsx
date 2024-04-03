import CountryItem from "./CountryItem.jsx";
import style from "./CountryList.module.css";

const CountryList = ({ countries = [] }) => {
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
};

export default CountryList;
