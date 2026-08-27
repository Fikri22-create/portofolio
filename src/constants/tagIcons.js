import {
  SiReact, SiVite, SiTailwindcss, SiExpress, SiMysql,
  SiFlutter, SiLaravel, SiMongodb, SiPostgresql, SiFigma,
  SiBootstrap, SiPhp, SiJavascript, SiHtml5, SiCss,
  SiGo, SiWordpress, SiGit, SiGithub, SiVercel,
  SiLaragon, SiXampp, SiTrello, SiPostman, SiElementor
} from 'react-icons/si';
import { TbApi, TbBrandVscode, TbBrain } from 'react-icons/tb';
import { HiOutlineKey } from 'react-icons/hi2';
import { FiTrendingUp } from 'react-icons/fi';

export const TAG_ICON_MAP = {
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
  'go':         { Icon: SiGo,          color: '#00add8' },
  'wordpress':  { Icon: SiWordpress,   color: '#21759b' },
  'git':        { Icon: SiGit,         color: '#f1502f' },
  'github':     { Icon: SiGithub,      color: '#ffffff' },
  'vercel':     { Icon: SiVercel,      color: '#ffffff' },
  'laragon':    { Icon: SiLaragon,     color: '#00c2ff' },
  'xampp':      { Icon: SiXampp,       color: '#fb7a24' },
  'trello':     { Icon: SiTrello,      color: '#0079bf' },
  'vscode':     { Icon: TbBrandVscode, color: '#007acc' },
  'postman':    { Icon: SiPostman,     color: '#ff6c37' },
  'elementor':  { Icon: SiElementor,   color: '#a259ff' },
  'ai':         { Icon: TbBrain,       color: '#3776ab' },
};

export const getTagMeta = (tag) => TAG_ICON_MAP[tag.toLowerCase().trim()] ?? null;

