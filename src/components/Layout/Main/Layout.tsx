import { Outlet } from "react-router-dom";
import Header from "./Header";

import styles from './layout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout;