import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

const ProjectCard = ({ project, onOpen }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 12, scale: 0.97 }}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className="group relative rounded-2xl overflow-hidden neon-border"
    style={{
      background: 'linear-gradient(135deg, rgba(40,54,78,0.55) 0%, rgba(40,54,78,0.25) 100%)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(40,54,78,0.9)',
      transition: 'all 0.35s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(85,111,247,0.4)';
      e.currentTarget.style.boxShadow = '0 0 40px -10px rgba(85,111,247,0.3), 0 20px 60px -20px rgba(0,0,0,0.6)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(40,54,78,0.9)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <button onClick={() => onOpen?.(project)} className="block w-full text-left">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(6,6,18,0.95) 0%, rgba(6,6,18,0.4) 50%, transparent 100%)',
          }}
        />
        {/* Category badge */}
        <span
          className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-mono"
          style={{
            background: 'rgba(10,13,20,0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(85,111,247,0.4)',
            color: '#7B8FF9',
          }}
        >
          {project.category}
        </span>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 grid place-items-center"
          style={{ background: 'rgba(6,6,18,0.6)', backdropFilter: 'blur(4px)' }}
        >
          <span
            className="text-xs px-4 py-2 rounded-xl font-medium text-white"
            style={{
              background: 'linear-gradient(135deg, #3D55E8, #556FF7)',
              boxShadow: '0 0 20px rgba(85,111,247,0.5)',
            }}
          >
            View Details
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-white group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mt-1 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md transition-colors duration-200"
              style={{
                background: 'rgba(85,111,247,0.1)',
                border: '1px solid rgba(85,111,247,0.2)',
                color: '#a5b4fc',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
    <div className="flex gap-2 px-5 pb-5">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="btn-ghost flex-1 justify-center text-xs"
      >
        <FaGithub /> Code
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="btn-primary flex-1 justify-center text-xs"
      >
        <HiOutlineArrowTopRightOnSquare /> Demo
      </a>
    </div>
  </motion.article>
);

export default ProjectCard;
