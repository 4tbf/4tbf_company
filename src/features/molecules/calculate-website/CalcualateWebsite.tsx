import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';
import styles from './CalcualateWebsite.module.scss';
import Text from '../../atoms/text';
import ArrowButton from '../../../components/multiusable/arrow-button/ArrowButton';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const CalcualateWebsite = () => {
  const { t } = useTranslation();
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <section className={styles.calcuateWEbsite}>
      <div className="container">
        <motion.h2 className={styles.calculateBigTitle}>
          {t('main.calculator.title')}
          <Text as="span" className={styles.starIcon} />
        </motion.h2>
        <Text as="p" className={styles.calculateDescr}>
          {t('main.calculator.subtitle')}
        </Text>
        <div className={styles.calculateItems}>
          <div className={styles.calculateRow}>
            <div className="col_">
              <motion.div
                ref={ref}
                animate={control}
                variants={boxVariant}
                initial="hidden"
                className={styles.calculateItem}
              >
                <Text as="h3" className={styles.calcualteTitle}>
                  {t('main.calculator.basic.title')}
                </Text>
                <Text as="p" className={styles.calcuatetext}>
                  {t('main.calculator.basic.description')}
                </Text>
                <ArrowButton href="/calculator/basic" text="Calculate" />
              </motion.div>
            </div>
            <div className="col_">
              <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                className={styles.calculateItem}
              >
                <Text as="h3" className={styles.calcualteTitle}>
                  {t('main.calculator.advanced.title')}
                </Text>
                <Text as="p" className={styles.calcuatetext}>
                  {t('main.calculator.advanced.description')}
                </Text>
                <ArrowButton href="/calculator/advanced" text="Calculate" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalcualateWebsite;
