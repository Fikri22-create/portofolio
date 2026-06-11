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
      className="hidden md:flex fixed top-0 left-0 h-screen z-40 flex-col"
      style={{
        background: 'linear-gradient(180deg, rgba(40,54,78,0.6) 0%, rgba(40,54,78,0.3) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRight: '1px solid rgba(85,111,247,0.15)',
        boxShadow: '4px 0 30px rgba(0,0,0,0.3), inset -1px 0 0 rgba(85,111,247,0.06)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between p-5"
        style={{ borderBottom: '1px solid rgba(85,111,247,0.12)' }}
      >
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div
              className="w-9 h-9 rounded-xl overflow-hidden"
              style={{
                boxShadow: '0 0 16px rgba(85,111,247,0.4)',
                border: '1px solid rgba(85,111,247,0.35)',
              }}
            >
              <img src={PROFILE.foto} className="w-full h-full object-cover" alt={PROFILE.name} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-none">{PROFILE.name.split(' ')[1]}</p>
              <p className="text-[11px] mt-1" style={{ color: '#7B8FF9' }}>{PROFILE.role}</p>
            </div>
          </motion.div>
        )}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="p-1.5 rounded-lg text-slate-400 transition-all duration-200"
          style={{ background: 'transparent' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(85,111,247,0.1)';
            e.currentTarget.style.color = '#7B8FF9';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#94a3b8';
          }}
          aria-label="Toggle sidebar"
        >
          <HiOutlineChevronLeft className={cn('transition-transform duration-300', collapsed && 'rotate-180')} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              cn(
                'group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200',
                isActive
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              )
            }
            style={({ isActive }) =>
              isActive
                ? {
                    background: 'linear-gradient(135deg, rgba(61,85,232,0.25), rgba(85,111,247,0.15))',
                    boxShadow: 'inset 0 1px 0 rgba(85,111,247,0.2)',
                  }
                : {}
            }
            onMouseEnter={e => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
              if (!isActive) e.currentTarget.style.background = 'rgba(40,54,78,0.5)';
            }}
            onMouseLeave={e => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
              if (!isActive) e.currentTarget.style.background = 'transparent';
            }}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full"
                    style={{ background: 'linear-gradient(180deg, #556FF7, #7B8FF9)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}
                <span
                  className={cn('text-xl shrink-0 transition-all duration-200', isActive ? 'drop-shadow-[0_0_8px_rgba(85,111,247,0.9)]' : '')}
                  style={isActive ? { color: '#7B8FF9' } : {}}
                >
                  <Icon />
                </span>
                {!collapsed && (
                  <span className={cn('font-medium', isActive ? 'text-white' : '')}>{label}</span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer card */}
      {!collapsed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 m-3 rounded-2xl text-xs text-slate-400"
          style={{
            background: 'linear-gradient(135deg, rgba(61,85,232,0.15), rgba(85,111,247,0.07))',
            border: '1px solid rgba(85,111,247,0.2)',
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2 h-2 rounded-full animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg, #556FF7, #38bdf8)', boxShadow: '0 0 8px rgba(85,111,247,0.8)' }}
            />
            <p className="text-white font-medium">Available for work</p>
          </div>
          <p>Open to full-stack roles (remote or on-site)<br />{PROFILE.location}</p>
        </motion.div>
      )}
    </motion.aside>
  );
};

export default Sidebar;
