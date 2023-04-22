import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './WhoWe.module.scss';
import Text from '../../../atoms/text';

const WhoWe = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.whoWe}>
      <div className="container">
        <Text as="h2" className={styles.whoWeTitle}>
          {t('about.whoweare')}
        </Text>
        <Text as="p" className={styles.whoWeDescr}>
          {t('about.part.1')}
          <br />
          {t('about.part.2')}
          <br />
          {t('about.part.3')}
          <br />
          {t('about.part.4')}
        </Text>
      </div>
    </section>
  );
};

export default WhoWe;
