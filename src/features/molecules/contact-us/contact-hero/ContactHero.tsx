import React from 'react';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactHero.module.scss';

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contactHero}>
      <div className="container">
        <AnimatePresence>
          <motion.h1
            className={styles.contactTitle}
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={t('contact.title.1')}
          >
            {t('contact.title.1')} <br /> {t('contact.title.2')}
          </motion.h1>
          <motion.p
            className={styles.contactSubTitle}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={t('contact.description')}
          >
            {t('contact.description')}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactHero;
