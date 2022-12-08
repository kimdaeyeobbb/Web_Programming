import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import './index.css';
import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// <App/>을  Context로 감싸 하위에 있는 어떤 컴포넌트에서든 Context 정보에 접근 할 수 있도록 합니다.
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
