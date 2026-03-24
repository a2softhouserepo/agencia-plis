import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/content";
import styles from "./SectionContato.module.css";

export default function SectionContato() {
  const { contato } = homeContent;

  return (
    <section id="section-contato" className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: contato.title }} />
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: contato.text }} />
        <Button text={contato.cta} href="/contato" />
      </Container>
    </section>
  );
}
