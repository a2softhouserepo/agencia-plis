import Container from "@/components/layout/Container";
import { homeContent } from "@/data/content";
import Image from "next/image";
import styles from "./SectionSobre.module.css";

export default function SectionSobre() {
  const { sobre } = homeContent;

  return (
    <section id="section-sobre" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {/* Coluna esquerda: titulo maior e imagem */}
          <div>
            <h2 className={styles.titleLarge} dangerouslySetInnerHTML={{ __html: sobre.titleLarge }} />
            <Image
              src="https://placehold.co/600x400/271E55/C2F628?text=Sobre+GIZ"
              alt="Sobre a GIZ"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>

          {/* Coluna direita: titulo e texto */}
          <div className={styles.rightCol}>
            <h3 className={styles.titleRight} dangerouslySetInnerHTML={{ __html: sobre.titleRight }} />
            <p className={styles.text} dangerouslySetInnerHTML={{ __html: sobre.text }} />
          </div>
        </div>
      </Container>
    </section>
  );
}
