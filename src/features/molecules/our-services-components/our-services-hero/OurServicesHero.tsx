import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './OurServicesHero.module.scss';
import Text from '../../../atoms/text';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import ArrowButton from '../../../../components/multiusable/arrow-button/ArrowButton';

const OurServicesHero = () => {
  const mobile = useMediaQuery('(max-width: 767.98px)');
  return (
    <section className={styles.ourServicesHero}>
      <div className="container">
        <Text as="h1">Our services</Text>
        <div className={styles.servicesItems}>
          <div className={styles.ourServices}>
            {mobile && (
              <div className={styles.mainItem}>
                <Text className={styles.mainTitle} as="h2">
                  OUR SERVICES
                </Text>
                <ArrowButton href="#" text="Show more" />
              </div>
            )}
            <div className={styles.servicesRow}>
              {!mobile && (
                <div className="col_">
                  <div className={styles.mainItem}>
                    <Text className={styles.mainText} as="p">
                      Lorem ipsum dolor sit amet consectetur. At volutpat gravida est magna sem sit.
                      Quam faucibus faucibus scelerisque vestibulum enim vitae.
                    </Text>
                  </div>
                </div>
              )}
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
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;
