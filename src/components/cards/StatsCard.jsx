import { motion } from 'framer-motion';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(79,70,229,0.05))',
  'linear-gradient(135deg, rgba(19,23,31,0.8), rgba(99,102,241,0.06))',
  'linear-gradient(135deg, rgba(99,102,241,0.10), rgba(129,140,248,0.04))',
  'linear-gradient(135deg, rgba(79,70,229,0.08), rgba(99,102,241,0.05))',
];

const GLOW_COLORS = [
  'rgba(99,102,241,0.35)',
  'rgba(129,140,248,0.3)',
  'rgba(99,102,241,0.3)',
  'rgba(79,70,229,0.3)',
];

const ACCENT_COLORS = ['#6366f1', '#818cf8', '#4f46e5', '#6366f1'];

const StatsCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 22, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="relative rounded-2xl p-4 sm:p-6 overflow-hidden"
    style={{
      background: CARD_GRADIENTS[index % 4],
      border:     '1px solid rgba(255,255,255,0.07)',
      backdropFilter: 'blur(16px)',
    }}
  >
    <div
      className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-40"
      style={{
        background: `radial-gradient(circle, ${GLOW_COLORS[index % 4]}, transparent 70%)`,
        filter: 'blur(12px)',
      }}
    />
    <p className="text-[11px] uppercase tracking-widest font-mono relative z-10" style={{ color: '#4a5568' }}>
      {stat.label}
    </p>
    <p className="font-display text-2xl sm:text-3xl mt-2 relative z-10" style={{ color: '#f1f2f4' }}>
      {stat.value}
    </p>
    <span
      className="absolute top-4 right-4 text-[10px] px-2.5 py-0.5 rounded-full font-mono"
      style={{
        background: `${ACCENT_COLORS[index % 4]}18`,
        color:      ACCENT_COLORS[index % 4],
        border:     `1px solid ${ACCENT_COLORS[index % 4]}30`,
      }}
    >
      {stat.trend}
    </span>
  </motion.div>
);

export default StatsCard;
