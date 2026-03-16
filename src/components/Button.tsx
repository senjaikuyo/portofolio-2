import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClasses = "relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300";
  
  const variants = {
    primary: "bg-text-dark text-bg-light btn-hover-fill hover:border-text-dark border-transparent border",
    outline: "border-2 border-text-dark text-text-dark hover:bg-text-dark hover:text-bg-light",
    ghost: "text-text-dark hover:text-accent-lime",
  };

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
