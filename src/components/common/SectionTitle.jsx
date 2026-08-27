import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => (
  <motion.header
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}
  >
    {eyebrow && (
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest font-semibold mb-4 text-accent-primary"
      >
        <span className="w-4 h-0.5 bg-gradient-to-r from-accent-primary to-transparent" />
        {eyebrow}
        <span className="w-4 h-0.5 bg-gradient-to-l from-accent-primary to-transparent" />
      </motion.span>
    )}
    <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
        {description}
      </p>
    )}
  </motion.header>
);

export default SectionTitle;
