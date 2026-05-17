import Sidebar from '../components/layout/Sidebar';
import MobileNavbar from '../components/layout/MobileNavbar';
import AnimatedBackground from '../components/animations/AnimatedBackground';

const MainLayout = ({ children }) => (
  <div className="relative min-h-screen flex">
    <AnimatedBackground />
    <Sidebar />
    <main className="flex-1 md:ml-64 pb-24 md:pb-0 min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 md:py-12">{children}</div>
    </main>
    <MobileNavbar />
  </div>
);

export default MainLayout;
