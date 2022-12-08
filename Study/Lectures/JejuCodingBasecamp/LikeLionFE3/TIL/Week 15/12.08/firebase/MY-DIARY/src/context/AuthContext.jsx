import { useEffect, useReducer, createContext } from 'react';
import { AuthReducer } from './AuthReducer';
import { appAuth } from '../firebase/config';

// 목표: src 폴더에 context 폴더를 생성하고 인증과 관련된 정보를 담을 AuthContext.js 파일을 생성합니다.
// context 객체를 생성합니다
/* Context 설명
Context는 React 컴포넌트 트리 안에서 데이터를 전역으로(global)사용할 수 있도록 고안된 방법입니다. 
Context를 이용하면, 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유하도록 할 수 있습니다.
*/
const AuthContext = createContext();

// 컨텍스트를 구독할 범위(children)를 정함
const AuthContextProvider = ({ children }) => {
  // reducer hook을 이용해서 state, dispatch를 관리할 것임
  /* useReducer 설명

  useState의 대체 함수입니다. 
  보통 숫자형이나 문자열 같은 간단한 형태의 데이터는 useState를 이용하지만 객체와 같이 복잡한 형태의 데이터를 다룰 때 많이 사용합니다.

  const [관리할 값, dispatch 함수] = useReducer(리듀서 함수, 관리할 값의 초기화)
  리듀서는 위의 형태로 사용하며, dispatch 함수는 리듀서 함수를 호출하는 역할을 합니다. 

  dispatch({ type: 'login', payload: user })
  dispatch 함수는 위와 같은 형태로 사용합니다. 
  전달하는 인자를 action이라고 하며 action에는 type과 전달할 데이터인 payload 가 있습니다.
  */

  // const [state, dispatch] = useReducer(AuthReducer, { user: null });
  // 유저 정보를 불러오고 나서 화면이 랜더링 되도록하여 이 문제를 해결하기 위해
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
    isAuthReady: false,
  });
  console.log('state: ', state);

  /* 
  파이어베이스로부터 유저 정보를 받아오면 isAuthReady 값을 true 로 하고, true 가 되면 화면 랜더링이 이루어 지도록 바꿔봅니다.
  파이어베이스의 유저정보 상태를 관찰하기 위해 [onAuthStateChanged](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged) 함수를 사용합니다.
  그리고 이 함수를 AuthContextProvider 컴포넌트가 초기화 될때 한번 실행되도록 useEffect 훅을 사용합니다. 새로운 타입이 추가됐으니 reducer 함수에 authIsReady case를 추가합니다
  */
  useEffect(() => {
    // onAuthStateChanged : 유저의 인증정보 변화를 관찰하는 함수입니다.
    // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다. 더 이상 유저의 변화를 관찰하지 않도록 하는 함수입니다.
    // 우리는 새로고침 후 초기에 딱 한번 실행하면 되기 때문에 이후에는 구독을 중지합니다.

    /* useEffect를 사용하지 않은 이유 (useEffect함수를 성능최적화 시키기)
    
    useEffect훅의 두 번째 인자
    useEffect 훅은 첫번째 렌더링과 이후의 모든 업데이트에서 콜백함수를 호출합니다. 하지만 이렇게 업데이트가 일어날 때 마다 기능을 실행하는것이 불필요할 수 있습니다.
    useEffect의 두 번째 인자에 빈배열을 전달하면 딱 한번 실행되도록 만들어 최적화 할 수 있습니다.
    (https://ko.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)
    */
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      console.log(user);
      dispatch({ type: 'authIsReady', payload: user });
      unsubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
