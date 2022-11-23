import { useRef } from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductName from "./ProductName/ProductName";
import ProductPrice from "./ProductPrice/ProductPrice";
import "./card.css";

export default function Card({ productName, price, thumbnailImg }) {
  //https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg
  const likeBtn = useRef(); // 1) 얘로

  function handleLikeBtn(e) {
    console.log(e);
    console.log(e.currentTarget.classList);
    e.currentTarget.classList.toggle("on"); // on이 있으면 클릭시 하트 표시하게 만듦
  }

  return (
    <li className="product-item">
      <div className="product-img">
        <ProductImage {...{ thumbnailImg, productName }} />
      </div>
      <ProductName {...{ productName }} />
      <button // 2) 얘를 컨트롤할 수 있음
        ref={likeBtn}
        onClick={handleLikeBtn}
        className="like-btn"
      ></button>
      <div className="product-price">
        <ProductPrice {...{ price }} />
      </div>
    </li>
  );
}
