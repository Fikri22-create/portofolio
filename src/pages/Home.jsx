import { motion } from "framer-motion";
import { HiOutlineArrowDown, HiOutlineSparkles } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle";
import { PROFILE } from "../constants/profile";
import { TOOLS } from "../data/skills";
import { fadeUp, stagger, skillContainer, skillItem } from "../animations/variants";

const Home = () => (
  <div className="space-y-24">
    <section className="relative pt-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full glass text-accent"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for new opportunities
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl md:text-7xl font-semibold mt-6 leading-[1.05] text-white"
        >
          Hi, I'm{" "}
          <span className="gradient-text">{PROFILE.name.split(" ")[1]}</span>.
          <br />
          Full Stack Developer.
          <br />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg text-slate-400 max-w-xl"
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
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:flex absolute bottom-0 right-0 items-center gap-2 text-xs text-slate-500 font-mono"
      >
        scroll <HiOutlineArrowDown />
      </motion.div>
    </section>

    <section>
      <SectionTitle
        eyebrow="About"
        title="A short intro"
        description={`${PROFILE.experienceYears}+ years building responsive web and mobile applications using React, Laravel, Flutter, and modern web technologies.`}
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
            whileHover={{ y: -2, scale: 1.03 }}
            className="group relative inline-flex"
          >
            <div className="absolute inset-0 rounded-full bg-white/5 blur-md opacity-0 group-hover:opacity-100 transition" />

            <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300">
              <div
                className="w-6 h-6 flex items-center justify-center rounded-full shrink-0"
                style={{ backgroundColor: `${color}22` }}
              >
                <Icon style={{ color }} className="text-sm" />
              </div>

              <span className="text-[11px] text-slate-300 group-hover:text-white whitespace-nowrap">
                {name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    <section className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto text-center card py-10 px-6 bg-gradient-to-br from-accent/10 via-transparent to-accent-blue/10"
      >
        <p className="font-display text-3xl md:text-4xl text-white">
          Have an idea? Let's build it.
        </p>

        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <Link to="/messages" className="btn-primary">
            Start a project
          </Link>
          <a 
          href= "/cv/cv.pdf"
          download="cv.pdf"
          className="btn-ghost">
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  </div>
);

export default Home;