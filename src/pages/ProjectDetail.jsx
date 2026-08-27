import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import ImageSlider from '../components/common/ImageSlider';
import { getTagMeta } from '../constants/tagIcons';
import { PROJECTS } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const project = location.state?.project || PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-text-secondary mb-4">Project not found</p>
          <button
            onClick={() => navigate('/projects')}
            className="btn-primary"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg-primary py-12 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">

        <motion.button
          onClick={() => navigate('/projects')}
          whileHover={{ x: -4 }}
          className="inline-flex items-center gap-2 mb-12 px-4 py-2 rounded-lg text-text-primary hover:bg-white/10 border border-white/20 transition-all duration-300"
        >
          <HiOutlineArrowLeft /> Back
        </motion.button>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"
        >
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              {project.title}
            </h1>
          </div>
          <div className="badge capitalize text-lg px-4 py-2 whitespace-nowrap">
            {project.category}
          </div>
        </motion.div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-text-secondary mb-12 max-w-3xl leading-relaxed"
        >
          {project.description}
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12 pb-12 border-b border-white/10"
        >

          <div>
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => {
                const meta = getTagMeta(tag);
                if (!meta) {
                  return (
                    <span
                      key={tag}
                      className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-text-secondary text-sm font-medium"
                    >
                      {tag}
                    </span>
                  );
                }
                const { Icon, color } = meta;
                return (
                  <div
                    key={tag}
                    title={tag}
                    className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon style={{ color, fontSize: '1.5rem' }} />
                  </div>
                );
              })}
            </div>
          </div>


          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text-primary hover:text-text-primary/80 transition-colors duration-300 font-semibold text-lg group"
            >
              View Demo
              <HiOutlineArrowTopRightOnSquare className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          )}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16"
        >
          <div className="rounded-2xl overflow-hidden bg-bg-tertiary border border-white/10">
            <div className="relative aspect-video">
              <ImageSlider images={project.images} title={project.title} autoPlay={true} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>


        <div className="space-y-16">

          {project.overview && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">Overview</h2>
              <p className="text-base text-text-secondary leading-relaxed whitespace-pre-wrap">
                {project.overview}
              </p>
            </motion.section>
          )}


          {project.problem && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">The Problem</h2>
              <p className="text-base text-text-secondary leading-relaxed whitespace-pre-wrap">
                {project.problem}
              </p>
            </motion.section>
          )}


          {project.solution && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">What I Built</h2>
              <p className="text-base text-text-secondary leading-relaxed whitespace-pre-wrap">
                {project.solution}
              </p>
            </motion.section>
          )}


          {project.challenges && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">Notable Engineering Challenges</h2>
              <ul className="space-y-4">
                {(Array.isArray(project.challenges) ? project.challenges : [project.challenges]).map((challenge, idx) => (
                  <li key={idx} className="flex gap-4 text-base text-text-secondary">
                    <span className="text-text-primary font-bold mt-0.5 text-lg flex-shrink-0">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}


          {project.outcome && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">Outcome</h2>
              <p className="text-base text-text-secondary leading-relaxed whitespace-pre-wrap">
                {project.outcome}
              </p>
            </motion.section>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
