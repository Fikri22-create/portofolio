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
      className="hidden md:flex fixed top-0 left-0 h-screen z-40 flex-col"
      style={{
        background: 'linear-gradient(180deg, rgba(13,16,23,0.95) 0%, rgba(8,9,13,0.98) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '4px 0 40px rgba(0,0,0,0.5), inset -1px 0 0 rgba(99,102,241,0.04)',
      }}
    >

      <div
        className="flex items-center justify-between p-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div
              className="w-9 h-9 rounded-xl overflow-hidden shrink-0"
              style={{
                boxShadow: '0 0 16px rgba(99,102,241,0.3)',
                border:    '1px solid rgba(99,102,241,0.25)',
              }}
            >
              <img src={PROFILE.foto} className="w-full h-full object-cover" alt={PROFILE.name} />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none" style={{ color: '#f1f2f4' }}>
                {PROFILE.name.split(' ')[1]}
              </p>
              <p className="text-[11px] mt-1 font-mono" style={{ color: '#6366f1' }}>
                {PROFILE.role}
              </p>
            </div>
          </motion.div>
        )}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="p-1.5 rounded-lg text-ink-muted transition-all duration-200"
          style={{ background: 'transparent' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
            e.currentTarget.style.color = '#6366f1';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#4a5568';
          }}
          aria-label="Toggle sidebar"
        >
          <HiOutlineChevronLeft className={cn('transition-transform duration-300 text-base', collapsed && 'rotate-180')} />
        </button>
      </div>


      <nav className="flex-1 px-3 py-5 space-y-0.5">
        {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              cn(
                'group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200',
                isActive ? 'text-white' : 'text-ink-muted hover:text-ink-secondary'
              )
            }
            style={({ isActive }) =>
              isActive
                ? {
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(79,70,229,0.07))',
                    boxShadow:  'inset 0 1px 0 rgba(99,102,241,0.12)',
                  }
                : {}
            }
            onMouseEnter={e => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
              if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
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
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r-full"
                    style={{ background: 'linear-gradient(180deg, #6366f1, #4f46e5)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}
                <span
                  className={cn(
                    'text-xl shrink-0 transition-all duration-200',
                    isActive ? 'drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]' : ''
                  )}
                  style={isActive ? { color: '#6366f1' } : {}}
                >
                  <Icon />
                </span>
                {!collapsed && (
                  <span className={cn('font-medium tracking-wide', isActive ? 'text-ink-primary' : '')}
                    style={isActive ? { color: '#f1f2f4' } : {}}>
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
          className="p-4 m-3 rounded-2xl text-xs"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(79,70,229,0.04))',
            border:     '1px solid rgba(99,102,241,0.15)',
          }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background:  '#6366f1',
                boxShadow:   '0 0 8px rgba(99,102,241,0.9)',
                animation:   'pulse-glow 2.5s ease-in-out infinite',
              }}
            />
            <p className="font-semibold" style={{ color: '#f1f2f4' }}>Currently</p>
          </div>
          <p style={{ color: '#8891a4', lineHeight: '1.6' }}>
            Brand Marketing & Communications Intern at TMS Consulting
          </p>
        </motion.div>
      )}
    </motion.aside>
  );
};

export default Sidebar;
