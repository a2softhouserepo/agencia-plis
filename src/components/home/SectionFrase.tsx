import Container from "@/components/layout/Container";
import FooterVertical from "@/components/layout/FooterVertical";
import { homeContent } from "@/data/content";
import styles from "./SectionFrase.module.css";

export default function SectionFrase() {
  const { frase } = homeContent;

  return (
    <section id="section-frase" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {/* Coluna esquerda: frase e links verticais do footer */}
          <div>
            <p className={styles.phrase}>
              {frase.line1}
              <br />
              <span className={styles.accent}>{frase.line2}</span>
            </p>
            <FooterVertical />
          </div>

          {/* Coluna direita: logo GIZ */}
          <div className={styles.logoCol}>
            <span className={styles.logoGiz}>
              GIZ
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
