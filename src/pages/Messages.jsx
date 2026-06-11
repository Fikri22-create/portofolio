import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/forms/ContactForm';
import Toast from '../components/common/Toast';
import { SOCIALS } from '../data/socials';
import { PROFILE } from '../constants/profile';
import { fadeUp, stagger } from '../animations/variants';

const Messages = () => {
  const [toast, setToast] = useState(false);

  const onSuccess = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2800);
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Get in touch"
        title="Let's work together"
        description="Have a project in mind, or just want to say hi? Drop a message — I respond within 24h."
      />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
        <ContactForm onSuccess={onSuccess} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {/* Email card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(135deg, rgba(167,139,250,0.08), rgba(129,140,248,0.04))',
              border: '1px solid rgba(167,139,250,0.18)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-white text-lg mt-1 block transition-colors duration-200 hover:text-violet-300"
            >
              {PROFILE.email}
            </a>
          </motion.div>

          {/* WhatsApp card */}
          <motion.a
            variants={fadeUp}
            href={`https://wa.me/${PROFILE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl p-5 flex items-center gap-4 group transition-all duration-300 block"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(16px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(74,222,128,0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(74,222,128,0.08), rgba(74,222,128,0.03))';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))';
            }}
          >
            <div
              className="w-12 h-12 rounded-xl grid place-items-center text-xl shrink-0 transition-all duration-300"
              style={{
                background: 'rgba(74,222,128,0.1)',
                color: '#4ade80',
              }}
            >
              <FaWhatsapp />
            </div>
            <div>
              <p className="text-white font-medium">Chat on WhatsApp</p>
              <p className="text-xs text-slate-400">Usually replies in a few hours</p>
            </div>
          </motion.a>

          {/* Socials card */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">Social</p>
            <div className="grid grid-cols-4 gap-2">
              {SOCIALS.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="aspect-square grid place-items-center rounded-xl text-lg transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: '#94a3b8',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(167,139,250,0.12)';
                    e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)';
                    e.currentTarget.style.color = '#a78bfa';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(167,139,250,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Toast open={toast} message="Message sent! I'll get back to you soon." />
    </div>
  );
};

export default Messages;
