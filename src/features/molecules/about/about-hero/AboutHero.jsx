import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './AboutHero.module.scss';
import Text from '../../../atoms/text';
import Button from '../../../../components/multiusable/button/Button';
import SuccessModal from '../../../atoms/SuccessModal';

const AboutHero = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <section className={styles.aboutHero}>
      <SuccessModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />

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
          onClick={() => setIsOpen(true)}
          variant="light"
        />
      </div>
    </section>
  );
};

export default AboutHero;
