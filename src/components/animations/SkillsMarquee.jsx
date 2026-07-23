import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MarqueeItem = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const { name, icon: Icon, color } = skill;

  return (
    <div className="relative py-2 px-1">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -3, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-300 select-none cursor-default"
        style={{
          background:     'rgba(19,23,31,0.6)',
          border:         '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(12px)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${color}40`;
          e.currentTarget.style.background = `${color}0a`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
          e.currentTarget.style.background = 'rgba(19,23,31,0.6)';
        }}
      >

        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle, ${color}20, transparent 70%)`,
            filter:     'blur(8px)',
          }}
        />

        <div
          className="w-7 h-7 flex items-center justify-center rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon style={{ color }} className="text-sm" />
        </div>

        <span className="text-[12px] font-medium tracking-wide text-ink-secondary group-hover:text-white transition-colors duration-200 whitespace-nowrap">
          {name}
        </span>
      </motion.div>


      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none"
          >
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-line text-ink-primary shadow-lg">
              {name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MarqueeRow = ({ skills, direction = 'left' }) => {

  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  const animationClass = direction === 'left' ? 'marquee-content-left' : 'marquee-content-right';

  return (
    <div className="marquee-container py-1">
      <div className={`marquee-content ${animationClass} flex gap-4`}>
        {duplicatedSkills.map((skill, index) => (
          <MarqueeItem key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillsMarquee = ({ skills = [] }) => {
  if (!skills.length) return null;


  const rowCount = Math.ceil(skills.length / 3);
  const row1 = skills.slice(0, rowCount);
  const row2 = skills.slice(rowCount, rowCount * 2);
  const row3 = skills.slice(rowCount * 2);

  return (
    <div className="space-y-4 py-8 w-full max-w-5xl mx-auto overflow-hidden">

      <MarqueeRow skills={row1} direction="right" />


      <MarqueeRow skills={row2} direction="left" />


      <MarqueeRow skills={row3} direction="right" />
    </div>
  );
};

export default SkillsMarquee;
