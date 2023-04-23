import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './WhyWe.module.scss';
import Text from '../../atoms/text';
import ArrowButton from '../../../components/multiusable/arrow-button/ArrowButton';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const WhyWe = () => {
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const { t } = useTranslation();

  return (
    <section className={styles.whywe}>
      <div className="container">
        <div className={styles.whyWeRow}>
          <div className="col_">
            <div className={styles.whyWeLeft}>
              <Text as="h2">{t('main.whywe.title')}</Text>
              {!mobile && <ArrowButton href="/why-we" text={t('main.whywe.reasmore')} />}
            </div>
          </div>
          <div className="col_">
            <div className={styles.whyweRight}>
              <Text as="p">{t('main.whywe.text')}</Text>
              {mobile && <ArrowButton href="/why-we" text={t('main.whywe.reasmore')} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
