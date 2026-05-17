import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import SearchBar from '../components/common/SearchBar';
import FilterTabs from '../components/common/FilterTabs';
import ProjectCard from '../components/cards/ProjectCard';
import EmptyState from '../components/common/EmptyState';
import Modal from '../components/common/Modal';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';

const Projects = () => {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.join(' ').toLowerCase().includes(query.toLowerCase()))
    );
  }, [category, query]);

  return (
    <div className="space-y-10">
      <SectionTitle eyebrow="My work" title="Projects" description="A selection of projects I’ve designed, built, and shipped over the past few years." />
      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <FilterTabs tabs={PROJECT_CATEGORIES} active={category} onChange={setCategory} />
        <div className="md:w-80"><SearchBar value={query} onChange={setQuery} placeholder="Search projects…" /></div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No projects found" description="Try a different filter or search term." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((p) => <ProjectCard key={p.id} project={p} onOpen={setActive} />)}
          </AnimatePresence>
        </div>
      )}

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
        {active && (
          <div className="space-y-4">
            <img src={active.image} alt={active.title} className="w-full rounded-2xl" />
            <p className="text-slate-300">{active.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {active.tags.map((t) => (
                <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 text-slate-300">{t}</span>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              <a href={active.github} target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center"><FaGithub /> Source</a>
              <a href={active.demo} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center"><HiOutlineArrowTopRightOnSquare /> Live Demo</a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
