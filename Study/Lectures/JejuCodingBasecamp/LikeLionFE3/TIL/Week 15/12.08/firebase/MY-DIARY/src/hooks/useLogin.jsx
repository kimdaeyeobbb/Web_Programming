import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  // 에러 정보를 저장하는 변수
  const [error, setError] = useState(null);
  // 통신 여부를 판단하는 변수
  const [isPending, setIsPending] = useState(false);
  // 유저정보를 전역에서 활용할 수 있도록 dispatch 함수를 통해 업데이트합니다.
  const { dispatch } = useAuthContext();

  /* 컴포넌트들이 렌더링 되기 전에 유저의 상태 업데이트 하기
  
  로그인된 상태에서 페이지 새로고침을 하면 사용자가 로그인 되어 있음에도 불구하고 사용자 정보가 null인 상태임을 알 수 있습니다. 
  애플리케이션이 새로고침되면 파이어베이스는 서버에 저장되어 있는 사용자의 인증 정보를 불러와 상태를 갱신하게됩니다. 
  이때 리액트의 컴포넌트들도 다시 랜더링 되기 시작하는데, 파이어베이스로부터 유저 정보를 불러오는 시간보다 리액트의 재랜더링 속도가 빠르기 때문에 일어나는 현상입니다. 
  */
  // console.log(appAuth.currentUser);
  // setInterval(() => {
  //   console.log(appAuth.currentUser);
  // }, 1000);

  // 파이어베이스로부터 유저 정보를 불러오고 나서 화면이 랜더링 되도록하여
  // 이 문제를 해결해봅시다!
  // AuthContext.jsx 파일의 reducer 함수 state 값에 새로운 프로퍼티를 추가합니다.
  // Go! AuthContext.jsx 파일

  const login = (email, password) => {
    setError(null); // 아직 에러가 없으므로 null을 할당
    setIsPending(true); // 통신 중이므로 true를 할당

    // 비밀번호 설정으로 유저 정보를 등록합니다. import 받아야합니다.
    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Logged in
        const user = userCredential.user;
        // 회원 정보를 정상적으로 받지 못하면 실패입니다.
        dispatch({ type: 'login', payload: user });
        setError(null);
        setIsPending(false);
        if (!user) {
          throw new Error('로그인에 실패했습니다.');
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };

  return { error, isPending, login };
};
