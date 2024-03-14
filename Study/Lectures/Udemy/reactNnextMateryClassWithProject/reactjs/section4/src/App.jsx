import './App.css';
import Viewer from './components/Viewer.jsx';
import Controller from './components/Controller.jsx';
import { useEffect, useRef, useState } from 'react';
import Even from './components/Even.jsx';
import useUpdate from './hooks/useUpdate.js';
import useInput from './hooks/useInput.js';

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  const onClickButton = (value) => {
    setCount(count + value);
  };

  /* update되는 순간 제어 */
  useUpdate(() => {
    console.log('App 컴포넌트 업데이트 !');
  });

  /* mount 가 되는순간을 제어 */
  useEffect(() => {
    console.log('마운트!');
  }, []);
  // 빈배열 -> 어떠한 값도 감지하지 않음 (컴포넌트가 처음 마운트 될 때만(콜백함수가 마운트될때만) 실행)

  /* unMount 순간 제어 - count가 짝수일 때만 */
  return (
    <div className={'App'}>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {/*unmount시 */}
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
