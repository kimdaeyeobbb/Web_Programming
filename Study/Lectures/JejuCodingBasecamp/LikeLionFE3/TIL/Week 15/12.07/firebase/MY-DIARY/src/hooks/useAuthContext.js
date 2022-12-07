import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    // AuthContext에 접근해서 값을 받아옴

    // 이제 context안에는 AuthContext에서 반환하는 state 값(user), dispatch 함수 두 가지가 들어있습니다.
    return context
}