import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import styles from './CaseStudyIems.module.scss';
import Text from '../../../atoms/text';
import ArrowButton from '../../../../components/multiusable/arrow-button/ArrowButton';
import { useCardVariants } from '../../../../hooks/useCardVariants';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

interface ICaseStudiItems {
  declude?: 'qr' | 'investonus' | 'nfcs' | 'none' | 'listInHive';
}

const CaseStudyIems: React.FC<ICaseStudiItems> = ({ declude = 'none' }) => {
  const cardVariants = useCardVariants(120);
  const { t } = useTranslation();
  const mobile = useMediaQuery('(max-width: 767.98px)');

  return (
    <section className={styles.caseStudiItems}>
      <AnimatePresence>
        <div className="container">
          <div className={styles.itemsRow}>
            {declude !== 'listInHive' && (
              <motion.div
                className="col_"
                key={mobile ? 'mobile.1' : '1'}
                viewport={mobile ? {} : { once: true, amount: 0.8 }}
                initial={mobile ? '' : 'offscreen'}
                whileInView={mobile ? '' : 'onscreen'}
                variants={mobile ? undefined : cardVariants}
              >
                <div className={styles.item}>
                  <div className={styles.innerRow}>
                    <div className="col_">
                      <div className={styles.innerContent}>
                        <div className={styles.imageWrapper}>
                          <Image
                            alt="List In Hive"
                            src={
                              mobile
                                ? '/images/listInHive/listInHiveMobile.png'
                                : '/images/listInHive/listInHiveBig.png'
                            }
                            width={576}
                            height={269}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles.itemContent}>
                        <Text as="h2">List In Hive</Text>
                        <div className={styles.itemMarks}>
                          <Text as="p">Next.js</Text>
                          <Text as="p">React.js</Text>
                          <Text as="p">Node.js</Text>
                        </div>
                        <Text as="p" className={styles.itemDescr}>
                          {t('cases.listInHive')}
                        </Text>
                        <ArrowButton
                          text={t('gotocase')}
                          // blank
                          href="/cases/listInHive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {declude !== 'nfcs' && (
              <motion.div
                className="col_"
                key={mobile ? 'mobile.2' : '2'}
                viewport={mobile ? {} : { once: true, amount: 0.8 }}
                initial={mobile ? '' : 'offscreen'}
                whileInView={mobile ? '' : 'onscreen'}
                variants={mobile ? undefined : cardVariants}
              >
                <div className={styles.item}>
                  <div className={styles.innerRow}>
                    <div className="col_">
                      <div className={styles.innerContent}>
                        <div className={styles.imageWrapper}>
                          <Image
                            alt="case study"
                            src={
                              mobile
                                ? '/images/case-studies/nft-mobile.png'
                                : '/images/case-studies/nft.png'
                            }
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
                        <ArrowButton
                          text={t('gotocase')}
                          // blank
                          href="/cases/nfcs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {declude !== 'investonus' && (
              <motion.div
                className="col_"
                key={mobile ? 'mobile.3' : '3'}
                viewport={mobile ? {} : { once: true, amount: 0.8 }}
                initial={mobile ? '' : 'offscreen'}
                whileInView={mobile ? '' : 'onscreen'}
                variants={mobile ? undefined : cardVariants}
              >
                <div className={styles.item}>
                  <div className={styles.innerRow}>
                    <div className="col_">
                      <div className={styles.innerContent}>
                        <div className={styles.imageWrapper}>
                          <Image
                            alt="case study"
                            src={
                              mobile
                                ? '/images/case-studies/tonus-mobile.png'
                                : '/images/case-studies/tonus.png'
                            }
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
                        <ArrowButton text={t('gotocase')} href="/cases/investonus" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {declude !== 'qr' && (
              <motion.div
                className="col_"
                key={mobile ? 'mobile.4' : '4'}
                viewport={mobile ? {} : { once: true, amount: 0.8 }}
                initial={mobile ? '' : 'offscreen'}
                whileInView={mobile ? '' : 'onscreen'}
                variants={mobile ? undefined : cardVariants}
              >
                <div className={styles.item}>
                  <div className={styles.innerRow}>
                    <div className="col_">
                      <div className={styles.innerContent}>
                        <div className={styles.imageWrapper}>
                          <Image
                            alt="case study"
                            src={
                              mobile
                                ? '/images/case-studies/qr-mobile.png'
                                : '/images/case-studies/qr.png'
                            }
                            width={576}
                            height={269}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={`${styles.itemContent} ${styles.qr}`}>
                        <Text as="h2">QR Generator</Text>
                        <div className={styles.itemMarks}>
                          <Text as="p">React Native</Text>
                          <Text as="p">Python</Text>
                          <Text as="p">PostgreSQL</Text>
                        </div>
                        <Text as="p" className={styles.itemDescr}>
                          {t('cases.qr')}
                        </Text>
                        <ArrowButton text={t('gotocase')} href="/cases/qr" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default CaseStudyIems;
