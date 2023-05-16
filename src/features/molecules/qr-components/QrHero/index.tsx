import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Iphone1 from 'public/images/qr/hero-iphone-1.png';
import Iphone2 from 'public/images/qr/hero-iphone-2.png';
import Image from 'next/image';
import styles from './QrHero.module.scss';
import LongArrow from '../../../../components/svgs/LongArrow';
import Text from '../../../atoms/text';

const QrHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.qrHero}>
      <div className={styles.main}>
        <div className={styles.arrowLink}>
          <Link href="/">
            <LongArrow />
          </Link>
        </div>
        <Text as="h1">{t('cases.qr.mainTitle')}</Text>
        <Text as="p">{t('cases.qr.description')}</Text>
        <button className={styles.btn}>{t('cases.qr.btn')}</button>
      </div>
      <div className={styles.imagesContainer}>
        <Image src={Iphone1} alt="iPhone" width={249} height={540} />
        <Image src={Iphone2} alt="iPhone" width={249} height={540} />
      </div>
    </section>
  );
};

export default QrHero;
