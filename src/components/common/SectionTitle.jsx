import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => (
  <motion.header
    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}
  >
    {eyebrow && (
      <motion.span
        initial={{ opacity: 0, x: -14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] font-mono mb-4"
        style={{ color: '#6366f1' }}
      >
        <span
          className="w-5 h-px"
          style={{ background: 'linear-gradient(90deg, #6366f1, transparent)' }}
        />
        {eyebrow}
        <span
          className="w-5 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #6366f1)' }}
        />
      </motion.span>
    )}
    <h2
      className="font-display text-3xl md:text-4xl font-semibold leading-tight"
      style={{ color: '#f1f2f4' }}
    >
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-sm leading-relaxed" style={{ color: '#8891a4', maxWidth: '48ch' }}>
        {description}
      </p>
    )}
  </motion.header>
);

export default SectionTitle;
