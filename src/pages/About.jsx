import { motion } from 'framer-motion';
import { HiOutlineArrowDownTray, HiOutlineMapPin } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import { PROFILE } from '../constants/profile';
import { EDUCATION } from '../data/experience';

const About = () => (
  <div className="space-y-16">
    <section className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div
          className="rounded-2xl overflow-hidden aspect-[4/5] relative"
          style={{
            border: '1px solid rgba(85,111,247,0.25)',
            boxShadow: '0 0 40px rgba(61,85,232,0.2), 0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          <img src={PROFILE.foto} alt={PROFILE.name} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(6,6,18,0.4) 0%, transparent 50%)',
            }}
          />
        </div>
        <div
          className="absolute -inset-4 rounded-3xl -z-10 opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTitle
          eyebrow="About me"
          title={`Full Stack Developer based in ${PROFILE.location.split(',')[0]}`}
        />
        <p className="mt-5 text-slate-400 leading-relaxed">
          I'm {PROFILE.name}, a student at SMK Wikrama Bogor specializing in Full Stack Web Development.
          I have experience building web applications using React, Express.js, Tailwind CSS, and Laravel, with projects
          including a Quran application, e-commerce, and a ticket booking system. I'm interested in modern
          web development, responsive UI, and continuously developing my technical skills.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a href="/cv/cv.pdf" download="cv.pdf" className="btn-primary">
            <HiOutlineArrowDownTray /> Download CV
          </a>
          <span className="btn-ghost">
            <HiOutlineMapPin style={{ color: '#a78bfa' }} /> {PROFILE.location}
          </span>
        </div>
      </motion.div>
    </section>
    <section>
      <SectionTitle eyebrow="Background" title="Education" />
      <div className="mt-8 relative pl-6 space-y-8">
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(180deg, rgba(167,139,250,0.5) 0%, rgba(244,114,182,0.3) 60%, transparent 100%)',
          }}
        />
        {EDUCATION.map((ed, i) => (
          <motion.div
            key={ed.school}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
              className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
                boxShadow: '0 0 12px rgba(167,139,250,0.6)',
                border: '2px solid rgba(6,6,18,0.8)',
              }}
            />
            <p className="text-xs font-mono" style={{ color: '#a78bfa' }}>{ed.period}</p>
            <p className="text-white font-medium mt-1">{ed.degree} · {ed.school}</p>
            <p className="text-slate-400 text-sm mt-1">{ed.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
