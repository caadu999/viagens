import Image from "next/image";
import styles from './Card.module.scss'
import Botao from "../button";

type Destino = {
  id: number;
  nome: string;
  pais: string;
  continente: string;
  imagem: string;
  descricao: string;
  preco: number;
};

type CardDestinoProps = {
  destino: Destino;
};

export function CardDestino({ destino }: CardDestinoProps) {
  return (
    <div className={styles.container}>
      <Image src={destino.imagem} alt={destino.nome} width={400} height={300} />
      <div className={styles.container__bottom}>
        <div className={styles.container__info}>
          <p className={styles.container__cont}>{destino.continente}</p>
          <h2>{destino.nome}</h2>
          <p>{destino.pais}</p>
        
        </div>
        <div className={styles.preco}>
          <p className={styles.preco__texto}>a partir de</p>
          <p className={styles.preco__nmr}>R${destino.preco}</p>
        </div>
        <div className={styles.botoes}>
          <Botao texto="Saiba mais"/>
          <button className={styles.botao}> ♡ </button>
        </div>
      </div>
    </div>
  );
}
