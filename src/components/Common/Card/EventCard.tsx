import { ComponentProps } from 'react';

import cx from 'clsx';

import styles from './eventCard.module.scss';

interface EventCardProps extends ComponentProps<'div'> {
  backgroundImage: string;
  startDate: string;
  endDate: string;
  title: string;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  backgroundImage,
  startDate,
  endDate,
  title,
  className,
  onClick,
  ...props
}) => {
  return (
    <div
      className={cx(styles.wrapper, className)}
      onClick={onClick}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      {...props}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.dateRange}>
          {startDate} ~ {endDate}
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default EventCard;
