import Image from "next/image";
import styles from "./SectionImagem.module.css";

export default function SectionImagem() {
  return (
    <section id="section-imagem" className={styles.section}>
      <Image
        src="https://placehold.co/1920x600/271E55/C2F628?text=Sobre+a+GIZ"
        alt="Sobre a GIZ"
        width={1920}
        height={600}
        className={styles.image}
        priority
      />
    </section>
  );
}
