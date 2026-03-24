import Container from "@/components/layout/Container";
import { metodoContent } from "@/data/content";
import { Package, CheckCircle } from "lucide-react";
import styles from "./SectionEntrega.module.css";

export default function SectionEntrega() {
  const { entrega } = metodoContent;

  return (
    <section id="section-entrega" className={styles.section}>
      <Container className={styles.inner}>
        {/* Ícone e texto — um abaixo do outro */}
        <Package size={48} className={styles.icon} />
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: entrega.title }} />
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: entrega.text }} />

        {/* Lista centralizada com cinco tópicos */}
        <ul className={styles.list}>
          {entrega.list.map((item, i) => (
            <li
              key={i}
              className={styles.listItem}
            >
              <CheckCircle size={24} className={styles.checkIcon} />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
