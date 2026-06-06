import Botao from "@/components/button";
import styles from "./page.module.css";
import Title from "@/components/title";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Title
        title="O mundo te aguarda além do horizonte"
        descricao="Experiências de viagem cuidadosamente selecionadas para quem busca o extraordinário em cada jornada."
        mensagem="Curadoria de destinos"
      />
      <Botao texto="Conhecer Destinos" />
    </div>
  );
}
