import Link from "next/link";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Aqui&Lá</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/Destinos">Destinos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
