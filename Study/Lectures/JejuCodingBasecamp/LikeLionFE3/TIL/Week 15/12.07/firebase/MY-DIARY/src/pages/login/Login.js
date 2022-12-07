import styles from './Login.module.css'
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
    // 사용자의 입력값이 리액트훅에 의해 결정됨
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin('')// 훅을 사용하기 위해서 선언


    const handleData = (event) => {
        console.log(event.target.type);
        if (event.target.type === 'email') {
            setEmail(event.target.value);
        } else if (event.target.type === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password);
        /* 파이어베이스 사용 */
    }

    return (
        // property설정
        <form className={styles.login_form} onSubmit={handleSubmit}>
            {/* 구역 나누기 */}
            <fieldset>
                <legend>로그인</legend>

                {/* 리액트에서 label은 for대신 htmlFor를 가짐 */}
                <label htmlFor="myEmail">email : </label>
                <input type="email" id='myEmail' required value={email} onChange={handleData} />

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id='myPassWord' required value={password} onChange={handleData} />

                {/* 조건부 랜더링 */}
                {!isPending && <button type="submit" className={styles.btn}>로그인</button>}
                {isPending && <strong>로그인중입니다...</strong>}
                {/* 에러인 경우 - 에러메시지를 뿌려줌 */}
                {error && <strong>{error}</strong>}

                <button type="submit" className={styles.btn}>로그인</button>
            </fieldset>
        </form>
    )
}