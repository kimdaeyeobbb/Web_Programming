import React from "react";
import styles from "./Home.module.css";

export default function DiaryList({ diaries }) {
  return (
    <>
      {diaries.map((item) => {
        return (
          <li key={item.id}>
            <strong className="">{item.title}</strong>
            <p className="">{item.text}</p>
          </li>
        );
      })}
    </>
  );
}
