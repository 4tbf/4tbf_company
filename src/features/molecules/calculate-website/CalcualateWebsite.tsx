import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './CalcualateWebsite.module.scss';
import Text from '../../atoms/text';
import ArrowButton from '../../../components/multiusable/arrow-button/ArrowButton';
import StarIcon from '../../../components/svgs/StarIcon';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const CalcualateWebsite = () => {
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
          Calculate Website Cost
          <Text as="span" className={styles.starIcon}>
            <StarIcon />
          </Text>{' '}
        </motion.h2>
        <Text as="p" className={styles.calculateDescr}>
          Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et commodo
          consectetur. Suspendisse semper tellus accumsan nec. Et at lectus feugiat lobortis.
          Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor
          mi fringilla elit posuere sit proin.
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
                  parz hashvark
                </Text>
                <Text as="p" className={styles.calcuatetext}>
                  Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et
                  commodo consectetur. Suspendisse semper tellus accumsan nec.
                </Text>
                <ArrowButton href="#" text="Calculate" />
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
                  bard hashvark
                </Text>
                <Text as="p" className={styles.calcuatetext}>
                  Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et
                  commodo consectetur. Suspendisse semper tellus accumsan nec.
                </Text>
                <ArrowButton href="#" text="Calculate" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalcualateWebsite;
