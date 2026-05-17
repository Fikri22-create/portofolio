import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = ({ value, onChange, placeholder = 'Search…' }) => (
  <div className="relative">
    <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent/60 transition" />
  </div>
);

export default SearchBar;
