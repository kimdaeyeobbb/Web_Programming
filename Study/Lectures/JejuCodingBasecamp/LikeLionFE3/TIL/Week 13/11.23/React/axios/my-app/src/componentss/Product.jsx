import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Product() {
  // - HTTP 메서드 지원
  // - axios.get(url, conf)
  // - axios.delete(url, conf)
  // - axios.post(url, data, conf)
  // - axios.put(url, data, conf)
  // - axios.patch(url, data, conf)

  //   최초의 한번만 실행하게 만듦
  // axios 방법
  useEffect(() => {
    axios.get("http://test.api.weniv.co.kr/mall").theen((res) => {
      console.log("axios"); // 테스트용 출력
      console.log(res); // response의 약자. 애는 없어도 됨 (res는 res.data 이용)
      console.log(res.data);
    });
    // fetch와 비교
    // fetch 방법
    fetch("http://test.api.weniv.co.kr/mall")
      .then((res) => {
        console.log("fetch");
        console.log(res);
        // console.log(res.json()) // pending됩니다.
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>Product</div>;
}
