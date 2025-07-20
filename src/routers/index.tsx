import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import MainLayout from '@/components/Layout/Main/Layout';
import { HomePage } from '@/pages/Home';

const router = (
  <Route>
    <Route element={<MainLayout />}>
      <Route path="/home" element={<HomePage />} />
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
