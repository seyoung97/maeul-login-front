import cx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { IconArrowLeft } from '@/assets/icons';

import styles from './contentHeader.module.scss';

interface ContentHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  className?: string;
}

const ContentHeader = ({ title, showBackButton = true, onBackClick, className }: ContentHeaderProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <header aria-label="Content Header" className={cx(styles.wrapper, className)}>
      <div className={styles.container}>
        {showBackButton && (
          <button aria-label="뒤로가기" type="button" onClick={handleBackClick}>
            <IconArrowLeft />
          </button>
        )}
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default ContentHeader;
