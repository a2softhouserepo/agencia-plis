import Container from "@/components/layout/Container";
import { metodoContent } from "@/data/content";
import { Layers } from "lucide-react";
import Image from "next/image";
import styles from "./SectionPilares.module.css";

export default function SectionPilares() {
  const { pilares } = metodoContent;

  return (
    <section id="pilares" className={styles.section}>
      <Container>
        {/* Título — duas linhas com ícone à esquerda */}
        <div className={styles.titleWrap}>
          <Layers size={48} className={styles.titleIcon} />
          <div>
            {pilares.titleLines.map((line, i) => (
              <h2
                key={i}
                className={styles.titleLine}
              >
                {line}
              </h2>
            ))}
          </div>
        </div>

        {/* Texto — dois parágrafos */}
        <div className={styles.paragraphs}>
          {pilares.paragraphs.map((p, i) => (
            <p key={i} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </div>

        {/* Grid de 6 cards — 3 por linha */}
        <div className={styles.grid}>
          {pilares.cards.map((card, i) => (
            <article
              key={i}
              className={styles.card}
            >
              {/* Imagem topo */}
              <Image
                src={`https://placehold.co/400x240/271E55/C2F628?text=Pilar+${i + 1}`}
                alt={card.title}
                width={400}
                height={240}
                className={styles.cardImage}
              />

              {/* Conteúdo */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {card.title}
                </h3>
                {card.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className={styles.cardText}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
