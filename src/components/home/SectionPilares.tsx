import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/content";
import Image from "next/image";
import styles from "./SectionPilares.module.css";

export default function SectionPilares() {
  const { pilares } = homeContent;

  return (
    <section id="section-pilares" className={styles.section}>
      <Container>
        {/* Titulo à esquerda */}
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: pilares.title }} />

        {/* Texto à esquerda */}
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: pilares.text }} />

        {/* Lista com 6 tópicos */}
        <ul className={styles.grid}>
          {pilares.list.map((item, i) => (
            <li
              key={i}
              className={styles.gridItem}
            >
              <span className={styles.number}>
                {i + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>

        {/* Botão com ícone */}
        <div className={styles.buttonWrap}>
          <Button text={pilares.cta} href="/nosso-metodo#pilares" />
        </div>
      </Container>

      {/* Imagem full-width */}
      <div>
        <Image
          src="https://placehold.co/1920x500/271E55/C2F628?text=Pilares+GIZ"
          alt="Os 6 Pilares GIZ"
          width={1920}
          height={500}
          className={styles.fullImage}
        />
      </div>
    </section>
  );
}
