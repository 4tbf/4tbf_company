import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import onboarding from 'public/images/qr/onboarding.png';
import styles from './OnBoarding.module.scss';

const OnBoarding: React.FC = () => {
  const { t } = useTranslation();
  const scope = 'cases.qr.qrSteps';

  return (
    <div className={styles.onBoarding}>
      <h1>{t(`${scope}.onboarding`)}</h1>
      <Image src={onboarding} alt="onboarding" width={1176} height={624.71} />
    </div>
  );
};

export default OnBoarding;
