import React from 'react';
import styles from './WhyWeHero.module.scss';
import Text from '../../../atoms/text';

const WhyWeHero = () => {
  return (
    <section className={styles.whyweHero}>
      <div className="container">
        <Text as="h1" className={styles.heroTitle}>
          Stex Mi <br /> hat bomb title .
        </Text>
        <Text as="p" className={styles.heroSubTitle}>
          Hit a line and our friendly folks will get back to you as soon as possible.
        </Text>
      </div>
    </section>
  );
};

export default WhyWeHero;
