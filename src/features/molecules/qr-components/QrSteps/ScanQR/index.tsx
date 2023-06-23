import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import scanQR from 'public/images/qr/scanQR.png';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ScanQR.module.scss';

const ScanQR: React.FC = () => {
  const { t } = useTranslation();
  const scope = 'cases.qr.qrSteps.scanQR';

  return (
    <div className={styles.scanQr}>
      <div className={styles.mainContainer}>
        <h1>{t(`${scope}.title`)}</h1>
        <p>{t(`${scope}.info`)}</p>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          key="scan Qr"
        >
          <Image src={scanQR} alt="scan Qr" width={1174} height={888} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default memo(ScanQR);
