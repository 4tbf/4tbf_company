import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styles from './NfcsCards.module.scss';
import Text from '../text';
import { getNfcsCardsData } from './data';
import { useDelayedChildrenAnimation } from '../../../hooks/useDelayedChildrenAnimation';

const NfcsCards: React.FC = () => {
  const { t } = useTranslation();
  const data = getNfcsCardsData(t);
  const { locale } = useRouter();
  const { containerVariants, itemVariants } = useDelayedChildrenAnimation();
  return (
    <AnimatePresence>
      <motion.div
        className={`${locale === 'en' ? styles.itesmRow : styles.itesmRowRu}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key="itesmRow"
      >
        {data.map((el) => (
          <motion.div className="col_" key={el.title} variants={itemVariants}>
            <div className={styles.itemContent}>
              <div className={styles.itesmTop}>
                <Text as="p" className={styles.itemTitle}>
                  {`${el.title}`}
                </Text>
                <span className={styles.icon}>{el.icon}</span>
              </div>
              <Text as="p" className={styles.itemDescr}>
                {el.description}
              </Text>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default NfcsCards;
