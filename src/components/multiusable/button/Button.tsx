import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  children,
  variant = 'light',
  onClick,
}: {
  children: any;
  type?: any;
  variant?: any;
  onClick?: any;
}) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, styles[variant])} type={type}>
      {children}
    </button>
  );
};

export default Button;
