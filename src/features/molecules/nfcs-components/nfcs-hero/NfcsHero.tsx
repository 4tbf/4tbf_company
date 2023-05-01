import React from 'react';
import Link from 'next/link';
import styles from './NfcsHero.module.scss';
import Text from '../../../atoms/text';
import Button from '../../../../components/multiusable/button/Button';
import LongArrow from '../../../../components/svgs/LongArrow';

const NfcsHero = () => {
  return (
    <section className={styles.nfcsHero}>
      <div className="container">
        <Link href="/" className={styles.arrowLink}>
          <LongArrow />
        </Link>
        <Text as="h1">NFCS Portal</Text>
        <Text as="p">
          Hit a line and our friendly folks will get back to you as soon as possible.
        </Text>
        <Button href="/" target="_blank">
          View website
        </Button>
      </div>
    </section>
  );
};

export default NfcsHero;
