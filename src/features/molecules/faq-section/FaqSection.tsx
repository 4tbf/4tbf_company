import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './FaqSection.module.scss';
import Text from '../../atoms/text';
import Collapse from '../../../components/multiusable/collapse/Collapse';

const FaqSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <Text as="h2" className={styles.faqTitle}>
          {t('main.faq.title')}
        </Text>
        <Text className={styles.faqDescr} as="p">
          {t('main.faq.description')}
        </Text>
        <div className={styles.faqList}>
          <Collapse
            title={t('main.faq.whatServices.question')}
            children={<Text as="p">{t('main.faq.whatServices.answer')}</Text>}
          />
          <Collapse
            title={t('main.faq.howMuchCost.question')}
            children={<Text as="p">{t('main.faq.howMuchCost.answer')}</Text>}
          />
          <Collapse
            title={t('main.faq.howLong.question')}
            children={<Text as="p">{t('main.faq.howLong.answer')}</Text>}
          />
          <Collapse
            title={t('main.faq.ogoing.question')}
            children={<Text as="p">{t('main.faq.ogoing.answer')}</Text>}
          />
          <Collapse
            title={t('main.faq.experience.question')}
            children={<Text as="p">{t('main.faq.experience.answer')}</Text>}
          />
          <Collapse
            title={t('main.faq.approach.question')}
            children={<Text as="p">{t('main.faq.approach.answer')}</Text>}
          />
          <Collapse
            title={t('main.faq.sets.question')}
            children={<Text as="p">{t('main.faq.sets.answer')}</Text>}
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
