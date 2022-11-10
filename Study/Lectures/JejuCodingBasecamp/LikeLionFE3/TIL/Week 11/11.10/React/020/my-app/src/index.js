/* 얘네가 코드의 코어역할을 함 */

import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
// createRoot: export 임 

import App from './App';
// App: export default임 

const container = document.getElementById('root');  // root을 선택해서 컨테이너에 삽입
const root = createRoot(container);
root.render(<App tab="home" />);  // 렌더링을  해줌