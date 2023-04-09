import React from 'react';
import styles from './Progress.module.scss';
import Text from '../../../atoms/text';

const Progress = () => {
  return (
    <section className={styles.progess}>
      <div className="container">
        <div className={styles.barWrapper}>
          <div className={styles.barRow}>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  Lorem Ipsum
                </Text>
                <Text as="p" className={styles.barText}>
                  Lorem Ipsum dolar set
                </Text>
              </div>
            </div>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  Lorem Ipsum
                </Text>
                <Text as="p" className={styles.barText}>
                  Lorem Ipsum dolar set
                </Text>
              </div>
            </div>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  Lorem Ipsum
                </Text>
                <Text as="p" className={styles.barText}>
                  Lorem Ipsum dolar set
                </Text>
              </div>
            </div>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  Lorem Ipsum
                </Text>
                <Text as="p" className={styles.barText}>
                  Lorem Ipsum dolar set
                </Text>
              </div>
            </div>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  Lorem Ipsum
                </Text>
                <Text as="p" className={styles.barText}>
                  Lorem Ipsum dolar set
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
