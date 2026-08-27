import { motion } from 'framer-motion';

const Loader = () => (
  <div className="min-h-[60vh] grid place-items-center">
    <div className="relative w-16 h-16">
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: '1px solid rgba(0,0,0,0.12)' }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
        className="absolute inset-0 rounded-full"
        style={{
          border:         '2px solid transparent',
          borderTopColor: '#000000',
          borderRightColor: '#000000',
          filter:         'drop-shadow(0 0 6px rgba(0,0,0,0.7))',
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  </div>
);

export default Loader;
