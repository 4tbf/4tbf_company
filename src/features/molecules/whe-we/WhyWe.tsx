import React from 'react';
import styles from './WhyWe.module.scss';
import Text from '../../atoms/text';
import ArrowButton from '../../../components/multiusable/arrow-button/ArrowButton';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const WhyWe = () => {
  const mobile = useMediaQuery('(max-width: 767.98px)');
  return (
    <section className={styles.whywe}>
      <div className="container">
        <div className={styles.whyWeRow}>
          <div className="col_">
            <div className={styles.whyWeLeft}>
              <Text as="h2">WHY WE</Text>
              {!mobile && <ArrowButton href="#" text="Read More" />}
            </div>
          </div>
          <div className="col_">
            <div className={styles.whyweRight}>
              <Text as="p">
                Lorem ipsum dolor sit amet consectetur. Non nunc habitant nisl id ut leo et commodo
                consectetur. Suspendisse semper tellus accumsan nec. Et at lectus feugiat lobortis.
                Egestas hendrerit risus fringilla quis. Faucibus suspendisse ac in viverra pretium.
                Tortor mi fringilla elit posuere sit proin. Fames elit risus diam lobortis elementum
                nullam amet. Mauris sem donec quisque iaculis mollis donec vehicula auctor. Leo
                pellentesque tortor penatibus in. Tempor egestas nunc etiam vel ultricies in vel.
                libero.
              </Text>
              {mobile && <ArrowButton href="#" text="Read More" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
