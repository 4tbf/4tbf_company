import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LocationIcon from '../../../components/svgs/LocationIcon';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Text from '../text';

import styles from './InvesTonusPersonUser.module.scss';

const InvesTonusPersonUser = () => {
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
              {t('invesTonus.user.person.info')}
            </Text>
          </div>
        </div>
        <div className={isMobile ? styles.invesTnusMobilePersonUser : 'container'}>
          <div className={styles.ifoUserdetails}>
            <div className={styles.userPersonMainInfo}>
              <Image
                className="invesTonus_developer_image"
                width={445}
                height={700}
                src="/images/invesTonus/devPhoto-min.png"
                alt="developer_image"
              />
              <div className={styles.detailsInfo}>
                <Text as="p" className={styles.userName}>
                  {t('invesTonus.userInfo.details.name')}
                </Text>
                <Text as="p" className={styles.infoUser}>
                  {t('invesTonus.userInfo.details.age')}
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
                  {t('invesTonus.user.person.bio.title')}
                </Text>
                <Text as="p" className={styles.bioUserInfo}>
                  {t('invesTonus.user.person.bio')}
                </Text>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Text as="p" className={styles.bioInfoDetail}>
                  {t('invesTonus.user.person.painPoints')}
                </Text>
                <div className={styles.bioList}>
                  <Text as="ul">
                    <Text as="li">{t('invesTonus.user.person.info1.painPoints')}</Text>
                    <Text as="li">{t('invesTonus.user.person.info2.painPoints')}</Text>
                    <Text as="li">{t('invesTonus.user.person.info3.painPoints')}</Text>
                    <Text as="li">{t('invesTonus.user.person.info4.painPoints')}</Text>
                  </Text>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Text as="p" className={styles.bioInfoDetail}>
                  {t('invesTonus.user.person.goals')}
                </Text>
                <div className={styles.bioList}>
                  <Text as="ul">
                    <Text as="li">{t('invesTonus.user.person.info1.goals')}</Text>
                    <Text as="li">{t('invesTonus.user.person.info1.goals')}</Text>
                    <Text as="li">{t('invesTonus.user.person.info1.goals')}</Text>
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

export default InvesTonusPersonUser;
