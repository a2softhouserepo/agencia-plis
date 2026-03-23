import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href: string;
  icon?: boolean;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  text,
  href,
  icon = true,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-8 py-4 rounded-full font-sora font-semibold text-sm tracking-wide transition-all";
  const variants = {
    primary: "bg-accent text-dark hover:brightness-110",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-dark",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {icon && <ArrowRight size={18} />}
      {text}
    </Link>
  );
}
