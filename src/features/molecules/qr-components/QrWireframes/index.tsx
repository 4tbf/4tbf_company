import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import wireframes from 'public/images/qr/wireframes.png';
import styles from './QrWireframes.module.scss';
import Pallete from '../../../atoms/Pallete';
import { PALLETE } from '../../../atoms/Pallete/data';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

const QrWireframes: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const { t } = useTranslation();
  const scope = 'cases.qr.qrWireframes';
  return (
    <section className={styles.qrWireframes}>
      <div className={styles.imageWrapper}>
        <h1>{t(`${scope}.title`)}</h1>
        <Image src={wireframes} alt="wireframes" width={1440} height={1386} />
      </div>
      <div className={styles.mainWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.wrapper}>
            <h2>{t(`${scope}.color`)}</h2>
            <p className={styles.text}>{t(`${scope}.color.description`)}</p>
            {mobile && <Pallete data={PALLETE.filter((el) => el.color)} />}
          </div>
          <div className={mobile ? styles.font : ''}>
            <h2>{t(`${scope}.font`)}</h2>
            {mobile && <Pallete data={PALLETE.filter((el) => el.font)} />}
          </div>
        </div>
        {!mobile && <Pallete data={PALLETE} />}
      </div>
    </section>
  );
};

export default memo(QrWireframes);
