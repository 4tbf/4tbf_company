import React from 'react';
import Link from 'next/link';
import LongArrowIcon from '../../svgs/LongArrowIcon';
import styles from './ArrowButton.module.scss';

const ArrowButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} className={styles.arrowLink}>
      {text} <LongArrowIcon />
    </Link>
  );
};

export default ArrowButton;
