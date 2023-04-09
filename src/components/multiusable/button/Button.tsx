import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  children,
  variant = 'light',
}: {
  children: any;
  type?: any;
  variant?: any;
}) => {
  return (
    <button className={clsx(styles.button, styles[variant])} type={type}>
      {children}
    </button>
  );
};

export default Button;
