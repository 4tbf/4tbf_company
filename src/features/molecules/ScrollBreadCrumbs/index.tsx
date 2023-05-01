import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Marquee from 'react-fast-marquee';
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
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const marque = document.getElementById('marque');
      if (marque) {
        const { top } = document.getElementById('marque').getBoundingClientRect();
        if (top < 50) {
          marque.style.visibility = 'hidden';
        } else {
          marque.style.visibility = 'visible';
        }
      }
    });
  }, []);
  return (
    <section id="marque" className={styles.scrolledSection}>
      <Marquee speed={50}>
        <div className={styles.scroledItems}>
          {[...BREADCRUMBS, ...BREADCRUMBS].map((curr, index) => {
            return (
              <div key={`${curr}+${index}`} className={styles.scroledItem}>
                <Text as="p">{t(curr)}</Text>
              </div>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};
export default React.memo(ScrollBreadCrumbs);
