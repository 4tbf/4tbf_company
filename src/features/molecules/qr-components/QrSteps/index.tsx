import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import styles from './QrSteps.module.scss';

const OnBoarding = dynamic(() => import('./OnBoarding'), { ssr: false });
const CreateQR = dynamic(() => import('./CreateQR'), { ssr: false });
const ScanQR = dynamic(() => import('./ScanQR'), { ssr: false });
const QRHistory = dynamic(() => import('./QRHistory'), { ssr: false });

const QrSteps: React.FC = () => {
  return (
    <section className={styles.qrSteps}>
      <OnBoarding />
      <CreateQR />
      <ScanQR />
      <QRHistory />
    </section>
  );
};

export default memo(QrSteps);
