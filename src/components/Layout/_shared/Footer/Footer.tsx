import { useState } from 'react';

import cx from 'clsx';

import { IconHome, IconLocationPin, IconMyPage } from '@/assets/icons';

import styles from './footer.module.scss';

const Footer = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  return (
    <footer className={styles.wrapper}>
      <nav>
        <ul>
          <li className={cx({ [styles.active]: activeItem === 'mypage' })} onClick={() => handleItemClick('mypage')}>
            <IconMyPage />
            <span>마이페이지</span>
          </li>
          <li className={cx({ [styles.active]: activeItem === 'home' })} onClick={() => handleItemClick('home')}>
            <IconHome />
            <span>홈</span>
          </li>
          <li
            className={cx({ [styles.active]: activeItem === 'location' })}
            onClick={() => handleItemClick('location')}
          >
            <IconLocationPin />
            <span>전체 공고</span>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
