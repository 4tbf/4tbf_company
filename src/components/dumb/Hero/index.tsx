import React from 'react';
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
            <p className={styles.subTitle}>
              Hit a line and our friendly folks will get back to you as soon as possible.
            </p>
            <h1>Stex Mi Hat Bomb Title Mrrr</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
