import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import styles from './AboutHero.module.scss';
import Text from '../../../atoms/text';
import Button from '../../../../components/multiusable/button/Button';

const AboutHero = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className={styles.aboutHero}>
      <div className="container">
        <Text as="h1" className={styles.aboutTitle}>
          {t('about.subtitle')}
        </Text>
        <Text as="p" className={styles.aboutSubTitle}>
          {t('about.title')}
        </Text>
        <Button
          type="button"
          children={t('about.workwithus')}
          onClick={() => router.push('/contact-us')}
          variant="light"
        />
      </div>
    </section>
  );
};

export default AboutHero;
