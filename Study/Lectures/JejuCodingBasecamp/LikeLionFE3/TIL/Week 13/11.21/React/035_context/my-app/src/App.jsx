// 컴포넌트 4개 만들고, 4번째에서만 로드 되게 만듦

import React from "react";

function One() {
  return <Two />;
}

function Two() {
  return <Three />;
}

// 7개 아이템의 이름만 출력
function Three() {
  return <Four />;
}

// 7개 아이템의 가격만 출력
function Four() {
  return <div>가격</div>;
}

export default function App() {
  return <div>App</div>;
}
