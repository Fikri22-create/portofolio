import { motion } from 'framer-motion';

const StatsCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    transition={{ delay: index * 0.05 }} className="card relative overflow-hidden">
    <p className="text-xs uppercase tracking-wider text-slate-400">{stat.label}</p>
    <p className="font-display text-3xl mt-2 text-white">{stat.value}</p>
    <span className="absolute top-4 right-4 text-[11px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-mono">{stat.trend}</span>
  </motion.div>
);

export default StatsCard;
