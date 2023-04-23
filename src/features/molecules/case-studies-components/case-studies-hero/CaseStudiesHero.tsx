import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './CaseStudiesHero.module.scss';
import Text from '../../../atoms/text';

const CaseStudiesHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.caseStudiesHero}>
      <div className="container">
        <Text as="h1" className={styles.caseStudiTitle}>
          {t('case.titile')}
        </Text>
        <Text as="p" className={styles.caseStudiSubTitle}>
          {t('case.subtitle')}
        </Text>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
