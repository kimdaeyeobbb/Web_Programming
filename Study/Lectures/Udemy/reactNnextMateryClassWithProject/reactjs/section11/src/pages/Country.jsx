import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCountries } from "../apis/fetchCountry.js";
import style from "./Country.module.css";

const Country = () => {
  // 현재 URL 파라미터 값들을 객체 형태로 저장
  const params = useParams();

  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountries(params.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [params.code]);

  // Mount시에는 fetchCountries를 통해 데이터를 가져오지 않은 상태일 수 있음
  // 따라서 country.flagEmoji가 undefined일 수 있음 (API 호출이 끝나지 않았을 수 있음 ) -> 에러 발생
  // 이를 방지하기 위해 country 존재유무에 따른 처리가 필요
  // -> API를 호출하고 결과값을 state에 담아서 사용하는 경우에는 state에 값이 바로 들어온다는 보장이 없으므로 값이 undefined일 수 있는 경우에 대한 핸들링이 필요함
  // 그래서 아래와 같은 에러 핸들링 코드가 필요하다!
  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji} &nbsp; {country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>
      <img
        src={country.flagImg}
        alt={`${country.commonName}의 국기 이미지입니다`}
      />
      <div className={style.body}>
        <div>
          <b>코드: </b> &nbsp; {country.code}
        </div>
        <div>
          <b>수도: </b> &nbsp; {country.capital.join(", ")}
        </div>
        <div>
          <b>지역: </b> &nbsp; {country.region}
        </div>
        <div>
          {/* 리액트앱 내부의 페이지로 이동하는게 아니므로 Link 대신 a 태그 이용 (완전히 새로운 사이트로 접속하는 케이스 이기 때문) */}
          {/*리액트 앱 내부의 페이지로 이동하는게 아니라면 Link 대신 a 태그 사용해도 됨*/}
          <b>지도: </b> &nbsp;{" "}
          <a target={"_blank"} href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;
