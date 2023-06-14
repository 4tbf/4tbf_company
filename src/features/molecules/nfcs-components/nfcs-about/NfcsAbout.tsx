import React, { memo } from 'react';
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
        backgroundImage: mobile ? '' : 'url(/images/nfcs/nfcs_bg.webp)',
      }}
    >
      <div className={styles.aboutTop}>
        <div className="container">
          <Text as="h2" className={clsx(styles.title, styles.topTitle)}>
            {t('cases.nfcs.aboutProject.title')}
          </Text>
          <Text as="p" className={clsx(styles.topDescr, styles.descr)}>
            {t('cases.nfcs.about.project.info1')}
          </Text>
          <Text as="p" className={clsx(styles.topDescr_second)}>
            {t('cases.nfcs.about.project.info2')}
          </Text>
          <div className={styles.aboutItems}>
            <NfcsCards />
          </div>
        </div>
      </div>
      <div className={styles.aboutBottom}>
        <div className="container">
          <Text as="h2" className={clsx(styles.userPersona)}>
            {t('cases.nfcs.user.person')}
          </Text>
          <Text as="p" className={clsx(styles.userPersonaText)}>
            {t('cases.nfcs.user.person.info')}
          </Text>
          <UserPersona />
        </div>
        <div className={styles.container}>
          <h1 className={styles.designTitle}>{t('cases.nfcs.title.2')}</h1>
          <MyPromocode />
        </div>
        <div className={styles.forecastWrapper}>
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

export default memo(NfcsAbout);
