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
          <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: imersao.title }} />
        </div>

        {/* Subtítulo — duas linhas */}
        <div className={styles.subtitleWrap}>
          {imersao.subtitleLines.map((line, i) => (
            <p
              key={i}
              className={styles.subtitleLine}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>

        {/* Texto */}
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: imersao.text }} />

        {/* Linha separadora */}
        <hr className={styles.divider} />

        {/* Texto centralizado — duas linhas */}
        <div className={styles.middleWrap}>
          {imersao.middleLines.map((line, i) => (
            <p
              key={i}
              className={styles.middleLine}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>

        {/* Linha separadora */}
        <hr className={styles.divider} />

        {/* Título */}
        <h2 className={styles.bottomTitle} dangerouslySetInnerHTML={{ __html: imersao.bottomTitle }} />

        {/* Texto */}
        <p className={styles.bottomText} dangerouslySetInnerHTML={{ __html: imersao.bottomText }} />
      </Container>
    </section>
  );
}
