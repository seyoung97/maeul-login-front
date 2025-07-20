import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../_shared/Footer/Footer';

import styles from './contentLayout.module.scss';

const ContentLayout = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default ContentLayout;
