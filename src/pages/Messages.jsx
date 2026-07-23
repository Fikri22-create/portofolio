import { useState } from 'react';
import { motion } from 'framer-motion';
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

          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5"
            style={{
              background:     'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(79,70,229,0.04))',
              border:         '1px solid rgba(99,102,241,0.18)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.2em] font-mono"
              style={{ color: '#4a5568' }}
            >
              Email
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-base mt-2 block transition-colors duration-200 font-medium"
              style={{ color: '#f1f2f4' }}
              onMouseEnter={e => e.currentTarget.style.color = '#6366f1'}
              onMouseLeave={e => e.currentTarget.style.color = '#f1f2f4'}
            >
              {PROFILE.email}
            </a>
          </motion.div>


          <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5"
            style={{
              background:     'linear-gradient(135deg, rgba(19,23,31,0.7), rgba(13,16,23,0.8))',
              border:         '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.2em] font-mono mb-4"
              style={{ color: '#4a5568' }}
            >
              Social
            </p>
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
                    border:     '1px solid rgba(255,255,255,0.07)',
                    color:      '#8891a4',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background  = 'rgba(99,102,241,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.28)';
                    e.currentTarget.style.color       = '#6366f1';
                    e.currentTarget.style.boxShadow   = '0 0 16px rgba(99,102,241,0.15)';
                    e.currentTarget.style.transform   = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background  = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.color       = '#8891a4';
                    e.currentTarget.style.boxShadow   = 'none';
                    e.currentTarget.style.transform   = 'translateY(0)';
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>


          {/* <motion.div
            variants={fadeUp}
            className="rounded-2xl p-5 flex items-center gap-3"
            style={{
              background:     'rgba(19,23,31,0.5)',
              border:         '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{
                background: '#6366f1',
                boxShadow:  '0 0 8px rgba(99,102,241,0.9)',
              }}
            />
            {/* <p className="text-sm" style={{ color: '#8891a4' }}>
              Available for freelance & full-time opportunities.{' '}
              <span style={{ color: '#f1f2f4' }}>Usually responds within a day.</span>
            </p> */}
          {/* </motion.div> */}
        </motion.div>
      </div>

      <Toast open={toast} message="Message sent! I'll get back to you soon." />
    </div>
  );
};

export default Messages;
