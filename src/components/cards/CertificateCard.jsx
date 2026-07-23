import { motion } from 'framer-motion';
import { HiOutlineEye } from 'react-icons/hi2';

const CertificateCard = ({ certificate, onOpen, index }) => (
  <motion.button
    onClick={() => onOpen(certificate)}
    initial={{ opacity: 0, y: 24, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6 }}
    className="group relative overflow-hidden rounded-2xl text-left w-full neon-border"
    style={{
      background:     'linear-gradient(145deg, rgba(19,23,31,0.85) 0%, rgba(13,16,23,0.75) 100%)',
      backdropFilter: 'blur(16px)',
      border:         '1px solid rgba(255,255,255,0.07)',
      transition:     'border-color 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)';
      e.currentTarget.style.boxShadow   = '0 0 40px -10px rgba(99,102,241,0.18), 0 24px 60px -20px rgba(0,0,0,0.7)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      e.currentTarget.style.boxShadow   = 'none';
    }}
  >

    <div
      className="absolute top-0 left-0 right-0 h-px opacity-60"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }}
    />


    <div className="relative w-full h-56 overflow-hidden rounded-t-xl bg-bg">
      <iframe
        src={`${certificate.file}#toolbar=0&view=FitH&zoom=page-width`}
        className="w-full h-full"
        title={certificate.title}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 grid place-items-center"
        style={{ background: 'rgba(13,16,23,0.6)', backdropFilter: 'blur(4px)' }}
      >
        <span
          className="text-xs px-4 py-2 rounded-xl font-semibold flex items-center gap-2"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color:      '#ffffff',
            boxShadow:  '0 0 20px rgba(99,102,241,0.35)',
          }}
        >
          <HiOutlineEye />
          Preview
        </span>
      </div>
    </div>


    <div className="p-4 space-y-1.5">
      <p
        className="font-display font-medium leading-tight transition-colors duration-200"
        style={{ color: '#f1f2f4' }}
      >
        {certificate.title}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: '#8891a4' }}>
        {certificate.description}
      </p>
    </div>
  </motion.button>
);

export default CertificateCard;
