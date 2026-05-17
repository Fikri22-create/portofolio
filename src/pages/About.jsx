import { motion } from 'framer-motion';
import { HiOutlineArrowDownTray, HiOutlineMapPin } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import { PROFILE } from '../constants/profile';
import { EDUCATION } from '../data/experience';

const About = () => (
  <div className="space-y-16">
    <section className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="card p-0 overflow-hidden aspect-[4/5]">
        <img
          src={PROFILE.foto}
          alt={PROFILE.name} className="w-full h-full object-cover" />
      </motion.div>
      <div>
        <SectionTitle eyebrow="About me" title={`Full Stack Developer based in ${PROFILE.location.split(',')[0]}`} />
        <p className="mt-5 text-slate-400 leading-relaxed">
          I'm {PROFILE.name}, a student at SMK Wikrama Bogor specializing in Full Stack Web Development. I have experience building web applications using React, Tailwind CSS, and Laravel, with projects including a Quran application, e-commerce, and a ticket booking system. I'm interested in modern web development, responsive UI, and continuing to develop my technical skills.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a href="/cv/cv.pdf" download="cv.pdf" className="btn-primary"><HiOutlineArrowDownTray /> Download CV</a>
          <span className="btn-ghost"><HiOutlineMapPin /> {PROFILE.location}</span>
        </div>
      </div>
    </section>

    <section>
      <SectionTitle eyebrow="Background" title="Education" />
      <div className="mt-8 relative pl-6 border-l border-white/10 space-y-8">
        {EDUCATION.map((ed) => (
          <div key={ed.school} className="relative">
            <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent shadow-glow" />
            <p className="text-xs font-mono text-accent">{ed.period}</p>
            <p className="text-white font-medium mt-1">{ed.degree} · {ed.school}</p>
            <p className="text-slate-400 text-sm mt-1">{ed.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
