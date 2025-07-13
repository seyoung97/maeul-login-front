import { Outlet } from 'react-router-dom';

import Footer from '../_shared/Footer/Footer';

import Header from './Header';
import styles from './layout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
