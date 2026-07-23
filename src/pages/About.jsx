import { motion } from 'framer-motion';
import { HiOutlineArrowDownTray, HiOutlineMapPin } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import { PROFILE } from '../constants/profile';
import { EDUCATION } from '../data/experience';

const About = () => (
  <div className="space-y-16">


    <section className="grid md:grid-cols-[260px_1fr] gap-10 items-start">

      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div
          className="rounded-2xl overflow-hidden aspect-[4/5] relative"
          style={{
            border:    '1px solid rgba(99,102,241,0.2)',
            boxShadow: '0 0 40px rgba(99,102,241,0.1), 0 24px 64px rgba(0,0,0,0.5)',
          }}
        >
          <img
            src={PROFILE.foto}
            alt={PROFILE.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,9,13,0.45) 0%, transparent 55%)' }}
          />
        </div>

        <div
          className="absolute -inset-6 rounded-3xl -z-10 opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.5), transparent 70%)',
            filter:     'blur(24px)',
          }}
        />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTitle
          eyebrow="About me"
          title={`Full Stack Developer based in ${PROFILE.location.split(',')[0]}`}
        />
        <p
          className="mt-5 text-sm leading-[1.85] max-w-prose"
          style={{ color: '#8891a4' }}
        >
          I'm {PROFILE.name}, a student at SMK Wikrama Bogor specializing in Full Stack Web Development.
          I have experience building web applications using React, Express.js, Tailwind CSS, and Laravel, with projects
          including a Quran application, e-commerce, and a ticket booking system. I'm passionate about modern
          web development, responsive UI, and continuously sharpening my technical skills.
        </p>


        <div className="mt-6 flex flex-wrap gap-4">
          {[
            { label: 'Years Exp.', value: `${PROFILE.experienceYears}+` },
            { label: 'Projects',   value: '6+' },
            { label: 'Stacks',     value: '27+' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="px-4 py-3 rounded-xl text-center min-w-[80px]"
              style={{
                background: 'rgba(19,23,31,0.7)',
                border:     '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-2xl font-display font-semibold gradient-text">{value}</p>
              <p className="text-[11px] font-mono mt-0.5" style={{ color: '#4a5568' }}>{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-7">
          <a href="/cv/cv.pdf" download="cv.pdf" className="btn-primary">
            <HiOutlineArrowDownTray /> Download CV
          </a>
          <span className="btn-ghost cursor-default">
            <HiOutlineMapPin style={{ color: '#6366f1' }} /> {PROFILE.location}
          </span>
        </div>
      </motion.div>
    </section>


    <section>
      <SectionTitle eyebrow="Background" title="Education" />
      <div className="mt-10 relative pl-6 space-y-10">

        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(180deg, rgba(99,102,241,0.5) 0%, rgba(79,70,229,0.2) 60%, transparent 100%)',
          }}
        />

        {EDUCATION.map((ed, i) => (
          <motion.div
            key={ed.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >

            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 + 0.2, type: 'spring', stiffness: 320 }}
              className="absolute -left-[31px] top-2 w-3.5 h-3.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow:  '0 0 12px rgba(99,102,241,0.6)',
                border:     '2px solid rgba(8,9,13,0.9)',
              }}
            />

            <div
              className="p-4 rounded-xl"
              style={{
                background: 'rgba(19,23,31,0.5)',
                border:     '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <p className="text-xs font-mono mb-1" style={{ color: '#6366f1' }}>{ed.period}</p>
              <p className="font-display font-semibold text-base" style={{ color: '#f1f2f4' }}>
                {ed.degree} · {ed.school}
              </p>
              <p className="text-sm mt-1.5 leading-relaxed" style={{ color: '#8891a4' }}>
                {ed.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
