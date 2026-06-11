import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => (
  <motion.header
    initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}
  >
    {eyebrow && (
      <motion.span
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono mb-3"
        style={{ color: '#7B8FF9' }}
      >
        <span
          className="w-4 h-px"
          style={{ background: 'linear-gradient(90deg, #556FF7, transparent)' }}
        />
        {eyebrow}
        <span
          className="w-4 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #556FF7)' }}
        />
      </motion.span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">{title}</h2>
    {description && (
      <p className="mt-3 text-slate-400 leading-relaxed">{description}</p>
    )}
  </motion.header>
);

export default SectionTitle;
