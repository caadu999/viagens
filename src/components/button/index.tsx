import Link from "next/link";
import styles from './button.module.scss'

type BotaoProps = {
  texto: string;
};

export default function Botao({ texto }: BotaoProps) {
  return <Link className={styles.botao} href="/Destinos">{texto}</Link>;
}
