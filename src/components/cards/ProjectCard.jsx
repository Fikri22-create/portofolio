import { motion } from 'framer-motion';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { getTagMeta } from '../../constants/tagIcons';
import ImageSlider from '../common/ImageSlider';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [imageHovered, setImageHovered] = useState(false);

  const handleViewProject = () => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="card-lg group cursor-pointer overflow-hidden flex flex-col h-full"
    >
      <div
        className="relative aspect-video overflow-hidden rounded-lg bg-bg-tertiary mb-6"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        <ImageSlider images={project.images} title={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: imageHovered ? 1 : 0.8, opacity: imageHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleViewProject}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors duration-200"
          >
            <HiOutlineArrowTopRightOnSquare size={18} />
            View Project
          </motion.button>
        </motion.div>
      </div>

      <div className="flex-1">
        <div className="mb-3 inline-block">
          <span className="badge capitalize text-xs">
            {project.category}
          </span>
        </div>

        <h3 className="section-title mb-2 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-text-secondary mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {project.tags.slice(0, 5).map((tag) => {
            const meta = getTagMeta(tag);
            if (!meta) return (
              <span
                key={tag}
                className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 text-text-secondary border border-white/10"
              >
                {tag}
              </span>
            );
            const { Icon, color } = meta;
            return (
              <div
                key={tag}
                title={tag}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
              >
                <Icon style={{ color, fontSize: '1rem' }} />
              </div>
            );
          })}
          {project.tags.length > 5 && (
            <span className="text-xs text-text-tertiary">+{project.tags.length - 5} more</span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
