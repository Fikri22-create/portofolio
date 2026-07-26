import { PROJECTS } from './projects';
import { CERTIFICATES } from './certificates';
import { getYearsOfExperience, getExperienceTrend } from '../constants/experience';

export const STATS = [
  {
    label: 'Projects Completed',
    value: PROJECTS.length,
    trend: `+${PROJECTS.length}`,
  },
  {
    label: 'Certificates Earned',
    value: CERTIFICATES.length,
    trend: `+${CERTIFICATES.length}`,
  },
  {
    label: 'Years of Experience',
    value: getYearsOfExperience(),
    trend: getExperienceTrend(),
  },
];
