import React, { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import api from "./api/axios";
import "./app.css";

function App() {
  const [data, setData] = useState(null);
  const [main, setMain] = useState(null);
  const [location, setLocation] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState("seoul");

  useEffect(() => {
    const fetchData = async () => {
      // Read Data
      try {
        const res = await api.get(
          `/weather?q=seoul&appid=${process.env.REACT_APP_API_KEY}`
        );
        setData(res.data);
        setMain(res.data.main);
        setLocation({
          city: res.data.name,
          country: res.data.sys.country,
        });
        setWeatherInfo(res.data.weather[0]);
      } catch (err) {
        if (err.response) {
          // 응답 코드가 2xx가 아닌 경우
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchData();
  }, []);

  if (!!data) {
    console.log(data);
    console.log(main);
    console.log(location);
    console.log(weatherInfo);
  }

  return (
    <article id="weather_info">
      {data ? (
        <>
          <header className="header">
            <h1 className="city">
              {location.city} / {location.country}
            </h1>
            <button
              className="searchBtn"
              /* onClick={handleSearchToggle} */
            >
              {/* <img src={searchIcon} alt="찾기 버튼" /> */}
            </button>
          </header>
          <section>
            <h2 className="weather_condition">{weatherInfo.main}</h2>
            <figure className="icon">
              <img
                src={`http://openweathermap.org/img/wn/${weatherInfo.icon}.png`}
                alt=""
              />
            </figure>
          </section>
          <section>
            <h2>현재 온도</h2>
            <div className="cont_temp">
              <strong className="temp">
                {parseInt(main.temp - 273.15)} &deg;
              </strong>
              <div>
                <span className="temp_max">
                  최대 : {parseInt(main.temp_max - 273.15)} &deg;
                </span>
                <span className="temp_min">
                  최저 : {parseInt(main.temp_min - 273.15)} &deg;
                </span>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </article>
  );
}
export default App;

// import React, { useEffect, useState } from "react";
// import "./app.css";
// import api from "./api/axios"; // baseurl 받아오기
// import Loading from "./components/Loading/Loading";

// function App() {
//   const [data, setData] = useState(null);
//   // null -> loading은 데이터가 받아오면 안보이고, 데이터가 없으면 보여지게 하는 조건부랜더링 상태를 의도함
//   const [main, setMain] = useState(null);
//   const [location, setLocation] = useState("");
//   const [weatherInfo, setWeatherInfo] = useState(null); // 날씨 정보
//   const [city, setCity] = useState("seoul"); // 도시정보

//   /* 데이터를 불러오기 */
//   useEffect =
//     (() => {
//       const fetchData = async () => {
//         // read data
//         try {
//           const res = await api.get(
//             `/weather?q=seoul&appid=${process.env.REACT_APP_API_KEY}`
//           );
//           setData(res.data); // 데이터를 불러옴
//           setMain(res.data.main); // 데이터를 쏴줌
//           setLocation({
//             city: res.data.name,
//             country: res.data.sys.country,
//           });
//           setWeatherInfo(res.data.weather[0]);
//         } catch (err) {
//           if (err.response) {
//             // 응답코드가 2xx가 아닌 경우 (2xx: 2xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다)
//             console.log(err.response.data);
//             console.log(err.response.status);
//             console.log(err.response.headers);
//           } else {
//             // 다른 경우에는
//             console.log(`Error: ${err.message}`); // 메시지만 보여줘
//           }
//         }
//       };

//       fetchData(); // 선언했는데 왜 안읽어줘? 한것에 대한 반응
//     },
//     []); // 최초1번만 동작하도록 빈배열을 두번째 인자로 넣어줌

//   console.log(data);
//   if (!!data) {
//     console.log(main);
//     console.log(location);
//     console.log(weatherInfo);
//   }

//   return (
//     <article id="weather_info">
//       {data ? (
//         <>
//           <h1 className="city">Seoul / KR</h1>
//           <section>
//             <h2 className="weather_condition">Clear</h2>
//             <figure className="icon"></figure>
//           </section>
//           <section>
//             <h2>현재 온도</h2>
//             <div className="cont_temp">
//               <strong className="temp">0</strong>
//               <div>
//                 <span className="temp_min">최저 : 0</span>
//                 <span className="temp_max">최대 : 0</span>
//               </div>
//             </div>
//           </section>
//         </>
//       ) : (
//         <Loading />
//       )}
//     </article>
//   );
// }

// export default App;
