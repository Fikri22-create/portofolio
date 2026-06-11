import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import StatsCard from '../components/cards/StatsCard';
import ProjectCard from '../components/cards/ProjectCard';
import CertificateCard from '../components/cards/CertificateCard';
import { STATS } from '../data/dashboard';
import { PROJECTS } from '../data/projects';
import { CERTIFICATES } from '../data/certificates';

const SeeMoreLink = ({ to, label = 'See more' }) => (
  <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-200"
      style={{ color: '#a78bfa' }}
      onMouseEnter={e => { e.currentTarget.style.color = '#c4b5fd'; }}
      onMouseLeave={e => { e.currentTarget.style.color = '#a78bfa'; }}
    >
      {label}
      <HiOutlineArrowRight className="text-sm" />
    </Link>
  </motion.div>
);

const Dashboard = () => {
  const previewProjects = PROJECTS.slice(0, 3);
  const previewCertificates = CERTIFICATES.slice(0, 3);

  return (
    <div className="space-y-14">

      <div>
        <SectionTitle
          eyebrow="Overview"
          title="Dashboard"
          description="A quick overview of recent projects, and the certifications I recently obtained."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {STATS.map((s, i) => (
            <StatsCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between mb-6">
          <SectionTitle
            eyebrow="Projects"
            title="Recent Work"
            description="Some selected projects I've built recently."
          />
          <SeeMoreLink to="/projects" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewProjects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => {}} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between mb-6">
          <SectionTitle
            eyebrow="Certificates"
            title="Achievements"
            description="Courses and certifications I've completed."
          />
          <SeeMoreLink to="/certificates" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewCertificates.map((c, i) => (
            <CertificateCard
              key={c.id}
              certificate={c}
              index={i}
              onOpen={() => {}}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
