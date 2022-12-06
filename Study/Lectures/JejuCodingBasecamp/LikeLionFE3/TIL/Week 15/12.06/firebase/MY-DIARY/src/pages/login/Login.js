import styles from './Login.module.css'
import { useState } from 'react'


export default function Login() {
    // 사용자의 입력값이 리액트훅에 의해 결정됨
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleData = (event) => {
        console.log(event.target.type)
        if (event.target.type === 'email') {
            setEmail(event.target.type)
        } else if (event.target.type === 'password') {
            setPassword(event.target.type)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);

        /* 파이어베이스 사용 */
    }

    return (
        // property설정
        <form className={styles.login_form} onSubmit={handleSubmit}>
            {/* 구역 나누기 */}
            <fieldset>
                <legend>로그인</legend>

                {/* 리액트에서 label은 for대신 htmlFor를 가짐 */}
                <label htmlFor="myEmail">email: </label>
                <input type="email" if="myEmail" required value={email} />

                <label htmlFor="myPassword">password: </label>
                <input type="password" if="myPassword" required value={password} />

                <button type="submit" className={styles.btn}>로그인</button>
            </fieldset>
        </form>
    )
}