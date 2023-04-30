import React from 'react';
import Link from 'next/link';
import LongArrowIcon from '../../svgs/LongArrowIcon';
import styles from './ArrowButton.module.scss';

const ArrowButton = ({ href, text, blank }: { href: string; text: string; blank?: boolean }) => {
  return (
    <Link href={href} target={`${blank ? '_blank' : '_self'}`} className={styles.arrowLink}>
      {text} <LongArrowIcon />
    </Link>
  );
};

export default ArrowButton;
