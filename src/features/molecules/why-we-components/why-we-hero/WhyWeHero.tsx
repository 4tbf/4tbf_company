import React from 'react';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WhyWeHero.module.scss';

const WhyWeHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.whyweHero}>
      <div className="container">
        <AnimatePresence>
          <motion.h1
            className={styles.heroTitle}
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={t('whywe.title')}
          >
            {t('whywe.title')} <br /> {t('whywe.title2')}
          </motion.h1>
          <motion.p
            className={styles.heroSubTitle}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={t('whywe.subtitle')}
          >
            {t('whywe.subtitle')}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyWeHero;
