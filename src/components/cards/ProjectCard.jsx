import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

const ProjectCard = ({ project, onOpen }) => (
  <motion.article layout
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
    whileHover={{ y: -4 }} className="card overflow-hidden p-0 group">
    <button onClick={() => onOpen(project)} className="block w-full text-left">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={project.image} alt={project.title} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-bg/80 backdrop-blur text-accent border border-accent/30">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-white">{project.title}</h3>
        <p className="text-sm text-slate-400 mt-1 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((t) => (
            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300">{t}</span>
          ))}
        </div>
      </div>
    </button>
    <div className="flex gap-2 px-5 pb-5">
      <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center text-xs"><FaGithub /> Code</a>
      <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center text-xs"><HiOutlineArrowTopRightOnSquare /> Demo</a>
    </div>
  </motion.article>
);

export default ProjectCard;
