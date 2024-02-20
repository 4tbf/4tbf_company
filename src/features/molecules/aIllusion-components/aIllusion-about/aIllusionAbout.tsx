import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../../../atoms/text';
import CardInvesTonus from '../../CardInvesTonus/CardInvesTonus';
import styles from './aIllusionAbout.module.scss';

const AIllusionDesign = dynamic(() => import('../../aIllusionDesign/AIllusionDesign'), {
  ssr: false,
});
const InvesTonusAbout = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.invesTonusAbout}>
      <div className={styles.projectInvesTonus}>
        <div className="container">
          <Text as="h2" className={styles.title}>
            {t('cases.aIllusion.aboutUs')}
          </Text>
          <Text as="p" className={styles.infoInvesTonus}>
            {t('cases.aIllusion')}
          </Text>
        </div>
        <CardInvesTonus forAIllusion />
        <AIllusionDesign />
      </div>
    </section>
  );
};

export default InvesTonusAbout;
