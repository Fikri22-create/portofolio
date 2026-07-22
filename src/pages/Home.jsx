import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineSparkles } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import { PROFILE } from '../constants/profile';
import { TOOLS } from '../data/skills';
import { fadeUp, stagger, skillContainer, skillItem } from '../animations/variants';

const Home = () => (
  <div className="space-y-24">
    <section className="relative pt-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.div variants={fadeUp}>
          <span
            className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(61,85,232,0.2), rgba(85,111,247,0.1))',
              border: '1px solid rgba(85,111,247,0.3)',
              color: '#a5b4fc',
              boxShadow: '0 0 20px rgba(61,85,232,0.15)',
            }}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg, #556FF7, #38bdf8)' }}
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for new opportunities
          </span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl md:text-7xl font-semibold mt-6 leading-[1.05] text-white"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{PROFILE.name.split(' ')[1]}</span>.
          <br />
          Full Stack Developer.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="btn-primary">
            <HiOutlineSparkles /> View Projects
          </Link>
          <Link to="/messages" className="btn-ghost">
            Let's Talk
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="hidden md:flex absolute bottom-0 right-0 items-center gap-2 text-xs font-mono"
        style={{ color: '#475569' }}
      >
        scroll <HiOutlineArrowDown />
      </motion.div>
      <div
        className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full -z-10 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(85,111,247,0.6) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </section>
    <section>
      <SectionTitle
        eyebrow="About"
        title="A short intro"
        description={`${PROFILE.experienceYears}+ years building responsive web and mobile applications using React, Express.js, Laravel, Flutter, and modern web technologies.`}
      />
    </section>
    <section>
      <SectionTitle eyebrow="Stack" title="Tools that I have used" />

      <motion.div
        variants={skillContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 flex flex-wrap gap-2"
      >
        {TOOLS.map(({ name, icon: Icon, color }, i) => (
          <motion.div
            key={name}
            custom={i}
            variants={skillItem}
            whileHover={{ y: -3, scale: 1.05 }}
            className="group relative inline-flex"
          >
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle, ${color}33, transparent 70%)`,
                filter: 'blur(8px)',
              }}
            />
            <div
              className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${color}50`;
                e.currentTarget.style.background = `${color}12`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <div
                className="w-6 h-6 flex items-center justify-center rounded-full shrink-0"
                style={{ backgroundColor: `${color}22` }}
              >
                <Icon style={{ color }} className="text-sm" />
              </div>
              <span className="text-[11px] text-slate-300 group-hover:text-white whitespace-nowrap transition-colors">
                {name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <section className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl mx-auto text-center rounded-3xl py-10 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(61,85,232,0.15), rgba(85,111,247,0.08), rgba(40,54,78,0.4))',
          border: '1px solid rgba(85,111,247,0.25)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div
          className="absolute top-0 left-0 w-24 h-24 rounded-br-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(85,111,247,0.4), transparent)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(123,143,249,0.4), transparent)' }}
        />

        <p className="font-display text-3xl md:text-4xl text-white relative z-10">
          Have an idea? Let's build it.
        </p>

        <div className="mt-6 flex justify-center gap-3 flex-wrap relative z-10">
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
