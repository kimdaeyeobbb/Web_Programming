import { useState, useEffect } from "react";

import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import FailLoadData from "../../components/Shared/FailLoadData/FilaLoadData";

// import { data } from "../../database/data";
import "./homepage.css";

export default function HomePage() {
  // console.log(data)
  // const data = null
  const [error, setError] = useState(null); // 테스트용
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  /* 랜더링될 때 한번 실행함 */
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://test.api.weniv.co.kr/mall");
        const result = await res.json();
        setItems(result); // 얘가 성공해서 값이 바뀌게 되면 useEffect 부분 전체가 다시 랜더링됨
        setIsLoaded(true);
      } catch (error) {
        setError(error);
        // setIsLoaded(true)  // 없어도됨
      }
    }; // 선언
    getData(); // 호출
  }, []);

  /* 에러처리 */
  if (error) {
    // 에러가 있다면
    console.log(error);
    return <div>에러발생!</div>; // 에러 페이지를 보여줌
  } else if (!isLoaded) {
    return <div>로딩중</div>;
  } else {
    return (
      <main className="product">
        {
          <>
            <ul className="product-list">
              {items.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </ul>
            <Cart />
          </>
        }
      </main>
    );
  }
}
