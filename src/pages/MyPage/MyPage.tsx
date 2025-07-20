import React from 'react';

import ContentHeader from '@/components/Layout/Content/ContentHeader/ContentHeader';

import styles from './myPage.module.scss';

const MyPage: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <ContentHeader title="마이페이지" />
      <h1>마이페이지</h1>
    </main>
  );
};

export default MyPage;
