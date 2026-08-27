import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../constants/navigation';
import { cn } from '../../utils/cn';

const MobileNavbar = () => (
  <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 rounded-2xl px-1.5 py-2 flex items-center justify-between gap-1 bg-bg-primary/95 backdrop-blur-xl border border-white/10 shadow-card-lg pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
    {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
      <NavLink
        key={path}
        to={path}
        end={path === '/'}
        className="flex-1 min-w-0 flex flex-col items-center gap-1 px-1 py-1.5 rounded-xl text-[10px] transition-all duration-200 relative group"
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                layoutId="mobileActivePill"
                className="absolute inset-0 rounded-xl bg-white/5 border border-white/5"
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            <Icon
              className={cn(
                'text-xl relative z-10 transition-all duration-200', 
                isActive ? 'text-accent-primary drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'text-text-secondary group-hover:text-text-primary'
              )}
            />
            <span
              className={cn(
                'font-medium relative z-10 tracking-wide',
                isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
              )}
            >
              {label}
            </span>
          </>
        )}
      </NavLink>
    ))}
  </nav>
);

export default MobileNavbar;
