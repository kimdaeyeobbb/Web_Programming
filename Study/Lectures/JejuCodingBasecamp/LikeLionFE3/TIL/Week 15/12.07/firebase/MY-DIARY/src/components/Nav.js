import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Nav() {
    // 컴포넌트 생성

    const { logout } = useLogout();  // 로그아웃 함수 실행시킬 것임
    const { user } = useAuthContext();

    return (
        // 내부에 연결할 스타일의 클래스명을 적어줘야 함
        <nav className={styles.nav}>
            <h1 className={styles.tit}></h1>
            <ul className={styles.list_nav}>
                {/* 조건부랜더링 */}
                {!user &&

                    <>
                        <li>
                            {/* <a></a> 대신 Link 사용 */}
                            <Link to="/login">로그인</Link>
                        </li>
                        <li>
                            <Link to="/signup">회원가입</Link>
                        </li>
                    </>
                }

                {user &&
                    <li>
                        <strong>환영합니다. {user.displayName} 님!</strong>
                        <button type='button' onClick={logout}>로그아웃</button>
                    </li>
                }

            </ul>
        </nav>
    )
}