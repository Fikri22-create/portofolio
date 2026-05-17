import { motion } from 'framer-motion';
import { HiOutlineEye } from 'react-icons/hi2';

const CertificateCard = ({ certificate, onOpen, index }) => (
  <motion.button
    onClick={() => onOpen(certificate)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.04 }}
    whileHover={{ y: -4 }}
    className="card p-0 overflow-hidden group text-left break-inside-avoid mb-5 w-full"
  >
    <div className="relative w-full h-56 overflow-hidden rounded-t-xl bg-black">
      <iframe
        src={`${certificate.file}#toolbar=0&view=FitH&zoom=page-width`}
        className="w-full h-full"
        title={certificate.title}
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition grid place-items-center">
        <span className="btn-primary text-xs flex items-center gap-2">
          <HiOutlineEye />
          Preview
        </span>
      </div>
    </div>

    <div className="p-4 space-y-1">
      <p className="text-white font-medium leading-tight">
        {certificate.title}
      </p>
      <p className="text-xs text-slate-400 leading-relaxed">
        {certificate.description}
      </p>
    </div>
  </motion.button>
);

export default CertificateCard;