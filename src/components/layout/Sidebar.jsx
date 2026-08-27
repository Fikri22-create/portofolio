import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { NAV_ITEMS } from '../../constants/navigation';
import { PROFILE } from '../../constants/profile';
import { cn } from '../../utils/cn';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 248 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:flex fixed top-0 left-0 h-screen z-40 flex-col bg-bg-primary/95 backdrop-blur-xl border-r border-white/5"
    >
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-sm">
              <img src={PROFILE.foto} className="w-full h-full object-cover" alt={PROFILE.name} />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none text-text-primary">
                {PROFILE.name.split(' ')[1]}
              </p>
              <p className="text-[11px] mt-1 font-mono text-text-secondary">
                {PROFILE.role}
              </p>
            </div>
          </motion.div>
        )}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-200"
          aria-label="Toggle sidebar"
        >
          <HiOutlineChevronLeft className={cn('transition-transform duration-300 text-base', collapsed && 'rotate-180')} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              cn(
                'group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200',
                isActive ? 'bg-white/5 text-text-primary font-medium' : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
              )
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-accent-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}
                <span className={cn('text-xl shrink-0 transition-all duration-200', isActive ? 'text-accent-primary' : '')}>
                  <Icon />
                </span>
                {!collapsed && (
                  <span className="tracking-wide">
                    {label}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {!collapsed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 m-3 rounded-2xl text-xs bg-bg-secondary/50 border border-white/5"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <p className="font-semibold text-text-primary">Currently</p>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Full Stack Developer Intern – Innovation Center at PT TMS Consulting
          </p>
        </motion.div>
      )}
    </motion.aside>
  );
};

export default Sidebar;
