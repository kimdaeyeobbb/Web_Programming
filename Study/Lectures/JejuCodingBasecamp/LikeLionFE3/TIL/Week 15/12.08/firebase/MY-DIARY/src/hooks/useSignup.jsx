import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  // 에러 정보를 저장하는 변수
  const [error, setError] = useState(null);
  // 통신 여부를 판단하는 변수
  const [isPending, setIsPending] = useState(false);
  // 유저정보를 전역에서 활용할 수 있도록 dispatch 함수를 통해 업데이트합니다.
  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    setError(null); // 아직 에러가 없으므로 null을 할당
    setIsPending(true); // 통신 중이므로 true를 할당

    // 비밀번호 설정으로 유저 정보를 등록합니다. import 받아야합니다.
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // 회원 정보를 정상적으로 받지 못하면 실패입니다.
        if (!user) {
          throw new Error('회원가입에 실패했습니다.');
        }

        // 회원가입이 완료되고 유저 정보에 닉네임을 업데이트합니다. import 받아야합니다.
        // 프로필을 업데이트하는 함수에 dispatch 함수를 실행하여 우리가 만들었던 authReducer 함수를 호출합니다.
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            // action으로 전달될 인자를 작성합니다.
            dispatch({ type: 'login', payload: user });
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };

  return { error, isPending, signup };
};
