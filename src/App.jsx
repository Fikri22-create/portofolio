import { Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/common/Loader';

const App = () => (
  <MainLayout>
    <Suspense fallback={<Loader />}>
      <AppRoutes />
    </Suspense>
  </MainLayout>
);

export default App;
