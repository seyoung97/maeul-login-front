import { ComponentProps } from 'react';

import cx from 'clsx';

import AvatarCity from './AvatarCity';
import styles from './infoAvatarCity.module.scss';

interface InfoAvatarCityProps extends Omit<ComponentProps<'img'>, 'src'> {
  src: string;
  cityName: string;
  className?: string;
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'custom';
}

const InfoAvatarCity: React.FC<InfoAvatarCityProps> = ({ size, cityName, src, className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <AvatarCity size={size} src={src} />
      <span>{cityName}</span>
    </div>
  );
};

export default InfoAvatarCity;
