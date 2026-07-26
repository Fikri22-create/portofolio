import Sidebar from '../components/layout/Sidebar';
import MobileNavbar from '../components/layout/MobileNavbar';
import AnimatedBackground from '../components/animations/AnimatedBackground';

const MainLayout = ({ children }) => (
  <div className="relative min-h-screen overflow-x-hidden">
    <AnimatedBackground />
    <Sidebar />
    <main className="flex-1 min-h-screen pb-24 md:pb-0 md:ml-64">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {children}
      </div>
    </main>
    <MobileNavbar />
  </div>
);

export default MainLayout;
