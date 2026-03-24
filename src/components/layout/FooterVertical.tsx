import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { siteConfig } from "@/data/content";
import styles from "./FooterVertical.module.css";

export default function FooterVertical() {
  return (
    <ul id="footer-vertical" className={styles.list}>
      <li>
        <a
          href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
          className={styles.itemLink}
        >
          <Phone size={16} className={styles.icon} />
          <span dangerouslySetInnerHTML={{ __html: siteConfig.phone }} />
        </a>
      </li>
      <li>
        <a
          href={`mailto:${siteConfig.email}`}
          className={styles.itemLink}
        >
          <Mail size={16} className={styles.icon} />
          <span dangerouslySetInnerHTML={{ __html: siteConfig.email }} />
        </a>
      </li>
      <li>
        <span className={styles.itemText}>
          <MapPin size={16} className={styles.icon} />
          <span dangerouslySetInnerHTML={{ __html: siteConfig.location }} />
        </span>
      </li>
      <li>
        <a
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.itemLink}
        >
          <Instagram size={16} className={styles.icon} />
          <span dangerouslySetInnerHTML={{ __html: `${siteConfig.instagram.handle} | ${siteConfig.instagram.hashtag}` }} />
        </a>
      </li>
    </ul>
  );
}
