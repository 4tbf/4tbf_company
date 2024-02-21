import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Text from '../../atoms/text';
import { AILLUSION_DESIGN } from './constants';
import { TINvesTonusDesigne } from './constantsType';
import styles from './listInHiveDesign.module.scss';

const AIllusionDesign = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 767.98px)');
  return (
    <AnimatePresence>
      <div className={styles.invesTonusDesign}>
        <div className="container">
          <Text className={styles.designeTonus}>{t('invesTonus.design.title')}</Text>
          {AILLUSION_DESIGN.map((current: TINvesTonusDesigne) => {
            const designeDetailsInfo = current.detailsInfo;
            const pagesClass = current.class;
            return (
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={current.title}
                className={styles.invesTonusDetailsDesigne}
                style={
                  current.reversed
                    ? { flexDirection: 'row-reverse', marginRight: '140px' }
                    : { flexDirection: 'row' }
                }
              >
                <div className={`${styles[pagesClass]} ${styles.infoBlocksWrapper}`}>
                  <div className={styles.invesTonusDetailsInfo}>
                    <Text as="p" className={styles.designdashboardTitle}>
                      {t(current.title)}
                    </Text>
                    {current.subtitle ? (
                      <Text as="p" className={styles.designDashboardSubtitle}>
                        {t(current.subtitle)}
                      </Text>
                    ) : null}

                    {designeDetailsInfo?.length ? (
                      <div className={styles.designdetailsList}>
                        {designeDetailsInfo.map((item) => {
                          return (
                            <Text as="ul" key={item}>
                              <Text as="li" className={styles.designDetails}>
                                {t(item)}
                              </Text>
                            </Text>
                          );
                        })}
                      </div>
                    ) : null}
                    <Text as="p" className={styles.designInfo}>
                      {t(current.info)}
                    </Text>
                  </div>

                  <div className={styles.designeImages}>
                    <Image
                      unoptimized
                      className="invesTonus_designe_image"
                      width={current.with}
                      height={current.height}
                      src={isMobile ? current.mobImg : current.image}
                      alt="invesTonus_designe_image"
                      style={current.reversed ? { borderRadius: '9px' } : { borderRadius: 'none' }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
          <h1 className={styles.otherCases_title}>{t('cases.nfcs.otherCases')}</h1>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default AIllusionDesign;
