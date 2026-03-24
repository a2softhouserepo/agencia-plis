import Container from "@/components/layout/Container";
import { metodoContent } from "@/data/content";
import styles from "./SectionImersao.module.css";

export default function SectionImersao() {
  const { imersao } = metodoContent;

  return (
    <section id="section-imersao" className={styles.section}>
      <Container>
        {/* Título com imagem de background */}
        <div className={styles.titleBox}>
          <div className={styles.titleBg} />
          <h1 className={styles.title}>
            {imersao.title}
          </h1>
        </div>

        {/* Subtítulo — duas linhas */}
        <div className={styles.subtitleWrap}>
          {imersao.subtitleLines.map((line, i) => (
            <p
              key={i}
              className={styles.subtitleLine}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Texto */}
        <p className={styles.text}>
          {imersao.text}
        </p>

        {/* Linha separadora */}
        <hr className={styles.divider} />

        {/* Texto centralizado — duas linhas */}
        <div className={styles.middleWrap}>
          {imersao.middleLines.map((line, i) => (
            <p
              key={i}
              className={styles.middleLine}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Linha separadora */}
        <hr className={styles.divider} />

        {/* Título */}
        <h2 className={styles.bottomTitle}>
          {imersao.bottomTitle}
        </h2>

        {/* Texto */}
        <p className={styles.bottomText}>
          {imersao.bottomText}
        </p>
      </Container>
    </section>
  );
}
