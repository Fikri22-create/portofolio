import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useState } from 'react';

const SearchBar = ({ value, onChange, placeholder = 'Search…' }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative transition-all duration-300"
      style={{
        borderRadius: '1rem',
        boxShadow: focused ? '0 0 0 3px rgba(85,111,247,0.2), 0 0 20px rgba(85,111,247,0.1)' : 'none',
      }}
    >
      <HiOutlineMagnifyingGlass
        className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200"
        style={{ color: focused ? '#7B8FF9' : '#475569' }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200"
        style={{
          borderRadius: '1rem',
          background: focused ? 'rgba(85,111,247,0.08)' : 'rgba(40,54,78,0.3)',
          border: `1px solid ${focused ? 'rgba(85,111,247,0.55)' : 'rgba(40,54,78,0.9)'}`,
        }}
      />
    </div>
  );
};

export default SearchBar;
