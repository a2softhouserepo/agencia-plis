import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer id="footer" className="bg-dark py-8">
      <div className="container-giz">
        <ul className="flex flex-wrap items-center justify-center gap-8 text-white text-sm font-sora">
          <li>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone size={16} className="text-accent" />
              {siteConfig.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail size={16} className="text-accent" />
              {siteConfig.email}
            </a>
          </li>
          <li>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              {siteConfig.location}
            </span>
          </li>
          <li>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Instagram size={16} className="text-accent" />
              {siteConfig.instagram.handle} | {siteConfig.instagram.hashtag}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
