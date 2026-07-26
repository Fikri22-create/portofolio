import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { getTagMeta } from '../constants/tagIcons';
import SectionTitle from '../components/common/SectionTitle';
import SearchBar from '../components/common/SearchBar';
import FilterTabs from '../components/common/FilterTabs';
import ProjectCard from '../components/cards/ProjectCard';
import EmptyState from '../components/common/EmptyState';
import Modal from '../components/common/Modal';
import ImageSlider from '../components/common/ImageSlider';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';

const Projects = () => {
  const [category, setCategory] = useState('All');
  const [query,    setQuery]    = useState('');
  const [active,   setActive]   = useState(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter(
      (p) =>
        (category === 'All' || p.category === category) &&
        (p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.join(' ').toLowerCase().includes(query.toLowerCase()))
    );
  }, [category, query]);

  const getGithubList = (github) => {
    if (Array.isArray(github)) return github;
    if (github) return [{ name: 'Source', url: github }];
    return [];
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="My work"
        title="Projects"
        description="A selection of projects I've designed, built, and shipped."
      />

      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <div className="overflow-x-auto -mx-1 px-1 pb-1">
          <FilterTabs tabs={PROJECT_CATEGORIES} active={category} onChange={setCategory} />
        </div>
        <div className="w-full md:w-80 shrink-0">
          <SearchBar value={query} onChange={setQuery} placeholder="Search projects…" />
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No projects found" description="Try a different filter or search term." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((p) => <ProjectCard key={p.id + p.title} project={p} onOpen={setActive} />)}
          </AnimatePresence>
        </div>
      )}


      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
        {active && (
          <div className="space-y-5">
            <div className="w-full rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              <ImageSlider images={active.images} title={active.title} />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#8891a4' }}>
              {active.description}
            </p>


            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag) => {
                const meta = getTagMeta(tag);
                if (!meta) return (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-lg"
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
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono"
                    style={{
                      background: `${color}12`,
                      border:     `1px solid ${color}30`,
                      color:      '#f1f2f4',
                    }}
                  >
                    <Icon style={{ color, fontSize: '0.85rem' }} />
                    {tag}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              {getGithubList(active.github).map((repo) => (
                <a key={repo.url} href={repo.url} target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center">
                  <FaGithub /> {repo.name || 'Source'}
                </a>
              ))}
              {active.demo && (
                <a href={active.demo} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center">
                  <HiOutlineArrowTopRightOnSquare /> Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
