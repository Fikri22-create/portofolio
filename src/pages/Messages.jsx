import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/forms/ContactForm';
import Toast from '../components/common/Toast';
import { SOCIALS } from '../data/socials';
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
        description="Have a project in mind, or just want to say hi? Drop a message I respond within 24h."
      />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <ContactForm onSuccess={onSuccess} />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.div
            variants={fadeUp}
            className="card-lg"
          >
            <p className="text-xs uppercase tracking-widest font-semibold text-text-tertiary mb-4">
              Social Media Links
            </p>
            <div className="grid grid-cols-4 gap-3">
              {SOCIALS.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="aspect-square flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary/30 transition-all duration-300 text-lg"
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
