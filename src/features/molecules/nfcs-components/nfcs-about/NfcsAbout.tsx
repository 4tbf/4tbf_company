import React from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import styles from './NfcsAbout.module.scss';
import Text from '../../../atoms/text';
import UserPersona from '../../../atoms/UserPersona/UserPersona';
import ForecastList from '../../ForecastList';
import SiteMap from '../../SiteMap';
import CaseStudyIems from '../../case-studies-components/case-study-items/CaseStudyIems';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

const NfcsCards = dynamic(() => import('../../../atoms/NfcsCards'), { ssr: false });
const MyPromocode = dynamic(() => import('../../MyPromocode'), { ssr: false });
const OrderForecast = dynamic(() => import('../../OrderForecast'), { ssr: false });
const HowToBuyForecast = dynamic(() => import('../../HowToBuyForecast'), { ssr: false });

const NfcsAbout = () => {
  const { t } = useTranslation();
  const mobile = useMediaQuery('(max-width: 767.98px)');

  return (
    <section
      className={styles.aboutSection}
      style={{
        backgroundImage: mobile ? '' : 'url(/images/nfcs/background-squares-right.png)',
      }}
    >
      <div
        className={styles.aboutTop}
        style={{
          backgroundImage: mobile ? '' : 'url(/images/nfcs/background-squares-left.png)',
          backgroundPositionX: 'right',
          backgroundPositionY: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container">
          <Text as="h2" className={clsx(styles.title, styles.topTitle)}>
            About Project
          </Text>
          <Text as="p" className={clsx(styles.topDescr, styles.descr)}>
            NFCS (NFT, Future, Crypto, Stock) Portal is a Forecast Analytics website, which gives
            users detailed analytics.
          </Text>
          <Text as="p" className={clsx(styles.topDescr_second)}>
            We have a User Personal Token (UPT). Users can earn UPTs when they invite others and
            than they can pay with the tokens to buy forecasts. With this website, users don&apos;t
            need to worry about where to invest and how to get information about investment
            products. Users just need to order a forecast and the website will give them detailed
            analytics.
          </Text>
          <div className={styles.aboutItems}>
            <NfcsCards />
          </div>
        </div>
      </div>
      <div
        className={styles.aboutBottom}
        style={{
          backgroundImage: mobile ? '' : 'url(/images/nfcs/background-squares-left.png)',
        }}
      >
        <div className="container">
          <Text as="h2" className={clsx(styles.userPersona)}>
            User Persona
          </Text>
          <Text as="p" className={clsx(styles.userPersonaText)}>
            Based on interviews and user reserach I created personas and identified common pain
            points. Personas are fictional users whose goals and characteristics represent common
            needs .
          </Text>
          <UserPersona />
        </div>
        <div
          className={styles.container}
          style={{
            backgroundImage: mobile ? '' : 'url(/images/nfcs/background-squares-left.png)',
            backgroundPositionX: 'right',
            backgroundPositionY: '',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className={styles.designTitle}>{t('cases.nfcs.title.2')}</h1>
          <MyPromocode />
        </div>
        <div
          className={styles.forecastWrapper}
          style={{
            backgroundImage: mobile ? '' : 'url(/images/nfcs/background-squares-right.png)',
          }}
        >
          <OrderForecast />
          <HowToBuyForecast />
        </div>
        <ForecastList />
        <SiteMap />
        <div className={styles.otherCases_container}>
          <h1 className={styles.otherCases_title}>{t('cases.nfcs.otherCases')}</h1>
          <CaseStudyIems declude="nfcs" />
        </div>
      </div>
    </section>
  );
};

export default NfcsAbout;
