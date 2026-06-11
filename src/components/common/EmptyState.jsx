import { motion } from 'framer-motion';
import { HiOutlineInboxStack } from 'react-icons/hi2';

const EmptyState = ({ title = 'Nothing here yet', description }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl p-14 text-center"
    style={{
      background: 'linear-gradient(135deg, rgba(85,111,247,0.08), rgba(40,54,78,0.4))',
      border: '1px solid rgba(85,111,247,0.18)',
      backdropFilter: 'blur(16px)',
    }}
  >
    <div
      className="w-16 h-16 rounded-2xl mx-auto mb-4 grid place-items-center text-3xl"
      style={{
        background: 'linear-gradient(135deg, rgba(61,85,232,0.25), rgba(85,111,247,0.12))',
        border: '1px solid rgba(85,111,247,0.25)',
        color: '#7B8FF9',
        filter: 'drop-shadow(0 0 12px rgba(85,111,247,0.3))',
      }}
    >
      <HiOutlineInboxStack />
    </div>
    <p className="text-white font-medium">{title}</p>
    {description && <p className="text-slate-400 text-sm mt-1">{description}</p>}
  </motion.div>
);

export default EmptyState;
