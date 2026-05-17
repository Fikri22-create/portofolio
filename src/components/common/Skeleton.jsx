import { cn } from '../../utils/cn';

const Skeleton = ({ className }) => (
  <div className={cn('rounded-xl bg-gradient-to-r from-white/[0.03] via-white/[0.08] to-white/[0.03] bg-[length:400%_100%] animate-shimmer', className)} />
);

export default Skeleton;
