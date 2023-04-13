import React from 'react';
import styles from './CaseStudiesHero.module.scss';
import Text from '../../../atoms/text';

const CaseStudiesHero = () => {
  return (
    <section className={styles.caseStudiesHero}>
      <div className="container">
        <Text as="h1" className={styles.caseStudiTitle}>
          Stex Mi <br />
          hat bomb title .
        </Text>
        <Text as="p" className={styles.caseStudiSubTitle}>
          Hit a line and our friendly folks will get back to you as soon as possible.
        </Text>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
