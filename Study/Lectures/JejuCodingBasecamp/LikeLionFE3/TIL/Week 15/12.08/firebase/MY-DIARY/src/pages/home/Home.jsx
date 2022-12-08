import Diaryform from "./Diaryform";
import DiaryList from "./DiaryList";
import styles from "./Home.module.css";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useCollection } from "./../../hooks/useCollection";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("myDiary", [
    "uid",
    "==",
    user.uid,
  ]);
  // collection이 가지고 있는 document 내에 작성한 유저의 아이디(uid)가 현재 로그인한 유저(user.uid)가 작성한 collection을 불러오겠다는 것
  // 2가지가 같은 것만 불러와라는 의미

  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <Diaryform uid={user.uid} />
      </aside>
      <ul className={styles.content_list}>
        {error && <strong>{error}</strong>}
        {documents && <DiaryList diaries={documents} />}
      </ul>
    </main>
  );
}
