const Loader = () => (
  <div className="min-h-[60vh] grid place-items-center">
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border-2 border-white/5" />
      <div className="absolute inset-0 rounded-full border-2 border-accent border-t-transparent animate-spin" />
    </div>
  </div>
);

export default Loader;
