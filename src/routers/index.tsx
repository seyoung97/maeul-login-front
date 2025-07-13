import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import MainLayout from '@/components/Layout/Main/Layout';
import MainPage from '@/pages/MainPage';

const router = (
  <Route>
    <Route element={<MainLayout />}>
      <Route index element={<MainPage />} />
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
