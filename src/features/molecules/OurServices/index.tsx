import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import styles from './OurServices.module.scss';
import Text from '../../atoms/text';
import ArrowButton from '../../../components/multiusable/arrow-button/ArrowButton';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const OurServices: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const { t } = useTranslation();

  return (
    <section className={styles.ourServices}>
      <div className="container">
        {mobile && (
          <div className={styles.mainItem}>
            <Text className={styles.mainTitle} as="h2">
              {t('services.title')}
            </Text>
            <ArrowButton href="/services" text={t('services.showmore')} />
          </div>
        )}
        <div className={styles.servicesRow}>
          {!mobile && (
            <div className="col_">
              <div className={styles.mainItem}>
                <Text className={styles.mainTitle} as="h2">
                  {t('services.title')}
                </Text>
                <ArrowButton href="/services" text={t('services.showmore')} />
              </div>
            </div>
          )}
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <h2 className={styles.serviceTitle}>{t('services.mobile.title')}</h2>
              <Text className={styles.serviceDescr} as="p">
                {t('services.mobile.subtitle')}
              </Text>
            </Link>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <Text className={styles.serviceTitle} as="h2">
                {t('services.web.title')}
              </Text>
              <Text className={styles.serviceDescr} as="p">
                {t('services.web.subtitle')}
              </Text>
            </Link>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <h2 className={styles.serviceTitle}>{t('services.cloud.title')}</h2>
              <p className={styles.serviceDescr}>{t('services.cloud.subtitle')} </p>
            </Link>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <h2 className={styles.serviceTitle}>{t('services.ui.title')}</h2>
              <p className={styles.serviceDescr}>{t('services.ui.subtitle')} </p>
            </Link>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <h2 className={styles.serviceTitle}>{t('services.support.title')}</h2>
              <p className={styles.serviceDescr}>{t('services.support.subtitle')} </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurServices);
