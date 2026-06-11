import { motion } from 'framer-motion';
import { HiOutlineEye } from 'react-icons/hi2';

const CertificateCard = ({ certificate, onOpen, index }) => (
  <motion.button
    onClick={() => onOpen(certificate)}
    initial={{ opacity: 0, y: 24, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6 }}
    className="group relative overflow-hidden rounded-2xl text-left w-full neon-border"
    style={{
      background: 'linear-gradient(135deg, rgba(40,54,78,0.55) 0%, rgba(40,54,78,0.25) 100%)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(40,54,78,0.9)',
      transition: 'all 0.35s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(85,111,247,0.4)';
      e.currentTarget.style.boxShadow = '0 0 40px -10px rgba(85,111,247,0.3), 0 20px 60px -20px rgba(0,0,0,0.6)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(40,54,78,0.9)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {/* Subtle top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-px opacity-60"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(85,111,247,0.6), transparent)' }}
    />

    <div className="relative w-full h-56 overflow-hidden rounded-t-xl bg-black">
      <iframe
        src={`${certificate.file}#toolbar=0&view=FitH&zoom=page-width`}
        className="w-full h-full"
        title={certificate.title}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center"
        style={{ background: 'rgba(6,6,18,0.6)', backdropFilter: 'blur(4px)' }}
      >
        <span
          className="text-xs px-4 py-2 rounded-xl font-medium text-white flex items-center gap-2"
          style={{
            background: 'linear-gradient(135deg, rgba(61,85,232,0.9), rgba(85,111,247,0.8))',
            boxShadow: '0 0 20px rgba(85,111,247,0.4)',
          }}
        >
          <HiOutlineEye />
          Preview
        </span>
      </div>
    </div>

    <div className="p-4 space-y-1">
      <p className="text-white font-medium leading-tight group-hover:text-blue-300 transition-colors duration-200">
        {certificate.title}
      </p>
      <p className="text-xs text-slate-400 leading-relaxed">
        {certificate.description}
      </p>
    </div>
  </motion.button>
);

export default CertificateCard;
