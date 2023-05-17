import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Iphone1 from 'public/images/qr/hero-iphone-1.png';
import Iphone2 from 'public/images/qr/hero-iphone-2.png';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './QrHero.module.scss';
import LongArrow from '../../../../components/svgs/LongArrow';

const QrHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <section className={styles.qrHero}>
        <div className={styles.main}>
          <div className={styles.arrowLink}>
            <Link href="/">
              <LongArrow />
            </Link>
          </div>
          <motion.h1
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key="mainTitle"
          >
            {t('cases.qr.mainTitle')}
          </motion.h1>
          <motion.p
            className={styles.subTitle}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key="description"
          >
            {t('cases.qr.description')}
          </motion.p>
          <button className={styles.btn}>{t('cases.qr.btn')}</button>
        </div>
        <div className={styles.imagesContainer}>
          <motion.div
            initial={{ x: -1000, scale: 0.7, rotate: 0 }}
            animate={{ x: 0, scale: 1, rotate: -34 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            key={Iphone1.src}
          >
            <Image src={Iphone1} alt="iPhone" width={249} height={540} />
          </motion.div>
          <motion.div
            initial={{ x: -1000, scale: 0.7, rotate: 0 }}
            animate={{ x: 0, scale: 1, rotate: -34 }}
            transition={{ duration: 0.8 }}
            key={Iphone2.src}
          >
            <Image src={Iphone2} alt="iPhone" width={249} height={540} />
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default QrHero;
