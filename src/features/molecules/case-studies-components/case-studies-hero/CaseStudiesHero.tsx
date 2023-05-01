import React from 'react';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CaseStudiesHero.module.scss';

const CaseStudiesHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.caseStudiesHero}>
      <div className="container">
        <AnimatePresence>
          <motion.h1
            className={styles.caseStudiTitle}
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={t('case.titile')}
          >
            {t('case.titile')}
          </motion.h1>
          <motion.p
            className={styles.caseStudiSubTitle}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={t('case.subtitle')}
          >
            {t('case.subtitle')}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
