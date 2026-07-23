import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const FilterTabs = ({ tabs, active, onChange }) => (
  <div className="flex flex-wrap gap-1.5">
    {tabs.map((t) => (
      <button
        key={t}
        onClick={() => onChange(t)}
        className={cn(
          'relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border',
          active === t ? 'text-white font-semibold border-transparent' : 'border-line hover:border-accent/30'
        )}
        style={active !== t ? { background: 'transparent', color: '#4a5568' } : {}}
        onMouseEnter={e => {
          if (active !== t) e.currentTarget.style.color = '#8891a4';
        }}
        onMouseLeave={e => {
          if (active !== t) e.currentTarget.style.color = '#4a5568';
        }}
      >
        {active === t && (
          <motion.span
            layoutId="filterPill"
            className="absolute inset-0 rounded-full -z-10"
            style={{
              background:  'linear-gradient(135deg, #6366f1, #4f46e5)',
              boxShadow:   '0 0 16px rgba(99,102,241,0.35)',
            }}
            transition={{ type: 'spring', stiffness: 380, damping: 35 }}
          />
        )}
        {t}
      </button>
    ))}
  </div>
);

export default FilterTabs;
