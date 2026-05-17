import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa6';
import { PROFILE } from '../constants/profile';

export const SOCIALS = [
  { name: 'GitHub', icon: FaGithub, url: PROFILE.github },
  { name: 'LinkedIn', icon: FaLinkedin, url: PROFILE.linkedin },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/f.bert._' },
  { name: 'WhatsApp', icon: FaWhatsapp, url: `https://wa.me/${PROFILE.whatsapp}` },
];
