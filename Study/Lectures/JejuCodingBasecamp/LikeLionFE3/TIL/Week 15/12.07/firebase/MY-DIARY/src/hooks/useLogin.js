import { useState } from "react"
import { appAuth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    /* 에러 정보 저장 */
    const [error, setError] = useState(null);

    /* 통신하고 있는 상태인지 아닌지에 대한 정보 저장 */
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    console.log(appAuth.currentUser)
    setInterval(() => {
        console.log(appAuth.currentUser);
    }, 1000)

    /* 로그인을 진행하는 함수 */
    const login = (email, password) => {
        setError(null); // 시작했으므로 error는 null로 바꿈
        setIsPending(true);   // 통신중임으로 변경

        /* 파이어베이스에서 제공하는 함수 */
        // 로그인을 진행하는 함수
        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)   // 회원정보가 제대로 들어오는지 확인

                setError(null);  // 에러가 없음을 알림
                setIsPending(false);   // 통신이 끝났음을 알림

                // 회원가입이라는 타입을 따로 만들지 않고 login으로 지정
                dispatch({ type: 'login', payload: user })

                if (!user) {
                    // 유저정보가 비었다면
                    throw new Error("로그인에 실패했습니다")
                }

            })
            .catch((error) => {  // 실패했을 때 발생하는 부분
                console.log(error)
                setError(error.message)// 어떤 에러가 발생했는지를 error 변수를 통해 확인
                setIsPending(false);
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
    }
    return { error, isPending, login }  // 업데이트할 정보 
}