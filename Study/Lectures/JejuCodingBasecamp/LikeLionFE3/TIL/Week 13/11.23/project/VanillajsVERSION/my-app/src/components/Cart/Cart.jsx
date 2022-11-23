import React from "react";
import "./cart.css";

export default function Cart() {
  // 같은 페이지 내 이동은 a태그를 사용하지 않음. react-router를 사용해서 link로 이동하게 해줘야 함
  return <a href="#" className="link-btn cart-link"></a>;
}
