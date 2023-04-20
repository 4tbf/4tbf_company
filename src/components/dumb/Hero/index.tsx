import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: 'url(/images/brand_image.png)' }}
    >
      <div className="container">
        <div className={styles.heroRow}>
          <div className="col_">
            <motion.p
              className={styles.subTitle}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Spark your success with our bright development solutions.
            </motion.p>
            <motion.h1
              initial={{ x: -1000, scale: 0.7 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Crafting Exceptional Digital Solutions
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
