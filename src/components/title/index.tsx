import styles from "./title.module.scss";

type TitleProps = {
  title: string;
  descricao: string;
  mensagem: string;
};

export default function Title({ title, descricao, mensagem }: TitleProps) {
  return (
    <div className={styles.titulo}>
      <p className={styles.titulo__mensagem}>{mensagem}</p>
      <h1>{title}</h1>
      <p className={styles.titulo__descricao}>{descricao}</p>
    </div>
  );
}
