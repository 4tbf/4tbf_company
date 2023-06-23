import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import qrHistory from 'public/images/qr/history.png';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './QRHistory.module.scss';

const QRHistory: React.FC = () => {
  const { t } = useTranslation();
  const scope = 'cases.qr.qrSteps.qrHistory';
  const list = [t(`${scope}.info.item`)];
  return (
    <div className={styles.qrHistory}>
      <div className={styles.mainContainer}>
        <h1>{t(`${scope}.title`)}</h1>
        <p>{t(`${scope}.description`)}</p>
        <ul>
          {list.map((el) => (
            <li key={el}>
              <span>{el}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.imgContainer}>
        <AnimatePresence>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key="QR History"
          >
            <Image src={qrHistory} alt="QR History" width={1174} height={1283} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default memo(QRHistory);
