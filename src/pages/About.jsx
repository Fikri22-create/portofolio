import { motion } from 'framer-motion';
import { HiOutlineArrowDownTray, HiOutlineMapPin } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import { PROFILE } from '../constants/profile';
import { EDUCATION } from '../data/experience';
import { getYearsOfExperience } from '../constants/experience';
import { TOOLS } from '../data/skills';

const About = () => (
  <div className="space-y-12 md:space-y-16">
    <section className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="rounded-2xl overflow-hidden aspect-[4/5] relative border border-white/10 shadow-card-lg">
          <img
            src={PROFILE.foto}
            alt={PROFILE.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
        </div>
        
        <div className="absolute -inset-6 rounded-3xl -z-10 opacity-30 bg-accent-primary/10 blur-2xl" />
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
        <p className="mt-5 text-sm leading-[1.85] max-w-prose text-text-secondary">
          I'm {PROFILE.name}, a student at SMK Wikrama Bogor specializing in Full Stack Developer.
          I have experience building web applications using React, Express.js, Tailwind CSS, and Laravel, with projects
          including a Quran application, e-commerce, and a ticket booking system. I'm passionate about modern
          web development, responsive UI, and continuously sharpening my technical skills.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          {[
            { label: 'Years Exp.', value: `${getYearsOfExperience()}+` },
            { label: 'Projects',   value: '6+' },
            { label: 'Stacks',     value: `${TOOLS.length}+` },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="px-4 py-3 rounded-xl text-center min-w-[80px] bg-bg-secondary border border-white/5 shadow-card"
            >
              <p className="text-2xl font-display font-semibold text-text-primary">{value}</p>
              <p className="text-[11px] font-mono mt-0.5 text-text-tertiary">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-7">
          <a href="/cv/cv.pdf" download="cv.pdf" className="btn-primary">
            <HiOutlineArrowDownTray /> Download CV
          </a>
          <span className="btn-secondary cursor-default">
            <HiOutlineMapPin className="text-accent-primary" /> {PROFILE.location}
          </span>
        </div>
      </motion.div>
    </section>
    <section>
      <SectionTitle eyebrow="Background" title="Education" />
        <div className="mt-10 relative pl-5 sm:pl-6 space-y-8 md:space-y-10">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
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
              className="absolute -left-[27px] sm:-left-[31px] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-accent-primary shadow-[0_0_12px_rgba(16,185,129,0.5)] border-2 border-bg-primary"
            />

            <div className="p-5 rounded-xl bg-bg-secondary border border-white/5 shadow-card hover:border-white/10 transition-colors">
              <p className="text-xs font-mono mb-1 text-accent-primary">{ed.period}</p>
              <p className="font-display font-semibold text-base text-text-primary">
                {ed.degree} <span className="text-text-tertiary mx-1">&middot;</span> {ed.school}
              </p>
              <p className="text-sm mt-2 leading-relaxed text-text-secondary">
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
