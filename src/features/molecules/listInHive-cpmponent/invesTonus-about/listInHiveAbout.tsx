import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../../../atoms/text';
import CardInvesTonus from '../../CardInvesTonus/CardInvesTonus';
import styles from './listInHiveAbout.module.scss';
import ListInHiveUserBlock from '../../../atoms/ListInHiveUserBlock/ListInHiveUserBlock';
import ListInHiveDesign from '../../listInHiveDesign/listInHiveDesign';

const InvesTonusDesign = dynamic(() => import('../../InvesTonusDesign/InvesTonusDesign'), {
  ssr: false,
});
const InvesTonusAbout = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.invesTonusAbout}>
      <div className={styles.projectInvesTonus}>
        <div className="container">
          <Text as="h2" className={styles.title}>
            {t('cases.listInHive.aboutUs')}
          </Text>
          <Text as="p" className={styles.infoInvesTonus}>
            {t('cases.listInHive')}
          </Text>
        </div>
        <CardInvesTonus forListInHive />
        <ListInHiveUserBlock />
        <ListInHiveDesign />
      </div>
    </section>
  );
};

export default InvesTonusAbout;
