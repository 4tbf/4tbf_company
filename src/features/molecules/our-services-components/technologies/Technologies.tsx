import React from 'react';
import styles from './Technologies.module.scss';
import Text from '../../../atoms/text';
import ReactIcon from '../../../../components/svgs/ReactIcon';

const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <div className="container">
        <Text as="h2">TECHNOLOGIES WE USE</Text>
        <div className={styles.technologiesWrapper}>
          <div className={styles.technologiesList}>
            <div className={styles.listItem}>
              <Text as="h3">front end technologies</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <ReactIcon /> React JS
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">back end technologies</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <ReactIcon /> React JS
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
