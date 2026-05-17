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
      animate={{ width: collapsed ? 88 : 256 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:flex fixed top-0 left-0 h-screen z-40 glass-strong border-r border-white/5 flex-col"
    >
      <div className="flex items-center justify-between p-5 border-b border-white/5">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden">
              <img
                src={PROFILE.foto}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-none">{PROFILE.name.split(' ')[1]}</p>
              <p className="text-[11px] text-slate-400 mt-1">{PROFILE.role}</p>
            </div>
          </div>
        )}
        <button onClick={() => setCollapsed((c) => !c)}
          className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400 hover:text-accent transition"
          aria-label="Toggle sidebar">
          <HiOutlineChevronLeft className={cn('transition-transform', collapsed && 'rotate-180')} />
        </button>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
          <NavLink key={path} to={path} end={path === '/'}
            className={({ isActive }) =>
              cn('group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all',
                isActive ? 'bg-accent/10 text-accent' : 'text-slate-400 hover:text-white hover:bg-white/5')
            }>
            {({ isActive }) => (
              <>
                {isActive && <motion.span layoutId="activePill" className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-accent rounded-r-full" />}
                <Icon className="text-xl shrink-0" />
                {!collapsed && <span className="font-medium">{label}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {!collapsed && (
        <div className="p-4 m-3 rounded-2xl glass text-xs text-slate-400">
          <p className="text-white font-medium mb-1">Available for work</p>
          <p>Open to full-stack developer roles (remote or on-site)<br />{PROFILE.location}</p>
        </div>
      )}
    </motion.aside>
  );
};

export default Sidebar;
