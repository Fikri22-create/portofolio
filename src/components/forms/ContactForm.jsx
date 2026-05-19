import { useState } from 'react';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { sendContactMessage } from '../../services/contactService';
import toast from 'react-hot-toast';

const initial = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = ({ onSuccess }) => {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const validate = () => {
    const e = {};

    if (!form.name.trim()) {
      e.name = 'Please enter your name';
    }

    if (!form.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = 'Please enter a valid email';
    }

    if (!form.message.trim()) {
      e.message = 'Message cannot be empty';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters';
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please check the form fields');
      return;
    }

    const toastId = toast.loading('Sending your message...');

    try {
      setLoading(true);

      const res = await sendContactMessage(form);

      if (res.ok) {
        setForm(initial);
        setErrors({});

        toast.success(
          'Your message has been delivered successfully',
          {
            id: toastId,
          }
        );

        onSuccess?.();
      } else {
        toast.error(
          'Unable to send message right now',
          {
            id: toastId,
          }
        );
      }
    } catch (error) {
      console.error(error);

      toast.error(
        'Connection error. Please try again later.',
        {
          id: toastId,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="glass-strong rounded-3xl p-6 md:p-8 space-y-5"
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
          placeholder="Tell me about your project..."
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center"
      >
        {loading ? (
          'Sending...'
        ) : (
          <>
            <HiOutlinePaperAirplane />
            Send message
          </>
        )}
      </button>

      <style>{`
        .cf-input{
          width:100%;
          padding:.85rem 1rem;
          border-radius:1rem;
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          color:#fff;
          font-size:.875rem;
          outline:none;
          transition:all .25s ease;
        }

        .cf-input::placeholder{
          color:#64748b;
        }

        .cf-input:focus{
          border-color:rgba(34,211,238,.55);
          background:rgba(255,255,255,.05);
          box-shadow:
            0 0 0 4px rgba(34,211,238,.08),
            0 10px 30px rgba(34,211,238,.08);
        }
      `}</style>
    </form>
  );
};

const Field = ({ label, error, children }) => (
  <label className="block">
    <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
      {label}
    </span>

    <div className="mt-2">
      {children}
    </div>

    {error && (
      <span className="text-[11px] text-red-400 mt-2 block">
        {error}
      </span>
    )}
  </label>
);

export default ContactForm;