import Container from "@/components/layout/Container";
import { homeContent } from "@/data/content";
import styles from "./SectionPorqueGiz.module.css";

export default function SectionPorqueGiz() {
  const { porqueGiz } = homeContent;

  return (
    <section id="section-porque-giz" className={styles.section}>
      {/* Imagens de background decorativas */}
      <div className={styles.decoTopLeft} />
      <div className={styles.decoBottomRight} />

      <Container className={styles.inner}>
        <div className={styles.grid}>
          {/* Coluna esquerda: titulo e logo */}
          <div>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: porqueGiz.title }} />
            <span className={styles.logoGiz}>
              GIZ
            </span>
          </div>

          {/* Coluna direita: lista de 4 tópicos */}
          <div className={styles.listCol}>
            {porqueGiz.list.map((item, i) => (
              <div key={i} className={styles.listItem}>
                <h3 className={styles.listTitle} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className={styles.listText} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
