import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './WhyWeHero.module.scss';
import Text from '../../../atoms/text';

const WhyWeHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.whyweHero}>
      <div className="container">
        <Text as="h1" className={styles.heroTitle}>
          {t('whywe.title')} <br /> {t('whywe.title2')}
        </Text>
        <Text as="p" className={styles.heroSubTitle}>
          {t('whywe.subtitle')}
        </Text>
      </div>
    </section>
  );
};

export default WhyWeHero;
