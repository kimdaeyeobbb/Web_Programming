import { useEffect } from 'react';

export default function Even() {
  useEffect(() => {
    // useEffect가 새로운 함수 반환
    // useEffect의 콜백함수가 다시 호출되기 전이나 useEffect를 가지고 있는 컴포넌트가 언마운트될 때 실행됨.
    // 따라서 return 옆의 콜백함수는 언마운트될때 실행되는 함수
    return () => {
      console.log('언마운트');
    };
  }, []);
  // deps에 빈배열 -> mount 시점에 한번만 호출됨 혹은 언마운트인 경우 호출-> 여기서는 언마운트인 경우에 해당. -> 두번다시 호출되지 않음.
  return (
    <>
      <div>짝수 입니다 !</div>
    </>
  );
}
