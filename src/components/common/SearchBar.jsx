import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useState } from 'react';

const SearchBar = ({ value, onChange, placeholder = 'Search…' }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative transition-all duration-300"
      style={{
        boxShadow: focused ? '0 0 0 3px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <HiOutlineMagnifyingGlass
        className="absolute left-4 top-1/2 -translate-y-1/2 text-base transition-colors duration-300"
        style={{ color: focused ? '#000000' : '#7a8290' }}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="input-field pl-12 pr-4"
        style={{
          borderColor: focused ? 'rgba(0, 0, 0, 0.5)' : undefined,
          backgroundColor: focused ? 'rgba(0, 0, 0, 0.03)' : undefined,
        }}
      />
    </div>
  );
};

export default SearchBar;
