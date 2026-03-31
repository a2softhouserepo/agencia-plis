import Container from "@/components/layout/Container";
import { contatoContent } from "@/data/content";
import Image from "next/image";
import heroImg from "@/assets/contato-falante.png";
import styles from "./HeroContato.module.css";

export default function HeroContato() {
  const { hero } = contatoContent;

  return (
    <section id="hero-contato" className={styles.section}>
      <Container size="md">
        <div className={styles.grid}>
          {/* Coluna esquerda: título e textos */}
          <div className={styles.textWrap}>
            <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: hero.title }} />
            {hero.texts.map((text, i) => (
              <p
                key={i}
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>

          {/* Coluna direita: imagem */}
          <div className={styles.imageWrap}>
            <Image
              src={heroImg}
              alt="Entre em contato"
              width={449.78}
              height={600.18}
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
