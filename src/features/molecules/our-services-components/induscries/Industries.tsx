import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './Industries.module.scss';
import Text from '../../../atoms/text';
import OnDemandIcon from '../../../../components/svgs/OnDemandIcon';
import GameIcon from '../../../../components/svgs/GameIcon';
import EcommerceIcon from '../../../../components/svgs/EcommerceIcon';
import FinanceIcon from '../../../../components/svgs/FinanceIcon';
import HealthcareIcon from '../../../../components/svgs/HealthcareIcon';
import RestaurantIcon from '../../../../components/svgs/RestaurantIcon';
import RealEstateIcon from '../../../../components/svgs/RealEstateIcon';
import TourIcon from '../../../../components/svgs/TourIcon';
import EducationIcon from '../../../../components/svgs/EducationIcon';
import TransportIcon from '../../../../components/svgs/TransportIcon';
import EventIcon from '../../../../components/svgs/EventIcon';
import GroceryIcon from '../../../../components/svgs/GroceryIcon';

const Industries = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.industriesSection}>
      <div className="container">
        <div className={styles.industriesWrapper}>
          <Text as="h2" className={styles.industriesTitle}>
            {t('services.industry.title')}
          </Text>
          <Text as="h2" className={styles.industriesDesc}>
            {t('services.industry.subtitle')}
          </Text>
          <div className={styles.industriesContent}>
            <div className={styles.industriesRow}>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <OnDemandIcon /> {t('services.industry.demand')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <GameIcon /> {t('services.industry.game')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <EcommerceIcon /> {t('services.industry.commerce')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <FinanceIcon /> {t('services.industry.finance')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <HealthcareIcon /> {t('services.industry.healtcare')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <RestaurantIcon /> {t('services.industry.rest')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <RealEstateIcon /> {t('services.industry.estate')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <TourIcon />
                    {t('services.industry.travel')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <EducationIcon />
                    {t('services.industry.education')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <TransportIcon />
                    {t('services.industry.transport')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <EventIcon />
                    {t('services.industry.event')}
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <GroceryIcon />
                    {t('services.industry.grocery')}
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

export default Industries;
