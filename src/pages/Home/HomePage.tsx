import React from 'react';

import SolidPrimaryButton from '@/components/Common/Button/SolidPrimaryButton';

import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <SolidPrimaryButton size="large">test</SolidPrimaryButton>
    </main>
  );
};

export default HomePage;
