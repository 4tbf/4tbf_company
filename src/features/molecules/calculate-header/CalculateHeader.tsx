import React from 'react';
import styles from './CalculateHeader.module.scss';
import Text from '../../atoms/text';

const CalculateHeader = ({ title, descr }: { title: any; descr: any }) => {
  return (
    <section className={styles.calculateHeader}>
      <div className="container">
        <Text as="h1" className={styles.title}>
          {title}
        </Text>
        <Text as="p" className={styles.descr}>
          {descr}
        </Text>
      </div>
    </section>
  );
};

export default CalculateHeader;
