import './App.css';
import Viewer from './components/Viewer.jsx';
import Controller from './components/Controller.jsx';
import { useEffect, useRef, useState } from 'react';
import Even from './components/Even.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const onClickButton = (value) => {
    setCount(count + value);
  };

  // reference 객체를 만들어서 mount시 useEffect의 내용이 나오는 것을 방지
  // false ->  current에 false가 들어가고, isMountRef.current는 false가 된다.
  // ref객체는 DOM요소를 참조하지 않아도 값을 참조하는 컴포넌트의 변수 역할로서 사용되기도 함
  const isMountRef = useRef(false);

  useEffect(() => {
    // mount시에는 useEffect의 내용이 나오지 않게 하기 위한 조건문 (컴포넌트가 업데이트 되는 시점만 체크할 수 있게 함)
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    } else {
      // 컴포넌트가 업데이트 되는 시점만 체크할 수 있게 함
      console.log('컴포넌트 업데이트');
    }
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
