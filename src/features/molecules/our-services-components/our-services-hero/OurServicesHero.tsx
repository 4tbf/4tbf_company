import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './OurServicesHero.module.scss';
import Text from '../../../atoms/text';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

const OurServicesHero = () => {
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const { t } = useTranslation();

  return (
    <section className={styles.ourServicesHero}>
      <div className="container">
        <AnimatePresence>
          <motion.h1
            className={styles.heroTitle}
            initial={{ x: -1000, scale: 0.7 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            key={t('services.title')}
          >
            {t('services.title')}
          </motion.h1>
          <div className={styles.servicesItems}>
            <div className={styles.ourServices}>
              {mobile && (
                <div className={styles.mainItem}>
                  <motion.h2
                    className={styles.mainTitle}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={t('services.description')}
                  >
                    {t('services.description')}
                  </motion.h2>
                </div>
              )}
              <div className={styles.servicesRow}>
                {!mobile && (
                  <div className="col_">
                    <div className={styles.mainItem}>
                      <motion.p
                        className={styles.mainText}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key={`2 part${t('services.description')}`}
                      >
                        {t('services.description')}
                      </motion.p>
                    </div>
                  </div>
                )}
                <div className="col_">
                  <div className={styles.clasicItem}>
                    <div className={styles.imageItem}>
                      <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                    </div>
                    <h2 className={styles.serviceTitle}>{t('services.mobile.title')}</h2>
                    <Text className={styles.serviceDescr} as="p">
                      {t('services.mobile.subtitle')}
                    </Text>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.clasicItem}>
                    <div className={styles.imageItem}>
                      <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                    </div>
                    <Text className={styles.serviceTitle} as="h2">
                      {t('services.web.title')}
                    </Text>
                    <Text className={styles.serviceDescr} as="p">
                      {t('services.web.subtitle')}
                    </Text>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.clasicItem}>
                    <div className={styles.imageItem}>
                      <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                    </div>
                    <h2 className={styles.serviceTitle}>{t('services.cloud.title')}</h2>
                    <p className={styles.serviceDescr}>{t('services.cloud.subtitle')} </p>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.clasicItem}>
                    <div className={styles.imageItem}>
                      <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                    </div>
                    <h2 className={styles.serviceTitle}>{t('services.ui.title')}</h2>
                    <p className={styles.serviceDescr}>{t('services.ui.subtitle')} </p>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.clasicItem}>
                    <div className={styles.imageItem}>
                      <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
                    </div>
                    <h2 className={styles.serviceTitle}>{t('services.support.title')}</h2>
                    <p className={styles.serviceDescr}>{t('services.support.subtitle')} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurServicesHero;
