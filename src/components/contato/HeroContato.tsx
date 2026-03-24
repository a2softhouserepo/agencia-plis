import Container from "@/components/layout/Container";
import { contatoContent } from "@/data/content";
import Image from "next/image";
import styles from "./HeroContato.module.css";

export default function HeroContato() {
  const { hero } = contatoContent;

  return (
    <section id="hero-contato" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {/* Coluna esquerda: título e textos */}
          <div>
            <h1 className={styles.title}>
              {hero.title}
            </h1>
            {hero.texts.map((text, i) => (
              <p
                key={i}
                className={styles.text}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Coluna direita: imagem */}
          <div className={styles.imageWrap}>
            <Image
              src="https://placehold.co/500x500/C2F628/271E55?text=Contato"
              alt="Entre em contato"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
