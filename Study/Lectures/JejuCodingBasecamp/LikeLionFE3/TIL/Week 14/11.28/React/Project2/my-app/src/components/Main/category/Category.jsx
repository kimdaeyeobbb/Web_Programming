import React from "react";
import "./category.css";

export default function Category({ category }) {
  // console.log(category);
  // 2개 있는 것은 2개를 랜더링, 3개 있는것은 3개를 랜더링

  // 1번부분과 같은 내용 (하드코딩)
  // const renderingContents = []
  // for (const item of category) {
  //   renderingContents.push(<dd key={item}>{item}</dd>)
  // }

  return (
    <dl className="category">
      <dt className="a11y-hidden">Category</dt>

      {/* 1번부분 */}
      {category.map((el, idx) => (
        <dd key={idx}>{el}</dd>
      ))}
    </dl>
  );
}
