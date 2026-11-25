"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds. */
  delay?: number;
  /** Vertical offset in px the element rises from. */
  y?: number;
  /** Horizontal offset in px the element slides from. */
  x?: number;
  /** Share of the element that must be visible before it reveals. */
  amount?: number;
};

/**
 * Fade/slide wrapper. Runs once when scrolled into view.
 * Honours the page-level MotionConfig reducedMotion="user" setting,
 * which removes the transform and leaves a plain fade.
 */
export function Reveal({ children, className, delay = 0, y = 28, x = 0, amount = 0.2 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
