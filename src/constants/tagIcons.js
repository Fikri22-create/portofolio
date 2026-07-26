import {
  SiReact, SiVite, SiTailwindcss, SiExpress, SiMysql,
  SiFlutter, SiLaravel, SiMongodb, SiPostgresql, SiFigma,
  SiBootstrap, SiPhp, SiJavascript, SiHtml5, SiCss,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { HiOutlineKey } from 'react-icons/hi2';

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
};

export const getTagMeta = (tag) => TAG_ICON_MAP[tag.toLowerCase().trim()] ?? null;
