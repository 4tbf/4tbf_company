import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import createQr from 'public/images/qr/createQR.png';
import styles from './CreateQR.module.scss';

const CreateQR: React.FC = () => {
  const { t } = useTranslation();
  const scope = 'cases.qr.qrSteps.createQR';

  return (
    <div className={styles.createQR}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1>{t(`${scope}.title`)}</h1>
          <p>{t(`${scope}.info`)}</p>
        </div>
        <p>{t(`${scope}.description`)}</p>
      </div>
      <Image src={createQr} alt="create Qr" width={1500} height={1360} />
    </div>
  );
};
export default CreateQR;
