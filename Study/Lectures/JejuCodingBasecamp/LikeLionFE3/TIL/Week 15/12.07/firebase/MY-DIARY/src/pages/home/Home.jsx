import DiaryFrom from "./DiaryFrom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <DiaryFrom />
      </aside>
      <ul className={styles.content_list}>다이어리리스트</ul>
    </main>
  );
}
