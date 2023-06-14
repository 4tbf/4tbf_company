import React, { memo } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import styles from './NfcsHero.module.scss';
import Button from '../../../../components/multiusable/button/Button';
import LongArrow from '../../../../components/svgs/LongArrow';

const NfcsHero = () => {
  const { t } = useTranslation();
  const route = useRouter();

  return (
    <section className={styles.nfcsHero}>
      <div className="container">
        <Link onClick={() => route.back()} href="/" className={styles.arrowLink} aria-label="back">
          <LongArrow />
        </Link>
        <AnimatePresence>
          <motion.h1
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={t('cases.nfcs.title')}
          >
            {t('cases.nfcs.title')}
          </motion.h1>
          <motion.p
            className={styles.subTitle}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={t('cases.nfcs.description')}
          >
            {t('cases.nfcs.description')}
          </motion.p>
        </AnimatePresence>
        <Button href="https://www.nfcs.space/" target="_blank">
          {t('cases.nfcs.view.website')}
        </Button>
      </div>
    </section>
  );
};

export default memo(NfcsHero);
