const START_DATE = new Date(2024, 6, 1);

export const getYearsOfExperience = () => {
  const now = new Date();
  const diffMs = now - START_DATE;
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(diffYears);
};

export const getExperienceTrend = () => {
  const years = getYearsOfExperience();
  return `${years}+`;
};
