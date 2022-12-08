import Diaryform from "./Diaryform";
import DiaryList from "./DiaryList";
import styles from "./Home.module.css";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useCollection } from "./../../hooks/useCollection";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("myDiary");

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
