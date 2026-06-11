import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../constants/navigation';
import { cn } from '../../utils/cn';

const MobileNavbar = () => (
  <nav
    className="md:hidden fixed bottom-3 left-3 right-3 z-50 rounded-2xl px-2 py-2 flex justify-between"
    style={{
      background: 'linear-gradient(135deg, rgba(40,54,78,0.75) 0%, rgba(40,54,78,0.5) 100%)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      border: '1px solid rgba(85,111,247,0.2)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(85,111,247,0.05)',
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
                  background: 'linear-gradient(135deg, rgba(61,85,232,0.35), rgba(85,111,247,0.2))',
                  border: '1px solid rgba(85,111,247,0.3)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            <Icon
              className={cn('text-lg relative z-10 transition-all duration-200', isActive ? 'drop-shadow-[0_0_6px_rgba(85,111,247,0.9)]' : '')}
              style={isActive ? { color: '#7B8FF9' } : { color: '#64748b' }}
            />
            <span
              className="font-medium relative z-10"
              style={isActive ? { color: '#a5b4fc' } : { color: '#64748b' }}
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
