import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      {/* <button style={{ backgroundColor: 'red' }}>change to blue !</button> */}
      <button style={{ backgroundColor: buttonColor }}
        onClick={() => setColor(newColor)}>change to {newColor}!</button>
    </div>

    // 기본 내용
    // // 이런 dom이 화면을 ~
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
