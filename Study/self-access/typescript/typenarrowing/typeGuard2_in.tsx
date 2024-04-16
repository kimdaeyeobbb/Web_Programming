// in 연산자 - 객체에 속성이 있는지 여부를 판별 (t/f)

import React from "react";

interface Basic {
  title: string;
  contents: string;
}

interface Advanced extends Basic {
  url: string;
  exist: boolean;
}

type Union = Basic | Advanced;

const exFunc: React.FC<Union> = (props) => {
  if ("url" in props) {
    return <a href={props.url}>{props.title}</a>;
  }
  return <span>{props.title}</span>;
};
