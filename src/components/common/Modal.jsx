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
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: 'rgba(6,6,18,0.85)', backdropFilter: 'blur(12px)' }}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(40,54,78,0.7) 0%, rgba(40,54,78,0.45) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(85,111,247,0.3)',
              boxShadow: '0 0 60px rgba(61,85,232,0.2), 0 40px 80px rgba(0,0,0,0.5)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(85,111,247,0.7), rgba(123,143,249,0.5), transparent)' }}
            />
            <div
              className="flex items-center justify-between p-5"
              style={{ borderBottom: '1px solid rgba(85,111,247,0.15)' }}
            >
              <h3 className="font-display text-lg text-white">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 transition-all duration-200"
                style={{ background: 'transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(85,111,247,0.1)';
                  e.currentTarget.style.color = '#7B8FF9';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#94a3b8';
                }}
                aria-label="Close"
              >
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
