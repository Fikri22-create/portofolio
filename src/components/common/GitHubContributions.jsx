import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const GITHUB_USERNAME = 'Fikri22-create';

const GitHubContributions = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className="overflow-x-auto"
  >
    <GitHubCalendar
      username={GITHUB_USERNAME}
      blockSize={14}
      blockMargin={4}
      color="#6366f1"
      fontSize={14}
    />
  </motion.div>
);

export default GitHubContributions;
