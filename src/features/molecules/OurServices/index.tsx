import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OurServices.module.scss';
import LongArrowIcon from '../../../components/svgs/LongArrowIcon';
import Text from '../../atoms/text';

const OurServices: React.FC = () => {
  return (
    <section className={styles.ourServices}>
      <div className="container">
        <div className={styles.servicesRow}>
          <div className="col_">
            <div className={styles.mainItem}>
              <Text className={styles.mainTitle} as="h2">
                OUR SERVICES
              </Text>
              <Link href="#" className={styles.arrowLink}>
                Show more <LongArrowIcon />
              </Link>
            </div>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <h2 className={styles.serviceTitle}>Web Development</h2>
              <Text className={styles.serviceDescr} as="p">
                Hit a line and our friendly folks will get back to you as soon as possible.
              </Text>
            </Link>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <Text className={styles.serviceTitle} as="h2">
                Web Development
              </Text>
              <Text className={styles.serviceDescr} as="p">
                Hit a line and our friendly folks will get back to you as soon as possible.
              </Text>
            </Link>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <h2 className={styles.serviceTitle}>Web Development</h2>
              <p className={styles.serviceDescr}>
                Hit a line and our friendly folks will get back to you as soon as possible.
              </p>
            </Link>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <h2 className={styles.serviceTitle}>Web Development</h2>
              <p className={styles.serviceDescr}>
                Hit a line and our friendly folks will get back to you as soon as possible.
              </p>
            </Link>
          </div>
          <div className="col_">
            <Link href="#" className={styles.clasicItem}>
              <div className={styles.imageItem}>
                <Image src="/images/brand_image.png" height={66} width={72} alt="image" />
              </div>
              <h2 className={styles.serviceTitle}>Web Development</h2>
              <p className={styles.serviceDescr}>
                Hit a line and our friendly folks will get back to you as soon as possible.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OurServices);
