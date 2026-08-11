import { motion } from "motion/react";
import type { ReactNode } from "react";

function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
