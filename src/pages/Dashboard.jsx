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
      className="inline-flex items-center gap-1.5 text-xs font-medium transition-all duration-200"
      style={{ color: '#6366f1' }}
      onMouseEnter={e => { e.currentTarget.style.color = '#818cf8'; }}
      onMouseLeave={e => { e.currentTarget.style.color = '#6366f1'; }}
    >
      {label}
      <HiOutlineArrowRight className="text-sm" />
    </Link>
  </motion.div>
);

const Dashboard = () => {
  const previewProjects    = PROJECTS.slice(0, 3);
  const previewCertificates = CERTIFICATES.slice(0, 3);

  return (
    <div className="space-y-10 sm:space-y-14">


      <div>
        <SectionTitle
          eyebrow="Overview"
          title="Dashboard"
          description="A quick overview of recent projects and certifications."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {STATS.map((s, i) => (
            <StatsCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>


      <div>
        <SectionTitle
          eyebrow="GitHub"
          title="Contributions"
          description="My contributions from last year on GitHub."
        />
        <div
          className="mt-6 rounded-2xl p-4 sm:p-6 overflow-hidden overflow-x-auto"
          style={{
            background:     'linear-gradient(135deg, rgba(19,23,31,0.8) 0%, rgba(13,16,23,0.75) 100%)',
            border:         '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <GitHubContributions />
        </div>
      </div>


      <div>
        <div className="flex items-end justify-between mb-6">
          <SectionTitle
            eyebrow="Projects"
            title="Recent Work"
            description="Selected projects I've built recently."
          />
          <SeeMoreLink to="/projects" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewProjects.map((p) => (
            <ProjectCard key={p.id + p.title} project={p} onOpen={() => {}} />
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
