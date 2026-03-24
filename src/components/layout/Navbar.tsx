"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/content";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header id="navbar" className={styles.header}>
      <nav className={`container-giz ${styles.nav}`}>
        {/* Links — esquerda */}
        <ul className={styles.linkList}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.linkActive : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo — direita */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            GIZ
          </span>
        </Link>
      </nav>
    </header>
  );
}
