import { HiOutlineInboxStack } from 'react-icons/hi2';

const EmptyState = ({ title = 'Nothing here yet', description }) => (
  <div className="card text-center py-14">
    <HiOutlineInboxStack className="mx-auto text-4xl text-slate-500 mb-3" />
    <p className="text-white font-medium">{title}</p>
    {description && <p className="text-slate-400 text-sm mt-1">{description}</p>}
  </div>
);

export default EmptyState;
