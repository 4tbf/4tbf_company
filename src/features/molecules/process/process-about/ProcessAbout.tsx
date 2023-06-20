import React from 'react';
import { useTranslation } from 'next-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './ProcessAbout.module.scss';
import { TDetails } from '../../../atoms/typesAtoms';
import { PROCESS_DETAILS } from '../../../atoms/constantsAtoms';
import ProcessDetail from '../../../atoms/ProcessDetails/ProcessDetail';

const ProcessAbout = () => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <section className={styles.processAbout}>
        <div className="container">
          <div className={styles.processAboutFirstSection}>
            <div className={styles.processAboutTitleWrapper}>
              <div className={styles.processAboutSubtitle}>{t('process.about.subtitle')}</div>
              <div className={styles.processAboutTitle}>{t('process.about.title')}</div>
            </div>
            <div className={styles.processPrefaceAboutTitle}>
              {t('process.about.processPrefacTitle')}
            </div>
          </div>
          <motion.div key="PROCESS_DETAILS" className={styles.processAboutDetailSection}>
            {PROCESS_DETAILS.map((current: TDetails) => {
              return (
                <motion.div
                  key={current.title}
                  initial={{ x: -100, opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <ProcessDetail
                    key={current.title}
                    detailsPhase={current.detailsPhase}
                    imageSketch={current.imageSketch}
                    title={current.title}
                    description={current.description}
                    phaseDeliverablesTitle={current.phaseDeliverablesTitle}
                    phaseDeliverables={current.phaseDeliverables}
                    ellipseSvg={current.ellipseSvg}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default ProcessAbout;
