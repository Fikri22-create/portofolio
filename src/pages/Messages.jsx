import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/forms/ContactForm';
import Toast from '../components/common/Toast';
import { SOCIALS } from '../data/socials';
import { PROFILE } from '../constants/profile';

const Messages = () => {
  const [toast, setToast] = useState(false);

  const onSuccess = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2800);
  };

  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="Get in touch" title="Let's work together" description="Have a project in mind, or just want to say hi? Drop a message — I respond within 24h." />

      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
        <ContactForm onSuccess={onSuccess} />

        <div className="space-y-4">
          <div className="card">
            <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
            <a href={`mailto:${PROFILE.email}`} className="text-white text-lg mt-1 block hover:text-accent transition">{PROFILE.email}</a>
          </div>

          <a href={`https://wa.me/${PROFILE.whatsapp}`} target="_blank" rel="noreferrer"
            className="card flex items-center gap-4 hover:border-green-400/40 group">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-400 grid place-items-center text-xl"><FaWhatsapp /></div>
            <div>
              <p className="text-white font-medium">Chat on WhatsApp</p>
              <p className="text-xs text-slate-400">Usually replies in a few hours</p>
            </div>
          </a>

          <div className="card">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">Social</p>
            <div className="grid grid-cols-4 gap-2">
              {SOCIALS.map(({ name, url, icon: Icon }) => (
                <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}
                  className="aspect-square grid place-items-center rounded-xl bg-white/5 text-slate-300 hover:text-accent hover:bg-accent/10 transition text-lg">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Toast open={toast} message="Message sent! I'll get back to you soon." />
    </div>
  );
};

export default Messages;
