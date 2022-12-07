import styles from './Signup.module.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';


export default function Signup() {
    // 사용자의 입력값이 리액트훅에 의해 결정됨

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { error, isPending, signup } = useSignup();

    const handleData = (event) => {
        console.log(event.target.type);
        if (event.target.type === 'email') {
            setEmail(event.target.value);
        } else if (event.target.type === 'password') {
            setPassword(event.target.value);
        } else if (event.target.type === 'text') {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password, displayName);
        signup(email, password, displayName)

        /* 파이어베이스 사용 */
    }


    return (
        // property설정
        <form className={styles.signup_form} onSubmit={handleSubmit}>
            {/* 구역 나누기 */}
            <fieldset>
                <legend>회원가입</legend>

                {/* 리액트에서 label은 for대신 htmlFor를 가짐 */}
                <label htmlFor="myEmail">email : </label>
                <input type="email" id='myEmail' required value={email} onChange={handleData} />

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id='myPassWord' required value={password} onChange={handleData} />

                <label htmlFor="myNickname">닉네임 : </label>
                <input type="text" id='myNickname' required value={displayName} onChange={handleData} />

                <button type='submit' className={styles.btn}>로그인</button>
            </fieldset>
        </form>
    )
}