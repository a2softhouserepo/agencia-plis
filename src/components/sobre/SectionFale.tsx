import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { sobreContent } from "@/data/content";
import styles from "./SectionFale.module.css";

export default function SectionFale() {
  const { fale } = sobreContent;

  return (
    <section id="section-fale" className={styles.section}>
      <Container className={styles.inner}>
        <p className={styles.phrase}>
          <span dangerouslySetInnerHTML={{ __html: fale.line1 }} />
          <br />
          <span dangerouslySetInnerHTML={{ __html: fale.line2 }} />
        </p>
        <Button text={fale.cta} href="/contato" />
      </Container>
    </section>
  );
}
