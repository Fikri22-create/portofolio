import { motion } from 'framer-motion';

const CARD_GRADIENTS = [
  'linear-gradient(135deg, rgba(61,85,232,0.22), rgba(85,111,247,0.08))',
  'linear-gradient(135deg, rgba(40,54,78,0.6), rgba(85,111,247,0.10))',
  'linear-gradient(135deg, rgba(85,111,247,0.18), rgba(123,143,249,0.08))',
  'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(85,111,247,0.08))',
];

const GLOW_COLORS = [
  'rgba(85,111,247,0.4)',
  'rgba(123,143,249,0.35)',
  'rgba(85,111,247,0.35)',
  'rgba(56,189,248,0.35)',
];

const ACCENT_COLORS = ['#7B8FF9', '#556FF7', '#a5b4fc', '#38bdf8'];

const StatsCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="relative rounded-2xl p-6 overflow-hidden"
    style={{
      background: CARD_GRADIENTS[index % 4],
      border: `1px solid rgba(40,54,78,0.9)`,
      backdropFilter: 'blur(16px)',
    }}
  >
    {/* Glow accent top-right */}
    <div
      className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-40"
      style={{
        background: `radial-gradient(circle, ${GLOW_COLORS[index % 4]}, transparent 70%)`,
        filter: 'blur(12px)',
      }}
    />
    <p className="text-xs uppercase tracking-wider text-slate-400 relative z-10">{stat.label}</p>
    <p className="font-display text-3xl mt-2 text-white relative z-10">{stat.value}</p>
    <span
      className="absolute top-4 right-4 text-[11px] px-2.5 py-0.5 rounded-full font-mono"
      style={{
        background: `${ACCENT_COLORS[index % 4]}20`,
        color: ACCENT_COLORS[index % 4],
        border: `1px solid ${ACCENT_COLORS[index % 4]}30`,
      }}
    >
      {stat.trend}
    </span>
  </motion.div>
);

export default StatsCard;
