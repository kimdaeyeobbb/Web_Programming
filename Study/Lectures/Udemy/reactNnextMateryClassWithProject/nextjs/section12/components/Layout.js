import style from "@/components/Layout.module.css";

export default function Laytout({ children }) {
  return (
    <div>
      <header className={style.header}>NARAS 🌎</header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
