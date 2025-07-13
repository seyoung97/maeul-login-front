import { IconLogo } from '@/assets/icons';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div>
        <IconLogo />
      </div>
    </header>
  )
}

export default Header