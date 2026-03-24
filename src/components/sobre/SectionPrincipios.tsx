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
            <h2 className={styles.title}>
              {principios.title}
            </h2>
          </div>

          {/* Coluna direita: lista com quatro tópicos */}
          <div className={styles.listCol}>
            {principios.list.map((item, i) => (
              <div key={i} className={styles.listItem}>
                <h3 className={styles.listTitle}>
                  {item.title}
                </h3>
                <p className={styles.listText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
