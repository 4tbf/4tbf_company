import React from 'react';
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
  return (
    <section className={styles.industriesSection}>
      <div className="container">
        <div className={styles.industriesWrapper}>
          <Text as="h2" className={styles.industriesTitle}>
            Industries we serve
          </Text>
          <Text as="h2" className={styles.industriesDesc}>
            Successfully Delivered Digital Products
          </Text>
          <div className={styles.industriesContent}>
            <div className={styles.industriesRow}>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <OnDemandIcon /> On - Demand
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <GameIcon /> Game
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <EcommerceIcon /> eCommerce
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <FinanceIcon /> Finance
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <HealthcareIcon /> Healthcare
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <RestaurantIcon /> Restaurant
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <RealEstateIcon /> Real Estate
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <TourIcon />
                    Tour & Travels
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <EducationIcon />
                    Education
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <TransportIcon />
                    Transport
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <EventIcon />
                    Event
                  </Text>
                </div>
              </div>
              <div className="col_">
                <div className={styles.inustriesItem}>
                  <Text as="p" className={styles.industriesText}>
                    <GroceryIcon />
                    Grocery
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
