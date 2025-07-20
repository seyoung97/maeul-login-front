import React from 'react';

import { ImageEventPottery, ImageSeoulCity } from '@/assets/images';
import AvatarCity from '@/components/Common/Avatar/AvatarCity';
import InfoAvatarCity from '@/components/Common/Avatar/InfoAvatarCity';
import SolidPrimaryButton from '@/components/Common/Button/SolidPrimaryButton';
import EventCard from '@/components/Common/Card/EventCard';

import styles from './homePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <SolidPrimaryButton size="large">test</SolidPrimaryButton>
      <AvatarCity size="xlarge" src={ImageSeoulCity} />
      <InfoAvatarCity size="xlarge" src={ImageSeoulCity} cityName="서울" />
      <EventCard
        backgroundImage={ImageEventPottery}
        startDate="2025.10.15"
        endDate="10.20"
        title="[경북 안동] 전통 한지 공예 워크샵"
        onClick={() => console.log('한지 공예 클릭!')}
        className={styles.eventCard}
      />
    </main>
  );
};

export default HomePage;
