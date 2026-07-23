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
            style={{ background: 'rgba(8,9,13,0.88)', backdropFilter: 'blur(16px)' }}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
            style={{
              background:        'linear-gradient(135deg, rgba(19,23,31,0.92) 0%, rgba(13,16,23,0.95) 100%)',
              backdropFilter:    'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border:            '1px solid rgba(99,102,241,0.2)',
              boxShadow:         '0 0 60px rgba(99,102,241,0.08), 0 40px 80px rgba(0,0,0,0.7)',
            }}
          >

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(129,140,248,0.4), transparent)' }}
            />


            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <h3 className="font-display text-lg font-semibold" style={{ color: '#f1f2f4' }}>{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-ink-muted transition-all duration-200"
                style={{ background: 'transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
                  e.currentTarget.style.color = '#6366f1';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#4a5568';
                }}
                aria-label="Close"
              >
                <HiOutlineXMark />
              </button>
            </div>

            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
