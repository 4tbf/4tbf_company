import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './NfcsAbout.module.scss';
import Text from '../../../atoms/text';
import IndustryIcon from '../../../../components/svgs/IndustryIcon';
import DurationIcon from '../../../../components/svgs/DurationIcon';
import TeamSizeIcon from '../../../../components/svgs/TeamSizeIcon';
import TechnologiesIcon from '../../../../components/svgs/TechnologiesIcon';

const NfcsAbout = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutTop}>
        <div className="container">
          <Text as="h2" className={clsx(styles.title, styles.topTitle)}>
            About Project
          </Text>
          <Text as="p" className={clsx(styles.topDescr, styles.descr)}>
            NFCS (NFT, Future, Crypto, Stock) Portal is a Forecast Analytics website, which gives
            users detailed analytics. We have a User Personal Token (UPT). Users can earn UPTs when
            they invite others and than they can pay with the tokens to buy forecasts. With this
            website, users dont need to worry about where to invest and how to get information about
            investment products. Users just need to order a forecast and the website will give them
            detailed analytics.
          </Text>
          <div className={styles.aboutItems}>
            <div className={styles.itesmRow}>
              <div className="col_">
                <div className={styles.itemContent}>
                  <div className={styles.itesmTop}>
                    <Text as="p" className={styles.itemTitle}>
                      Industry
                    </Text>
                    <IndustryIcon />
                  </div>
                  <Text as="p" className={styles.itemDescr}>
                    NFT, Crypto
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.itemContent}>
                  <div className={styles.itesmTop}>
                    <Text as="p" className={styles.itemTitle}>
                      Duration
                    </Text>
                    <DurationIcon />
                  </div>
                  <Text as="p" className={styles.itemDescr}>
                    3 month
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.itemContent}>
                  <div className={styles.itesmTop}>
                    <Text as="p" className={styles.itemTitle}>
                      3 month
                    </Text>
                    <TeamSizeIcon />
                  </div>
                  <Text as="p" className={styles.itemDescr}>
                    524 team member
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.itemContent}>
                  <div className={styles.itesmTop}>
                    <Text as="p" className={styles.itemTitle}>
                      Technologies
                    </Text>
                    <TechnologiesIcon />
                  </div>
                  <Text as="p" className={styles.itemDescr}>
                    Solidity, JavaScript
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutBottom}>
        <div className="container">
          <Text as="h2" className={clsx(styles.title, styles.bottomTitle)}>
            User Persona
          </Text>
          <Text as="p" className={clsx(styles.descr, styles.bottomdescr)}>
            Based on interviews and user reserach I created personas and identified common pain
            points. Personas are fictional users whose goals and characteristics represent common
            needs .
          </Text>
          <div className={styles.userBlock}>
            <div className={styles.userRow}>
              <div className="col_">
                <div className={styles.col_block}>
                  <Image
                    alt="UserImage"
                    width={274}
                    height={277}
                    src="/images/nfcs/user_image.png"
                  />
                  <Text className={styles.userName} as="p">
                    Charles Viani
                  </Text>
                  <Text className={styles.userPposition} as="p">
                    36 , Painter (Collector), Co-Founder
                  </Text>
                  <Text className={styles.userAddress} as="p">
                    France
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

export default NfcsAbout;
