import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import styles from './OurServices.module.scss';
import Text from '../../atoms/text';
import ArrowButton from '../../../components/multiusable/arrow-button/ArrowButton';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const OurServices: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 767.98px)');
  const { t } = useTranslation();
  const brandImageMotion = {
    rest: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const brandImageHoveredMotion = {
    rest: {
      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

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
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <Link href="/services" className={styles.clasicItem}>
                <div className={styles.imageItem}>
                  <motion.div variants={brandImageMotion}>
                    <Image
                      className={styles.brandImage}
                      src="/images/brand_image.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                  <motion.div variants={brandImageHoveredMotion}>
                    <Image
                      className={styles.brandImageHovered}
                      src="/images/brand_image-hovered.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                </div>
                <h2 className={styles.serviceTitle}>{t('services.mobile.title')}</h2>
                <Text className={styles.serviceDescr} as="p">
                  {t('services.mobile.subtitle')}
                </Text>
              </Link>
            </motion.div>
          </div>
          <div className="col_">
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <Link href="/services" className={styles.clasicItem}>
                <div className={styles.imageItem}>
                  <motion.div variants={brandImageMotion}>
                    <Image
                      className={styles.brandImage}
                      src="/images/brand_image.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                  <motion.div variants={brandImageHoveredMotion}>
                    <Image
                      className={styles.brandImageHovered}
                      src="/images/brand_image-hovered.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                </div>
                <Text className={styles.serviceTitle} as="h2">
                  {t('services.web.title')}
                </Text>
                <Text className={styles.serviceDescr} as="p">
                  {t('services.web.subtitle')}
                </Text>
              </Link>
            </motion.div>
          </div>
          <div className="col_">
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <Link href="/services" className={styles.clasicItem}>
                <div className={styles.imageItem}>
                  <motion.div variants={brandImageMotion}>
                    <Image
                      className={styles.brandImage}
                      src="/images/brand_image.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                  <motion.div variants={brandImageHoveredMotion}>
                    <Image
                      className={styles.brandImageHovered}
                      src="/images/brand_image-hovered.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                </div>
                <h2 className={styles.serviceTitle}>{t('services.cloud.title')}</h2>
                <p className={styles.serviceDescr}>{t('services.cloud.subtitle')} </p>
              </Link>
            </motion.div>
          </div>
          <div className="col_">
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <Link href="/services" className={styles.clasicItem}>
                <div className={styles.imageItem}>
                  <motion.div variants={brandImageMotion}>
                    <Image
                      className={styles.brandImage}
                      src="/images/brand_image.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                  <motion.div variants={brandImageHoveredMotion}>
                    <Image
                      className={styles.brandImageHovered}
                      src="/images/brand_image-hovered.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                </div>
                <h2 className={styles.serviceTitle}>{t('services.ui.title')}</h2>
                <p className={styles.serviceDescr}>{t('services.ui.subtitle')} </p>
              </Link>
            </motion.div>
          </div>
          <div className="col_">
            <motion.div initial="rest" whileHover="hover" animate="rest">
              <Link href="/services" className={styles.clasicItem}>
                <div className={styles.imageItem}>
                  <motion.div variants={brandImageMotion}>
                    <Image
                      className={styles.brandImage}
                      src="/images/brand_image.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                  <motion.div variants={brandImageHoveredMotion}>
                    <Image
                      className={styles.brandImageHovered}
                      src="/images/brand_image-hovered.png"
                      height={67}
                      width={81}
                      alt="image"
                    />
                  </motion.div>
                </div>
                <h2 className={styles.serviceTitle}>{t('services.support.title')}</h2>
                <p className={styles.serviceDescr}>{t('services.support.subtitle')} </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurServices);
