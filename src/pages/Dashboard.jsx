import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import StatsCard from '../components/cards/StatsCard';
import ProjectCard from '../components/cards/ProjectCard';
import CertificateCard from '../components/cards/CertificateCard';
import GitHubContributions from '../components/common/GitHubContributions';
import { STATS } from '../data/dashboard';
import { PROJECTS } from '../data/projects';
import { CERTIFICATES } from '../data/certificates';

const SeeMoreLink = ({ to, label = 'See more' }) => (
  <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 text-accent-primary hover:text-accent-secondary"
    >
      {label}
      <HiOutlineArrowRight className="text-base" />
    </Link>
  </motion.div>
);

const Dashboard = () => {
  const previewProjects = PROJECTS.slice(0, 3);
  const previewCertificates = CERTIFICATES.slice(0, 3);

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle
          eyebrow="Overview"
          title="Dashboard"
          description="A quick overview of recent projects and achievements."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
          {STATS.map((s, i) => (
            <StatsCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SectionTitle
          eyebrow="GitHub"
          title="Contributions"
          description="My contributions from the last year on GitHub."
        />
        <div className="mt-8 card-lg">
          <GitHubContributions />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-end justify-between mb-8">
          <SectionTitle
            eyebrow="Projects"
            title="Recent Work"
            description="Selected projects I've built recently."
          />
          <SeeMoreLink to="/projects" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((p) => (
            <ProjectCard key={p.id + p.title} project={p} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-end justify-between mb-8">
          <SectionTitle
            eyebrow="Certificates"
            title="Achievements"
            description="Courses and certifications I've completed."
          />
          <SeeMoreLink to="/certificates" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCertificates.map((c, i) => (
            <CertificateCard
              key={c.id}
              certificate={c}
              index={i}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
