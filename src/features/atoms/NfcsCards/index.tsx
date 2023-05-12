import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NfcsCards.module.scss';
import Text from '../text';
import { getNfcsCardsData } from './data';

const NfcsCards: React.FC = () => {
  const { t } = useTranslation();
  const data = getNfcsCardsData(t);

  return (
    <div className={styles.itesmRow}>
      {data.map((el) => (
        <div className="col_" key={el.title}>
          <div className={styles.itemContent}>
            <div className={styles.itesmTop}>
              <Text as="p" className={styles.itemTitle}>
                {`${el.title}`}
              </Text>
              <span className={styles.icon}>{el.icon}</span>
            </div>
            <Text as="p" className={styles.itemDescr}>
              {el.description}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NfcsCards;
