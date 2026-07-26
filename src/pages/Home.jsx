import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineSparkles } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import SkillsMarquee from '../components/animations/SkillsMarquee';
import { PROFILE } from '../constants/profile';
import { TOOLS } from '../data/skills';
import { getYearsOfExperience } from '../constants/experience';
import { fadeUp, stagger } from '../animations/variants';

const Home = () => (
  <div className="space-y-16 sm:space-y-20 md:space-y-28">
    <section className="relative pt-6 sm:pt-8 md:pt-12 pb-4 sm:pb-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] sm:leading-[1.02] tracking-tight break-words"
          style={{ color: '#f1f2f4' }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">{PROFILE.name.split(' ')[1]}</span>.
          <br />
          Full Stack Developer.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed max-w-2xl text-ink-secondary"
        >
          {PROFILE.tagline}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
          <Link to="/projects" className="btn-primary w-full justify-center sm:w-auto">
            View Projects
          </Link>
          <Link to="/messages" className="btn-ghost w-full justify-center sm:w-auto">
            Let's Talk
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="hidden md:flex absolute bottom-0 right-0 items-center gap-2 text-[11px] font-mono"
        style={{ color: '#4a5568' }}
      >
        scroll <HiOutlineArrowDown />
      </motion.div>
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full -z-10 opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </section>
    <section className="max-w-4xl">
      <SectionTitle
        eyebrow="About"
        title="A short intro"
        description={`${getYearsOfExperience()}+ years building responsive web and mobile applications using React, Express.js, Laravel, Flutter, and modern web technologies.`}
      />
    </section>
    <section className="overflow-hidden w-full">
      <div className="max-w-4xl mb-6">
        <SectionTitle eyebrow="Stack" title="Tools I work with" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <SkillsMarquee skills={TOOLS} />
      </motion.div>
    </section>
    <section className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl mx-auto text-center rounded-3xl py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden"
        style={{
          background:     'linear-gradient(135deg, rgba(19,23,31,0.85), rgba(13,16,23,0.9))',
          border:         '1px solid rgba(99,102,241,0.18)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div
          className="absolute top-0 left-0 w-28 h-28 rounded-br-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.6), transparent)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-28 h-28 rounded-tl-full opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.4), transparent)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }}
        />

        <p
          className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold relative z-10 leading-tight"
          style={{ color: '#f1f2f4' }}
        >
          Have an idea?{' '}
          <span className="gradient-text">Let's build it.</span>
        </p>
        <p className="mt-3 text-sm relative z-10 text-ink-secondary">
          Open to freelance projects, full-time roles, and collaborations.
        </p>

        <div className="mt-7 flex justify-center gap-3 flex-wrap relative z-10">
          <Link to="/messages" className="btn-primary">
            Start a project
          </Link>
          <a href="/cv/cv.pdf" download="cv.pdf" className="btn-ghost">
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  </div>
);

export default Home;
