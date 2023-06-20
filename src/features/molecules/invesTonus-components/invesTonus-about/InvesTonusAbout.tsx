import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';
import InvesTonusPersonUser from '../../../atoms/InvesTonusPersonUser/InvesTonusPersonUser';
import Text from '../../../atoms/text';
import CardInvesTonus from '../../CardInvesTonus/CardInvesTonus';
import styles from './InvesTonusAbout.module.scss';

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
            {t('invesTonus.aboutProject.title')}
          </Text>
          <Text as="p" className={styles.infoInvesTonus}>
            {t('invesTonus.about.project.info1')}
          </Text>
          <Text as="p" className={styles.infoInvesTonus}>
            {t('invesTonus.about.project.info2')}
          </Text>
        </div>
        <CardInvesTonus />
        <InvesTonusPersonUser />
        <InvesTonusDesign />
      </div>
    </section>
  );
};

export default InvesTonusAbout;
