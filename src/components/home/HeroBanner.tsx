import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/data/content";
import bannerBg from "@/assets/banner-hero-bg.jpg";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  const { hero } = homeContent;

  return (
    <section id="hero-banner" className={styles.section}>
      {/* Background image */}
      <Image
        src={bannerBg}
        alt=""
        fill
        className={styles.bgImage}
        priority
      />

      {/* Content */}
      <div id="hero-content" className={styles.content}>
        {/* Titulo — duas linhas com tamanhos diferentes */}
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>
            {hero.titleLine1}
          </span>
          <span className={styles.titleLine2}>
            {hero.titleLine2}
          </span>
        </h1>

        {/* Subtítulo — três linhas */}
        <div className={styles.subtitle}>
          {hero.subtitleLines.map((line, i) => (
            <p key={i} className={styles.subtitleLine}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Botão CTA — fixado na base do banner */}
      <div className={styles.ctaWrap}>
        <Link href="/contato" className={styles.ctaButton}>
          <ArrowRight size={32} />
          {hero.cta}
        </Link>
      </div>
    </section>
  );
}
