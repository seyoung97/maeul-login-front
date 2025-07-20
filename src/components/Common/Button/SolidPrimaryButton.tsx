import { ComponentProps, ReactNode } from 'react';

import cx from 'clsx';

import Interaction from '../Interaction/Index';

import styles from './solidPrimaryButton.module.scss';

interface SolidPrimaryButtonProps extends ComponentProps<'button'> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size: 'large' | 'medium' | 'small';
}

const SolidPrimaryButton: React.FC<SolidPrimaryButtonProps> = ({
  leftIcon,
  rightIcon,
  size,
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <button className={cx(styles.wrapper, className, styles[size])} disabled={disabled} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
      <Interaction backgroundColor="--c-label-normal" variant="strong" disabled={disabled} />
    </button>
  );
};

export default SolidPrimaryButton;
