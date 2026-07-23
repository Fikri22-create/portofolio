import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../constants/navigation';
import { cn } from '../../utils/cn';

const MobileNavbar = () => (
  <nav
    className="md:hidden fixed bottom-3 left-3 right-3 z-50 rounded-2xl px-2 py-2 flex justify-between"
    style={{
      background: 'linear-gradient(135deg, rgba(13,16,23,0.92) 0%, rgba(8,9,13,0.95) 100%)',
      backdropFilter: 'blur(28px)',
      WebkitBackdropFilter: 'blur(28px)',
      border: '1px solid rgba(255,255,255,0.07)',
      boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.04)',
    }}
  >
    {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
      <NavLink
        key={path}
        to={path}
        end={path === '/'}
        className="flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-xl text-[10px] transition-all duration-200 relative"
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                layoutId="mobileActivePill"
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.14), rgba(79,70,229,0.08))',
                  border:     '1px solid rgba(99,102,241,0.2)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            <Icon
              className={cn('text-lg relative z-10 transition-all duration-200', isActive ? 'drop-shadow-[0_0_6px_rgba(99,102,241,0.9)]' : '')}
              style={isActive ? { color: '#6366f1' } : { color: '#4a5568' }}
            />
            <span
              className="font-medium relative z-10 tracking-wide"
              style={isActive ? { color: '#818cf8' } : { color: '#4a5568' }}
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
