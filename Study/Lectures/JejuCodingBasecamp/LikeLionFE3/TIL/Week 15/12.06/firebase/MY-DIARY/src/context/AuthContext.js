import { createContext, useReducer } from "react";

/* context 객체 생성 */
const AuthContext = createContext();

/* 리듀서함수 - dispatch 함수를 통해서 실행이됨. dispatch는 type, payload라는 값을 가짐 */
const authReducer = (state, action) => {
    // action - dispatch에서 전달해주는 함수
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }  // payload를 보내고 있지 않으므로 null을 할당
        default:  // action의 type이 없는 경우
            return state  // state 초기값이 null

    }
}


/* context를 구독할 컴포넌트 범위 설정 */
// context - 전역으로 만들것임
// 인수로 구독할 컴포넌트들을 집어넣음
// value = {컨텍스트에 저장할 데이터}
const AuthContextProvider = ({ children }) => {

    // 리듀서함수를 통해 데이터를 관리 (useReducer hook 사용)
    const [state, dispatch] = useReducer(authReducer, { user: null })
    console.log('state: ', state)

    return (
        // dispatch를 전달하는 이유? - useState를 사용할경우 set함수의 역할을 함. 값이 변경되었을 때 정보를 바로바로 업데이트하는 역할임.
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }