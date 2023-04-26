import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection} style={{ backgroundImage: 'url(/images/hero_bg.png)' }}>
      <div className="container">
        <div className={styles.heroRow}>
          <div className="col_">
            <AnimatePresence>
              <motion.p
                className={styles.subTitle}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {t('main.pretitle')}
              </motion.p>
              <motion.h1
                initial={{ x: -1000, scale: 0.7 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {t('main.title.1')} <br /> {t('main.title.2')} <br /> {t('main.title.3')} <br />
                {t('main.title.4')}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
