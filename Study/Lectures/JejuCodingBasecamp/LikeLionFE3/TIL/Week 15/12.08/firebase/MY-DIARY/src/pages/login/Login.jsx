import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, login } = useLogin();

  const handleData = (e) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>

        <label htmlFor="myEmail">email : </label>
        <input
          type="email"
          id="myEmail"
          required
          onChange={handleData}
          value={email}
        />

        <label htmlFor="myPassword">password : </label>
        <input
          type="password"
          id="myPassword"
          required
          onChange={handleData}
          value={password}
        />

        {/* 
        조건부 랜더링 (https://ko.reactjs.org/docs/conditional-rendering.html)
        
        리액트는 조건식을 이용하여 컴포넌트의 랜더링을 결정할 수 있습니다. 
        && 연산자를 이용하는 방식의 경우 만약, false 혹은 null 이 반환되면 리액트는 해당 값을 무시하고 컴포넌트를 랜더링 하지 않습니다.
        본인이 생각했을 때 가독성이 좋다고 생각하는 방식, 혹은 회사의 컨벤션을 선택하면 됩니다. 
        */}
        {!isPending && <button>로그인</button>}
        {isPending && <strong>로그인이 진행중입니다...</strong>}
        {error && <strong className="errorMsg">{error}</strong>}
        {/* {!isPending ? (
          <button>로그인</button>
        ) : (
          <strong>로그인이 진행중입니다...</strong>
        )} */}
      </fieldset>
    </form>
  );
}
