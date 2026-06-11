import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi2';

const Toast = ({ open, message }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.9 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[70] rounded-2xl px-5 py-3 flex items-center gap-3 text-sm text-white"
        style={{
          background: 'linear-gradient(135deg, rgba(40,54,78,0.85) 0%, rgba(40,54,78,0.65) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(85,111,247,0.35)',
          boxShadow: '0 0 30px rgba(85,111,247,0.25), 0 20px 40px rgba(0,0,0,0.4)',
          whiteSpace: 'nowrap',
        }}
      >
        <HiOutlineCheckCircle className="text-xl shrink-0" style={{ color: '#7B8FF9', filter: 'drop-shadow(0 0 6px rgba(85,111,247,0.8))' }} />
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Toast;
