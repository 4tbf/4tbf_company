import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  children,
  variant = 'light' || 'filled',
  onClick,
  href = '',
  target,
}: {
  children: any;
  type?: any;
  variant?: any;
  onClick?: any;
  href?: any;
  target?: any;
}) => {
  if (href) {
    return (
      <Link href={href} target={target || '_self'} className={clsx(styles.button, styles[variant])}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={clsx(styles.button, styles[variant])} type={type}>
      {children}
    </button>
  );
};

export default Button;
