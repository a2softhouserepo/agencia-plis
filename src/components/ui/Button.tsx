import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  href: string;
  id?: string;
  icon?: boolean;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  text,
  href,
  id,
  icon = true,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variantClass = variant === "primary" ? styles.primary : styles.outline;

  return (
    <Link id={id} href={href} className={`${styles.base} ${variantClass} ${className}`}>
      {icon && <ArrowRight size={32} />}
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </Link>
  );
}
