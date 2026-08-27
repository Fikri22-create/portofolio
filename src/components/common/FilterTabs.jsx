import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const FilterTabs = ({ tabs, active, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {tabs.map((t) => (
      <button
        key={t}
        onClick={() => onChange(t)}
        className={cn(
          'relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 border',
          active === t
            ? 'text-white bg-accent-primary border-accent-primary shadow-glow'
            : 'text-text-secondary bg-transparent border-white/10 hover:border-accent-primary/30 hover:text-text-primary'
        )}
      >
        {active === t && (
          <motion.span
            layoutId="filterPill"
            className="absolute inset-0 rounded-lg -z-10 bg-accent-primary"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        {t}
      </button>
    ))}
  </div>
);

export default FilterTabs;

