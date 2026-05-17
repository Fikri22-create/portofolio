import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi2';

const Toast = ({ open, message }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}
        className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[70] glass-strong rounded-2xl px-5 py-3 flex items-center gap-3 text-sm text-white shadow-glow">
        <HiOutlineCheckCircle className="text-accent text-xl" />
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Toast;
