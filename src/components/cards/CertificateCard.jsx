import { motion } from 'framer-motion';
import { HiOutlineEye } from 'react-icons/hi2';

const CertificateCard = ({ certificate, index }) => {
  const handlePreview = () => {
    window.open(certificate.file, '_blank');
  };

  return (
    <motion.button
      onClick={handlePreview}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl text-left w-full h-full flex flex-col bg-bg-secondary border border-white/5 shadow-card hover:border-white/10 hover:shadow-card-lg transition-all"
    >
      <div className="p-5 flex flex-col h-full w-full">
        <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded-lg bg-bg-tertiary border border-white/5">
          <iframe
            src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
            className="w-full h-full object-cover pointer-events-none"
            title={certificate.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-sm px-4 py-2 rounded-lg font-semibold flex items-center gap-2 bg-text-primary text-bg-primary shadow-lg hover:opacity-90">
              <HiOutlineEye />
              Preview
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <p className="font-semibold text-text-primary text-sm leading-tight mb-2">
            {certificate.title}
          </p>
          <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
            {certificate.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
};

export default CertificateCard;
