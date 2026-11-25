"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "marigold" | "rani" | "wine" | "ivory" | "outline";

const tones: Record<Tone, string> = {
  marigold: "bg-marigold text-wine hover:bg-ivory",
  rani: "bg-rani text-ivory hover:bg-rani-deep",
  wine: "bg-wine text-ivory hover:bg-wine-raised",
  ivory: "bg-ivory text-wine hover:bg-marigold",
  outline: "border border-current bg-transparent hover:bg-ivory/10",
};

type CtaButtonProps = {
  children: ReactNode;
  tone?: Tone;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  className?: string;
};

export function CtaButton({
  children,
  tone = "marigold",
  onClick,
  href,
  external,
  className = "",
}: CtaButtonProps) {
  const classes = `group inline-flex items-center gap-2 px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] transition-colors ${tones[tone]} ${className}`;
  const icon = (
    <ArrowUpRight
      className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      strokeWidth={1.9}
    />
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
