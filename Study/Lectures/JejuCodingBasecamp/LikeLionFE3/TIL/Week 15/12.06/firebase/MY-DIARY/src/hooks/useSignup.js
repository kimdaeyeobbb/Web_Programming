import { useState } from "react"
import { appAuth } from "../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    /* 에러 정보 저장 */
    const [error, setError] = useState(null);

    /* 통신하고 있는 상태인지 아닌지에 대한 정보 저장 */
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    /* 회원가입시 필요한 정보 - 이메일, 패스워드, 닉네임(디스플레이 네임) */
    const signup = (email, password, displayName) => {
        setError(null); // 시작했으므로 error는 null로 바꿈
        setIsPending(true);   // 통신중임으로 변경

        /* 파이어베이스에서 제공하는 함수 */
        // 비밀번호 설정으로 유저정보를 등록함
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)   // 회원정보가 제대로 들어오는지 확인


                if (!user) {
                    // 유저정보가 비었다면
                    throw new Error("회원가입에 실패했습니다")
                }
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {    // 통신에 성공한 부분
                        console.log(user)
                        dispatch({ type: 'login', payload: user });  // 받아온 유저정보를 dispatch 함수를 통해  

                        setError(null);   // 에러가 아님
                        setIsPending(false);
                    }).catch((err) => {  // 통신에 실패한 부분
                        console.log(error.message)
                        setError(error.message)
                        setIsPending(false)
                    });
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
    return { error, isPending, signup }  // 업데이트할 정보 
}