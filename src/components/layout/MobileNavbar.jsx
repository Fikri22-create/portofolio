import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/navigation';
import { cn } from '../../utils/cn';

const MobileNavbar = () => (
  <nav className="md:hidden fixed bottom-3 left-3 right-3 z-50 glass-strong rounded-2xl px-2 py-2 flex justify-between">
    {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
      <NavLink key={path} to={path} end={path === '/'}
        className={({ isActive }) =>
          cn('flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-xl text-[10px] transition',
            isActive ? 'text-accent bg-accent/10' : 'text-slate-400')
        }>
        <Icon className="text-lg" />
        <span className="font-medium">{label}</span>
      </NavLink>
    ))}
  </nav>
);

export default MobileNavbar;
