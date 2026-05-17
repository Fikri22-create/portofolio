import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const FilterTabs = ({ tabs, active, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {tabs.map((t) => (
      <button key={t} onClick={() => onChange(t)}
        className={cn('relative px-4 py-1.5 rounded-full text-xs font-medium transition border',
          active === t ? 'text-bg border-accent' : 'text-slate-400 border-white/10 hover:text-white hover:border-white/20')}>
        {active === t && <motion.span layoutId="filterPill" className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-blue -z-10" />}
        {t}
      </button>
    ))}
  </div>
);

export default FilterTabs;
