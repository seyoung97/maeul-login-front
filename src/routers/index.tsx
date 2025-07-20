import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import ContentLayout from '@/components/Layout/Content/ContentLayout';
import MainLayout from '@/components/Layout/Main/Layout';
import { HomePage } from '@/pages/Home';
import { MyPage } from '@/pages/MyPage';

const router = (
  <Route>
    <Route element={<MainLayout />}>
      <Route path="/home" element={<HomePage />} />
    </Route>
    <Route element={<ContentLayout />}>
      <Route path="/mypage" element={<MyPage />} />
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
