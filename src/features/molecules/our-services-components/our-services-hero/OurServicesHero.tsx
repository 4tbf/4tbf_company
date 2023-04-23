import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import styles from './OurServicesHero.module.scss';
import Text from '../../../atoms/text';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

const OurServicesHero = () => {
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const { t } = useTranslation();
  return (
    <section className={styles.ourServicesHero}>
      <div className="container">
        <Text as="h1">{t('services.title')}</Text>
        <div className={styles.servicesItems}>
          <div className={styles.ourServices}>
            {mobile && (
              <div className={styles.mainItem}>
                <Text className={styles.mainTitle} as="h2">
                  {t('services.description')}
                </Text>
              </div>
            )}
            <div className={styles.servicesRow}>
              {!mobile && (
                <div className="col_">
                  <div className={styles.mainItem}>
                    <Text className={styles.mainText} as="p">
                      {t('services.description')}
                    </Text>
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
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;
