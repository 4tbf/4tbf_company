import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from './ScrollBreadCrumbs.module.scss';
import Text from '../../atoms/text';

const BREADCRUMBS = [
  'main.breadCrumb.quality',
  'main.breadCrumb.safety',
  'main.breadCrumb.modernity',
  'main.breadCrumb.rapiditly',
  'main.breadCrumb.adaptability',
  'main.breadCrumb.uniqueness',
  'main.breadCrumb.prices',
];

const ScrollBreadCrumbs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.scrolledSection}>
      <div className={styles.scroledItems}>
        {BREADCRUMBS.map((curr) => {
          return (
            <div key={curr} className={styles.scroledItem}>
              <Text as="p">{t(curr)}</Text>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default React.memo(ScrollBreadCrumbs);
