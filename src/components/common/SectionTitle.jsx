import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => (
  <motion.header
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
    {eyebrow && <span className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">{eyebrow}</span>}
    <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">{title}</h2>
    {description && <p className="mt-3 text-slate-400">{description}</p>}
  </motion.header>
);

export default SectionTitle;
