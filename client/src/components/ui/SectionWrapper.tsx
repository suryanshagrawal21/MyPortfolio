import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SectionWrapper({ id, children, className = '', centered = false }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 px-5 ${className}`}>
      <motion.div
        className={`max-w-6xl mx-auto ${centered ? 'text-center' : ''}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div variants={itemVariants} className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="text-[#8888A8] text-base mt-3 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className={`section-divider mt-5 ${centered ? '' : 'ml-0'}`} />
    </motion.div>
  );
}
