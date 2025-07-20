import type { ReactEventHandler } from 'react';
import { ComponentProps } from 'react';

import cx from 'clsx';

import { ImageSeoulCity } from '@/assets/images';

import styles from './avatarCity.module.scss';

interface AvatarCityProps extends Omit<ComponentProps<'img'>, 'src'> {
  src: string;
  className?: string;
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'custom';
}

const AvatarCity: React.FC<AvatarCityProps> = ({ size, src, className }) => {
  const onError: ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = ImageSeoulCity;
  };

  return (
    <div className={cx(styles.wrapper, styles[size], className)}>
      <img onError={onError} src={src ? src : ImageSeoulCity} alt="avatar-city" className={styles.image} />
    </div>
  );
};

export default AvatarCity;
