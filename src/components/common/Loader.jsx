import { motion } from 'framer-motion';

const Loader = () => (
  <div className="min-h-[60vh] grid place-items-center">
    <div className="relative w-16 h-16">
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: '1px solid rgba(167,139,250,0.15)' }}
      />
      {/* Spinning gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
        className="absolute inset-0 rounded-full"
        style={{
          border: '2px solid transparent',
          borderTopColor: '#556FF7',
          borderRightColor: '#7B8FF9',
          filter: 'drop-shadow(0 0 6px rgba(85,111,247,0.6))',
        }}
      />
      {/* Inner glow dot */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(85,111,247,0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  </div>
);

export default Loader;
