import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AboutHero.module.scss';
import Button from '../../../../components/multiusable/button/Button';

const AboutHero = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className={styles.aboutHero}>
      <div className="container">
        <AnimatePresence>
          <motion.h1
            className={styles.aboutTitle}
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={t('about.subtitle')}
          >
            {t('about.subtitle')}
          </motion.h1>
          <motion.p
            className={styles.aboutSubTitle}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={t('about.title')}
          >
            {t('about.title')}
          </motion.p>
        </AnimatePresence>
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
