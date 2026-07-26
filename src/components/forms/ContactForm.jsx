import { useState } from 'react';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { sendContactMessage } from '../../services/contactService';
import toast from 'react-hot-toast';

const initial = { name: '', email: '', message: '' };

const Field = ({ label, error, children }) => (
  <label className="block">
    <span
      className="text-[10px] uppercase tracking-[0.2em] font-mono"
      style={{ color: '#4a5568' }}
    >
      {label}
    </span>
    <div className="mt-2">{children}</div>
    {error && (
      <span className="text-[11px] mt-2 block" style={{ color: '#f87171' }}>
        {error}
      </span>
    )}
  </label>
);

const ContactForm = ({ onSuccess }) => {
  const [form,    setForm]    = useState(initial);
  const [loading, setLoading] = useState(false);
  const [errors,  setErrors]  = useState({});

  const update = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Please enter your name';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Message cannot be empty';
    else if (form.message.trim().length < 10)     e.message = 'Message must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) { toast.error('Please check the form fields'); return; }

    const toastId = toast.loading('Sending your message…');
    try {
      setLoading(true);
      const res = await sendContactMessage(form);
      if (res.ok) {
        setForm(initial);
        setErrors({});
        toast.success('Message delivered successfully!', { id: toastId });
        onSuccess?.();
      } else {
        toast.error('Unable to send message right now', { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error('Connection error. Please try again.', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl p-6 md:p-8 space-y-5"
      style={{
        background:        'linear-gradient(135deg, rgba(19,23,31,0.8) 0%, rgba(13,16,23,0.75) 100%)',
        backdropFilter:    'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border:            '1px solid rgba(99,102,241,0.15)',
      }}
    >
      <Field label="Your name" error={errors.name}>
        <input
          type="text"
          value={form.name}
          onChange={update('name')}
          className="cf-input"
          placeholder="Fikri"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={form.email}
          onChange={update('email')}
          className="cf-input"
          placeholder="fikri@example.com"
        />
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          rows={5}
          value={form.message}
          onChange={update('message')}
          className="cf-input resize-none"
          placeholder="Tell me about your project…"
        />
      </Field>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center"
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        {loading ? 'Sending…' : <><HiOutlinePaperAirplane /> Send message</>}
      </button>
    </form>
  );
};

export default ContactForm;
