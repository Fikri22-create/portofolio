import { motion } from 'framer-motion';

const CARD_COLORS = [
  { bg: 'bg-accent-primary/5', border: 'border-accent-primary/20', text: 'text-accent-primary' },
  { bg: 'bg-emerald-accent/5', border: 'border-emerald-accent/20', text: 'text-emerald-accent' },
  { bg: 'bg-rose-error/5', border: 'border-rose-error/20', text: 'text-rose-error' },
  { bg: 'bg-amber-warning/5', border: 'border-amber-warning/20', text: 'text-amber-warning' },
];

const StatsCard = ({ stat, index }) => {
  const colorSet = CARD_COLORS[index % 4];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -2, scale: 1.02 }}
      className={`card ${colorSet.bg} ${colorSet.border}`}
    >
      <p className="text-xs uppercase tracking-widest font-semibold text-text-tertiary mb-2">
        {stat.label}
      </p>
      <p className="text-3xl sm:text-4xl font-bold text-text-primary">
        {stat.value}
      </p>
      {stat.trend && (
        <p className={`text-xs font-semibold mt-2 ${colorSet.text}`}>
          {stat.trend}
        </p>
      )}
    </motion.div>
  );
};

export default StatsCard;
