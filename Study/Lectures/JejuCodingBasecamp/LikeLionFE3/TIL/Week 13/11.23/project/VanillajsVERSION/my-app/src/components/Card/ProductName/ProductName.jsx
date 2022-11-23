import React from "react";
import "./productName.css";

export default function ProductName({ ProductName }) {
  return <strong className="product-name sl-ellipsis">{ProductName}</strong>;
}
