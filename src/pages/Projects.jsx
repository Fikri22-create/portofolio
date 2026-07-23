import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import {
  SiReact, SiVite, SiTailwindcss, SiExpress, SiMysql,
  SiFlutter, SiLaravel, SiMongodb, SiPostgresql, SiFigma,
  SiBootstrap, SiPhp, SiJavascript, SiHtml5, SiCss,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { HiOutlineKey } from 'react-icons/hi2';
import SectionTitle from '../components/common/SectionTitle';
import SearchBar from '../components/common/SearchBar';
import FilterTabs from '../components/common/FilterTabs';
import ProjectCard from '../components/cards/ProjectCard';
import EmptyState from '../components/common/EmptyState';
import Modal from '../components/common/Modal';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';

const TAG_ICON_MAP = {
  'react':      { Icon: SiReact,       color: '#61dafb' },
  'react.js':   { Icon: SiReact,       color: '#61dafb' },
  'vite':       { Icon: SiVite,        color: '#646cff' },
  'tailwindcss':{ Icon: SiTailwindcss, color: '#38bdf8' },
  'tailwind':   { Icon: SiTailwindcss, color: '#38bdf8' },
  'express':    { Icon: SiExpress,     color: '#ffffff' },
  'mysql':      { Icon: SiMysql,       color: '#00758f' },
  'flutter':    { Icon: SiFlutter,     color: '#02569b' },
  'laravel':    { Icon: SiLaravel,     color: '#ff2d20' },
  'mongodb':    { Icon: SiMongodb,     color: '#47a248' },
  'postgresql': { Icon: SiPostgresql,  color: '#336791' },
  'figma':      { Icon: SiFigma,       color: '#a259ff' },
  'bootstrap':  { Icon: SiBootstrap,   color: '#7952b3' },
  'php':        { Icon: SiPhp,         color: '#777bb4' },
  'javascript': { Icon: SiJavascript,  color: '#f7df1e' },
  'html':       { Icon: SiHtml5,       color: '#e34f26' },
  'css':        { Icon: SiCss,         color: '#1572b6' },
  'api':        { Icon: TbApi,         color: '#10b981' },
  'jwt':        { Icon: HiOutlineKey,  color: '#f59e0b' },
  'flowbite':   { Icon: SiReact,       color: '#61dafb' },
};

const getTagMeta = (tag) => TAG_ICON_MAP[tag.toLowerCase().trim()] ?? null;

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

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="My work"
        title="Projects"
        description="A selection of projects I've designed, built, and shipped."
      />

      <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <FilterTabs tabs={PROJECT_CATEGORIES} active={category} onChange={setCategory} />
        <div className="md:w-80">
          <SearchBar value={query} onChange={setQuery} placeholder="Search projects…" />
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No projects found" description="Try a different filter or search term." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((p) => <ProjectCard key={p.id + p.title} project={p} onOpen={setActive} />)}
          </AnimatePresence>
        </div>
      )}


      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title}>
        {active && (
          <div className="space-y-5">
            <img
              src={active.image}
              alt={active.title}
              className="w-full rounded-2xl object-cover"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            />
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

            <div className="flex gap-2 pt-1">
              {active.github && (
                <a href={active.github} target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center">
                  <FaGithub /> Source
                </a>
              )}
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
