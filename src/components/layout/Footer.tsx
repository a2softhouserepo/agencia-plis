import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { siteConfig } from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container-giz">
        <ul className={styles.list}>
          <li>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className={styles.itemLink}
            >
              <Phone size={16} className={styles.icon} />
              {siteConfig.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles.itemLink}
            >
              <Mail size={16} className={styles.icon} />
              {siteConfig.email}
            </a>
          </li>
          <li>
            <span className={styles.itemText}>
              <MapPin size={16} className={styles.icon} />
              {siteConfig.location}
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
              {siteConfig.instagram.handle} | {siteConfig.instagram.hashtag}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
