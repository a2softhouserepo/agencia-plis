"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark">
      <nav className="container-giz flex items-center justify-between h-20">
        {/* Links — esquerda */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-archivo text-sm tracking-wide transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo — direita */}
        <Link href="/" className="flex items-center">
          <span className="font-archivo text-2xl font-bold text-accent tracking-wider">
            GIZ
          </span>
        </Link>
      </nav>
    </header>
  );
}
