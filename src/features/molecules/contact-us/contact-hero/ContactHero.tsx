import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './ContactHero.module.scss';
import Text from '../../../atoms/text';

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contactHero}>
      <div className="container">
        <Text className={styles.contactTitle} as="h1">
          {t('contact.title.1')} <br /> {t('contact.title.2')}
        </Text>
        <Text className={styles.contactSubTitle} as="p">
          {t('contact.description')}
        </Text>
      </div>
    </section>
  );
};

export default ContactHero;
