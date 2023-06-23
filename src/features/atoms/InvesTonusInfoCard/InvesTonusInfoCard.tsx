import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Text from '../text';
import { TINvesTonus } from '../typesAtoms';
import styles from './InvesTonusInfoCard.module.scss';

const InvesTonusInfoCard: React.FC<TINvesTonus> = ({ title, info, icon }) => {
  const Componet = icon;
  const tablet = useMediaQuery('(max-width: 1279.98px)');
  const { t } = useTranslation();
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();
  const { locale } = useRouter();
  return (
    <AnimatePresence>
      <motion.div
        className={styles.invesTonusCardsInformation}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key="itesmRow"
      >
        {tablet ? (
          <motion.div className={styles.itemContentTabl} variants={itemVariants}>
            <Componet />
            <div className={styles.itesmTopTabl}>
              <Text as="p" className={styles.itemTitleTabl}>
                {t(title)}
              </Text>
              <Text as="p" className={styles.itemInfo}>
                {t(info)}
              </Text>
            </div>
          </motion.div>
        ) : locale === 'en' ? (
          <motion.div className={styles.itemContent} variants={itemVariants}>
            <div className={styles.itesmTop}>
              <Text as="p" className={styles.itemTitle}>
                {t(title)}
              </Text>
              <Componet />
            </div>
            <Text as="p">{t(info)}</Text>
          </motion.div>
        ) : (
          <motion.div className={styles.itemContentTabl} variants={itemVariants}>
            <Componet />
            <div className={styles.itesmTopTabl}>
              <Text as="p" className={styles.itemTitleTabl}>
                {t(title)}
              </Text>
              <Text as="p" className={styles.itemInfo}>
                {t(info)}
              </Text>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
export default InvesTonusInfoCard;
