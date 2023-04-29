import React from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import styles from './WhyWeItems.module.scss';
import Text from '../../../atoms/text';
import { useCardVariants } from '../../../../hooks/useCardVariants';

const WhyWeItems = () => {
  const { t } = useTranslation();
  const cardVariants = useCardVariants();

  return (
    <section className={styles.whyeWeItems}>
      <AnimatePresence>
        <motion.div
          className={styles.projectsContainer}
          key="1"
          viewport={{ once: true, amount: 0.8 }}
          initial="offscreen"
          whileInView="onscreen"
        >
          <div className="container">
            <motion.div className={styles.itemsRow} variants={cardVariants}>
              <div className="col_">
                <div className={styles.itemContent}>
                  <Text as="h2" className={styles.itemTitle}>
                    1. {t('whywe.1.title')}
                  </Text>
                  <Text as="p" className={styles.itemDescr}>
                    {t('whywe.1.subtitle')}
                    <br />
                    {t('whywe.1.subtitle.2')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.itemContent}>
                  <Text as="h2" className={styles.itemTitle}>
                    2. {t('whywe.2.title')}
                  </Text>
                  <Text as="p" className={styles.itemDescr}>
                    {t('whywe.2.subtitle')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.itemContent}>
                  <Text as="h2" className={styles.itemTitle}>
                    3. {t('whywe.3.title')}
                  </Text>
                  <Text as="p" className={styles.itemDescr}>
                    {t('whywe.3.subtitle')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.itemContent}>
                  <Text as="h2" className={styles.itemTitle}>
                    4. {t('whywe.4.title')}
                  </Text>
                  <Text as="p" className={styles.itemDescr}>
                    {t('whywe.4.subtitle')}
                  </Text>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default WhyWeItems;
