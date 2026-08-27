import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { useState, useCallback } from 'react';
import { FiTrendingUp } from 'react-icons/fi';

const GITHUB_USERNAME = 'Fikri22-create';

const GitHubStats = ({ stats }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
    {stats.map((stat, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className="card p-4"
      >
        <p className="text-text-tertiary text-sm font-medium mb-2">{stat.label}</p>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
          {stat.trend && (
            <div className="flex items-center gap-1 text-emerald-accent text-sm font-semibold">
              <FiTrendingUp size={14} />
              {stat.trend}
            </div>
          )}
        </div>
      </motion.div>
    ))}
  </div>
);

const GitHubContributions = () => {
  const [stats, setStats] = useState([
    { label: 'Total', value: 'Loading...', trend: null },
    { label: 'This Week', value: 'Loading...', trend: null },
    { label: 'Best Day', value: 'Loading...', trend: null },
    { label: 'Average', value: 'Loading...', trend: null },
  ]);
  const handleTransformData = useCallback((contributions) => {
    if (!contributions || contributions.length === 0) return contributions;
    const total = contributions.reduce((acc, curr) => acc + curr.count, 0);
    const last7Days = contributions.slice(-7);
    const thisWeek = last7Days.reduce((acc, curr) => acc + curr.count, 0);
    const bestDay = Math.max(...contributions.map((c) => c.count), 0);
    const average = (total / contributions.length).toFixed(1);
    setStats([
      { label: 'Total', value: total.toLocaleString(), trend: null },
      { label: 'This Week', value: thisWeek.toLocaleString(), trend: null },
      { label: 'Best Day', value: bestDay.toLocaleString(), trend: null },
      { label: 'Average', value: `${average} / day`, trend: null },
    ]);
    return contributions;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <GitHubStats stats={stats} />
      <div className="overflow-x-auto">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          blockSize={14}
          blockMargin={4}
          colorScheme="dark"
          fontSize={14}
          transformData={handleTransformData}
        />
      </div>
    </motion.div>
  );
};

export default GitHubContributions;