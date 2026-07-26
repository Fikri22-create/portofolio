import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { getTagMeta } from '../../constants/tagIcons';
import ImageSlider from '../common/ImageSlider';

const ProjectCard = ({ project, onOpen }) => {
  const hasGithub = Array.isArray(project.github)
    ? project.github.length > 0
    : !!project.github;
  const githubList = Array.isArray(project.github)
    ? project.github
    : project.github
      ? [{ name: 'Code', url: project.github }]
      : [];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 14, scale: 0.97 }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden neon-border flex flex-col min-w-0"
      style={{
        background:     'linear-gradient(145deg, rgba(19,23,31,0.85) 0%, rgba(13,16,23,0.75) 100%)',
        backdropFilter: 'blur(16px)',
        border:         '1px solid rgba(255,255,255,0.07)',
        transition:     'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)';
        e.currentTarget.style.boxShadow   = '0 0 50px -12px rgba(99,102,241,0.2), 0 24px 64px -20px rgba(0,0,0,0.8)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      <button onClick={() => onOpen?.(project)} className="block w-full text-left flex-1 min-w-0">

        <div className="relative aspect-[16/10] overflow-hidden bg-bg">
          <ImageSlider images={project.images} title={project.title} />

          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(8,9,13,0.97) 0%, rgba(8,9,13,0.35) 55%, transparent 100%)' }}
          />

          <span
            className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-mono z-10"
            style={{
              background:     'rgba(8,9,13,0.8)',
              backdropFilter: 'blur(10px)',
              border:         '1px solid rgba(99,102,241,0.35)',
              color:          '#818cf8',
            }}
          >
            {project.category}
          </span>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 grid place-items-center z-10"
            style={{ background: 'rgba(8,9,13,0.55)', backdropFilter: 'blur(4px)' }}
          >
            <span
              className="text-xs px-4 py-2 rounded-xl font-semibold"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                color:      '#ffffff',
                boxShadow:  '0 0 20px rgba(99,102,241,0.4)',
              }}
            >
              View Details
            </span>
          </div>
        </div>


        <div className="p-5 pb-3">
          <h3
            className="font-display text-[1.05rem] font-semibold leading-snug transition-colors duration-200"
            style={{ color: '#f1f2f4' }}
          >
            {project.title}
          </h3>
          <p className="text-sm mt-1.5 line-clamp-2 leading-relaxed" style={{ color: '#8891a4' }}>
            {project.description}
          </p>


          <div className="flex flex-wrap items-center gap-2 mt-4">
            {project.tags.map((tag) => {
              const meta = getTagMeta(tag);
              if (!meta) return (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border:     '1px solid rgba(255,255,255,0.08)',
                    color:      '#8891a4',
                  }}
                >
                  {tag}
                </span>
              );
              const { Icon, color } = meta;
              return (
                <div
                  key={tag}
                  title={tag}
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 cursor-default"
                  style={{
                    background: `${color}14`,
                    border:     `1px solid ${color}30`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${color}28`;
                    e.currentTarget.style.boxShadow  = `0 0 12px ${color}30`;
                    e.currentTarget.style.transform  = 'scale(1.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = `${color}14`;
                    e.currentTarget.style.boxShadow  = 'none';
                    e.currentTarget.style.transform  = 'scale(1)';
                  }}
                >
                  <Icon style={{ color, fontSize: '0.85rem' }} />
                </div>
              );
            })}
          </div>
        </div>
      </button>


      <div className="flex flex-col sm:flex-row gap-2 px-5 pb-5 mt-auto pt-1">
        {githubList.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost w-full sm:flex-1 justify-center text-xs"
          >
            <FaGithub /> {repo.name || 'Code'}
          </a>
        ))}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:flex-1 justify-center text-xs"
          >
            <HiOutlineArrowTopRightOnSquare /> Demo
          </a>
        )}
        {!hasGithub && !project.demo && (
          <span className="text-xs text-ink-muted font-mono px-2">No links available</span>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
