import Container from "@/components/layout/Container";
import { sobreContent } from "@/data/content";
import styles from "./SectionSobre.module.css";

export default function SectionSobre() {
  const { sobreGiz } = sobreContent;

  return (
    <section id="sobre-giz" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {/* Coluna esquerda: título com imagem de background */}
          <div className={styles.titleWrap}>
            <div className={styles.titleBox}>
              <div className={styles.titleBg} />
              <h2 className={styles.title}>
                {sobreGiz.title}
              </h2>
            </div>
          </div>

          {/* Coluna direita: quatro parágrafos */}
          <div className={styles.paragraphs}>
            {sobreGiz.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
