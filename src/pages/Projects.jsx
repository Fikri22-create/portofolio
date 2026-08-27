import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import SearchBar from '../components/common/SearchBar';
import FilterTabs from '../components/common/FilterTabs';
import ProjectCard from '../components/cards/ProjectCard';
import EmptyState from '../components/common/EmptyState';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';

const Projects = () => {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p) => (
              <ProjectCard key={p.id + p.title} project={p} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Projects;
