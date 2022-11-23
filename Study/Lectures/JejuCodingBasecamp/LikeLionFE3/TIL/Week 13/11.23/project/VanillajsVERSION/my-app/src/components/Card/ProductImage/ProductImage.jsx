import React from "react";

export default function ProductImage({ thumbnailImg, productName }) {
  // prodcutName는 컴포넌트가 아닌 props로 받아온것이므로 import 해주지 않아도 됨
  // console.log(thumbnailImg)
  const url = "https://test.api.weniv.co.kr/" + thumbnailImg;
  return <img src={url} alt={productName} />;
}
