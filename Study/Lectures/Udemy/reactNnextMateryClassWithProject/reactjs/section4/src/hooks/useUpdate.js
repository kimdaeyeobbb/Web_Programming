import { useEffect, useRef } from 'react';

export default function useUpdate(callback) {
  // reference 객체를 만들어서 mount시 useEffect의 내용이 나오는 것을 방지
  // false ->  current에 false가 들어가고, isMountRef.current는 false가 된다.
  // ref객체는 DOM요소를 참조하지 않아도 값을 참조하는 컴포넌트의 변수 역할로서 사용되기도 함
  const isMountRef = useRef(false);

  useEffect(() => {
    // mount시에는 useEffect의 내용이 나오지 않게 하기 위한 조건문 (컴포넌트가 업데이트 되는 시점만 체크할 수 있게 함)
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    // 컴포넌트가 업데이트 되는 시점만 체크할 수 있게 함
    console.log('컴포넌트 업데이트');
    callback();
  });
}
