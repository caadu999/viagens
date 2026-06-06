import Title from "@/components/title";
import { CardDestino } from "@/components/CardDestino";
import { destinos } from "@/lib/data";
import styles from "./destino.module.scss";

export default function Destino() {
  return (
    <div className={styles.container}>
      <Title
        title="Seus próximos destinos te esperam"
        descricao="Melhores opções de região, tipo de viagem ou orçamento"
        mensagem="180+ destinos disponíveis"
      />
      <div className={styles.card}>
        {destinos.map((destino) => (
          <CardDestino destino={destino} key={destino.id} />
        ))}
      </div>
    </div>
  );
}
