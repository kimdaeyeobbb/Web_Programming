import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { signOut } from 'firebase/auth';
import { appAuth } from '../firebase/config';

export const useLogout = () => {
    const [error, setError] = useState(null);   // 에러 정보 저장
    const [isPending, setIsPending] = useState(false);   // 서버와의 통신 상태 저장
    const { dispatch } = useAuthContext();  // dispatch 이용해서 유저정보 바꿈

    const logout = () => {
        setError(null);
        setIsPending(true);

        /* signout - 파이어베이스에서 제공하는 함수 */
        signOut(appAuth)
            .then(() => { // 로그아웃 성공!
                dispatch({ type: 'logout' });  // 유저정보 받아올것이 딱히 없으므로 type만 설정해서 dispatch 함수를 실행시켜줌
                setError(null);
                setIsPending(false);
            })
            .catch((err) => { // 로그아웃 실패
                setError(err.message);
                setIsPending(false);
                // console.log(err.message);
            });
    }
    return { error, isPending, logout }; // hook이니까 밖으로 빼내게 위해서 return 작성
}