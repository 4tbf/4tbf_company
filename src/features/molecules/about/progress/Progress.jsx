import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Progress.module.scss';
import Text from '../../../atoms/text';

const Progress = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.progess}>
      <div className="container">
        <div className={styles.barWrapper}>
          <div className={styles.barRow}>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  2023
                </Text>
                <Text as="p" className={styles.barText}>
                  {t('about.progress.1')}
                </Text>
              </div>
            </div>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  2024
                </Text>
                <Text as="p" className={styles.barText}>
                  {t('about.progress.2')}
                </Text>
              </div>
            </div>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  2024
                </Text>
                <Text as="p" className={styles.barText}>
                  {t('about.progress.3')}
                </Text>
              </div>
            </div>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  2025
                </Text>
                <Text as="p" className={styles.barText}>
                  {t('about.progress.4')}
                </Text>
              </div>
            </div>
            <div className="col_">
              <div className={styles.barItem}>
                <Text as="h3" className={styles.barTitle}>
                  2025
                </Text>
                <Text as="p" className={styles.barText}>
                  {t('about.progress.5')}
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
