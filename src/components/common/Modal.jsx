import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useEffect } from 'react';

const Modal = ({ open, onClose, children, title }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-bg/80 backdrop-blur-md" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative glass-strong rounded-3xl w-full max-w-2xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <h3 className="font-display text-lg text-white">{title}</h3>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-accent transition" aria-label="Close">
                <HiOutlineXMark />
              </button>
            </div>
            <div className="p-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
