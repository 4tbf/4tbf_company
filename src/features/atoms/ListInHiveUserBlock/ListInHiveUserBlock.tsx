import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LocationIcon from '../../../components/svgs/LocationIcon';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Text from '../text';

import styles from './ListInHiveUserBlock.module.scss';

const ListInHiveUserBlock = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 767.98px)');
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();
  return (
    <AnimatePresence>
      <div className={styles.invesTonusPersonUser}>
        <div className="container">
          <div className={styles.userPersonInfo}>
            <Text as="h2" className={styles.title}>
              {t('invesTonus.user.person')}
            </Text>
            <Text as="p" className={styles.infoInvesTonus}>
              {t('listInHive.userInfo')}
            </Text>
          </div>
        </div>
        <div className={isMobile ? styles.invesTnusMobilePersonUser : 'container'}>
          <div className={styles.ifoUserdetails}>
            <div className={styles.userBlock}>
              <div className={styles.userPersonMainInfo}>
                <div className={styles.userPhotoWrapper}>
                  <Image
                    className="invesTonus_developer_image"
                    width={445}
                    height={700}
                    src="/images/listInHive/userPhoto.png"
                    alt="developer_image"
                  />
                </div>
              </div>
              <div className={styles.detailsInfo}>
                <Text as="p" className={styles.userName}>
                  {t('Patrick Brun')}
                </Text>
                <Text as="p" className={styles.infoUser}>
                  {t('listInHive.userInfo.age')}
                </Text>
                <div className={styles.userLocation}>
                  <div className={styles.locationSvg}>
                    <LocationIcon />
                  </div>
                  <Text as="p" className={styles.infoUserLocation}>
                    {t('invesTonus.userInfo.details.location')}
                  </Text>
                </div>
              </div>
            </div>

            <motion.div
              className={styles.cardUserPersona}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key="mainInfo"
            >
              <motion.div variants={itemVariants}>
                <Text as="p" className={styles.bioInfoDetail}>
                  {t('listInHive.userInfo.bio')}
                </Text>
                <Text as="p" className={styles.bioUserInfo}>
                  {t('listInHive.userInfo.bio.text')}
                </Text>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Text as="p" className={styles.bioInfoDetail}>
                  {t('listInHive.userInfo.painPoints.pain')}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {t('listInHive.userInfo.painPoints.points')}
                </Text>
                <div className={styles.bioList}>
                  <Text as="ul">
                    <Text as="li">{t('listInHive.userInfo.painPoints.1')}</Text>
                    <Text as="li">{t('listInHive.userInfo.painPoints.2')}</Text>
                    <Text as="li">{t('listInHive.userInfo.painPoints.3')}</Text>
                  </Text>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Text as="p" className={styles.bioInfoDetail}>
                  {t('listInHive.userInfo.goals')}
                </Text>
                <div className={styles.bioList}>
                  <Text as="ul">
                    <Text as="li">{t('listInHive.userInfo.goals.1')}</Text>
                    <Text as="li">{t('listInHive.userInfo.goals.2')}</Text>
                    <Text as="li">{t('listInHive.userInfo.goals.3')}</Text>
                  </Text>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ListInHiveUserBlock;
