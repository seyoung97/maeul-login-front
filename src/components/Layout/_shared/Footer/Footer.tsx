import cx from 'clsx';
import { NavLink } from 'react-router-dom';

import { IconHome, IconLocationPin, IconMyPage } from '@/assets/icons';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <NavLink to="/mypage" className={({ isActive }) => cx({ [styles.active]: isActive })}>
              <IconMyPage />
              <span>마이페이지</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/home" className={({ isActive }) => cx({ [styles.active]: isActive })}>
              <IconHome />
              <span>홈</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/location" className={({ isActive }) => cx({ [styles.active]: isActive })}>
              <IconLocationPin />
              <span>전체 공고</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
