import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const FilterTabs = ({ tabs, active, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {tabs.map((t) => (
      <button
        key={t}
        onClick={() => onChange(t)}
        className={cn(
          'relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border',
          active === t ? 'text-white border-transparent' : 'text-slate-400 hover:text-white'
        )}
        style={
          active !== t
            ? { borderColor: 'rgba(40,54,78,0.9)', background: 'transparent' }
            : {}
        }
        onMouseEnter={e => {
          if (active !== t) e.currentTarget.style.borderColor = 'rgba(85,111,247,0.4)';
        }}
        onMouseLeave={e => {
          if (active !== t) e.currentTarget.style.borderColor = 'rgba(40,54,78,0.9)';
        }}
      >
        {active === t && (
          <motion.span
            layoutId="filterPill"
            className="absolute inset-0 rounded-full -z-10"
            style={{
              background: 'linear-gradient(135deg, #3D55E8, #556FF7, #7B8FF9)',
              boxShadow: '0 0 16px rgba(85,111,247,0.4)',
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
