import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './ProcessHero.module.scss';

const ProcessHero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.processHero}>
      <div className="container">
        <AnimatePresence>
          <motion.p
            className={styles.processHeroSubTitle}
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={t('process.hero.info')}
          >
            {t('process.hero.info')}
          </motion.p>
          <motion.h1
            className={styles.processHeroIitel}
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={t('process.hero.title')}
          >
            {t('process.hero.title').toUpperCase()}
          </motion.h1>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcessHero;
