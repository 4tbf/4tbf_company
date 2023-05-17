import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import onboarding from 'public/images/qr/onboarding.png';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './OnBoarding.module.scss';

const OnBoarding: React.FC = () => {
  const { t } = useTranslation();
  const scope = 'cases.qr.qrSteps';

  return (
    <div className={styles.onBoarding}>
      <h1>{t(`${scope}.onboarding`)}</h1>
      <AnimatePresence>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          key="onboarding"
        >
          <Image src={onboarding} alt="onboarding" width={1176} height={624.71} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default OnBoarding;
