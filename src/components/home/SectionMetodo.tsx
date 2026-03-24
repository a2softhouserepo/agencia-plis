import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/content";
import Image from "next/image";
import styles from "./SectionMetodo.module.css";

export default function SectionMetodo() {
  const { metodo } = homeContent;

  return (
    <section id="section-metodo" className={styles.section}>
      <Container>
        {/* Titulo à esquerda */}
        <h2 className={styles.title}>
          {metodo.title}
        </h2>

        {/* Imagem centralizada */}
        <div className={styles.imageWrap}>
          <Image
            src="https://placehold.co/800x400/271E55/C2F628?text=Metodo+GIZ"
            alt="Método GIZ"
            width={800}
            height={400}
            className={styles.image}
          />
        </div>

        {/* Texto parágrafo */}
        <p className={styles.paragraph}>
          {metodo.paragraph}
        </p>

        {/* Lista — três textos centralizados */}
        <ul className={styles.list}>
          {metodo.list.map((item, i) => (
            <li
              key={i}
              className={styles.listItem}
            >
              <span className={styles.dot} />
              {item}
            </li>
          ))}
        </ul>

        {/* Botão centralizado */}
        <div className={styles.buttonWrap}>
          <Button text={metodo.cta} href="/nosso-metodo" />
        </div>
      </Container>
    </section>
  );
}
