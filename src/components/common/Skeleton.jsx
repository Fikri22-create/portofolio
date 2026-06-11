import { cn } from '../../utils/cn';

const Skeleton = ({ className }) => (
  <div
    className={cn(
      'rounded-xl bg-[length:400%_100%] animate-shimmer',
      className
    )}
    style={{
      backgroundImage: 'linear-gradient(90deg, rgba(167,139,250,0.04) 0%, rgba(167,139,250,0.10) 50%, rgba(167,139,250,0.04) 100%)',
    }}
  />
);

export default Skeleton;
