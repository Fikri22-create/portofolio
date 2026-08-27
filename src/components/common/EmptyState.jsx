import { motion } from 'framer-motion';
import { HiOutlineInboxStack } from 'react-icons/hi2';

const EmptyState = ({ title = 'Nothing here yet', description }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="card-lg text-center py-12 md:py-16"
  >
    <div className="w-16 h-16 rounded-xl mx-auto mb-4 grid place-items-center text-3xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary">
      <HiOutlineInboxStack />
    </div>
    <p className="font-semibold text-lg text-text-primary mb-2">{title}</p>
    {description && (
      <p className="text-text-secondary">{description}</p>
    )}
  </motion.div>
);

export default EmptyState;
