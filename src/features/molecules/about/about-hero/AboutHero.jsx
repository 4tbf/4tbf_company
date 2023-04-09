import React from 'react';
import styles from './AboutHero.module.scss';
import Text from '../../../atoms/text';
import Button from '../../../../components/multiusable/button/Button';

const AboutHero = () => {
  return (
    <section className={styles.aboutHero}>
      <div className="container">
        <Text as="h1" className={styles.aboutTitle}>
          About Us bayc karelia yerkar .
        </Text>
        <Text as="p" className={styles.aboutSubTitle}>
          Lorem ipsum dolor sit amet consectetur. Dolor ultrices amet
        </Text>
        <Button type="button" children="Work With us" variant="light" />
      </div>
    </section>
  );
};

export default AboutHero;
