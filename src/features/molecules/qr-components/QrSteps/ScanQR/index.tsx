import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import scanQR from 'public/images/qr/scanQR.png';
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
      <Image src={scanQR} alt="scan Qr" width={1174} height={888} />
    </div>
  );
};
export default ScanQR;
