import React from 'react';
import styles from './CalcualateWebsite.module.scss';
import Text from '../../atoms/text';
import ArrowButton from '../../../components/multiusable/arrow-button/ArrowButton';
import StarIcon from '../../../components/svgs/StarIcon';

const CalcualateWebsite = () => {
  return (
    <section className={styles.calcuateWEbsite}>
      <div className="container">
        <Text as="h2" className={styles.calculateBigTitle}>
          Calculate Website Cost
          <Text as="span" className={styles.starIcon}>
            <StarIcon />
          </Text>
        </Text>
        <Text as="p" className={styles.calculateDescr}>
          Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et commodo
          consectetur. Suspendisse semper tellus accumsan nec. Et at lectus feugiat lobortis.
          Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium. Tortor
          mi fringilla elit posuere sit proin.
        </Text>
        <div className={styles.calculateItems}>
          <div className={styles.calculateRow}>
            <div className="col_">
              <div className={styles.calculateItem}>
                <Text as="h3" className={styles.calcualteTitle}>
                  parz hashvark
                </Text>
                <Text as="p" className={styles.calcuatetext}>
                  Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et
                  commodo consectetur. Suspendisse semper tellus accumsan nec.
                </Text>
                <ArrowButton href="#" text="Calculate" />
              </div>
            </div>
            <div className="col_">
              <div className={styles.calculateItem}>
                <Text as="h3" className={styles.calcualteTitle}>
                  bard hashvark
                </Text>
                <Text as="p" className={styles.calcuatetext}>
                  Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et
                  commodo consectetur. Suspendisse semper tellus accumsan nec.
                </Text>
                <ArrowButton href="#" text="Calculate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalcualateWebsite;
