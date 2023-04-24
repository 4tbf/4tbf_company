import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import styles from './CaseStudyIems.module.scss';
import Text from '../../../atoms/text';
import ArrowButton from '../../../../components/multiusable/arrow-button/ArrowButton';

const CaseStudyIems = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.caseStudiItems}>
      <div className="container">
        <div className={styles.itemsRow}>
          <div className="col_">
            <div className={styles.item}>
              <div className={styles.innerRow}>
                <div className="col_">
                  <div className={styles.innerContent}>
                    <div className={styles.imageWrapper}>
                      <Image
                        alt="case study"
                        src="/images/case-studies/nft.png"
                        width={576}
                        height={269}
                      />
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.itemContent}>
                    <Text as="h2">NFCS Portal</Text>
                    <div className={styles.itemMarks}>
                      <Text as="p">React</Text>
                      <Text as="p">Node JS</Text>
                      <Text as="p">MongoDB</Text>
                    </div>
                    <Text as="p" className={styles.itemDescr}>
                      {t('cases.nfcs')}
                    </Text>
                    <ArrowButton text="Show more" href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.item}>
              <div className={styles.innerRow}>
                <div className="col_">
                  <div className={styles.innerContent}>
                    <div className={styles.imageWrapper}>
                      <Image
                        alt="case study"
                        src="/images/case-studies/tonus.png"
                        width={576}
                        height={269}
                      />
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.itemContent}>
                    <Text as="h2">Investonus</Text>
                    <div className={styles.itemMarks}>
                      <Text as="p">React</Text>
                      <Text as="p">WEB3</Text>
                      <Text as="p">Solidity</Text>
                    </div>
                    <Text as="p" className={styles.itemDescr}>
                      {t('cases.investonus')}
                    </Text>
                    <ArrowButton text="Show more" href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.item}>
              <div className={styles.innerRow}>
                <div className="col_">
                  <div className={styles.innerContent}>
                    <div className={styles.imageWrapper}>
                      <Image
                        alt="case study"
                        src="/images/case-studies/qr.png"
                        width={576}
                        height={269}
                      />
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.itemContent}>
                    <Text as="h2">QR Generator</Text>
                    <div className={styles.itemMarks}>
                      <Text as="p">React Native</Text>
                      <Text as="p">Python</Text>
                      <Text as="p">PostgreSQL</Text>
                    </div>
                    <Text as="p" className={styles.itemDescr}>
                      {t('cases.qr')}
                    </Text>
                    <ArrowButton text="Show more" href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyIems;
