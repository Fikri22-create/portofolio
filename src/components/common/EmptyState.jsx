import { motion } from 'framer-motion';
import { HiOutlineInboxStack } from 'react-icons/hi2';

const EmptyState = ({ title = 'Nothing here yet', description }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl p-8 sm:p-14 text-center"
    style={{
      background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(19,23,31,0.7))',
      border:     '1px solid rgba(99,102,241,0.15)',
      backdropFilter: 'blur(16px)',
    }}
  >
    <div
      className="w-16 h-16 rounded-2xl mx-auto mb-4 grid place-items-center text-3xl"
      style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(79,70,229,0.08))',
        border:     '1px solid rgba(99,102,241,0.2)',
        color:      '#6366f1',
        filter:     'drop-shadow(0 0 12px rgba(99,102,241,0.3))',
      }}
    >
      <HiOutlineInboxStack />
    </div>
    <p className="font-medium" style={{ color: '#f1f2f4' }}>{title}</p>
    {description && <p className="text-sm mt-1.5" style={{ color: '#8891a4' }}>{description}</p>}
  </motion.div>
);

export default EmptyState;
