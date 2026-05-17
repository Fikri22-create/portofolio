import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactMessage = async (payload) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: payload.name,
        email: payload.email,
        message: payload.message,
        title: payload.name,
        time: new Date().toLocaleString(),
      },
      PUBLIC_KEY
    );

    return {
      ok: true,
      response,
    };
  } catch (error) {
    console.error('EMAIL ERROR:', error);

    return {
      ok: false,
      error,
    };
  }
};