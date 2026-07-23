import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useState } from 'react';

const SearchBar = ({ value, onChange, placeholder = 'Search…' }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative transition-all duration-300"
      style={{
        borderRadius: '1rem',
        boxShadow: focused ? '0 0 0 3px rgba(99,102,241,0.15), 0 0 20px rgba(99,102,241,0.08)' : 'none',
      }}
    >
      <HiOutlineMagnifyingGlass
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm transition-colors duration-200"
        style={{ color: focused ? '#6366f1' : '#4a5568' }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 text-sm outline-none transition-all duration-200 placeholder:text-ink-muted"
        style={{
          borderRadius:  '1rem',
          background:    focused ? 'rgba(99,102,241,0.06)' : 'rgba(19,23,31,0.6)',
          border:        `1px solid ${focused ? 'rgba(99,102,241,0.4)' : 'rgba(255,255,255,0.07)'}`,
          color:         '#f1f2f4',
        }}
      />
    </div>
  );
};

export default SearchBar;
