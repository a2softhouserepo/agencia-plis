import Container from "@/components/layout/Container";
import { sobreContent } from "@/data/content";
import styles from "./SectionPrincipios.module.css";

export default function SectionPrincipios() {
  const { principios } = sobreContent;

  return (
    <section id="section-principios" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {/* Coluna esquerda: título ao topo */}
          <div>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: principios.title }} />
          </div>

          {/* Coluna direita: lista com quatro tópicos */}
          <div className={styles.listCol}>
            {principios.list.map((item, i) => (
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
